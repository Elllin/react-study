import React from 'react';
import { useSelector } from 'react-redux';

function StudyEditContainer() {
  const { loading, data, error } = useSelector(
    (state) => state.studyDetail.studyDetail?.[detailId],
  );

  return <></>;
}

export default StudyEditContainer;
