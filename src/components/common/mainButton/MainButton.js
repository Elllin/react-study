import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { borderRadius } from 'style/CustomStyle';

function MainButton({ children, fontSize, width, height, ...props }) {
  return (
    <Button fontSize={fontSize} width={width} height={height} {...props}>
      {children}
    </Button>
  );
}

// const SizeStyles = css`
//   ${(props) =>
//     props.fullWidth &&
//     css`
//       width: 100%;
//       height: 5.6rem;
//     `}
// `;

const Button = styled.button`
  ${borderRadius(`0.6rem`)};
  width: ${(width) => width};
  height: ${(height) => height};
  background-color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize};
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.mainColor)};
  }
  &:active {
    background: ${({ theme }) => darken(0.05, theme.mainColor)};
  }
`;

MainButton.propTypes = {
  // fullWidth: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

MainButton.defaultProps = {
  // fullWidth: null,
  fontSize: '2rem',
  width: '100%',
  height: '5.6rem',
};

export default MainButton;
