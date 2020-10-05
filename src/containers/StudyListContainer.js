import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSelect, closeSelect, fetchStudyList } from 'modules/studyList';

import Header from 'components/common/header/Header';
import StudyList from 'components/studyList/studyList/StudyList';
import SearchBox from 'components/studyList/searchBox/SearchBox';

import { Container } from 'style/CustomStyle';

function StudyListContainer() {
  const { searchToggle, studyList } = useSelector((state) => state.studyList);
  console.log(studyList);
  const dispatch = useDispatch();

  const onToggle = () => dispatch(toggleSelect());
  const onClose = () => dispatch(closeSelect());

  useEffect(() => {
    // if (data) return;

    dispatch(fetchStudyList());
  }, [dispatch]);
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
