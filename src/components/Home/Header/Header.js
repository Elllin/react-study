import React from 'react';
import LoginButton from '../common/LoginButton';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Header() {
  return (
    <HeaderBar>
      <InnerWrap>
        <span>DO IT. DO IT</span>
        <LoginButton />
      </InnerWrap>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  width: 100%;
  height: 60px;
  span {
    font-weight: 900;
  }
`;

const InnerWrap = styled(Container)`
  justify-content: space-between;
`;

export default Header;
