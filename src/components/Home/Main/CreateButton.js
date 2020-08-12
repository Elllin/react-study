import React from 'react';

import styled from 'styled-components';

function CreateButton() {
  return (
    <Button>
      스터디
      <br /> 개설하기
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  right: 256px;
  bottom: 50px;
  background: green;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default CreateButton;
