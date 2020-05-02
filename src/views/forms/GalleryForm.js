import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col, Label } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import addArticle from './addArticle';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import convertToBase64 from './convertToBase64';
import getArticle from '../templates/getArticle';
import editArticle from './editArticle';
import StyledCard from '../../components/StyledCard/StyledCard';
import PreloaderNewArticle from '../../components/Preloader/PreloaderNewArticle';

class GalleryForm extends Component {
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
        hero_img: '',
        header: `${article.header}`,
        paragraph: `${article.paragraph}`,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        image7: '',
        image8: '',
        image9: '',
      };
    } else {
      return {
        short_title: '',
        short_description: '',
        preview_image: '',
        hero_img: '',
        header: '',
        paragraph: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        image7: '',
        image8: '',
        image9: '',
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
          const pageType = 'gallery_page';
          const { id } = context.user;
          return (
            <Formik
              enableReinitialize
              initialValues={this.initialData(edit, article)}
              onSubmit={(values, { setSubmitting }) => {
                const { base64URL } = this.state;
                let data = values;
                data.preview_image = base64URL[0];
                data.hero_img = base64URL[1];
                data.image1 = base64URL[2];
                data.image2 = base64URL[3];
                data.image3 = base64URL[4];
                data.image4 = base64URL[5];
                data.image5 = base64URL[6];
                data.image6 = base64URL[7];
                data.image7 = base64URL[8];
                data.image8 = base64URL[9];
                data.image9 = base64URL[10];
                console.log(data);
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
                        <Label for="preview_image">Ogólne:</Label>
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
                        <Label for="preview_image">Nagłówek:</Label>
                        <Label for="hero_img">Zdjęcie nagłówka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="hero_img"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="header"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.header}
                          placeholder="Nagłówek"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label for="preview_image">Treści:</Label>
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="paragraph"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.paragraph}
                          placeholder="Paragraf"
                          required
                        />

                        <Label for="image1">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image1"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image2">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image2"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image3">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image3"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image4">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image4"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image5">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image5"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image6">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image6"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image7">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image7"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image8">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image8"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <Label for="image9">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image9"
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

export default GalleryForm;
