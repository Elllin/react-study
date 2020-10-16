import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MainButton from 'components/common/mainButton/MainButton';

import styled, { css } from 'styled-components';

function DetailFloting({ title, startDate, endDate, onClickEditBtn }) {
  const [isFixed, setIsFixed] = useState(false);
  const TOP_OFFSET = 130;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const scrollHandler = () => {
      const scrolledTopLength = window.pageYOffset;

      if (scrolledTopLength >= TOP_OFFSET) setIsFixed(true);
      else setIsFixed(false);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Wrap isFixed={isFixed}>
      <h2 className="blind">그룹 참여하기</h2>
      <dl>
        <List>
          <dt>스터디 그룹</dt>
          <dd>{title}</dd>
        </List>
        <List>
          <dt>스터디 기간</dt>
          <dd>{startDate === 'Invalid date' ? '상시모집' : `${startDate} ~ ${endDate}`}</dd>
        </List>
      </dl>
      <ButtomWrap>
        <MainButton fontSize="1.9rem" height="5.5rem" onClick={onClickEditBtn}>
          그룹 참여하기
        </MainButton>
      </ButtomWrap>
    </Wrap>
  );
}

const Wrap = styled.aside`
  position: absolute;
  top: 10.3rem;
  right: 50%;
  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: 0;
    `}
  margin-right: -585px;
  padding: 2.5rem;
  width: 37rem;
  height: 27rem;
  background-color: #fff;
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

DetailFloting.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DetailFloting;
