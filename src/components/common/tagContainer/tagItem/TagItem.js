import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { borderRadius, defaultLayout } from 'style/CustomStyle';

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
  small: '1.3rem',
  medium: '1.8rem',
};

const fontStyles = css`
  ${({ fontSize }) => css`
    font-size: ${fontSizes[fontSize]};
  `}
`;

const Tag = styled.span`
  padding: 0.9rem 2rem;
  ${defaultLayout}
  ${colorStyles}
  ${fontStyles}

  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  ${borderRadius('1.7rem')}

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
