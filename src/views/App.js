import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalTemplate from 'templates/GlobalTemplate';
import LoginView from 'views/LoginView';

const App = () => (
  <BrowserRouter>
    <GlobalTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/loginView" />} />
        <Route exact path="/loginView" component={LoginView} />
      </Switch>
    </GlobalTemplate>
  </BrowserRouter>
);

export default App;
