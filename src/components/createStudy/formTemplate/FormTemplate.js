import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { defaultLayout } from 'style/CustomStyle';

function FormTemplate({ children, onSubmit, handleSubmit, onKeyPress, titleRendering }) {
  return (
    <Wrap>
      {titleRendering && <h1>DO IT DO IT</h1>}
      <StudyForm action="#" method="post" onSubmit={handleSubmit(onSubmit)} onKeyPress={onKeyPress}>
        <fieldset>
          <div>
            {titleRendering && <legend>스터디 그룹 개설하기</legend>}
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
  h1 {
    margin-bottom: 1.3rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 900;
  }
`;

const StudyForm = styled.form`
  legend {
    margin-bottom: 6.5rem;
    font-family: ${({ theme }) => theme.titleFont};
    font-size: 3.2rem;
    letter-spacing: -0.06rem;
    text-align: center;
  }
  fieldset > div {
    ${defaultLayout}
    flex-direction: column;
    align-items: normal;
  }
`;

FormTemplate.propTypes = {
  onSubmit: PropTypes.func,
  onKeyPress: PropTypes.func,
};
FormTemplate.default = {
  onSubmit: null,
  onKeyPress: null,
};

export default memo(FormTemplate);
