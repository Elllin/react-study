import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function StudyListTemplate({ children, searchBox }) {
  return (
    <div>
      <Header />
      <Container>
        {searchBox && searchBox}
        <Wrap>
          <main>{children}</main>
        </Wrap>
      </Container>
    </div>
  );
}

const Wrap = styled.div`
  background-color: #f6f6f6;
`;

StudyListTemplate.propTypes = {
  searchBox: PropTypes.node,
};

StudyListTemplate.defaultProps = {
  searchBox: null,
};

export default StudyListTemplate;
