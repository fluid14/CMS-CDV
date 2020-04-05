import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalTemplate from 'templates/GlobalTemplate';
import LoginView from 'views/LoginView';
import AdminView from 'views/AdminView';
import BlogView from 'views/BlogView';
import AboutUsView from 'views/AboutUsView';
import ContactView from 'views/ContactView';
import GalleryTemplate from 'views/templates/GalleryTemplate';
import SimpleTextTemplate from 'views/templates/SimpleTextTemplate';
import ArticleTemplate from 'views/templates/ArticleTemplate';
import ArticleTilesTemplate from 'views/templates/ArticleTilesTemplate';
import ArticleBottomTileTemplate from 'views/templates/ArticleBottomTileTemplate';
import IlustratedArticleTemplate from 'views/templates/IlustratedArticleTemplate';
import HeroTemplate from 'views/templates/HeroTemplate';
import SliderTemplate from 'views/templates/SliderTemplate';
import AllArticlesView from 'views/AllArticlesView';
import ChooseArticleView from 'views/ChooseArticleView';
import NewArticleView from 'views/NewArticleView';

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
        <Route exact path="/blog/gallery/:id" component={GalleryTemplate} />
        <Route exact path="/blog/simple-text/:id" component={SimpleTextTemplate} />
        <Route exact path="/blog/article/:id" component={ArticleTemplate} />
        <Route exact path="/blog/article-tiles/:id" component={ArticleTilesTemplate} />
        <Route exact path="/blog/article-bottom-tile/:id" component={ArticleBottomTileTemplate} />
        <Route exact path="/blog/hero/:id" component={HeroTemplate} />
        <Route exact path="/blog/slider/:id" component={SliderTemplate} />
        <Route
          exact
          path="/blog/ilustrated-article-bottom-tile/:id"
          component={IlustratedArticleTemplate}
        />
        <Route exact path="/new/choose-article" component={ChooseArticleView} />
        <Route exact path="/blog/all-articles/:id" component={AllArticlesView} />
        <Route exact path="/new/:id" component={NewArticleView} />
      </Switch>
    </GlobalTemplate>
  </BrowserRouter>
);

export default App;
