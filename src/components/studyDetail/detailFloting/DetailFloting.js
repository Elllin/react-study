import React from 'react';

import MainButton from 'components/common/mainButton/MainButton';

import styled from 'styled-components';

function DetailFloting() {
  return (
    <Wrap>
      <h2 className="blind">그룹 참여하기</h2>
      <dl>
        <List>
          <dt>스터디 그룹</dt>
          <dd>영어회화 초보 스터디 그룹</dd>
        </List>
        <List>
          <dt>스터디 그룹</dt>
          <dd>영어회화 초보 스터디 그룹</dd>
        </List>
      </dl>
      <ButtomWrap>
        <MainButton largeFont>그룹 참여하기</MainButton>
      </ButtomWrap>
    </Wrap>
  );
}

const Wrap = styled.aside`
  position: fixed;
  top: 11rem;
  right: 50%;
  margin-right: -585px;
  padding: 2.9rem 2.2rem 2rem;
  width: 37rem;
  height: 29.7rem;
  background-color: #fff;
  dt {
    margin-bottom: 1.1rem;
    font-size: 2.1rem;
    font-weight: bold;
  }
  dd {
    font-size: 2rem;
    line-height: 1.25;
  }

  div + div {
    padding-top: 1.7rem;
    border-top: 0.1rem solid #e8e8e8;
  }
`;

const List = styled.div`
  padding-bottom: 1.9rem;
`;

const ButtomWrap = styled.div`
  margin-top: 1.2rem;
`;

export default DetailFloting;
