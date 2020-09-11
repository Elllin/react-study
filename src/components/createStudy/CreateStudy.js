import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import createStudy from './constants/constants';
import PropTypes from 'prop-types';

import Hashtag from './hashtag/Hashtag';
import BoxTemplate from './boxTemplate/BoxTemplate';
import SelectBox from './selectBox/SelectBox';
import RadioBox from './radioBox/RadioBox';
import FormTemplate from './formTemplate/FormTemplate';
import CharacterCounter from './characterCounter/CharacterCounter';
import LoadingPage from 'containers/common/LoadingPage';

import styled from 'styled-components';
import { InputBox, Description } from 'style/CustomStyle';

import { FiCheck } from 'react-icons/fi';
import { RiCheckLine } from 'react-icons/ri';

function CreateStudy({ onSubmit, loading }) {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });
  const [inputLength, setInputLength] = useState({
    titleLength: 0,
    descriptionLength: 0,
  });

  const { title, description } = inputs;
  const { titleLength, descriptionLength } = inputLength;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setInputLength({
      ...inputLength,
      [`${name}Length`]: value.length,
    });
  };

  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { groupName, introduction, locationOption, categoryOption } = createStudy;
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

        <BoxTemplate title="예치금 설정을 하시나요?" as="div" far>
          <RadioBox id="yes" value="yes" text="네. 할래요!" name="is_deposit" register={register} />
          <RadioBox
            id="no"
            value="no"
            text="아니요. 괜찮아요!"
            name="is_deposit"
            register={register}
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
            ref={register({
              required: '그룹 이름을 입력해주세요.',
              // pattern: {
              //   value: /^[0-9a-zA-Z\_]+$/,
              //   message: '특수문자 입력 금지',
              // },
            })}
            placeholder={groupName.placeholder}
          />
          <StatusMessage>
            <StatusIcon>
              <RiCheckLine />
            </StatusIcon>
            <span>Do</span>
          </StatusMessage>
          <CharacterCounter length={titleLength} maxLength={groupName.maxLength} />

          {/* {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>} */}
        </BoxTemplate>

        <BoxTemplate title="그룹 소개" htmlFor="description">
          <TextArea
            as="textarea"
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            maxLength={introduction.maxLength}
            ref={register({ required: '그룹 소개를 입력해주세요.' })}
            placeholder={introduction.placeholder}
          ></TextArea>
          <CharacterCounter length={descriptionLength} maxLength={introduction.maxLength} />
        </BoxTemplate>

        <BoxTemplate title="그룹 해시태그" htmlFor="hashtag" required={false} isHelp>
          <Hashtag setValue={setValue} register={register} name={'hashtag'} />
        </BoxTemplate>

        <ButtonWrap>
          <button type="submit">그룹 개설하기</button>
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

const StatusMessage = styled.div`
  position: absolute;
  top: 3.9rem;
  right: 1.3rem;
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
  font-size: 1.6rem;
  color: #cacaca;
  span + span {
    margin-left: 0.3rem;
  }
`;
const StatusIcon = styled.span`
  font-size: 2.1rem;
`;

const ButtonWrap = styled.div`
  margin-top: 1.1rem;

  button {
    width: 100%;
    border-radius: 0.6rem;
    -moz-border-radius: 0.6rem;
    -webkit-border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.mainColor};
    height: 5.6rem;
    font-size: 2rem;
    font-weight: bold;
  }
`;

CreateStudy.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

CreateStudy.defaultProps = {
  loading: false,
};

export default CreateStudy;

// const [inputs, setInputs] = useState({
//   title: '',
//   description: '',
//   hashtag: '',
//   is_deposit: '',
// });

// <BoxTemplate>
//           <Title htmlFor="email">
//             이메일 <Required>*</Required>
//           </Title>
//           <InputBox type="email" id="email" name="email" ref={register} required />
//         </BoxTemplate>
