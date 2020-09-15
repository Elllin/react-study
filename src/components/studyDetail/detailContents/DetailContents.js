import React from 'react';

import styled from 'styled-components';

function DetailContents() {
  const contents = `- 상황별 기초회화와 꼭 필요한 회화문법 같이 공부해요!\n- 💥'매일 하루 일과를 설명하고 내 감정과 기분을 얘기해요.\n- 일주일에 두 번 이상 영어 일기 써서 인증해요. ❤\n1. How was your week? 한 주 공유하기\n지난 주를 어떻게 보냈는지 얘기 나눠요.\n\n2.Situation of the day 오늘의 대화\n오늘의 상황에 대해 대화를 나눠봐요!\n\n3. Grammar in use교재를 이용해서 공부해요\n배운것을 토대로 영어 일기를 써서 공유해요.\n\n영어 초보 모여라!함께 시작해요 :)`;
  contents.replaceAll('\n', '<br />');

  return (
    <Wrap>
      <DetailList>
        <TItle>스터디 기간</TItle>
        <Description>9월 10일 (목) ~ 9월 25일 (금)</Description>
      </DetailList>
      <DetailList>
        <TItle>그룹 소개</TItle>
        <Description>{contents}</Description>
      </DetailList>
      <DetailList>
        <TItle>상세정보</TItle>
        <Description>
          <Information>
            <div>
              <dt>지역:</dt>
              <dd>강북구 (모임 장소 투표 예정)</dd>
            </div>
            <div>
              <dt>예치금:</dt>
              <dd> 있음 (일기 작성 안할시)</dd>
            </div>
            <div>
              <dt>그룹 카테고리:</dt>
              <dd>외국어</dd>
            </div>
          </Information>
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
  white-space: break-spaces;
  line-height: 2.5rem;
  font-size: 1.9rem;
`;

const Information = styled.dl`
  div {
    display: flex;
  }
  dt {
    color: #757575;
    margin-right: 0.8rem;
  }
  div + div {
    margin-top: 1.5rem;
  }
`;

export default DetailContents;
