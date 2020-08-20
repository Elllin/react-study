import React from 'react';

import styled from 'styled-components';

function DescriptionItem() {
  return (
    <Wrap>
      <div
        style={{ background: '#fd5e5c', width: '48px', height: '62px', borderRadius: '50%' }}
      ></div>
    </Wrap>
  );
}

const Wrap = styled.div`
  & + & {
    margin-left: 22.5rem;
  }
`;

export default DescriptionItem;
