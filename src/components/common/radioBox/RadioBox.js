import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { borderRadius } from 'style/CustomStyle';
import { RiCheckLine } from 'react-icons/ri';

function RadioBox({ id, text, register, checkedcolor, size, ...props }) {
  return (
    <RadioWrap size={size}>
      <input
        type="radio"
        id={id}
        value={text}
        ref={register}
        checkedcolor={checkedcolor}
        {...props}
      />
      <label htmlFor={id}>
        <CheckedIcon />
        {text}
      </label>
    </RadioWrap>
  );
}

const sizes = {
  small: {
    size: '1.8rem',
    font: '1.5rem',
    margin: '2.4rem',
  },
  large: {
    size: '2.2rem',
    font: '2rem',
    margin: '3.8rem',
  },
};

const commonStyle = css`
  position: absolute;

  content: '';
  ${({ size }) => css`
    width: ${sizes[size].size};
    height: ${sizes[size].size};
  `}
  ${borderRadius(`0.2rem`)}
`;

const RadioWrap = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;

  [type='radio'] {
    appearance: none;
    margin: 0;
    margin-right: ${({ size }) => sizes[size].margin};
  }

  [type='radio'] + label:before {
    ${commonStyle}
    left: 0;
    text-align: center;
    background: #fff;
    border: 0.1rem solid #979797;
    cursor: pointer;
    box-sizing: border-box;
  }

  [type='radio']:not(:checked) + label:after,
  [type='radio']:checked + label:after {
    ${commonStyle}
    left: 0.01rem;
    top: 0.01rem;
    color: '#fff';
    font-weight: 700;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
    background-color: ${({ checkedcolor, theme }) =>
      checkedcolor ? checkedcolor : theme.mainColor};
  }

  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    transform: scale(0);
  }

  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }

  [type='radio'] + label {
    font-size: ${({ size }) => sizes[size].font};
    letter-spacing: -0.03rem;
    cursor: pointer;
  }

  svg {
    font-size: ${({ size }) => sizes[size].size};
  }
`;

const CheckedIcon = styled(RiCheckLine)`
  position: absolute;
  left: 0rem;
  top: 0rem;
  z-index: 1;
  color: #fff;
`;

RadioBox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  register: PropTypes.func,
  checkedcolor: PropTypes.string,
  size: PropTypes.string,
};

RadioBox.defaultProps = {
  register: null,
  checkedcolor: null,
  size: 'small',
};

export default memo(RadioBox);
