import React from 'react';
import Header from 'components/Home/Header/Header';
import Carousel from 'components/Home/Main/Carousel';
import Creation from 'components/Home/Main/Creation';
import Description from 'components/Home/Main/Description';
import CreateButton from 'components/Home/Main/CreateButton';

function HomeContainer() {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <Creation />
        <Description />
        <CreateButton />
      </main>
    </div>
  );
}

export default HomeContainer;
