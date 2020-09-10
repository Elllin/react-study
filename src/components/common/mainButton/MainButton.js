import React from "react";

import styled from "styled-components";

function MainButton({children}) {
  return (
    <Button>
      {children}
    </Button>
  );
}

const Button = styled.button`


    width: 216px;
  height: 54px;
  border-radius: 6px;
  border: solid 2px #ffa91d;


  font-family: AppleSDGothicNeo;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.68;
  text-align: center;
  color: #eb7d02;
  `

export default MainButton;