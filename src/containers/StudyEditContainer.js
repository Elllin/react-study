import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StudyEdit from 'components/studyEdit/StudyEdit';
import { fetchStudyDetail } from 'modules/studyDetail';
import { reducerUtils } from '../lib/asyncUtils';
import DetailTemplate from 'components/studyDetail/detailTemplate/DetailTemplate';
import EditFloting from '../components/studyEdit/editFloting/EditFloting';

function StudyEditContainer({ editId }) {
  const dispatch = useDispatch();

  const { loading, data, error } =
    useSelector((state) => state.studyDetail.studyDetail?.[editId]) || reducerUtils.initial();

  useEffect(() => {
    if (data) return;
    else {
      dispatch(fetchStudyDetail(editId));
    }
  }, [editId, data, dispatch]);

  const { error: duplication } = useSelector((state) => state.createStudy.duplicationCheck);

  const onSubmit = useCallback((data) => {
    // dispatch(fetchCreateStudy(data));
    console.log(data, 'su');
  }, []);

  console.log(data, 2);

  return (
    <>
      <DetailTemplate>
        <StudyEdit data={data} duplication={duplication} onSubmit={onSubmit} loading={loading} />
      </DetailTemplate>
      <EditFloting />
    </>
  );
}

export default StudyEditContainer;
