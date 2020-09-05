import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function FormWrap({ children, handleSubmit, onSubmit }) {
  return (
    <Wrap>
      <h1>DO IT DO IT</h1>
      <StudyForm action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <legend>스터디 그룹 개설하기</legend>
            <RequiredMessage>* 는 필수 입력 사항입니다.</RequiredMessage>
            {children}
          </div>
        </fieldset>
      </StudyForm>
    </Wrap>
  );
}

const Wrap = styled.main`
  margin: 9rem auto;
  width: 57rem;
  font-family: ${({ theme }) => theme.formFont};
  h1 {
    margin-bottom: 1.3rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 900;
  }
`;

const StudyForm = styled.form`
  legend {
    margin-bottom: 4.4rem;
    font-family: ${({ theme }) => theme.subFont};
    font-size: 3.2rem;
    letter-spacing: -0.06rem;
    text-align: center;
  }
  fieldset > div {
    ${Layout}
    flex-direction: column;
    align-items: normal;
  }
`;

const RequiredMessage = styled.span`
  margin: 0 0 3rem 0.3rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.requiredColor};
`;

FormWrap.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormWrap;
