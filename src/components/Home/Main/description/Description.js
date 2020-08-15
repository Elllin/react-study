import React from 'react';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Description() {
  return (
    <Div>
      <Container>스터디 효과의 설명이 들어갑니다.</Container>
    </Div>
  );
}

const Div = styled.div`
  background: yellow;
  height: 300px;
`;

export default Description;
