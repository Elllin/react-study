import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

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

              <Input type="text" id="title" name="title" ref={register} />
            </BoxWrap>
            <BoxWrap>
              <Title htmlFor="description">
                그룹 소개 <Required>*</Required>
              </Title>
              <TextArea as="textarea" id="description" name="description" ref={register}></TextArea>
            </BoxWrap>
            <BoxWrap>
              <Title htmlFor="email">
                이메일 <Required>*</Required>
              </Title>
              <Input type="email" id="email" name="email" ref={register} />
            </BoxWrap>
            <BoxLayout>
              <BoxWrap>
                <Title htmlFor="location">
                  지역 <Required>*</Required>
                </Title>
                <Input as="select" id="location" name="location" ref={register}>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="인천">인천</option>
                </Input>
              </BoxWrap>
              <BoxWrap>
                <Title htmlFor="category">
                  그룹 카테고리 <Required>*</Required>
                </Title>
                <Input as="select" id="category" name="category" ref={register}>
                  <option value="대입 / 수능">대입 / 수능</option>
                  <option value="대학생 / 취업">대학생 / 취업</option>
                  <option value="공무원 / 임용">공무원 / 임용</option>
                </Input>
              </BoxWrap>
            </BoxLayout>

            <BoxWrap>
              <Title as="div">
                예치금 설정을 하시나요? <Required>*</Required>
              </Title>
              <label htmlFor="yes">네. 할래요!</label>
              <input type="radio" id="yes" name="is_deposit" value="예" ref={register} />
              <label htmlFor="no">아니요. 괜찮아요!</label>
              <input type="radio" id="no" name="is_deposit" value="아니오" ref={register} />
            </BoxWrap>
            <BoxWrap>
              <Title htmlFor="hashtag">그룹 해시태그</Title>
              <Input type="text" id="hashtag" name="hashtag" />
            </BoxWrap>
            {/* <BoxWrap>
            <Title htmlFor="image">썸네일</Title>
            <Input type="file" id="image" name="image" ref={register} />
          </BoxWrap> */}

            <button type="submit">승인요청</button>
          </div>
        </fieldset>
      </StudyForm>
    </Wrap>
  );
}

const Wrap = styled.main`
  margin: 12rem auto;
  width: 57rem;
  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
    font-family: AppleSDGothicNeo;
    font-size: 24px;
    font-weight: 900;
  }
`;

const StudyForm = styled.form`
  /* margin: 2rem auto; */
  /* padding: 6rem 7rem 3rem; */
  /* width: 60rem; */
  /* border: 0.1rem solid black; */
  legend {
    margin-bottom: 5.1rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    font-family: NanumSquareRoundOTFEB, sans-serif;
    font-size: 3.2rem;
    letter-spacing: -0.6px;
    text-align: center;
  }
  fieldset > div {
    ${Layout}
    flex-direction: column;
    align-items: normal;
  }
  input + label {
    margin-left: 10rem;
  }
  button {
    margin-top: 2rem;
    width: 100%;
    height: 4rem;
    background: #ffd000;
  }
`;

const Title = styled.label`
  display: block;
  margin-bottom: 1.3rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-family: AppleSDGothicNeo;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Required = styled.span`
  vertical-align: middle;
  color: red;
`;

const Input = styled.input`
  padding: 0 2rem;
  width: 100%;
  height: 4rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem 2rem;
`;

const BoxLayout = styled.div`
  ${Layout}
  justify-content: start;
  div {
    flex-grow: 1;
  }
  div + div {
    margin-left: 1rem;
  }
`;

const BoxWrap = styled.div`
  margin-bottom: 4.4rem;
`;
export default CreateStudy;
