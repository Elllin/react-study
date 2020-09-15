import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { BorderRadius6 } from 'style/CustomStyle';

function MainButton({ children, width, height, fontSize, ...rest }) {
  return (
    <Button width={width} height={height} fontSize={fontSize} {...rest}>
      {children}
    </Button>
  );
}

const SizeStyles = css`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
  `}
`;

const Button = styled.button`
  ${BorderRadius6};
  ${SizeStyles}
  background-color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize};
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.mainColor)};
  }
  &:active {
    background: ${({ theme }) => darken(0.1, theme.mainColor)};
  }
`;

MainButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
};

MainButton.defaultProps = {
  width: '100%',
  height: '5.6rem',
  fontSize: '2.2rem',
};

export default MainButton;
