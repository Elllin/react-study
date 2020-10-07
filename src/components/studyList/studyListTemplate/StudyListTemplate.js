import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function StudyListTemplate({ children, searchBox }) {
  return (
    <div>
      <Header />
      <Container>{searchBox && searchBox}</Container>
      <MainWrap>
        <Container>
          <main>{children}</main>
        </Container>
      </MainWrap>
    </div>
  );
}

const MainWrap = styled.main`
  background-color: #f6f6f6;
  margin-top: 3.7rem;
  padding: 4rem 9rem;
  width: 100vw;
`;

StudyListTemplate.propTypes = {
  searchBox: PropTypes.node,
};

StudyListTemplate.defaultProps = {
  searchBox: null,
};

export default StudyListTemplate;
