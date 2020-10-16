import React from 'react';
import StudyDetailContainer from 'containers/StudyDetailContainer';

function StudyDetailPage({ match }) {
  const id = match.params.id;
  return (
    <>
      <StudyDetailContainer detailId={id} />
    </>
  );
}

export default StudyDetailPage;
