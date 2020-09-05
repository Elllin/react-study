import React from 'react';
import PropTypes from 'prop-types';

import { InputBox } from 'style/CustomStyle';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

function SelectBox({ optionItems, name, propsRef, ...props }) {
  return (
    <SelectWrap>
      <InputBox as="select" id={name} name={name} ref={propsRef} {...props}>
        {optionItems.map((text) => (
          <option value={text} key={text}>
            {text}
          </option>
        ))}
      </InputBox>
      <SelectArrow>
        <BsChevronDown />
      </SelectArrow>
    </SelectWrap>
  );
}

const SelectWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  select {
    display: inline-block;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  &::-ms-expand {
    display: none;
  }
`;

const SelectArrow = styled.div`
  position: absolute;
  margin-top: -1rem;
  top: 50%;
  right: 1.6rem;
  color: #787878;
  font-size: 2.1rem;
  pointer-events: none;
`;

SelectBox.propTypes = {
  optionItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  name: PropTypes.string.isRequired,
  propsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf]),
};
SelectBox.defaultProps = {
  propsRef: null,
};

export default SelectBox;
