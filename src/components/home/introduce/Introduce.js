import React from 'react';
import IntroduceItem from './introduceItem/IntroduceItem';
import { introduce, introduceItem } from './constants/constants';

import styled from 'styled-components';
import { Container } from 'style/CustomStyle';

function Introduce() {
  return (
    <Wrap>
      <InnerWrap>
        <h2>{introduce.title}</h2>
        <p>{introduce.introduce}</p>
        <ItemWrap>
          {introduceItem.map((info) => {
            const { title, introduce, width, float, images } = info;
            return (
              <IntroduceItem
                title={title}
                introduce={introduce}
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
    margin-bottom: 8%;
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
`;

export default Introduce;
