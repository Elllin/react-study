import React from 'react';
import PropTypes from 'prop-types';

import TagContainer from 'components/common/tagContainer/TagContainer';

import styled from 'styled-components';
import { defaultLayout } from 'style/CustomStyle';

function DetailTitle({ title, location, tags }) {
  const tagArray = tags.map(({ id, word }) => ({ id, text: word }));

  return (
    <Wrap>
      <Location>{location}</Location>
      <h2>{title}</h2>
      <div>{tags && <TagContainer tags={tagArray} hash={null} />}</div>
    </Wrap>
  );
}
const Wrap = styled.div`
  padding: 3.2rem 0 3.5rem;
  ${defaultLayout}
  flex-direction:column;
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
