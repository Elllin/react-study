import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { Layout } from 'style/CustomStyle';

function TagItem({ onClick, id, text, color, fontSize, hash, ...props }) {
  return (
    <>
      <Tag onClick={onClick} data-tag-id={id} color={color} fontSize={fontSize} {...props}>
        {hash && hash}
        {text}
      </Tag>
    </>
  );
}

const colors = {
  blue: {
    background: '#eaf4ff',
    color: ({ theme }) => theme.blueColor,
  },
  red: {
    background: '#ffe8e8',
    color: ({ theme }) => theme.requiredColor,
  },
};

const colorStyles = css`
  ${({ color }) => css`
    color: ${colors[color].color};
    background: ${colors[color].background};
  `}
`;

const fontSizes = {
  small: '1.4rem',
  medium: '1.8rem',
};

const fontStyles = css`
  ${({ fontSize }) => css`
    font-size: ${fontSizes[fontSize]};
  `}
`;

const Tag = styled.span`
  padding: 0.9rem 2rem;
  ${Layout}
  ${colorStyles}
  ${fontStyles}

  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : '500'};

  border-radius: 1.7rem;
  -moz-border-radius: 1.7rem;
  -webkit-border-radius: 1.7rem;

  ${({ onClick }) =>
    onClick &&
    `
      cursor: pointer;
  `}

  & + & {
    margin-left: 1.2rem;
  }
`;

TagItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  hash: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

TagItem.defaultProps = {
  onClick: null,
  color: 'blue',
  id: null,
  fontSize: 'medium',
  hash: '#',
};

export default memo(TagItem);
