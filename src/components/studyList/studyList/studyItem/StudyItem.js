import React from 'react';

import TagItem from "components/common/tagContainer/tagItem/TagItem";

import styled from "styled-components";
import { borderRadius, defaultLayout } from 'style/CustomStyle';


function StudyItem({item}) {
  // const getCategoryText = (text) => text
  return <Item>
    <ImgWrap>
    <img src="http://placehold.it/100x100" alt="스터디 리스트 썸네일" />
    </ImgWrap>
    <Information>
      <Location>{item.Location.name}</Location>
      <Title>{item.title}</Title>
      <TagItem text={item.Category.name} hash={null} fontSize={'small'}/>
      <Description>{item.description}</Description>
    </Information>
  </Item>;
}

const Item = styled.li`
  background: #fff;
    ${borderRadius(`0.6rem`)};
    
  // height: 100%;
`

const ImgWrap = styled.div`
  width: 37rem;
  height: 18.5rem;
  img {
  width: 100%;
  height: 100%;
`

const Information = styled.div`
padding: 1.8rem 4.3rem 2.8rem;
  ${defaultLayout}
  flex-direction: column;
`

const Location = styled.div`
  margin-bottom: 1rem;
  font-size: 13px;
  color: #4e4e4e;
  
`

const Description = styled.div`
  margin-top : 1.8rem;
  padding-top:1.3rem;
  border-top:  solid 0.6px #d1d1d1;
  width:100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #101010;
  line-height: 2.2rem;
`



const Title = styled.strong`
margin-bottom: 0.8rem;
 font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.3px;
      text-align: center;
      max-width: 22.3rem;
      word-break: keep-all;
`
export default StudyItem;
