import React from 'react';
import Header from 'components/home/header/Header';
import Carousel from 'components/home/main/Carousel';
import Beginning from 'components/home/main/Beginning';
import Description from 'components/home/main/description/Description';
import OpeningButton from 'components/home/main/OpeningButton';

function HomeContainer() {
  return (
    <div>
      <Header />
      <main>
        <Beginning />
        <Description />
        <OpeningButton />
      </main>
    </div>
  );
}

export default HomeContainer;
