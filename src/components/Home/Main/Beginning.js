import React from 'react';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Beginning() {
  return (
    <Div>
      <Container>
        <h2>
          여기저기 헤매지 말고 두잇두잇에서
          <br />
          나에게 맞는 스터디그룹을
          <br />
          효율적으로 찾아보세요
        </h2>
      </Container>
    </Div>
  );
}

const Div = styled.div`
  background: red;
  width: 100%;
  height: 200px;
`;

export default Beginning;
