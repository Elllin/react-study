import React from 'react';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Description() {
  return (
    <Div>
      <InnerWrap>
        <h2 id="bottom">ABOUT DO IT. DO IT SERVICE</h2>
        <p>
          기존 스터디그룹과는 다른, 스터디 효과를 능률적으로 높힐 수 있는 두잇두잇을 소개할게요 :)
        </p>
      </InnerWrap>
    </Div>
  );
}

const Div = styled.div`
  /* height: 100vh; */
  height: 1045px;
  h2 {
    font-family: '210 Yeonpilsketch R';
    font-size: 34px;
    line-height: 2.29;
  }
  p {
    font-family: NanumSquareRoundOTFR;
    font-size: 20px;
    line-height: 3.9;
  }
`;

const InnerWrap = styled(Container)`
  text-align: center;
  padding-top: 74px;
`;

export default Description;
