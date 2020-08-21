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
          <DescriptionItem
            title="나와 맞는 스터디 그룹원"
            discription="스터디 그룹의 참석률, 대화 데이터를 통해 그룹 성향을 미리 파악하여 나에게 적합한 스터디
        그룹을 찾을 수 있어요."
            width="27.5rem"
            float="left"
            color="#fd5e5c"
          />
          <DescriptionItem
            title="스터디그룹 매니저, 슬랙봇"
            discription="슬랙봇이 공지, 참석자 리스트업,
            패널티 DM 등 다양한 기능을 제공하여
            스터디장의 부담을 줄여줘요."
            width="25.3rem"
            float="right"
            color="#ffe01d"
          />

          <DescriptionItem
            title="효율적인 관리 시스템"
            discription="미팅 참석여부 투표, 구글 캘린더 연동
            일정관리로 효율적이고 확실하게
            관리를 도와줘요.
            "
            width="24.6rem"
            float="left"
            color="#59b4ff"
          />
          <DescriptionItem
            title="리마인드 기능"
            discription="특정 메시지를 정해진 시간에 리마인드
            공지를 해줘서 착오나 깜빡 할 일을
            최소화해줘요."
            width="25.3rem"
            float="right"
            color="#72dc90"
          />
        </ItemWrap>
      </InnerWrap>
    </Div>
  );
}

const Div = styled.div`
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
  padding-top: 12rem;
`;

const ItemWrap = styled.ul`
  margin: 0 auto;
  width: 77.1rem;

  text-align: left;
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

export default Description;
