import React from 'react';
import DescriptionItem from './DescriptionItem';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Description() {
  return (
    <Div id="bottom">
      <InnerWrap>
        <h2>ABOUT DO IT. DO IT SERVICE</h2>
        <p>
          기존 스터디그룹과는 다른, 스터디 효과를 능률적으로 높힐 수 있는 두잇두잇을 소개할게요 :)
        </p>
        <ItemWrap>
          <DescriptionItem />
        </ItemWrap>
      </InnerWrap>
    </Div>
  );
}
// 771
const Div = styled.div`
  height: 100vh;
  h2 {
    margin-bottom: 1.5rem;
    font-family: '210 Yeonpilsketch R';
    font-size: 34px;
  }
  p {
    font-family: NanumSquareRoundOTFR;
    font-size: 20px;
    margin-bottom: 17.2rem;
  }
`;

const InnerWrap = styled(Container)`
  text-align: center;
  padding-top: 74px;
`;

const ItemWrap = styled.dl`
  margin: 0 auto;
  width: 77.1rem;
  text-align: start;
  dt + dt {
    margin-left: 22.5rem;
  }
  dd + dt {
    margin-top: 11.3rem;
  }
`;

export default Description;
