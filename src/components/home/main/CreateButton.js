import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function CreateButton() {
  return (
    <Anchor to="/create">
      스터디
      <br /> 개설하기
    </Anchor>
  );
}

const Anchor = styled(Link)`
  ${Layout}
  position: fixed;
  right: 11.5%;
  bottom: 5rem;
  width: 12.7rem;
  height: 12.7rem;

  box-shadow: 0 0.2rem 0.6rem 0.1rem rgba(153, 153, 153, 0.55);
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;

  font-size: 1.6rem;
  line-height: 1.63;
  text-decoration: none;
  text-align: center;

  color: #000;
  &:active {
    color: #000;
  }
`;

export default CreateButton;
