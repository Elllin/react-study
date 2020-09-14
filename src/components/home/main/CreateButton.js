import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Layout, BorderRadius50 } from 'style/CustomStyle';

function CreateButton() {
  return (
    <Anchor to="/create">
      <span>
        스터디 그룹
        <br /> 개설하기
      </span>
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
  -moz-box-shadow: 0 0.2rem 0.6rem 0.1rem rgba(153, 153, 153, 0.55);
  -webkit-box-shadow: 0 0.2rem 0.6rem 0.1rem rgba(153, 153, 153, 0.55);
  background-color: ${({ theme }) => theme.mainColor};
  ${BorderRadius50};

  font-family: ${({ theme }) => theme.titleFont};
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
