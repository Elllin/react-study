import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import CreateStudyPage from 'pages/CreateStudyPage';
import InvitationPage from 'pages/InvitationPage';
import StudyDetailPage from 'pages/StudyDetailPage';
import StudyListPage from 'pages/StudyListPage';
import ErrorPage from 'common/ErrorPage';

import GlobalStyle from 'style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        {/* <Route path="/" component={HomePage} exact /> */}
        {/* <Route path="/create" component={CreateStudyPage} /> */}
        {/* <Route path="/create/invitation" component={InvitationPage} /> */}
        {/* <Route path="/detail/:id" component={StudyDetailPage} /> */}
        <Route path="/" component={StudyListPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
