import React from 'react';
import { useSelector } from 'react-redux';
import { reducerUtils } from '../lib/asyncUtils';

function StudyEditContainer({ editId }) {
  const { data } = useSelector((state) => state.studyDetail.studyDetail?.[editId]);
  console.log(data);
  return <></>;
}

export default StudyEditContainer;
