import React from 'react';

import Header from 'components/common/header/Header';
import MainPage from 'components/home/mainPage/MainPage';
import Introduce from 'components/home/introduce/Introduce';
import CreateButton from 'components/common/createButton/CreateButton';

function HomeContainer() {
  return (
    <div>
      <Header />
      <main>
        <MainPage />
        <Introduce />
        <CreateButton />
      </main>
    </div>
  );
}

export default HomeContainer;
