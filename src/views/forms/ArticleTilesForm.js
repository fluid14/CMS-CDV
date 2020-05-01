import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col, Label } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';
import convertToBase64 from './convertToBase64';

class ArticleTilesForm extends Component {
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
          const pageType = 'tiled_article_page';
          const { id } = context.user;
          return (
            <Formik
              initialValues={{
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
              }}
              onSubmit={(values, { setSubmitting }) => {
                const { base64URL } = this.state;
                let data = values;
                data.preview_image = base64URL[0];
                data.image = base64URL[1];
                data.tile_image1 = base64URL[2];
                data.tile_image2 = base64URL[3];
                data.tile_image3 = base64URL[4];
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
                      <Label for="image">Zdjęcie nagłówka</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
                        required
                      />
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
                      <Label for="tile_image1">Zdjęcie</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="tile_image1"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
                        required
                      />
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
                      <Label for="tile_image2">Zdjęcie</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="tile_image2"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
                        required
                      />
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
                      <Label for="tile_image3">Zdjęcie</Label>
                      <StyledInput
                        type="file"
                        accept="image/png, image/jpeg"
                        name="tile_image3"
                        onBlur={handleBlur}
                        onChange={e => convertToBase64(e, this.state, this.changeState)}
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

export default ArticleTilesForm;
