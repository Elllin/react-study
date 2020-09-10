import React from 'react';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function Invitation({ mailAddress = 'ddd@naver.com' }) {
  const getDomain = () => {
    return mailAddress.split('@')[1];
  };

  return (
    <>
      <Header />
      <Wrap>
        <ImgWrap>
          <img src="http://placehold.it/211x182" alt="메일" />
        </ImgWrap>
        <h2>초대 메일이 발송되었습니다!</h2>
        <p>
          나의 메일함에서 ( <MAilAddress>{mailAddress}</MAilAddress> ) 초대 메일을 확인하세요.
          <br />
          인증 버튼을 클릭하면 그룹개설이 바로 완료됩니다.
        </p>
        <button>초대 메일 재발송</button>
      </Wrap>
    </>
  );
}

const Wrap = styled.main`
  ${Layout}
  flex-direction: column;
  height: 70vh;
  text-align: center;

  h2 {
    margin-bottom: 2.6rem;
    font-size: 36px;
    font-family: 'NanumSquareRoundOTFEB, sans-serif';
    /* font-family: ${(theme) => theme.titleFont}; */
    letter-spacing: -0.6px;
  }
  p {
    margin-bottom: 5.9rem;
    font-size: 2.4rem;
    line-height: 1.63;
  }

  button {
    width: 21.6rem;
    height: 5.4rem;
    border-radius: 0.6rem;
    border: solid 0.2rem #ffa91d;
    font-size: 2.2rem;
    line-height: 1.68;
    text-align: center;
    color: #eb7d02;

    &:hover {
      background: #ffa91d;
      color: #fff;
    }
  }
`;

const ImgWrap = styled.div`
  margin-bottom: 4.6rem;
  width: 21.1rem;
  height: 18.2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MAilAddress = styled.span`
  color: #6fa3fc;
`;

export default Invitation;
