import React, { memo } from 'react';
import PropTypes from 'prop-types';

import TagItem from './tagItem/TagItem';

import styled from 'styled-components';

function TagContainer({ tags, onClick }) {
  return (
    <Wrap>
      {tags.map((tag) => {
        const { id, text } = tag;
        return <TagItem key={id} id={id} text={text} onClick={onClick} />;
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 1.5rem;
`;

TagContainer.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
  onClickTag: PropTypes.func,
};

TagContainer.defaultProps = {
  onClickTag: null,
};

export default memo(TagContainer);
