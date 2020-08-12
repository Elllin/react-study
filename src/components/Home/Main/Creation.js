import React from 'react';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Creation() {
  return (
    <Div>
      <Container>스터디 개설하기 문구</Container>
    </Div>
  );
}

const Div = styled.div`
  background: red;
  width: 100%;
  height: 200px;
`;

export default Creation;
