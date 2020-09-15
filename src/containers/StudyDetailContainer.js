import React from 'react';
import { fetchCreateStudy } from 'modules/createStudy';

import DetailTemplate from 'components/studyDetail/detailTemplate/DetailTemplate';
import DetailTitle from 'components/studyDetail/detailTitle/DetailTitle';
import DetailContents from 'components/studyDetail/detailContents/DetailContents';
import DetailFloting from 'components/studyDetail/detailFloting/DetailFloting';

function StudyDetailContainer() {
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

export default StudyDetailContainer;
