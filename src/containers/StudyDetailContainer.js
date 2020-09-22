import React, { useEffect } from 'react';
import { fetchStudyDetail } from 'modules/studyDetail';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import DetailTemplate from 'components/studyDetail/detailTemplate/DetailTemplate';
import DetailTitle from 'components/studyDetail/detailTitle/DetailTitle';
import DetailContents from 'components/studyDetail/detailContents/DetailContents';
import DetailFloting from 'components/studyDetail/detailFloting/DetailFloting';
import LoadingPage from 'common/LoadingPage';
import ErrorPage from 'common/ErrorPage';
import { reducerUtils } from 'lib/asyncUtils';

function StudyDetailContainer({ detailId }) {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => {
    console.log(state.studyDetail);
    return state.studyDetail.studyDetail?.[detailId] || reducerUtils.initial();
  });
  useEffect(() => {
    if (data) return;

    dispatch(fetchStudyDetail(detailId));
  }, [detailId, dispatch, data]);

  if (loading && !data) return <LoadingPage />;
  if (error) return <ErrorPage />;
  if (!data) return null;

  return (
    <>
      <DetailTemplate>
        <DetailTitle />
        <DetailContents />
      </DetailTemplate>
      <DetailFloting />
    </>
  );
}

StudyDetailContainer.propTypes = {
  detailId: PropTypes.number.isRequired,
};

export default StudyDetailContainer;
