import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import RadioBox from '../radioBox/RadioBox';

import { InputBox, defaultLayout, borderRadius } from 'style/CustomStyle';
import styled, { css } from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

function CustomSelectBox({
  optionItems,
  name,
  defaultText,
  required,
  register,
  defaultColor,
  error,
  ...props
}) {
  // defaultColor수정 하기!
  const [toggle, setToggel] = useState(false);
  const [selected, setSelected] = useState(null);

  const onClickToggle = () => setToggel((prevState) => !prevState);
  const onClickItem = (value) => {
    setSelected(value);
    return setTimeout(() => setToggel(false), 250);
  };

  return (
    <>
      <Wrap toggle={toggle}>
        <OptionContainer toggle={toggle}>
          {optionItems.map((text) => (
            <RadioBox
              id={text}
              text={text}
              name={name}
              value={text}
              key={text}
              onClick={onClickItem}
              register={register}
            />
          ))}
        </OptionContainer>

        <SelectBox as="div" toggle={toggle} onClick={onClickToggle} error={error} {...props}>
          <SelectedValue error={error} selected={selected}>
            {selected ? selected : defaultText}
          </SelectedValue>
          <SelectArrow>
            <BsChevronDown />
          </SelectArrow>
        </SelectBox>
      </Wrap>
      {toggle && <EmptyPlace></EmptyPlace>}
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;

  ${({ toggle }) =>
    toggle &&
    css`
      position: absolute;
      z-index: 1;
      width: 100%;
      ${borderRadius(`0.2rem`)};
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35);
      border: solid 1px #cbcbcb;
      background-color: #ffffff;
    `}
`;

const EmptyPlace = styled.div`
  height: 5rem;
`;

const SelectBox = styled(InputBox)`
  ${defaultLayout}
  justify-content: space-between;
  order: 0;
  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.requiredColor};
    `}

  ${({ toggle }) =>
    toggle &&
    css`
      border: none;
    `}
`;

const SelectedValue = styled.span`
  ${({ selected }) =>
    !selected &&
    css`
      color: #a2a2a2;
    `}

  ${({ error, theme }) =>
    error &&
    css`
      color: ${theme.requiredColor};
    `}
`;

const SelectArrow = styled.div`
  color: #787878;
  font-size: 2.1rem;
`;

const OptionContainer = styled.div`
  ${defaultLayout}
  align-items: start;
  flex-direction: column;
  padding: 2rem 0 3rem;
  margin: 0 2.3rem;
  order: 1;
  div + div {
    margin-top: 2rem;
  }
  display: none;

  ${({ toggle }) =>
    toggle &&
    css`
      display: block;

      border-top: 0.1rem solid #cbcbcb;
    `}
`;

CustomSelectBox.propTypes = {
  optionItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  defaultText: PropTypes.string,
  defaultColor: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.object,
};
CustomSelectBox.defaultProps = {
  register: null,
  defaultText: null,
  defaultColor: '#000',
  required: null,
  error: null,
};

export default memo(CustomSelectBox);
