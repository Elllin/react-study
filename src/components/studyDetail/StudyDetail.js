import React from 'react';

import TagContainer from 'components/common/tagContainer/TagContainer';
import DetailTemplate from './detailTemplate/DetailTemplate';

import styled from 'styled-components';

function StudyDetail() {
  const tags = ['영어공부', '회화연습', '취업'].map((v, i) => ({ id: i, text: v }));
  return (
    <DetailTemplate>
      <Location>강북구</Location>
      <h2>영어회화 초보 스터디 그룹</h2>
      <HashtagWrap>
        <TagContainer tags={tags} />
      </HashtagWrap>
    </DetailTemplate>
  );
}

const Location = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.requiredColor};
`;

const HashtagWrap = styled.div`
  width: 33rem;
`;

export default StudyDetail;
