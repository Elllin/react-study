import React from 'react';

import styled from 'styled-components';

function DescriptionItem() {
  return (
    <>
      <Dt>
        <div
          style={{ background: '#fd5e5c', width: '48px', height: '62px', borderRadius: '50%' }}
        ></div>
        <span>나와 맞는 스터디 그룹원</span>
      </Dt>
      <Dd>
        스터디 그룹의 참석률, 대화 데이터를 통해 그룹 성향을 미리 파악하여 나에게 적합한 스터디
        그룹을 찾을 수 있어요.
      </Dd>
    </>
  );
}

const Dt = styled.dt`
  width: 24.3rem;
  span {
    display: inline-block;
    margin: 2.4rem 0 1.7rem;
    font-family: NanumSquareRoundOTFEB, sans-serif;
    font-size: 1.8rem;
  }
`;

const Dd = styled.dd`
  width: 26.5rem;
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: -0.3px;
  color: #666666;
`;

export default DescriptionItem;
