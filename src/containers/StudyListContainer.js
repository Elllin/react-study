import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSelect, closeSelect, fetchStudyList } from 'modules/studyList';

import Header from 'components/common/header/Header';
import StudyList from 'components/studyList/studyList/StudyList';
import SearchBox from 'components/studyList/searchBox/SearchBox';
import LoadingPage from 'common/LoadingPage';

import StudyListTemplate from 'components/studyList/studyListTemplate/StudyListTemplate';

function StudyListContainer() {
  const {
    searchToggle,
    studyList: { loading, data, error },
  } = useSelector((state) => state.studyList);
  console.log(data);
  const dispatch = useDispatch();

  const onToggle = () => dispatch(toggleSelect());
  const onClose = () => dispatch(closeSelect());

  useEffect(() => {
    // if (data) return;

    dispatch(fetchStudyList());
  }, [dispatch]);

  if (loading) return <LoadingPage />;
  if (error) return <h1 style={{ fontSize: '50px' }}>{`에러가 발생했습니다!${error}`}</h1>;
  if (!data) return null;

  const searchBox = <SearchBox onToggle={onToggle} toggle={searchToggle} onClose={onClose} />;

  return (
    <StudyListTemplate searchBox={searchBox}>
      <StudyList />
    </StudyListTemplate>
  );
}

export default StudyListContainer;
