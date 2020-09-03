import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import createStudy from './constants/constants';

import styled, { css } from 'styled-components';
import { Layout } from 'style/CustomStyle';
import { BsChevronDown } from 'react-icons/bs';

function CreateStudy({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  // const onSubmit = (data) => {
  //   const formData = JSON.stringify(data);
  //   console.log(formData);
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: formData,
  //   }).then((data) => console.log(data));
  // };
  // const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const {
    groupName,
    groupIntroduction,
    hashtag: { placeholder, description },
  } = createStudy;
  return (
    <Wrap>
      <h1>DO IT DO IT</h1>
      <StudyForm action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <legend>스터디 그룹 개설하기</legend>
            <BoxWrap>
              <Title htmlFor="title">
                그룹 이름 <Required>*</Required>
              </Title>

              <Input
                type="text"
                id="title"
                name="title"
                ref={register}
                required
                placeholder={groupName}
              />
            </BoxWrap>
            <BoxWrap>
              <Title htmlFor="description">
                그룹 소개 <Required>*</Required>
              </Title>
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
              <Input type="email" id="email" name="email" ref={register} required />
            </BoxWrap> */}
            <BoxLayout>
              <BoxWrap>
                <Title htmlFor="location">
                  지역 <Required>*</Required>
                </Title>
                <SelectWrap>
                  <Input as="select" id="location" name="location" ref={register} required>
                    <option value="서울">서울 전체</option>
                    <option value="경기">경기 전체</option>
                    <option value="인천">인천 전체</option>
                  </Input>
                  <SelectArrow>
                    <BsChevronDown />
                  </SelectArrow>
                </SelectWrap>
              </BoxWrap>
              <BoxWrap>
                <Title htmlFor="category">
                  그룹 카테고리 <Required>*</Required>
                </Title>
                <SelectWrap>
                  <Input as="select" id="category" name="category" ref={register} required>
                    <option value="대입 / 수능">대입 / 수능</option>
                    <option value="대학생 / 취업">대학생 / 취업</option>
                    <option value="공무원 / 임용">공무원 / 임용</option>
                  </Input>
                  <SelectArrow>
                    <BsChevronDown />
                  </SelectArrow>
                </SelectWrap>
              </BoxWrap>
            </BoxLayout>

            <BoxWrap>
              <Title htmlFor="hashtag">그룹 해시태그</Title>
              <Input type="text" id="hashtag" name="hashtag" required placeholder={placeholder} />
              <Description>{description}</Description>
            </BoxWrap>

            <BoxWrap>
              <Title as="div" far>
                예치금 설정을 하시나요? <Required>*</Required>
              </Title>
              <RadioWrap>
                <input type="radio" id="yes" name="is_deposit" value="예" ref={register} required />
                <label htmlFor="yes">네. 할래요!</label>
              </RadioWrap>
              <RadioWrap>
                <input
                  type="radio"
                  id="no"
                  name="is_deposit"
                  value="아니오"
                  ref={register}
                  required
                />
                <label htmlFor="no">아니요. 괜찮아요!</label>
              </RadioWrap>
            </BoxWrap>

            {/* <BoxWrap>
            <Title htmlFor="image">썸네일</Title>
            <Input type="file" id="image" name="image" ref={register} />
          </BoxWrap> */}

            <ButtonWrap>
              <button type="submit">그룹 개설하기</button>
            </ButtonWrap>
          </div>
        </fieldset>
      </StudyForm>
    </Wrap>
  );
}

const Wrap = styled.main`
  margin: 9rem auto;
  width: 57rem;
  font-family: AppleSDGothicNeo;
  h1 {
    margin-bottom: 1.3rem;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
  }
`;

const StudyForm = styled.form`
  legend {
    margin-bottom: 5.1rem;
    text-shadow: ${({ theme }) => theme.textShadow};
    font-family: NanumSquareRoundOTFEB;
    font-size: 32px;
    letter-spacing: -0.6px;
    text-align: center;
  }
  fieldset > div {
    ${Layout}
    flex-direction: column;
    align-items: normal;
  }
`;

const Title = styled.label`
  display: block;
  margin-bottom: ${({ far }) => (far ? '1.5rem' : '1.3rem')};
  text-shadow: ${({ theme }) => theme.textShadow};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Required = styled.span`
  vertical-align: middle;
  color: red;
`;

const Input = styled.input`
  padding: 0 1.6rem;
  width: 100%;
  height: 5rem;
  border-radius: 2px;
  border: solid 1px #939393;
  font-size: 1.6rem;
  font-family: AppleSDGothicNeo;

  &::placeholder {
    letter-spacing: -0.3px;
    color: #9f9f9f;
  }
`;

const TextArea = styled(Input)`
  width: 100%;
  height: 24.4rem;
  padding: 1rem 2rem;
`;

const BoxLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;
`;

const BoxWrap = styled.div`
  margin-bottom: 4.4rem;
`;

const Description = styled.span`
  display: inline-block;
  margin-top: 1.2rem;
  text-shadow: ${({ theme }) => theme.textShadow};
  font-size: 15px;
  letter-spacing: -0.3px;
  color: #828282;
`;

const RadioWrap = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;

  & + & {
    margin-left: 17.9rem;
  }

  [type='radio'] {
    appearance: none;
    margin: 0;
    margin-right: 3.8rem;
  }

  [type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    width: 2.2rem;
    height: 2.2rem;
    text-align: center;
    background: #fff;
    border: 1px solid #979797;
    border-radius: 0.2rem;
    cursor: pointer;
    box-sizing: border-box;
  }
  [type='radio']:not(:checked) + label:after,
  [type='radio']:checked + label:after {
    content: '';
    position: absolute;
    left: 0.44rem;
    top: 0.44rem;
    width: 1.3rem;
    height: 1.3rem;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border-radius: 0.2rem;
    background-color: #3f97f4;
  }

  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  [type='radio'] + label {
    font-size: 20px;
    letter-spacing: -0.3px;
    cursor: pointer;
  }
`;

const SelectWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  select {
    display: inline-block;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  &::-ms-expand {
    display: none;
  }
`;

const SelectArrow = styled.div`
  position: absolute;
  margin-top: -1rem;
  top: 50%;
  right: 1.6rem;
  color: #787878;
  font-size: 2.1rem;
  pointer-events: none;
`;

const ButtonWrap = styled.div`
  margin-top: 4.2rem;

  button {
    width: 100%;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.mainColor};
    height: 5.6rem;
    text-shadow: ${({ theme }) => theme.textShadow};
    font-size: 2rem;
    font-weight: bold;
    font-family: AppleSDGothicNeo;
  }
`;

export default CreateStudy;
