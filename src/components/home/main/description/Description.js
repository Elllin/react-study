import React from 'react';
import DescriptionItem from './DescriptionItem';
import { description, descriptionItem } from './constants/constants';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Description() {
  return (
    <Wrap>
      <InnerWrap>
        <h2>{description.title}</h2>
        <p>{description.description}</p>
        <ItemWrap>
          {descriptionItem.map((info) => {
            const { title, discription, width, float, images } = info;
            return (
              <DescriptionItem
                title={title}
                discription={discription}
                width={width}
                float={float}
                images={images}
                key={title}
              />
            );
          })}
        </ItemWrap>
      </InnerWrap>
    </Wrap>
  );
}

const Wrap = styled.section`
  h2 {
    margin-bottom: 1.5rem;
    font-family: '210 Yeonpilsketch R', sans-serif;
    font-size: 3.4rem;
  }
  p {
    margin-bottom: 17rem;
    font-family: ${({ theme }) => theme.subFont};
    font-size: 2rem;
  }
`;

const InnerWrap = styled(Container)`
  text-align: center;
  padding-top: 10.7rem;
  margin: 0 auto;
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

  display: grid;
  grid-template-columns: 1fr 1fr;
  &:nth-child(2),
  &:nth-child(4) {
    justify-self: end;
  }
  /* justify-content: space-between; */
  /* grid-column-start: 26.5rem 24.3rem; */
  /* grid-column-end: 23.6rem 24.3rem; */
`;

export default Description;
