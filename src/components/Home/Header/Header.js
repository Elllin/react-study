import React from 'react';
import LoginButton from '../Common/LoginButton';

import styled from 'styled-components';
import { Container } from '../../../style/CustomStyle';

function Header() {
  return (
    <HeaderBar>
      <InnerWrap>
        LOGO
        <LoginButton />
      </InnerWrap>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  width: 100%;
  height: 60px;
  background-color: pink;
`;

const InnerWrap = styled(Container)`
  justify-content: space-between;
`;

export default Header;
