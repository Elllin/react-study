import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import createStudy from './constants/constants';
import PropTypes from 'prop-types';

import Hashtag from './hashtag/Hashtag';
import BoxTemplate from './boxTemplate/BoxTemplate';
import SelectBox from './selectBox/SelectBox';
import RadioBox from './radioBox/RadioBox';
import FormTemplate from './formTemplate/FormTemplate';

import styled from 'styled-components';
import { InputBox } from 'style/CustomStyle';
import LoadingPage from 'containers/common/LoadingPage';

function CreateStudy({ onSubmit, loading }) {
  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { groupName, groupIntroduction, locationOption, categoryOption } = createStudy;

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
          <RadioBox id="yes" text="네. 할래요!" name="is_deposit" register={register} />
          <RadioBox id="no" text="아니요. 괜찮아요!" name="is_deposit" register={register} />
        </BoxTemplate>

        <BoxTemplate title="그룹 이름" htmlFor="title">
          <InputBox
            type="text"
            id="title"
            name="title"
            ref={register({
              required: '그룹 이름을 입력해주세요.',
              // pattern: {
              //   value: /^[0-9a-zA-Z\_]+$/,
              //   message: '특수문자 입력 금지',
              // },
            })}
            placeholder={groupName}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </BoxTemplate>

        <BoxTemplate title="그룹 소개" htmlFor="description">
          <TextArea
            as="textarea"
            id="description"
            name="description"
            ref={register({ required: '그룹 소개를 입력해주세요.' })}
            placeholder={groupIntroduction}
          ></TextArea>
          {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
        </BoxTemplate>

        <BoxTemplate title="그룹 해시태그" htmlFor="hashtag" required={false}>
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

const ErrorMessage = styled.p`
  margin-top: 0.7rem;
  color: red;
  font-size: 1.3rem;
`;

const ButtonWrap = styled.div`
  margin-top: 1.1rem;

  button {
    width: 100%;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.mainColor};
    height: 5.6rem;
    font-size: 2rem;
    font-weight: bold;
    font-family: ${({ theme }) => theme.subFont};
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
