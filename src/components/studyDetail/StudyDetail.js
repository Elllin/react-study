import React from 'react';

import Header from 'components/common/header/Header';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function StudyDetail() {
  return (
    <div>
      <Header />
      <Wrap>
        <Container>
          <Main>
            <ImgWrap>
              <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
            </ImgWrap>
            <Location>강북구</Location>
          </Main>
        </Container>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  background-color: #eee;
`;

const ImgWrap = styled.div`
  margin-bottom: 4.6rem;
  width: 100%;
  height: 36rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Main = styled.main`
  width: 77rem;
  background-color: #fff;
`;

const Location = styled.div`
  ${Layout}
  font-size: 20px;
  font-weight: 800;
  color: #fd5e5c;
`;

export default StudyDetail;
