import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function TagItem({ onClick, id, text }) {
  return (
    <>
      <Tag onClick={onClick} data-tag-id={id}>
        {text}
      </Tag>
    </>
  );
}

const Tag = styled.p`
  /* pointer-events: none; */
  padding: 0.9rem 2rem;
  ${Layout}

  border-radius: 17px;
  background-color: #eaf4ff;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.blueColor};
  cursor: pointer;

  & + & {
    margin-left: 1.2rem;
    margin-top: 1.2rem;
  }

  /* &:after {
    pointer-events: all;
    display: inline-block;
    content: 'x';
    height: 13px;
    width: 13px;
    margin-left: 6px;
    vertical-align: text-top;
    text-align: center;
    color: ${({
    theme,
  }) => theme.blueColor};

    cursor: pointer;
  } */
`;

TagItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TagItem;
