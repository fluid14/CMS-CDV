import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import addArticle from './addArticle';
import { UserContextConsumer } from '../../context/userContext/UserContext';

class GalleryForm extends Component {
  render() {
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'gallery_page';
          const { id } = context.user;
          return (
            <Formik
              initialValues={{
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
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  addArticle(id, pageType, values);
                  setSubmitting(false);
                }, 400);
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
                      <StyledInput
                        type="text"
                        name="preview_image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.preview_image}
                        placeholder="Miniaturka"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        type="text"
                        name="hero_img"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hero_img}
                        placeholder="Zdjęcie nagłówka"
                        required
                      />
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
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
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image1}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image2}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image3}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image4}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image5"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image5}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image6"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image6}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image7"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image7}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image8"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image8}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="image9"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image9}
                        placeholder="Zdjęcie"
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

export default GalleryForm;
