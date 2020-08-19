import React from 'react';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function StudyOpening() {
  return (
    <StudyForm action="#">
      <fieldset>
        <div>
          <legend>스터디 개설하기</legend>
          <BoxWrap>
            <Title htmlFor="title">
              스터디 그룹 이름 <Required>*</Required>
            </Title>
            <Input type="text" id="title" name="title" />
          </BoxWrap>
          <BoxWrap>
            <Title htmlFor="email">
              이메일 <Required>*</Required>
            </Title>
            <Input type="text" id="email" name="email" />
          </BoxWrap>
          <BoxLayout>
            <BoxWrap>
              <Title htmlFor="location">
                지역 <Required>*</Required>
              </Title>
              <Input type="text" id="location" name="location" />
            </BoxWrap>
            <BoxWrap>
              <Title htmlFor="title">
                시간 <Required>*</Required>
              </Title>
              <Input type="text" id="title" name="title" />
            </BoxWrap>
          </BoxLayout>

          <BoxWrap>
            <Title as="div">
              예치금 여부 <Required>*</Required>
            </Title>
            <label htmlFor="yes">예</label>
            <input type="radio" id="yes" name="is_deposit" value="예" />
            <label htmlFor="no">아니오</label>
            <input type="radio" id="no" name="is_deposit" value="아니오" />
          </BoxWrap>
          <BoxWrap>
            <Title htmlFor="title">
              카테고리 <Required>*</Required>
            </Title>
            <Input as="select" id="title" name="title">
              <option value="">대입 / 수능</option>
              <option value="">대학생 / 취업</option>
              <option value="">공무원 / 임용</option>
            </Input>
          </BoxWrap>
          <BoxWrap>
            <Title htmlFor="description">
              스터디 설명 <Required>*</Required>
            </Title>
            <TextArea as="textarea" id="description" name="description"></TextArea>
          </BoxWrap>
          <BoxWrap>
            <Title htmlFor="title">해시태그</Title>
            <Input type="text" id="title" name="title" />
          </BoxWrap>
          <BoxLayout>
            <BoxWrap>
              <Title htmlFor="title">기간</Title>
              <Input type="text" id="title" name="title" />
            </BoxWrap>
            <BoxWrap>
              <Title htmlFor="title">희망 인원</Title>
              <Input type="text" id="title" name="title" />
            </BoxWrap>
          </BoxLayout>
          <BoxWrap>
            <Title htmlFor="image">썸네일</Title>
            <Input type="file" id="image" name="image" />
          </BoxWrap>
        </div>
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
export default StudyOpening;
