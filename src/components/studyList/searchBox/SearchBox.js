import React from 'react';

import SelectBox from 'components/common/selectBox/SelectBox';

import styled from 'styled-components';

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

export default searchBox;
