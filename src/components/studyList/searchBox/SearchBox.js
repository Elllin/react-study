import React, { memo, useEffect } from 'react';

import CustomSelectBox from 'components/common/customSelectBox/CustomSelectBox';
import { locationOption, categoryOption } from './constants/constants';

import styled, { css } from 'styled-components';
import { borderRadius } from 'style/CustomStyle';

import { BsArrowRight } from 'react-icons/bs';

function SearchBox({ onToggle, toggle, onClose }) {
  useEffect(() => {
    return () => {
      onClose();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Wrap>
      <SelectBoxContainer toggle={toggle}>
        <SelectBoxWrap>
          <CustomSelectBox
            onClick={onToggle}
            optionItems={locationOption}
            name="location"
            defaultText="시/도"
            borderNone
            berder="none"
            propsToggle={toggle}
            both
            optionPadding="1.8rem 0 4rem"
            far
          />
        </SelectBoxWrap>

        <SelectBoxWrap>
          <CustomSelectBox
            onClick={onToggle}
            optionItems={categoryOption}
            name="category"
            defaultText="그룹 카테고리"
            borderNone
            propsToggle={toggle}
            both
            optionPadding="1.8rem 0 4rem"
          />
        </SelectBoxWrap>
      </SelectBoxContainer>
      <SearchButton>
        검색하기 <BsArrowRight />
      </SearchButton>
    </Wrap>
  );
}

const Wrap = styled.form`
  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;
  padding: 1.7rem 2rem;
  width: 100%;
  height: 8.4rem;
  background-color: #f6f6f6;
`;

const SelectBoxWrap = styled.div`
  position: relative;
  width: 35rem;

  background: #fff;
  & + & {
    margin-left: 4rem;
  }
`;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ toggle }) =>
    toggle &&
    css`
      min-height: 360px;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35);
      border: solid 1px #cbcbcb;
      background-color: #ffffff;
    `}
`;

const SearchButton = styled.button`
  width: 35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.3rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.mainColor};
  ${borderRadius('0.4rem')}
  svg {
    font-size: 3rem;
  }
`;

export default memo(SearchBox);
