import React from 'react';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function DetailTemplate({ children }) {
  return (
    <div>
      <Header />
      <Wrap>
        <Container>
          <Main>{children}</Main>
        </Container>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  padding: 3rem 0 6rem;
  background-color: #f8f8f8;
`;

const Main = styled.main`
  padding-bottom: 1.6rem;
  width: 77rem;
  background-color: #fff;
`;

export default DetailTemplate;
