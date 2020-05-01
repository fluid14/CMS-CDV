import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col, Label } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';
import convertToBase64 from './convertToBase64';

class ArticleBottomTileForm extends Component {
  state = {
    file: null,
    base64URL: [],
  };

  changeState = result => {
    this.setState(state => {
      let imgList = state.base64URL.concat(result);
      return {
        base64URL: imgList,
      };
    });
  };

  render() {
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'bottom_tiled_page';
          const { id } = context.user;
          return (
            <Formik
              initialValues={{
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
              }}
              onSubmit={(values, { setSubmitting }) => {
                let data = values;
                data.preview_image = this.state.base64URL[0];
                data.image1 = this.state.base64URL[1];
                data.image2 = this.state.base64URL[2];
                addArticle(id, pageType, data);
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
                      <StyledInput
                        type="text"
                        name="short_title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.short_title}
                        placeholder="Krótki tytuł"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        type="text"
                        name="short_description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.short_description}
                        placeholder="Krótki opis"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <Label for="preview_image">Miniaturka</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="preview_image"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
                        required
                      />
                    </Col>
                    <Col md="12">
                      <Label for="image1">Zdjęcie nagłówka</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image1"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        type="text"
                        name="title1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title1}
                        placeholder="Tytuł nagłówka"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        type="text"
                        name="title2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title2}
                        placeholder="Tytuł"
                        required
                      />
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <p className="mt-4">Kafelek:</p>
                    <Col md="12">
                      <Label for="image1">Zdjęcie kafelka</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image2"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        type="text"
                        name="paragraph2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.paragraph2}
                        placeholder="Tytuł kafelka"
                        required
                      />
                    </Col>
                    <Col md="12">
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

export default ArticleBottomTileForm;
