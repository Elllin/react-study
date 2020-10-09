import React from 'react';

import PropTypes from 'prop-types';

import StudyItem from "./studyItem/StudyItem";

import styled from 'styled-components';

function StudyList({data, onClickItem}) {
  return(
      <List>
          {data.map(item => <StudyItem key={item.id} item={item} onClickItem={onClickItem}/>)}
    </List>
)}

const List = styled.ul`
   display: grid;
   grid-template-rows: repeat(3, 42.6rem);
  grid-template-columns: repeat(3, 37rem);
  row-gap: 5rem;
  column-gap: 3rem;
  
`



StudyList.prototype = {
  data : PropTypes.arrayOf.isRequired
}

export default StudyList;
