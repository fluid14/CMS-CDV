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
  font-weight: 1.5rem;
  margin-bottom: 2em;
  color: var(--dark);
`;

class NewArticleView extends Component {
  chooseRenderForm(id) {
    switch (id) {
      case 'gallery':
        return <GalleryForm />;
      case 'tiles':
        return <HeroForm />;
      case 'simple-text':
        return <SimpleTextForm />;
      case 'quotation':
        return <IlustratedArticleForm />;
      case 'slider':
        return <SliderForm />;
      case 'article':
        return <ArticleForm />;
      case 'article-tiles':
        return <ArticleTilesForm />;
      case 'article-bottom-tiles':
        return <ArticleBottomTileForm />;
      default:
        return <ArticleForm />;
    }
  }

  formName(id) {
    switch (id) {
      case 'gallery':
        return 'Galeria';
      case 'tiles':
        return 'Kafelki';
      case 'simple-text':
        return 'Prosty tekst';
      case 'quotation':
        return 'Cytat';
      case 'slider':
        return 'Duży slider';
      case 'article':
        return 'Artykuł';
      case 'article-tiles':
        return 'Artykuł z kafelkami';
      case 'article-bottom-tiles':
        return 'Artykuł z kafelkiem u dołu';
      default:
        return 'Artykuł';
    }
  }

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <MainTemplate>
        <WithoutHeroImg>
          <StyledContainer>
            <Title className="mb-2">
              <>Nowy artykuł</>
            </Title>
            <LayoutName>
              <b>Nazwa układu:</b> {this.formName(id)}
            </LayoutName>
            <Row>{this.chooseRenderForm(id)}</Row>
          </StyledContainer>
        </WithoutHeroImg>
      </MainTemplate>
    );
  }
}

export default withRouter(NewArticleView);
