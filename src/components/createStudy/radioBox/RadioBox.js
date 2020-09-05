import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function RadioBox({ id, text, propsRef, checkedcolor, ...props }) {
  return (
    <RadioWrap>
      <input
        type="radio"
        id={id}
        value={text}
        ref={propsRef}
        checkedcolor={checkedcolor}
        {...props}
      />
      <label htmlFor={id}>{text}</label>
    </RadioWrap>
  );
}

const RadioWrap = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;

  & + & {
    margin-left: 17.9rem;
  }

  [type='radio'] {
    appearance: none;
    margin: 0;
    margin-right: 3.8rem;
  }

  [type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    width: 2.2rem;
    height: 2.2rem;
    text-align: center;
    background: #fff;
    border: 0.1rem solid #979797;
    border-radius: 0.2rem;
    cursor: pointer;
    box-sizing: border-box;
  }
  [type='radio']:not(:checked) + label:after,
  [type='radio']:checked + label:after {
    content: '';
    position: absolute;
    left: 0.44rem;
    top: 0.44rem;
    width: 1.3rem;
    height: 1.3rem;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border-radius: 0.2rem;
    background-color: ${({ checkedcolor, theme }) =>
      checkedcolor ? checkedcolor : theme.blueColor};
  }

  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  [type='radio'] + label {
    font-size: 2rem;
    letter-spacing: -0.03rem;
    cursor: pointer;
  }
`;

RadioBox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  propsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf]),
  checkedcolor: PropTypes.string,
};

RadioBox.defaultProps = {
  propsRef: null,
  checkedcolor: null,
};

export default RadioBox;
