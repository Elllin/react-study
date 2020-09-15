import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { BorderRadius6 } from 'style/CustomStyle';

function MainButton({ children, fullWidth, largeFont, ...rest }) {
  return (
    <Button fullWidth={fullWidth} largeFont={largeFont} {...rest}>
      {children}
    </Button>
  );
}

const SizeStyles = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      height: 5.6rem;
    `}
`;

const Button = styled.button`
  ${BorderRadius6};
  width: 32.6rem;
  height: 6.2rem;
  ${SizeStyles}
  background-color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  font-size: ${({ largeFont }) => (largeFont ? '2.2rem' : '2rem')};
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.mainColor)};
  }
  &:active {
    background: ${({ theme }) => darken(0.1, theme.mainColor)};
  }
`;

MainButton.propTypes = {
  fullWidth: PropTypes.string,
  fontSize: PropTypes.string,
};

MainButton.defaultProps = {
  fullWidth: null,
  largeFont: null,
};

export default MainButton;
