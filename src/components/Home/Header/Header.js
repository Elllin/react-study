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
  padding: 29px 0;
  width: 100%;
  span {
    font-weight: 900;
    font-size: 36px;
  }
`;

const InnerWrap = styled(Container)`
  justify-content: space-between;
`;

export default Header;
