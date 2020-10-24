import React from 'react';

import MainButton from 'components/common/mainButton/MainButton';

import styled, { css } from 'styled-components';
import FlotingTemplate from 'components/common/flotingTemplate/FlotingTemplate';

function DetailFloting({ title, startDate, endDate, onClickEditBtn }) {
  return (
    <FlotingTemplate>
      <h2 className="blind">그룹 참여하기</h2>
      <ListWrap>
        <List>
          <dt>스터디 그룹</dt>
          <dd>{title}</dd>
        </List>
        <List>
          <dt>스터디 기간</dt>
          <dd>{startDate === 'Invalid date' ? '상시모집' : `${startDate} ~ ${endDate}`}</dd>
        </List>
      </ListWrap>
      <ButtomWrap>
        <MainButton fontSize="1.9rem" height="5.5rem" onClick={onClickEditBtn}>
          그룹 참여하기
        </MainButton>
      </ButtomWrap>
    </FlotingTemplate>
  );
}
const ListWrap = styled.dl`
  dt {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  dd {
    font-size: 1.6rem;
    line-height: 1.25;
  }

  div + div {
    padding-top: 1.7rem;
    border-top: 0.1rem solid #e8e8e8;
  }
`;

const List = styled.div`
  padding-bottom: 1.7rem;
`;

const ButtomWrap = styled.div`
  margin-top: 0.9rem;
`;

export default DetailFloting;
