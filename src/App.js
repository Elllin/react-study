import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import StudyOpeningPage from 'pages/StudyOpeningPage';

import GlobalStyle from 'style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/create" component={StudyOpeningPage} />
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
