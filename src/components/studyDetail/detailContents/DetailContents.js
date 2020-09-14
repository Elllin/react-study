import React from 'react';

import styled from 'styled-components';

function DetailContents() {
  return (
    <Wrap>
      <DetailList>
        <TItle>스터디 기간</TItle>
        <Description>9월 10일 (목) ~ 9월 25일 (금)</Description>
      </DetailList>
      <DetailList>
        <TItle>그룹 소개</TItle>
        <Description>
          - 상황별 기초회화와 꼭 필요한 회화문법 같이 공부해요! - 매일 하루 일과를 설명하고 내
          감정과 기분을 얘기해요. - 일주일에 두 번 이상 영어 일기 써서 인증해요. 📖Study table 1.
          How was your week? 한 주 공유하기 지난 주를 어떻게 보냈는지 얘기 나눠요. 2. Situation of
          the day 오늘의 대화 오늘의 상황에 대해 대화를 나눠봐요! 3. Grammar in use 교재를 이용해서
          공부해요 배운것을 토대로 영어 일기를 써서 공유해요. 🔥🔥영어 초보 모여라! 함께 시작해요 :)
        </Description>
      </DetailList>
      <DetailList>
        <TItle>상세정보</TItle>
        <Description>
          지역: 강북구 (모임 장소 투표 예정) 예치금: 있음 (일기 작성 안할시) 그룹 카테고리: 외국어
        </Description>
      </DetailList>
    </Wrap>
  );
}

const Wrap = styled.dl`
  width: 65.4rem;
  margin: 0 auto;
`;

const DetailList = styled.div`
  display: grid;
  grid-template-columns: 15.6rem 1fr;

  border-top: 0.1rem solid #eee;
`;

const TItle = styled.dt`
  padding: 3rem 0;
  font-size: 2.1rem;
  font-weight: bold;
  letter-spacing: -0.029rem;
`;

const Description = styled.dd`
  padding: 3rem 0;
  font-size: 1.9rem;
`;

export default DetailContents;
