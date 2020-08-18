import React from 'react';

import styled, { css } from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function StudyOpening() {
  return (
    <StudyForm action="#">
      <fieldset>
        <div>
          <legend>스터디 개설하기</legend>
          <div>
            <Title htmlFor="title">
              스터디 그룹 이름 <Required>*</Required>
            </Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">
              지역 <Required>*</Required>
            </Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">
              시간 <Required>*</Required>
            </Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title as="div">
              예치금 여부 <Required>*</Required>
            </Title>
            <label htmlFor="yes">예</label>
            <input type="radio" id="yes" name="deposit" value="예" />
            <label htmlFor="no">아니오</label>
            <input type="radio" id="no" name="deposit" value="아니오" />
          </div>
          <div>
            <Title htmlFor="title">
              카테고리 <Required>*</Required>
            </Title>
            <select id="title" name="title">
              <option value="">대입 / 수능</option>
              <option value="">대학생 / 취업</option>
              <option value="">공무원 / 임용</option>
            </select>
          </div>
          <div>
            <Title htmlFor="title">
              스터디 설명 <Required>*</Required>
            </Title>
            <textarea id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">해시태그</Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">기간</Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">희망 인원</Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">희망 나이</Title>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <Title htmlFor="title">썸네일</Title>
            <input type="text" id="title" name="title" />
          </div>
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
  div + div {
    margin-top: 20px;
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
  color: red;
`;
export default StudyOpening;
