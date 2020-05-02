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

class HeroForm extends Component {
  state = {
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
        paragraph1: `${article.paragraph1}`,
        paragraph2: `${article.paragraph2}`,
        paragraph3: `${article.paragraph3}`,
        image1: '',
        image2: '',
        image3: '',
      };
    } else {
      return {
        short_title: '',
        short_description: '',
        preview_image: '',
        hero_img: '',
        paragraph1: '',
        paragraph2: '',
        paragraph3: '',
        image1: '',
        image2: '',
        image3: '',
      };
    }
  };

  render() {
    const { edit } = this.props;
    const { article } = this.state;
    console.log(article);
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'hero_page';
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
                console.log(data);
                if (edit) {
                  editArticle(edit, pageType, data);
                } else {
                  addArticle(id, pageType, data);
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
                        <Label for="hero_img">Zdjęcie nagłówka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="hero_img"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Kafelek:</Label>
                        <Label for="image1">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image1"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
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
                        <Label for="image2">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image2"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          as="textarea"
                          className="form-control"
                          type="text"
                          name="paragraph2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.paragraph2}
                          placeholder="Paragraf"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Kafelek:</Label>
                        <Label for="image3">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image3"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
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
                      <Button color="info" type="submit" disabled={isSubmitting}>
                        Dodaj
                      </Button>
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

export default HeroForm;
