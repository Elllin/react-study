import React from 'react';
import DescriptionItem from './DescriptionItem';
import { description, descriptionItem } from './constants/constants';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Description() {
  return (
    <Div id="bottom">
      <InnerWrap>
        <h2>{description.title}</h2>
        <p>{description.description}</p>
        <ItemWrap>
          {descriptionItem.map((info) => {
            const { title, discription, width, float, color } = info;
            return (
              <DescriptionItem
                title={title}
                discription={discription}
                width={width}
                float={float}
                color={color}
                key={title}
              />
            );
          })}
        </ItemWrap>
      </InnerWrap>
    </Div>
  );
}

const Div = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    font-family: '210 Yeonpilsketch R', sans-serif;
    font-size: 3.4rem;
  }
  p {
    margin-bottom: 17rem;
    font-size: 2rem;
  }
`;

const InnerWrap = styled(Container)`
  text-align: center;
  padding-top: 13.2rem;
`;

const ItemWrap = styled.ul`
  margin: 0 auto;
  width: 77.1rem;

  text-align: left;
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

export default Description;
