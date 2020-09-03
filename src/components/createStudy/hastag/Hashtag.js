import React from 'react';
import styled from 'styled-components';

function Hashtag({ text }) {
  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
}

const Tag = styled.p`
  pointer-events: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  /* border: 2px solid #f1f3f5; */
  background: #f1f3f5;
  color: #3f97f4;
  font-weight: 600;
  border-radius: 15px;
  margin: 5px;
`;

export default Hashtag;
