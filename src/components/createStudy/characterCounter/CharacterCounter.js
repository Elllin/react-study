import React, { memo } from 'react';

import styled from 'styled-components';

function CharacterCounter({ length, maxLength }) {
  return (
    <Wrap>
      <span>{length}</span>/{maxLength}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 0.8rem;
  text-align: end;
  font-size: 1.4rem;
  span {
    color: ${({ theme }) => theme.requiredColor};
  }
`;

export default memo(CharacterCounter);
