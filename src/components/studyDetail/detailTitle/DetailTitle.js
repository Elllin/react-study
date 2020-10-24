import React from 'react';
import PropTypes from 'prop-types';

import TagContainer from 'components/common/tagContainer/TagContainer';

import styled from 'styled-components';
import { defaultLayout } from 'style/CustomStyle';

function DetailTitle({ title, location, tags }) {
  const tagArray = tags.map(({ id, word }) => ({ id, text: word }));

  return (
    <>
      <h1 className="blind">스터디 모집 상세 보기</h1>
      <ImgWrap>
        <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
      </ImgWrap>

      <Wrap>
        <Location>{location}</Location>
        <h2>{title}</h2>
        {tags && (
          <div>
            {' '}
            <TagContainer tags={tagArray} hash={null} />
          </div>
        )}
      </Wrap>
    </>
  );
}

const ImgWrap = styled.div`
  width: 100%;
  height: 36rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Wrap = styled.div`
  padding: 3.2rem 0;
  ${defaultLayout};
  flex-direction: column;
  h2 {
    margin-bottom: 0.3rem;
    font-size: 3rem;
    font-weight: 800;
  }
`;

const Location = styled.div`
  margin-bottom: 1.4rem;
  font-size: 1.8rem;
  color: #4e4e4e;
`;

DetailTitle.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object),
};

DetailTitle.defaultProps = {
  tags: null,
};

export default DetailTitle;
