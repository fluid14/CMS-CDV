/* eslint-disable no-console */
import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row } from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';
import GalleryForm from 'views/forms/GalleryForm';
import HeroForm from 'views/forms/HeroForm';
import SimpleTextForm from './forms/SimpleTextForm';
import IlustratedArticleForm from './forms/IlustratedArticleForm';
import SliderForm from './forms/SliderForm';
import ArticleForm from './forms/ArticleForm';
import ArticleTilesForm from './forms/ArticleTilesForm';
import ArticleBottomTileForm from './forms/ArticleBottomTileForm';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const LayoutName = styled.p`
  font-size: 1.2rem;
  //font-weight: 1.5rem;
  margin-bottom: 2em;
  margin-top: 0.5em;
  color: var(--dark);
  text-transform: uppercase;
`;

class NewArticleView extends Component {
  chooseRenderForm(id, articleId) {
    switch (id) {
      case 'gallery_page':
        return <GalleryForm edit={articleId} />;
      case 'hero_page':
        return <HeroForm edit={articleId} />;
      case 'simple_page':
        return <SimpleTextForm edit={articleId} />;
      case 'ilustrated_page':
        return <IlustratedArticleForm edit={articleId} />;
      case 'big_slider_page':
        return <SliderForm edit={articleId} />;
      case 'article':
        return <ArticleForm edit={articleId} />;
      case 'tiled_article_page':
        return <ArticleTilesForm edit={articleId} />;
      case 'bottom_tiled_page':
        return <ArticleBottomTileForm edit={articleId} />;
      default:
        return <ArticleForm edit={articleId} />;
    }
  }

  formName(id) {
    switch (id) {
      case 'gallery_page':
        return 'Galeria';
      case 'hero_page':
        return 'Kafelki';
      case 'simple_page':
        return 'Prosty tekst';
      case 'ilustrated_page':
        return 'Cytat';
      case 'big_slider_page':
        return 'Duży slider';
      case 'article':
        return 'Artykuł';
      case 'tiled_article_page':
        return 'Artykuł z kafelkami';
      case 'bottom_tiled_page':
        return 'Artykuł z kafelkiem u dołu';
      default:
        return 'Artykuł';
    }
  }

  render() {
    const {
      match: {
        params: { id, articleId },
      },
    } = this.props;
    return (
      <MainTemplate>
        <WithoutHeroImg>
          <StyledContainer>
            {!articleId && (
              <Title className="mb-2">
                <>Nowy artykuł</>
              </Title>
            )}
            {articleId && (
              <Title className="mb-2">
                <>Edytuj artykuł</>
              </Title>
            )}
            <LayoutName>{this.formName(id)}</LayoutName>
            <Row>
              <Container>{this.chooseRenderForm(id, articleId)}</Container>
            </Row>
          </StyledContainer>
        </WithoutHeroImg>
      </MainTemplate>
    );
  }
}

export default withRouter(NewArticleView);
