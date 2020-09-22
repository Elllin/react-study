import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import CreateStudyPage from 'pages/CreateStudyPage';
import StudyDetailPage from 'pages/StudyDetailPage';
import ErrorPage from 'common/ErrorPage';

import GlobalStyle from 'style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        {/* <Route path="/" component={HomePage} exact /> */}
        <Route path="/create" component={CreateStudyPage} />
        <Route path="/" component={StudyDetailPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
