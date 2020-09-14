import React from 'react';

import TagContainer from 'components/common/tagContainer/TagContainer';
import DetailTemplate from './detailTemplate/DetailTemplate';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function StudyDetail() {
  const tags = ['영어공부', '회화연습', '취업'].map((v, i) => ({ id: i, text: v }));
  return (
    <DetailTemplate>
      <Wrap>
        <Location>강북구</Location>
        <h2>영어회화 초보 스터디 그룹</h2>
        <HashtagWrap>
          <TagContainer tags={tags} />
        </HashtagWrap>
      </Wrap>
    </DetailTemplate>
  );
}
const Wrap = styled.div`
  padding: 3.4rem 0 3.5rem;
  ${Layout}
  flex-direction:column;
  h2 {
    margin-bottom: 1.6rem;
    font-size: 3.2rem;
    font-weight: 800;
  }
`;

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
