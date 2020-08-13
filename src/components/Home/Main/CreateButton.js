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
  background: green;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  a {
    text-decoration: none;
    color: #000;
    &:active {
      color: #000;
    }
  }
`;

export default CreateButton;
