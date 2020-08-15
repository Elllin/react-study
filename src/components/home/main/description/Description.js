import React from 'react';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Description() {
  return (
    <Div id="bottom">
      <InnerWrap>
        <h2>ABOUT DO IT. DO IT SERVICE</h2>
        <p>스터디 효과를 능률적으로 높힐 수 있는 두잇두잇을 소개합니다.</p>
      </InnerWrap>
    </Div>
  );
}

const Div = styled.div`
  height: 100vh;
  h2 {
    font-family: DIN;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.56;
  }
  p {
    font-family: NanumSquareOTFR;
    font-size: 22px;
    line-height: 3.55;
    color: #565656;
  }
`;

const InnerWrap = styled(Container)`
  text-align: center;
  padding-top: 74px;
`;

export default Description;
