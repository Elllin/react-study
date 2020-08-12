import React from 'react';
import Header from '../components/Home/Header/Header';
import Carousel from '../components/Home/Main/Carousel';
import Creation from '../components/Home/Main/Creation';
import Description from '../components/Home/Main/Description';

function HomeContainer() {
  return (
    <div>
      <Header>home</Header>
      <main>
        <Carousel />
        <Creation />
        <Description />
      </main>
    </div>
  );
}

export default HomeContainer;
