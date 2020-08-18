import React from 'react';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function StudyOpening() {
  return (
    <Container>
      <StudyForm action="#">
        <fieldset>
          <div>
            <legend>스터디 개설하기</legend>
            <div>
              <label htmlFor="title">스터디 그룹 이름</label>
              <input type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="title">스터디 그룹 이름</label>
              <input type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="title">스터디 그룹 이름</label>
              <input type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="title">스터디 그룹 이름</label>
              <input type="text" id="title" name="title" />
            </div>
          </div>
        </fieldset>
      </StudyForm>
    </Container>
  );
}

const StudyForm = styled.form`
  padding-top: 60px;
  legend {
    padding-bottom: 30px;
    font-weight: 700;
    font-size: 20px;
  }
  fieldset > div {
    ${Layout}
    flex-direction: column;
  }
  div + div {
    margin-top: 20px;
  }
  label {
    margin-right: 30px;
  }
`;

export default StudyOpening;
