import React from 'react';
import LoginButton from '../Common/LoginButton';

import styled from 'styled-components';

function Header() {
  return (
    <HeaderBar>
      <LoginButton />
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: pink;
`;

export default Header;
