import React from 'react';

import styled from 'styled-components';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

function HelpBubble() {
  return (
    <Wrap>
      <HelpIcon />
      <Bubbel>
        <BubbelBorder />
        <BubbelArrow />
      </Bubbel>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const HelpIcon = styled(AiOutlineQuestionCircle)`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.blueColor};
  cursor: pointer;
`;

const HelpBox = styled.div`
  position: absolute;
  left: 34px;
  bottom: 0;
  width: 246px;
  height: 79px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
  border: solid 1px #cbcbcb;
  background-color: #fff;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #5e5e5e;
  /* 8 12 */
  &:after {
    border-top: 6px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid #fff;
    border-bottom: 6px solid transparent;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);

    content: '';
    position: absolute;
    top: 10px;
    left: -15px;
  }
`;

const Bubbel = styled.div`
  position: absolute;
  left: 34px;
  bottom: 0;
  width: 246px;
  height: 79px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
  border: solid 1px #cbcbcb;
  background-color: #fff;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #5e5e5e;
`;

const BubbelBorder = styled.div``;

const BubbelArrow = styled(HelpBox)``;

export default HelpBubble;
