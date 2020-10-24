import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { defaultLayout } from 'style/CustomStyle';

function FormTemplate({ children, onSubmit, handleSubmit, onKeyPress, titleRendering, margin }) {
  return (
    <Wrap margin={margin}>
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
  margin: ${({ margin }) => (margin ? '8.5rem auto 11.5rem' : '0 auto')};
  //margin: 0s auto;
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
  margin: PropTypes.bool,
};
FormTemplate.default = {
  onSubmit: null,
  onKeyPress: null,
  margin: false,
};

export default memo(FormTemplate);
