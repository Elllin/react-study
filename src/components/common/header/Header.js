import React from 'react';

import styled from 'styled-components';
import { Container, Layout } from 'style/CustomStyle';

function Header() {
  return (
    <HeaderBar>
      <InnerWrap>
        <h1>DO IT. DO IT</h1>
        <div>
          <NavButton>로그인</NavButton>
          <NavButton>그룹리스트</NavButton>
        </div>
      </InnerWrap>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  padding: 2.4rem 0;
  width: 100%;
  h1 {
    /* height: 3rem; */
    font-family: AppleSDGothicNeo, sans-serif;
    font-size: 2rem;
    font-weight: 900;
  }
`;

const InnerWrap = styled(Container)`
  ${Layout}
  justify-content: space-between;
  height: 2.4rem;
`;

const NavButton = styled.button`
  font-family: ${({ theme }) => theme.subFont};
  font-size: 1.3rem;
  font-weight: 600;
  color: #5b5b5b;
  & + & {
    margin-left: 4.4rem;
  }
`;

export default Header;
