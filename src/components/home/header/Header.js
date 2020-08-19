import React from 'react';
import LoginButton from '../common/LoginButton';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function Header() {
  return (
    <HeaderBar>
      <InnerWrap>
        <h1>DO IT. DO IT</h1>
        {/* <LoginButton /> */}
      </InnerWrap>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  padding: 2.5rem 0;
  width: 100%;
  h1 {
    height: 2.9rem;
    font-size: 2.4rem;
    font-weight: 900;
  }
`;

const InnerWrap = styled(Container)`
  ${Layout}
  justify-content: space-between;
`;

export default Header;
