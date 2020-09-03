import React from 'react';
import styled from 'styled-components';

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
  padding: 1rem 2rem;
  font-size: 1.4rem;
  background: #f1f3f5;
  color: #3f97f4;
  font-weight: 600;
  border-radius: 15px;
  margin: 5px;
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
