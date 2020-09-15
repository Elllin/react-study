import React from 'react';

import TagContainer from 'components/common/tagContainer/TagContainer';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function DetailTitle() {
  const tags = ['영어공부', '회화연습', '취업'].map((v, i) => ({ id: i, text: v }));
  return (
    <Wrap>
      <Location>강북구</Location>
      <h2>영어회화 초보 스터디 그룹</h2>
      <div>
        <TagContainer tags={tags} />
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  padding: 3.2rem 0 3.5rem;
  ${Layout}
  flex-direction:column;
  h2 {
    margin-bottom: 0.3rem;
    font-size: 3rem;
    font-weight: 800;
  }
`;

const Location = styled.div`
  margin-bottom: 1.4rem;
  font-size: 2rem;
  font-weight: 800;
`;

export default DetailTitle;
