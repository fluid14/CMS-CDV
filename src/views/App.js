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
import SiteSettings from './SiteSettings';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import ProtectedAdminRoute from '../components/ProtectedRoute/ProtectedAdminRoute';
import Preloader from '../components/Preloader/Preloader';

const App = () => (
  <BrowserRouter>
    <GlobalTemplate>
      <>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/blog" />} />
          <Route exact path="/login" component={LoginView} />
          <ProtectedRoute exact path="/admin" component={AdminView} />
          <Route exact path="/blog" component={BlogView} />
          <Route exact path="/about" component={AboutUsView} />
          <Route exact path="/contact" component={ContactView} />
          <Route exact path="/blog/gallery_page/:id" component={GalleryTemplate} />
          <Route exact path="/blog/simple_page/:id" component={SimpleTextTemplate} />
          <Route exact path="/blog/article_page/:id" component={ArticleTemplate} />
          <Route exact path="/blog/tiled_article_page/:id" component={ArticleTilesTemplate} />
          <Route exact path="/blog/bottom_tiled_page/:id" component={ArticleBottomTileTemplate} />
          <Route exact path="/blog/hero_page/:id" component={HeroTemplate} />
          <Route exact path="/blog/big_slider_page/:id" component={SliderTemplate} />
          <Route exact path="/blog/ilustrated_page/:id" component={IlustratedArticleTemplate} />
          <ProtectedRoute exact path="/new/choose-article" component={ChooseArticleView} />
          <ProtectedRoute exact path="/admin/all-articles/:id" component={AllArticlesView} />
          <ProtectedRoute exact path="/new/:id" component={NewArticleView} />
          <ProtectedRoute exact path="/new/:id/:articleId" component={NewArticleView} />
          <ProtectedAdminRoute exact path="/settings" component={SiteSettings} />
        </Switch>
      </>
    </GlobalTemplate>
  </BrowserRouter>
);

export default App;
