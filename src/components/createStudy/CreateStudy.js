import React, { useEffect, useState, useCallback, memo } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import createStudyConstants from './constants/constants';
import { checkSpecialCharacters } from 'lib/utils';

import CustomSelectBox from 'components/common/customSelectBox/CustomSelectBox';
import HashtagInput from './hashtagInput/HashtagInput';
import BoxTemplate from './boxTemplate/BoxTemplate';
import RadioBox from 'components/common/radioBox/RadioBox';
import FormTemplate from './formTemplate/FormTemplate';
import CharacterCounter from './characterCounter/CharacterCounter';
import LoadingPage from 'common/LoadingPage';
import MainButton from 'components/common/mainButton/MainButton';

import DatePicker from './datePicker/DatePicker';

import styled, { css } from 'styled-components';
import { InputBox, HelpMessage, defaultLayout } from 'style/CustomStyle';

function CreateStudy({
  onSubmit,
  loading,
  onDuplicationCheck,
  duplication,
  titleRendering,
  detailValue,
  margin,
  createButton,
  children,
}) {
  const TAG_CREATION_KEY = 'Enter';
  const [inputLength, setInputLength] = useState({
    titleLength: detailValue?.title.length || 0,
    descriptionLength: detailValue?.description.length || 0,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { titleLength, descriptionLength } = inputLength;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;

      setInputLength({
        ...inputLength,
        [`${name}Length`]: value.length,
      });
    },
    [inputLength],
  );

  const onKeyUp = ({ target }) => {
    onDuplicationCheck(target.value);
  };

  const isTagCreation = useCallback(
    (e, value) => {
      const isTagCreationKey = TAG_CREATION_KEY === e.key;

      return isTagCreationKey && value.length > 0;
    },
    [TAG_CREATION_KEY],
  );

  let defaultFormValue = null;

  if (detailValue) defaultFormValue = detailValue;
  else defaultFormValue = { duration: { startDate: null, endDate: null } };
  const { register, handleSubmit, setValue, watch, errors } = useForm({
    defaultValues: defaultFormValue,
  });
  const title = watch('title', '');
  const description = watch('description', '');

  const titleValidation = checkSpecialCharacters(title);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const { groupName, introduction, locationOption, categoryOption } = createStudyConstants;
  return (
    <>
      <FormTemplate
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        onKeyPress={onKeyPress}
        titleRendering={titleRendering}
        margin={margin}
      >
        {children}
        <BoxLayout>
          <BoxTemplate title="지역" htmlFor="location">
            <CustomSelectBox
              optionItems={locationOption}
              selectedValue={detailValue?.location}
              name="location"
              register={register({ required: true })}
              defaultText="시/도 선택"
              error={errors.location}
              defaultColor={'#a2a2a2'}
            />
          </BoxTemplate>

          <BoxTemplate title="그룹 카테고리" htmlFor="category">
            <CustomSelectBox
              optionItems={categoryOption}
              name="category"
              selectedValue={detailValue?.category}
              register={register({ required: true })}
              defaultText="카테고리 선택"
              error={errors.category}
              defaultColor={'#a2a2a2'}
            />
          </BoxTemplate>
        </BoxLayout>

        <BoxTemplate title="스터디 기간" as="div">
          <DatePicker
            register={register}
            name="duration"
            setValue={setValue}
            detailValue={detailValue?.duration}
            coverText="상시모집"
          />
        </BoxTemplate>

        <BoxTemplate title="예치금 설정을 하시나요?" as="div" far>
          <RadioContainer>
            <RadioBox
              id="deposit-yes"
              value="1"
              text="네. 할래요!"
              name="deposit"
              size="large"
              setValue={setValue}
              detailValue={detailValue?.deposit}
              register={register({ required: true })}
              error={errors.deposit}
              className={detailValue?.deposit === 1 ? 'checked' : null}
            />
            <RadioBox
              id="deposit-no"
              value="0"
              text="아니요. 괜찮아요!"
              name="deposit"
              setValue={setValue}
              detailValue={detailValue?.deposit}
              size="large"
              error={errors.deposit}
              register={register({ required: true })}
              className={detailValue?.deposit === 0 ? 'checked' : null}
            />
          </RadioContainer>
        </BoxTemplate>

        <BoxTemplate title="그룹 이름" htmlFor="title">
          <TitleInput
            type="text"
            id="title"
            name="title"
            maxLength={groupName.maxLength}
            value={title}
            onChange={onChange}
            ref={register({ required: true })}
            error={errors.title}
            placeholder={groupName.placeholder}
            validation={titleValidation}
            onKeyUp={onKeyUp}
          />

          {/* 리팩토링 하기!!!! */}

          <HelpArea>
            {/* {titleValidation && !errors.title && <HelpMessage>{groupName.helpMessage}</HelpMessage>} */}
            {/* <ErrorMessage>{!titleValidation && groupName.}</ErrorMessage> */}

            {duplication ? (
              <HelpMessage validation>
                {'이미 존재하는 그룹 이름입니다. 다른 그룹 이름을 입력해주세요.'}
              </HelpMessage>
            ) : (
              <HelpMessage validation={titleValidation}>{groupName.helpMessage}</HelpMessage>
            )}

            <CharacterCounter length={titleLength} maxLength={groupName.maxLength} />
          </HelpArea>
        </BoxTemplate>

        <BoxTemplate title="그룹 소개" htmlFor="description">
          <TextArea
            as="textarea"
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            maxLength={introduction.maxLength}
            ref={register({ required: true })}
            error={errors.description}
            placeholder={introduction.placeholder}
          />
          <CharacterCounter length={descriptionLength} maxLength={introduction.maxLength} />
        </BoxTemplate>

        <BoxTemplate title="그룹 해시태그" htmlFor="tags" required={false} isHelp>
          <HashtagInput
            setValue={setValue}
            register={register}
            name={'tags'}
            isTagCreation={isTagCreation}
            fontSize="small"
            detailValue={detailValue?.tags}
          />
        </BoxTemplate>

        {createButton && (
          <ButtonWrap>
            <MainButton type={'submit'} fullWidth>
              그룹 개설하기
            </MainButton>
          </ButtonWrap>
        )}
      </FormTemplate>

      {loading && <LoadingPage />}
    </>
  );
}

const requiredError = css`
  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.requiredColor};
      &::placeholder {
        color: ${theme.requiredColor};
      }
      &::-webkit-input-placeholder {
        color: ${theme.requiredColor};
      }
      &::-ms-input-placeholder {
        color: ${theme.requiredColor};
      }
    `}
`;

const TextArea = styled(InputBox)`
  width: 100%;
  height: 24.4rem;
  padding: 1rem 2rem;
  ${requiredError};
  border-color: ${({ error, theme }) => error && theme.requiredColor};
`;

const BoxLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;
`;

const ButtonWrap = styled.div`
  margin-top: 1.1rem;
`;

const HelpArea = styled.div`
  ${defaultLayout};
  justify-content: space-between;
`;

const TitleInput = styled(InputBox)`
  border-color: ${({ validation, theme }) => validation && theme.requiredColor};
  &:focus {
    outline-color: ${({ validation, theme }) => validation && theme.requiredColor};
  }
  ${requiredError}
`;

const RadioContainer = styled.div`
  display: flex;

  div + div {
    margin-left: 17.9rem;
  }
`;

CreateStudy.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  detailValue: PropTypes.object,
  titleRendering: PropTypes.bool,
  createButton: PropTypes.bool,
};

CreateStudy.defaultProps = {
  loading: false,
  onSubmit: null,
  titleRendering: true,
  detailValue: null,
  createButton: false,
};

export default memo(CreateStudy);
