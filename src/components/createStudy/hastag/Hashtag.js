import React from 'react';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function Hashtag({ onClick, tag: { id, text } }) {
  return (
    <>
      <Tag onClick={onClick} data-tag-id={id}>
        {text}
      </Tag>
    </>
  );
}

const Tag = styled.p`
  pointer-events: none;
  padding: 0.9rem 2rem;

  border-radius: 17px;
  background-color: #eaf4ff;

  font-size: 1.4rem;
  font-weight: 500;
  color: #3f97f4;
  ${Layout}

  & + & {
    margin-left: 1.2rem;
  }

  &:after {
    pointer-events: all;
    display: inline-block;
    content: 'x';
    height: 13px;
    width: 13px;
    margin-left: 6px;
    vertical-align: text-top;
    text-align: center;
    color: #3f97f4;

    cursor: pointer;
  }
`;

export default Hashtag;
