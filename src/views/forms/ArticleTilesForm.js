import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col, Label } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';
import convertToBase64 from './convertToBase64';
import getArticle from '../templates/getArticle';
import editArticle from './editArticle';
import StyledCard from '../../components/StyledCard/StyledCard';
import PreloaderNewArticle from '../../components/Preloader/PreloaderNewArticle';

class ArticleTilesForm extends Component {
  state = {
    preloader: false,
    file: null,
    base64URL: [],
    article: {},
  };

  componentDidMount() {
    const { edit } = this.props;
    if (edit) {
      getArticle(this.changeStateArticle, edit);
    }
  }

  showPreloader = () => {
    this.setState({
      preloader: true,
    });
  };

  changeStateArticle = article => {
    this.setState({
      article,
    });
  };

  changeState = result => {
    this.setState(state => {
      let imgList = state.base64URL.concat(result);
      return {
        base64URL: imgList,
      };
    });
  };

  initialData = (edit, article) => {
    if (edit) {
      return {
        short_title: `${article.short_title}`,
        short_description: `${article.short_description}`,
        preview_image: `${article.preview_image}`,
        image: '',
        tile_image1: '',
        tile_image2: '',
        tile_image3: '',
        tile_title1: '',
        tile_title2: '',
        tile_title3: '',
        tile_paragraph1: `${article.tile_paragraph1}`,
        tile_paragraph2: `${article.tile_paragraph2}`,
        tile_paragraph3: `${article.tile_paragraph3}`,
      };
    } else {
      return {
        short_title: '',
        short_description: '',
        preview_image: '',
        image: '',
        tile_image1: '',
        tile_image2: '',
        tile_image3: '',
        tile_title1: '',
        tile_title2: '',
        tile_title3: '',
        tile_paragraph1: '',
        tile_paragraph2: '',
        tile_paragraph3: '',
      };
    }
  };

  render() {
    const { edit, history } = this.props;
    const { article, preloader } = this.state;
    console.log(article);
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'tiled_article_page';
          const { id } = context.user;
          return (
            <Formik
              enableReinitialize
              initialValues={this.initialData(edit, article)}
              onSubmit={(values, { setSubmitting }) => {
                const { base64URL } = this.state;
                let data = values;
                data.preview_image = base64URL[0];
                data.image = base64URL[1];
                data.tile_image1 = base64URL[2];
                data.tile_image2 = base64URL[3];
                data.tile_image3 = base64URL[4];
                if (edit) {
                  editArticle(edit, pageType, data, history);
                } else {
                  addArticle(id, pageType, data, history);
                }
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <StyledCard>
                        <Label>Ogólne:</Label>
                        <StyledInput
                          type="text"
                          name="short_title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.short_title}
                          placeholder="Krótki tytuł"
                          required
                        />
                        <StyledInput
                          type="text"
                          name="short_description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.short_description}
                          placeholder="Krótki opis"
                          required
                        />
                        <Label for="preview_image">Miniaturka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="preview_image"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Nagłówek:</Label>
                        <Label for="image">Zdjęcie nagłówka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Kafelek:</Label>
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="tile_title1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tile_title1}
                          placeholder="Tytuł kafelka"
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="tile_paragraph1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tile_paragraph1}
                          placeholder="Paragraf kafelka"
                          required
                        />
                        <Label for="tile_image1">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="tile_image1"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Kafelek:</Label>
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="tile_title2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tile_title2}
                          placeholder="Tytuł kafelka"
                          required
                        />

                        <StyledInput
                          className="form-control"
                          type="text"
                          name="tile_paragraph2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tile_paragraph2}
                          placeholder="Paragraf kafelka"
                          required
                        />

                        <Label for="tile_image2">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="tile_image2"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Kafelek:</Label>
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="tile_title3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tile_title3}
                          placeholder="Tytuł kafelka"
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="tile_paragraph3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tile_paragraph3}
                          placeholder="Paragraf kafelka"
                          required
                        />
                        <Label for="tile_image3">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="tile_image3"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col>
                      <Button
                        color="info"
                        onClick={this.showPreloader}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Dodaj
                      </Button>
                      {preloader && <PreloaderNewArticle />}
                    </Col>
                  </Row>
                </form>
              )}
            </Formik>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default ArticleTilesForm;
