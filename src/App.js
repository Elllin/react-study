import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CreateStudyPage from 'pages/CreateStudyPage';
import InvitationPage from 'pages/InvitationPage';

import GlobalStyle from 'style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/create" component={CreateStudyPage} exact />
        <Route path="/create/invitation" component={InvitationPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다. :</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
