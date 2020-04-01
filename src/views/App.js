import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalTemplate from 'templates/GlobalTemplate';
import LoginView from 'views/LoginView';
import AdminView from 'views/AdminView';
import BlogView from 'views/BlogView';
import AboutUsView from 'views/AboutUsView';
import ContactView from 'views/ContactView';
import GalleryTemplate from 'views/templates/GalleryTemplate';

const App = () => (
  <BrowserRouter>
    <GlobalTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/loginView" />} />
        <Route exact path="/loginView" component={LoginView} />
        <Route exact path="/admin" component={AdminView} />
        <Route exact path="/blog" component={BlogView} />
        <Route exact path="/about" component={AboutUsView} />
        <Route exact path="/contact" component={ContactView} />
        <Route exact path="/blog/gallery-template/:id" component={GalleryTemplate} />
      </Switch>
    </GlobalTemplate>
  </BrowserRouter>
);

export default App;
