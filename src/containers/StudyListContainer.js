import React from 'react';

import Header from 'components/common/header/Header';
import StudyList from 'components/studyList/studyList/StudyList';
import SearchBox from 'components/studyList/searchBox/SearchBox';

import { Container } from 'style/CustomStyle';

function StudyListContainer() {
  return (
    <>
      <Header />
      <Container>
        <SearchBox />
        <StudyList />
      </Container>
    </>
  );
}

export default StudyListContainer;
