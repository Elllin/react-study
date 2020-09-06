import React from 'react';

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
        {/* 시작 버튼 컴포넌트 분리하기  */}
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
    margin-bottom: 51.6px;
    font-size: 3.6rem;
    line-height: 1.64;
    letter-spacing: -0.06rem;
    font-family: ${({ theme }) => theme.titleFont};
  }

  button {
    position: relative;
    display: block;
    width: 24.8rem;
    height: 6rem;
    box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
    transform: rotate(-5deg);
    font-size: 1.9rem;
    background: ${({ theme }) => theme.mainColor};

    &:before {
      content: '';
      position: absolute;
      bottom: 0%;
      left: 0%;
      width: 0px;
      height: 0px;
      box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
      border-right: 1.8rem solid #ffac00;
      border-bottom: 1.9rem solid #fff;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -14%;
      left: -5%;
      width: 0px;
      height: 0px;
      border-right: 4rem solid transparent;
      border-bottom: 4rem solid #fff;
    }
  }
`;

export default Beginning;
