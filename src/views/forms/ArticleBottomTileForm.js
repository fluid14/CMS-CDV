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

class ArticleBottomTileForm extends Component {
  state = {
    preloader: false,
    file: null,
    base64URL: [],
    article: {},
  };

  showPreloader = () => {
    this.setState({
      preloader: true,
    });
  };

  componentDidMount() {
    const { edit } = this.props;
    if (edit) {
      getArticle(this.changeStateArticle, edit);
    }
  }

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
        paragraph1: `${article.paragraph1}`,
        paragraph2: `${article.paragraph2}`,
        paragraph3: `${article.paragraph3}`,
        image1: '',
        image2: '',
        title1: `${article.title1}`,
        title2: `${article.title2}`,
      };
    } else {
      return {
        short_title: '',
        short_description: '',
        preview_image: '',
        paragraph1: '',
        paragraph2: '',
        paragraph3: '',
        image1: '',
        image2: '',
        title1: '',
        title2: '',
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
          const pageType = 'bottom_tiled_page';
          const { id } = context.user;
          return (
            <Formik
              enableReinitialize
              initialValues={this.initialData(edit, article)}
              onSubmit={(values, { setSubmitting }) => {
                let data = values;
                data.preview_image = this.state.base64URL[0];
                data.image1 = this.state.base64URL[1];
                data.image2 = this.state.base64URL[2];
                if (edit) {
                  editArticle(edit, pageType, data, history);
                } else {
                  addArticle(id, pageType, data, history);
                }
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
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
                        <Label for="image1">Zdjęcie nagłówka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image1"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          type="text"
                          name="title1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title1}
                          placeholder="Tytuł nagłówka"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Treści:</Label>
                        <StyledInput
                          type="text"
                          name="title2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title2}
                          placeholder="Tytuł"
                          required
                        />
                        <StyledInput
                          as="textarea"
                          className="form-control"
                          type="text"
                          name="paragraph1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.paragraph1}
                          placeholder="Paragraf"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Kafelek:</Label>
                        <Label for="image1">Zdjęcie kafelka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image2"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <StyledInput
                          type="text"
                          name="paragraph2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.paragraph2}
                          placeholder="Tytuł kafelka"
                          required
                        />
                        <StyledInput
                          as="textarea"
                          className="form-control"
                          type="text"
                          name="paragraph3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.paragraph3}
                          placeholder="Paragraf"
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

export default ArticleBottomTileForm;
