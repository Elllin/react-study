import React from 'react';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function DetailTemplate({ children }) {
  return (
    <div>
      <Header />
      <Wrap>
        <Container>
          <Main>
            <h1 className="blind">스터디 모집 상세 보기</h1>
            <ImgWrap>
              <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
            </ImgWrap>
            {children}
          </Main>
        </Container>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  padding: 3rem 0 6rem;
  background-color: #eee;
`;

const ImgWrap = styled.div`
  margin-bottom: 3.4rem;
  width: 100%;
  height: 36rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Main = styled.main`
  ${Layout}
  flex-direction:column;
  width: 77rem;
  background-color: #fff;
  h2 {
    margin-bottom: 1.6rem;
    font-size: 3.2rem;
    font-weight: 800;
  }
`;

export default DetailTemplate;
