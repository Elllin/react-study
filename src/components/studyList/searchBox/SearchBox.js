import React from 'react';

import SelectBox from 'components/common/selectBox/SelectBox';
import MainButton from 'components/common/mainButton/MainButton';

import styled from 'styled-components';
import { borderRadius } from 'style/CustomStyle';

import { BsArrowRight } from 'react-icons/bs';

function searchBox() {
  return (
    <Wrap>
      <SelectBoxWrap>
        <label className="blind">시/도</label>
        <SelectBox optionItems={['서울', '인천']} name="location" placeholder="시/도" borderNone />
      </SelectBoxWrap>
      <SelectBoxWrap>
        <label className="blind">시/도</label>
        <SelectBox optionItems={['서울', '인천']} name="location" borderNone />
      </SelectBoxWrap>
      <SelectBoxWrap>
        <label className="blind">시/도</label>
        <SelectBox optionItems={['서울', '인천']} name="location" borderNone />
      </SelectBoxWrap>
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
  width: 27.7rem;
`;

const SearchButton = styled.button`
  width: 23.5rem;
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

export default searchBox;
