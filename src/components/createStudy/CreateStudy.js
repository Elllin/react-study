import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import createStudy from './constants/constants';
import { checkSpecialCharacters } from 'lib/utils';

import HashtagInput from './hashtagInput/HashtagInput';
import BoxTemplate from './boxTemplate/BoxTemplate';
import SelectBox from './selectBox/SelectBox';
import RadioBox from './radioBox/RadioBox';
import FormTemplate from './formTemplate/FormTemplate';
import CharacterCounter from './characterCounter/CharacterCounter';
import LoadingPage from 'containers/common/LoadingPage';
import MainButton from 'components/common/mainButton/MainButton';

import styled from 'styled-components';
import { InputBox, Description, BorderRadius6 } from 'style/CustomStyle';
import ValidationMessage from './validationMessage/ValidationMessage';
import DatePicker from './datePicker/DatePicker';
import { darken, lighten } from 'polished';

function CreateStudy({ onSubmit, loading }) {
  const [inputLength, setInputLength] = useState({
    titleLength: 0,
    descriptionLength: 0,
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

  const isTagCreation = useCallback((e, value) => {
    return (e.key === ' ' || e.key === ',') && value.length > 0;
  }, []);

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { duration: null },
  });

  const title = watch('title', '');
  const description = watch('description', '');

  const titleValidation = !checkSpecialCharacters(title);

  const { groupName, introduction, locationOption, categoryOption, duration } = createStudy;

  return (
    <>
      <FormTemplate onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <BoxLayout>
          <BoxTemplate title="지역" htmlFor="location">
            <SelectBox
              optionItems={locationOption}
              name="location"
              register={register({ required: true })}
            />
          </BoxTemplate>
          <BoxTemplate title="그룹 카테고리" htmlFor="category">
            <SelectBox
              optionItems={categoryOption}
              name="category"
              register={register({ required: true })}
            />
          </BoxTemplate>
        </BoxLayout>

        <BoxTemplate title="스터디 기간" as="div">
          <DatePicker register={register} name="duration" setValue={setValue} coverText="미정" />
          <Description>{duration.description}</Description>
        </BoxTemplate>

        <BoxTemplate title="예치금 설정을 하시나요?" as="div" far>
          <RadioBox
            id="deposit-yes"
            value={1}
            text="네. 할래요!"
            name="is_deposit"
            register={register({ required: true })}
          />
          <RadioBox
            id="deposit-no"
            value={0}
            text="아니요. 괜찮아요!"
            name="is_deposit"
            register={register({ required: true })}
          />
        </BoxTemplate>
        <BoxTemplate title="그룹 이름 (특수문자 불가)" htmlFor="title">
          <InputBox
            type="text"
            id="title"
            name="title"
            maxLength={groupName.maxLength}
            value={title}
            onChange={onChange}
            ref={register({ required: true })}
            placeholder={groupName.placeholder}
          />
          <ValidationMessage validation={titleValidation} length={titleLength} />
          <CharacterCounter length={titleLength} maxLength={groupName.maxLength} />
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
            placeholder={introduction.placeholder}
          ></TextArea>
          <CharacterCounter length={descriptionLength} maxLength={introduction.maxLength} />
        </BoxTemplate>

        <BoxTemplate title="그룹 해시태그" htmlFor="hashtag" required={false} isHelp>
          <HashtagInput
            setValue={setValue}
            register={register}
            name={'hashtag'}
            isTagCreation={isTagCreation}
            fontSize="small"
          />
        </BoxTemplate>

        <ButtonWrap>
          <MainButton type={'submit'} fullWidth>
            그룹 개설하기
          </MainButton>
        </ButtonWrap>
      </FormTemplate>

      {loading && <LoadingPage />}
    </>
  );
}

const TextArea = styled(InputBox)`
  width: 100%;
  height: 24.4rem;
  padding: 1rem 2rem;
`;

const BoxLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;
`;

const ButtonWrap = styled.div`
  margin-top: 1.1rem;
  /* 
  button {
    width: 100%;
    ${BorderRadius6};
    background-color: ${({ theme }) =>
    theme.mainColor};
    height: 5.6rem;
    font-size: 2rem;
    font-weight: bold;
  }
  button:hover {
    background: ${({
    theme,
  }) => lighten(0.12, theme.mainColor)};
  }
  button:active {
    background: ${({ theme }) =>
    darken(0.12, theme.mainColor)};
  } */
`;

CreateStudy.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

CreateStudy.defaultProps = {
  loading: false,
};

export default CreateStudy;
