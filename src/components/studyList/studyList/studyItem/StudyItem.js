import React, {useEffect,useRef,useState} from 'react';

import TagItem from "components/common/tagContainer/tagItem/TagItem";

import styled, {css} from "styled-components";
import { borderRadius, defaultLayout } from 'style/CustomStyle';
import {getDateFormat, getDday} from "lib/utils";




function StudyItem({item}) {

  const [titleHeight, setTitleHeight] = useState(0)
  const titleRef = useRef(null);

  const {study_start , study_end} = item;

  const DATE_FORMAT = 'M월 D일 (dd)';

  const startDate = getDateFormat(study_start, DATE_FORMAT);
  const endDate = getDateFormat(study_end, DATE_FORMAT);
  const dDay = getDday(study_start, study_end);

  useEffect(() => {
    setTitleHeight(titleRef.current.clientHeight)
  })
  return <Item>
    <ImgWrap >
      {dDay < 0 && <Expiration>스터디 기간이 만료되었습니다.</Expiration> }

        {
          study_start ? <Period><Dday>D-{dDay}</Dday>{startDate}~{endDate}</Period>
              : <Period>상시모집</Period>
        }

    <img src="http://placehold.it/100x100" alt="스터디 리스트 썸네일" />
    </ImgWrap>
    <Information>
      <Location>{item.Location.name}</Location>
      <Title ref={titleRef} height={titleHeight}>{item.title}</Title>
      <TagItem text={item.Category.name} hash={null} fontSize={'small'}/>
      <Description  height={titleHeight}>{item.description}</Description>
      <TagsWrap>
        {item.Tags.map(tag => <Tag key={tag.id}>#{tag.word}</Tag>)}
      </TagsWrap>
    </Information>
  </Item>;
}

const Expiration = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
`

const Period = styled.div`
${defaultLayout}
position: absolute;
  width: 370px;
  height: 37px;
  background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 1.4rem;
`

const Dday = styled.span`
margin-right: 1rem;
padding : 0.3rem 1.1rem;
  border-radius: 1.1rem;
  border: solid 0.6px #ececec;
  
`
const Item = styled.li`
  background: #fff;
    ${borderRadius(`0.6rem`)};
`

const ImgWrap = styled.div`
position: relative;
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
  font-size: 1.3rem;
  color: #4e4e4e;
  
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
const Description = styled.div`
  margin: 1.8rem 0 2.1rem;
  padding-top:1.3rem;
  border-top:  solid 0.6px #d1d1d1;
  width:100%;
  max-height: 5.6rem;
  line-height: 2.4rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  
  ${({height}) => height > 22 ?
    css`
   white-space: nowrap;
    `: css` 
  display: -webkit-box;
  -webkit-line-clamp:2; 
  -webkit-box-orient: vertical;
  `
};
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #101010;
  
`

const TagsWrap = styled.div`
 ${defaultLayout};
`

const Tag = styled.span`
  color: #a4a4a4;
  
  & + &{
    margin-left: 1rem;
  }
`
