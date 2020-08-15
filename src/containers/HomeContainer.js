import React from 'react';
import Header from 'components/home/header/Header';
import Carousel from 'components/home/main/Carousel';
import Beginning from 'components/home/main/Beginning';
import Description from 'components/home/main/description/Description';
import CreateButton from 'components/home/main/CreateButton';

function HomeContainer() {
  return (
    <div>
      <Header />
      <main>
        <Beginning />
        <Description />
        <CreateButton />
      </main>
    </div>
  );
}

export default HomeContainer;
