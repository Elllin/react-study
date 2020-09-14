import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';
import mailImg from 'assets/images/invitation/mail.png';

function Invitation({ mailAddress = 'ddd@naver.com' }) {
  const getUrl = (mailAddress) => {
    const domain = mailAddress.split('@')[1];

    return `https://${domain}`;
  };

  const hrefUrl = getUrl(mailAddress);

  return (
    <>
      <Header />
      <Wrap>
        <ImgWrap>
          <img src={mailImg} alt="메일 일러스트" />
        </ImgWrap>
        <h2>초대 메일이 발송되었습니다!</h2>
        <p>
          나의 메일함에서 (
          <MAilAddress href={hrefUrl} target="_blank">
            {mailAddress}
          </MAilAddress>
          ) 초대 메일을 확인하세요.
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
  margin-top: 4rem;
  flex-direction: column;
  height: 70vh;
  text-align: center;

  h2 {
    margin-bottom: 2.6rem;
    font-size: 3.6rem;
    font-family: ${({ theme }) => theme.titleFont};
    letter-spacing: -0.06rem;
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

const MAilAddress = styled.a`
  color: #6fa3fc;
  text-decoration: none;
`;

MAilAddress.propTypes = {
  mailAddress: PropTypes.string,
};

export default Invitation;
