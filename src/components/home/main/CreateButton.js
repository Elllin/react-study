import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function CreateButton() {
  return (
    <Link to="/create">
      <Button>
        스터디
        <br /> 개설하기
      </Button>
    </Link>
  );
}

const Button = styled.button`
  position: fixed;
  right: 14%;
  bottom: 50px;
  width: 127px;
  height: 127px;
  box-shadow: 0 2px 6px 1px rgba(153, 153, 153, 0.55);
  background-color: #ffd000;
  border-radius: 50%;

  font-size: 16px;
  line-height: 1.63;
  a {
    text-decoration: none;
    color: #000;
    &:active {
      color: #000;
    }
  }
`;

export default CreateButton;
