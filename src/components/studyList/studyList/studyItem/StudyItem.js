import React from 'react';

import styled from "styled-components";
import { borderRadius } from 'style/CustomStyle';


function StudyItem({item}) {
  return <Item>
    <ImgWrap>
    <img src="http://placehold.it/100x100" alt="스터디 리스트 썸네일" />
    </ImgWrap>
  </Item>;
}

const Item = styled.li`
  background: #fff;
    ${borderRadius(`0.6rem`)};

`

const ImgWrap = styled.div`
  width: 37rem;
  height: 18.5rem;
  img {
  width: 100%;
  height: 100%;
`
export default StudyItem;
