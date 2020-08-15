import React from 'react';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';
import { BsChevronCompactDown } from 'react-icons/bs';

function Beginning() {
  return (
    <Div>
      <Container>
        <h2>
          여기저기 헤매지 말고 두잇두잇에서
          <br />
          나에게 맞는 스터디그룹을
          <br />
          효율적으로 찾아보세요
        </h2>
        <button>시작하기</button>
        <DownButtonWrap>
          <a href="#bottom">
            <DownIcon />
          </a>
        </DownButtonWrap>
      </Container>
    </Div>
  );
}

const DownButtonWrap = styled.div`
  ${Layout}
  margin-top: 50px;
`;

const DownIcon = styled(BsChevronCompactDown)`
  font-size: 60px;
  color: grey;
  cursor: pointer;
`;

const Div = styled.div`
  padding-top: 81px;
  height: 77vh;
  h2 {
    margin-bottom: 98px;
    font-family: NanumSquareOTFB;
    font-size: 51px;
    line-height: 1.53;
  }
  button {
    display: block;
    width: 305px;
    height: 74px;
    background-color: #000000;
    font-size: 31px;
    font-weight: 600;
    color: #ffffff;
  }
`;

export default Beginning;
