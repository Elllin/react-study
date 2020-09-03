import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';
import { BsChevronDown } from 'react-icons/bs';

function Beginning() {
  const onClickDown = () => {
    const viewHeight = window.innerHeight;
    window.scrollTo({ top: viewHeight, behavior: 'smooth' });
  };

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
        <button>간편하게 이메일로 시작</button>
        <DownButtonWrap onClick={onClickDown}>
          <DownIcon />
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
    /* margin-bottom: 5.16rem; */
    margin-bottom: 51.6px;
    font-size: 3.6rem;
    line-height: 1.64;
    letter-spacing: -0.06rem;
    font-family: NanumSquareRoundOTFEB, sans-serif;
  }
  button {
    position: relative;
    display: block;
    width: 24.8rem;
    height: 6rem;
    background: #ffd000;
    /* box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem rgba(153, 153, 153, 0.55); */
    transform: rotate(-5deg);
    font-size: 1.9rem;
    background: linear-gradient(46deg, transparent 0.62em, #ffd000 0) no-repeat;

    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 1.8rem;
      height: 1.9rem;
      background: linear-gradient(46deg, transparent 0.62em, #ffac00 0) no-repeat;
      /* background: rgb(258 254 236 / 57%); */
      /* background: transparent; */
      /* background: #fff; */
      /* border-width: 0 1.9rem 1.8rem 0; */
      /* border-style: solid; */
      /* border-color: transparent #ffac00 transparent transparent; */
    }
  }
`;

export default Beginning;
