import React, { memo } from 'react';
import createStudy from '../../constants/constants';

import styled, { css } from 'styled-components';
import { defaultLayout, borderRadius } from 'style/CustomStyle';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

function HelpBubble() {
  const { helpBubbleMessage } = createStudy.hashtag;
  return (
    <Wrap>
      <HelpIcon />
      <Bubble className="help-bubble">
        <span>{helpBubbleMessage}</span>
        <ArrowBorder />
        <BubbleArrow />
      </Bubble>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const HelpIcon = styled(AiOutlineQuestionCircle)`
  position: relative;
  top: -4px;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.blueColor};
  cursor: pointer;
  &:hover + .help-bubble {
    display: block;
  }
`;

const Bubble = styled.div`
  ${defaultLayout}
  display: none;
  padding: 1.1rem 1.3rem 1rem 1.8rem;
  position: absolute;
  left: 3.4rem;
  bottom: 0;
  width: 23.5rem;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);

  border: solid 1px #cbcbcb;
  background-color: #fff;
  span {
    word-break: keep-all;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
    color: #5e5e5e;
    line-height: 1.58;
  }

  ${borderRadius(`0.6rem`)}
`;

const CommonStyle = css`
  position: absolute;
  border-style: solid;
  border-width: 0.7rem;
  height: 0;
  width: 0;
  bottom: 0.9rem;
`;

const ArrowBorder = styled.div`
  ${CommonStyle}
  border-color: transparent #cbcbcb transparent transparent;
  left: -1.5rem;
`;

const BubbleArrow = styled.div`
  ${CommonStyle}
  border-color: transparent #fff transparent transparent;
  left: -1.35rem;
`;

export default memo(HelpBubble);
