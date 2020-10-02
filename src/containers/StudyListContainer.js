import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSelect, closeSelect } from 'modules/studyList';

import Header from 'components/common/header/Header';
import StudyList from 'components/studyList/studyList/StudyList';
import SearchBox from 'components/studyList/searchBox/SearchBox';

import { Container } from 'style/CustomStyle';

function StudyListContainer() {
  const { searchToggle } = useSelector((state) => state.studyList.studyList);
  const dispatch = useDispatch();

  const onToggle = () => dispatch(toggleSelect());
  const onClose = () => dispatch(closeSelect());

  return (
    <>
      <Header />
      <Container>
        <SearchBox onToggle={onToggle} toggle={searchToggle} onClose={onClose} />
        <StudyList />
      </Container>
    </>
  );
}

export default StudyListContainer;
