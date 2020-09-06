import React from 'react';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function MailCheck() {
  return (
    <>
      <Header />
      <Wrap>
        <ImgWrap>
          <img src="http://placehold.it/211x182" alt="메일" />
        </ImgWrap>
        <h2>초대 메일이 발송되었습니다!</h2>
        <p>
          나의 메일함에서 ( ujdesign@naver.com ) 초대 메일을 확인하세요.
          <br />
          인증 버튼을 클릭하면 그룹개설이 바로 완료됩니다.
        </p>
      </Wrap>
    </>
  );
}

const Wrap = styled.main`
  ${Layout}
  flex-direction: column;
  height: 70vh;
  h2 {
    margin-bottom: 2.6rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    font-family: ${(theme) => theme.titleFont};
    font-size: 36px;
    letter-spacing: -0.6px;
  }
  p {
    margin-bottom: 5.9rem;
    font-family: ${(theme) => theme.subFont};
    font-size: 2.4rem;
    line-height: 1.63;
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

const Title = styled.h2`
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-family: ${(theme) => theme.titleFont};
  font-size: 36px;
  letter-spacing: -0.6px;
`;

export default MailCheck;
