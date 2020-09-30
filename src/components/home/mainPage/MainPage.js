import React from 'react';

import mainImg from 'assets/images/main/main.png';

import styled, { css } from 'styled-components';
import { Container } from 'style/CustomStyle';
import { BsChevronDown } from 'react-icons/bs';

function MainPage() {
  const onClickDown = () => {
    const viewHeight = window.innerHeight;
    window.scrollTo({ top: viewHeight, behavior: 'smooth' });
  };

  return (
    <Wrap>
      <Container>
        <Background>
          <h2>
            효율적인 스터디 모임을 찾으시나요?
            <br />
            여기저기 헤매지 말고 스마트한 두잇두잇에서
            <br />
            스터디그룹을 시작해보세요!
          </h2>
          <button>스터디 시작하기</button>
        </Background>
        <DownButtonWrap onClick={onClickDown}>
          <DownIcon />
        </DownButtonWrap>
      </Container>
    </Wrap>
  );
}

const Background = styled.div`
  height: 100%;
  background: url(${mainImg}) no-repeat;
  background-size: 604px 398px;
  background-position: 90% 59%;
`;

const DownButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
`;

const DownIcon = styled(BsChevronDown)`
  font-size: 5rem;
  color: #000;
  cursor: pointer;
`;

const CommonStyle = css`
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
`;

const Wrap = styled.section`
  padding-top: 16vh;
  height: 87vh;

  h2 {
    margin-bottom: 51.6px;
    font-size: 3.6rem;
    line-height: 1.64;
    letter-spacing: -0.06rem;
    font-family: ${({ theme }) => theme.titleFont};
    min-width: 65.2rem;
  }

  button {
    position: relative;
    display: block;
    width: 24.8rem;
    height: 6rem;
    box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
    -moz-box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
    -webkit-box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
    transform: rotate(-5deg);
    font-size: 1.9rem;
    font-family: ${({ theme }) => theme.titleFont};
    background: ${({ theme }) => theme.mainColor};

    &:before {
      ${CommonStyle}
      bottom: 0%;
      left: 0%;
      box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
      -moz-box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
      -webkit-box-shadow: 0.2rem 0.2rem 0.5rem -0.1rem rgba(153, 153, 153, 0.55);
      border-right: 1.8rem solid #ffac00;
      border-bottom: 1.9rem solid #fff;
    }

    &:after {
      ${CommonStyle}
      bottom: -14%;
      left: -5%;
      border-right: 4rem solid transparent;
      border-bottom: 4rem solid #fff;
    }
  }
`;

export default MainPage;
