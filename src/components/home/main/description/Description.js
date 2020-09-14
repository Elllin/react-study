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
`;

export default Description;
