import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Container, defaultLayout } from 'style/CustomStyle';

function Header() {
  return (
    <HeaderBar>
      <InnerWrap>
        <CustomLink to="/">
          <h1>DO IT. DO IT</h1>
        </CustomLink>
        <div>
          <CustomLink to="/">
            <NavButton>로그인</NavButton>
          </CustomLink>
          <CustomLink to="/detail/1">
            <NavButton>그룹리스트</NavButton>
          </CustomLink>
        </div>
      </InnerWrap>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  padding: 2.4rem 0;
  width: 100%;
  a {
    text-decoration: none;
    color: #000;
    & + & {
      margin-left: 4.4rem;
    }
  }

  h1 {
    font-family: AppleSDGothicNeo, sans-serif;
    font-size: 2rem;
    font-weight: 900;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #000;
  & + & {
    margin-left: 4.4rem;
  }
`;

const InnerWrap = styled(Container)`
  ${defaultLayout}
  justify-content: space-between;
  height: 2.4rem;
`;

const NavButton = styled.button`
  font-family: ${({ theme }) => theme.subFont};
  font-size: 1.3rem;
  font-weight: 600;
  color: #5b5b5b;
  /* & + & {
    margin-left: 4.4rem;
  } */
`;

export default Header;
