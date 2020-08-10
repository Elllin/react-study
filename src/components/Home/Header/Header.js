import React from 'react';
import styled from 'styled-components';

function Header() {
  return <HeaderBar></HeaderBar>;
}

const HeaderBar = styled.header`
  width: 100%;
  height: 50px;
  background-color: pink;
`;

export default Header;
