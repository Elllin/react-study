import React from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function CreateStudy() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const formData = JSON.stringify(data);
    console.log(formData);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData,
    }).then((data) => console.log(data));
    //try catch를 통해 tru라면? 화면 이동하기
  };

  return (
    <StudyForm action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <div>
          <legend>
            DO IT DO IT
            <br /> 스터디 그룹 개설하기
          </legend>
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
        </div>
        <button type="submit">승인요청</button>
      </fieldset>
    </StudyForm>
  );
}

const StudyForm = styled.form`
  margin: 20px auto;
  padding: 60px 70px 30px;
  width: 600px;
  border: 1px solid black;
  border-radius: 10px;
  legend {
    padding-bottom: 30px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }
  fieldset > div {
    ${Layout}
    flex-direction: column;
    align-items: normal;
  }
  input + label {
    margin-left: 100px;
  }
`;

const Title = styled.label`
  margin-right: 30px;
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Required = styled.span`
  vertical-align: middle;
  color: red;
`;

const Input = styled.input`
  padding: 0 20px;
  width: 100%;
  height: 40px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
`;

const BoxLayout = styled.div`
  ${Layout}
  justify-content: start;
  div {
    flex-grow: 1;
  }
  div + div {
    margin-left: 10px;
  }
`;

const BoxWrap = styled.div`
  margin-top: 30px;
`;
export default CreateStudy;