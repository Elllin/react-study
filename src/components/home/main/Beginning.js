import React from 'react';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';
import { BsChevronDown } from 'react-icons/bs';

function Beginning() {
  return (
    <Div>
      <Container>
        <h2>
          효율적인 스터디 모임을 찾으시나요?
          <br />
          여기저기 헤매지 말고 스마트한 두잇두잇에서
          <br />
          스터디그룹을 시작해보세요!
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
  position:absolute;
  bottom: 0;
  right: 50%;
`;

const DownIcon = styled(BsChevronDown)`
  font-size: 5rem;
  color: #000;
  cursor: pointer;
`;

const Div = styled.div`
  padding-top: 17.7rem;
  height: 87vh;
  h2 {
    margin-bottom: 5.16rem;
    font-size: 3.6rem;
    line-height: 1.64;
    letter-spacing: -0.06rem;
    font-family: NanumSquareRoundOTFEB, sans-serif;
  }
  button {
    position: relative;
    display: block;
    width: 19rem;
    height: 5.5rem;
    background: #ffd000;
    border-radius: 0 0 0 2.45rem;
    box-shadow: 0.2rem 0.2rem 0.6rem 0.1rem rgba(153, 153, 153, 0.55);
    transform: rotate(-4deg);
    font-size: 1.9rem;

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgb(258 254 236 / 57%);
      border-width: 0 1.9rem 1.8rem 0;
      border-style: solid;
      border-color: transparent #ffac00 transparent transparent;
    }
  }
`;

export default Beginning;
