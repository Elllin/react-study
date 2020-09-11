import React from 'react';

import styled from 'styled-components';

function MainButton({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  width: 21.6rem;
  height: 5.4rem;
  border-radius: 0.6rem;
  -moz-border-radius: 0.6rem;
  -webkit-border-radius: 0.6rem;
  border: solid 0.2rem #ffa91d;

  font-family: AppleSDGothicNeo;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.68;
  text-align: center;
  color: #eb7d02;
`;

export default MainButton;
