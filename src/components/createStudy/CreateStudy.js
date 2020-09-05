import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import createStudy from './constants/constants';
import PropTypes from 'prop-types';

import Hashtag from './hashtag/Hashtag';
import BoxWrap from './boxWrap/BoxWrap';
import SelectBox from './selectBox/SelectBox';
import RadioBox from './radioBox/RadioBox';

import styled from 'styled-components';
import { InputBox } from 'style/CustomStyle';
import FormWrap from './FormWrap';
import LoadingPage from 'containers/common/LoadingPage';

function CreateStudy({ onSubmit, loading }) {
  const { register, handleSubmit, errors, setValue } = useForm();

  // const [inputs, setInputs] = useState({
  //   title: '',
  //   description: '',
  //   hashtag: '',
  //   is_deposit: '',
  // });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { groupName, groupIntroduction, locationOption, categoryOption } = createStudy;

  return (
    <>
      <FormWrap onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <BoxLayout>
          <BoxWrap title="지역" htmlFor="location">
            <SelectBox optionItems={locationOption} name="location" register={register} required />
          </BoxWrap>
          <BoxWrap title="그룹 카테고리" htmlFor="category">
            <SelectBox optionItems={categoryOption} name="category" register={register} required />
          </BoxWrap>
        </BoxLayout>
        <BoxWrap title="예치금 설정을 하시나요?" as="div" far>
          <RadioBox id="yes" text="네. 할래요!" name="is_deposit" register={register} required />
          <RadioBox
            id="no"
            text="아니요. 괜찮아요!"
            name="is_deposit"
            // register={register}
            required
          />
        </BoxWrap>
        <BoxWrap title="그룹 이름" htmlFor="title">
          <InputBox
            type="text"
            id="title"
            name="title"
            ref={register}
            required
            placeholder={groupName}
          />
        </BoxWrap>
        <BoxWrap title="그룹 소개" htmlFor="description">
          <TextArea
            as="textarea"
            id="description"
            name="description"
            ref={register}
            required
            placeholder={groupIntroduction}
          ></TextArea>
        </BoxWrap>
        {/* <BoxWrap>
              <Title htmlFor="email">
                이메일 <Required>*</Required>
              </Title>
              <InputBox type="email" id="email" name="email" ref={register} required />
            </BoxWrap> */}

        <BoxWrap title="그룹 해시태그" htmlFor="hashtag" required={false}>
          <Hashtag setValue={setValue} register={register} />
        </BoxWrap>

        {/* <BoxWrap>
            <Title htmlFor="image">썸네일</Title>
            <InputBox type="file" id="image" name="image" ref={register} />
          </BoxWrap> */}

        <ButtonWrap>
          <button type="submit">그룹 개설하기</button>
        </ButtonWrap>
      </FormWrap>
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

  button {
    width: 100%;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.mainColor};
    height: 5.6rem;
    text-shadow: ${({ theme }) => theme.textShadow};
    font-size: 2rem;
    font-weight: bold;
    font-family: ${({ theme }) => theme.formFont};
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
