import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function CreateButton() {
  return (
    <Button>
      <Link to="/create">
        스터디
        <br /> 개설하기
      </Link>
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  right: 256px;
  bottom: 50px;
  background-color: #b9b9b9;
  width: 188px;
  height: 188px;
  border-radius: 50%;

  font-size: 32px;
  font-weight: 600;
  line-height: 1.31;
  a {
    text-decoration: none;
    color: #000;
    &:active {
      color: #000;
    }
  }
`;

export default CreateButton;
