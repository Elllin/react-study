import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import RadioBox from '../radioBox/RadioBox';

import { InputBox, defaultLayout, borderRadius } from 'style/CustomStyle';
import styled, { css } from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

function CustomSelectBox({
  optionItems,
  name,
  defaultText,
  selectedValue,
  required,
  register,
  defaultColor,
  error,
  borderNone,
  onClick,
  propsToggle,
  optionPadding,
  ...props
}) {
  const [localToggle, setLocalToggle] = useState(false);
  const [selected, setSelected] = useState(selectedValue || null);

  const onClickToggle = useCallback(() => {
    if (onClick) return onClick();
    setLocalToggle((prevState) => !prevState);
  }, [onClick]);

  const onClickItem = (value) => {
    setSelected(value);
    return setTimeout(() => setLocalToggle(false), 250);
  };

  const toggle = propsToggle ? propsToggle : localToggle;

  return (
    <>
      <Wrap toggle={toggle} borderNone={borderNone}>
        <OptionContainer toggle={toggle} optionPadding={optionPadding} {...props}>
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

        <SelectBox
          as="div"
          toggle={toggle}
          onClick={onClickToggle}
          error={error}
          borderNone={borderNone}
          {...props}
        >
          <SelectedValue error={error} selected={selected} defaultColor={defaultColor}>
            {selected ? selected : defaultText}
          </SelectedValue>
          <SelectArrow>
            <BsChevronDown />
          </SelectArrow>
        </SelectBox>
      </Wrap>
      {toggle && <EmptyPlace />}
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: 0.5rem 1rem 0;

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

  ${({ borderNone }) =>
    borderNone &&
    css`
      border: none;
      box-shadow: none;
    `}
`;

const EmptyPlace = styled.div`
  height: 5rem;
`;

const SelectBox = styled(InputBox)`
  ${defaultLayout};
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

    ${({ borderNone }) =>
    borderNone &&
    css`
      border: none;
    `}
`;

const SelectedValue = styled.span`
  ${({ selected, defaultColor }) =>
    !selected &&
    css`
      color: ${defaultColor};
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
  display: inline-flex;
  align-items: start;
  flex-direction: column;
  padding: ${({ optionPadding }) => optionPadding};
  margin: 0 1.6rem;
  order: 1;

  display: none;

  ${({ toggle }) =>
    toggle &&
    css`
      display: block;
      border-top: 0.1rem solid #cbcbcb;

      ${({ both }) =>
        both &&
        css`
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}

      ${({ far }) =>
        far &&
        css`
          column-gap: 5rem;
        `}
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
  borderNone: PropTypes.bool,
  propsToggle: PropTypes.bool,
  both: PropTypes.bool,
  optionPadding: PropTypes.string,
  selectedValue: PropTypes.string,
};
CustomSelectBox.defaultProps = {
  register: null,
  defaultText: null,
  defaultColor: '#000',
  required: null,
  error: null,
  borderNone: null,
  propsToggle: null,
  both: null,
  optionPadding: '1rem 0 2rem',
  selectedValue: null,
};

export default memo(CustomSelectBox);
