import React from 'react';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function StudyOpening() {
  return (
    <StudyForm action="#">
      <fieldset>
        <div>
          <legend>스터디 개설하기</legend>
          <div>
            <label htmlFor="title">
              스터디 그룹 이름 <span>*</span>
            </label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">
              지역 <span>*</span>
            </label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">
              시간 <span>*</span>
            </label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <div className="label-title">
              예치금 여부 <span>*</span>
            </div>
            <label htmlFor="title" className="radio-title">
              예
            </label>
            <input type="radio" id="title" name="title" value="예" />
            <label htmlFor="title" className="radio-title">
              아니오
            </label>
            <input type="radio" id="title" name="title" value="아니오" />
          </div>
          <div>
            <label htmlFor="title">
              카테고리 <span>*</span>
            </label>
            <select id="title" name="title">
              <option value="">대입 / 수능</option>
              <option value="">대학생 / 취업</option>
              <option value="">공무원 / 임용</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">
              스터디 설명 <span>*</span>
            </label>
            <textarea id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">해시태그</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">기간</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">희망 인원</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">희망 나이</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="title">썸네일</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
      </fieldset>
    </StudyForm>
  );
}

const StudyForm = styled.form`
  margin: 20px auto;
  padding: 60px 30px 30px;
  width: 500px;
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
  label,
  .label-title {
    margin-right: 30px;
    display: block;
    width: 100%;
  }
  .radio-title {
    margin-right: 0;
    display: inline;
  }
  label > span {
    color: red;
  }
`;

export default StudyOpening;
