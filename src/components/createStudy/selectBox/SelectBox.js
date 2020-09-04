import React from 'react';

import { InputBox } from 'style/CustomStyle';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

function SelectBox({ optionItems, name, ...props }) {
  return (
    <SelectWrap>
      <InputBox as="select" id={name} name={name} {...props}>
        {optionItems.map((text) => (
          <option value={text}>{text}</option>
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

export default SelectBox;
