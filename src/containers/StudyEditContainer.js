import React from 'react';
import { useSelector } from 'react-redux';
// import StudyEdit from 'components/studyEdit/StudyEdit';

function StudyEditContainer({ editId }) {
  const { data } = useSelector((state) => state.studyDetail.studyDetail?.[editId]);
  console.log(data);
  // return <StudyEdit />;
}

export default StudyEditContainer;
