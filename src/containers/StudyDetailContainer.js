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
import { getDday, getDateFormat } from 'lib/utils';

function StudyDetailContainer({ detailId }) {
  const DATE_FORMAT = 'M월 D일 (dd)';
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.studyDetail.studyDetail?.[detailId] || reducerUtils.initial(),
  );

  useEffect(() => {
    if (data) return;

    dispatch(fetchStudyDetail(detailId));
  }, [detailId, dispatch, data]);

  if (loading && !data) return <LoadingPage />;
  if (error) return <ErrorPage />;
  if (!data) return null;

  const { Location, Category, title, study_start, study_end, deposit, Tags, description } = data;

  const startDate = getDateFormat(study_start, DATE_FORMAT);
  const endDate = getDateFormat(study_end, DATE_FORMAT);
  const dDay = getDday(study_start, study_end);

  return (
    <>
      <DetailTemplate>
        <DetailTitle location={Location.name} title={title} tags={Tags} />
        <DetailContents
          location={Location.name}
          category={Category.name}
          deposit={deposit}
          description={description}
          startDate={startDate}
          endDate={endDate}
          dDay={dDay}
          tags={Tags}
        />
      </DetailTemplate>
      <DetailFloting title={title} startDate={startDate} endDate={endDate} />
    </>
  );
}

StudyDetailContainer.propTypes = {
  detailId: PropTypes.number.isRequired,
};

export default StudyDetailContainer;
