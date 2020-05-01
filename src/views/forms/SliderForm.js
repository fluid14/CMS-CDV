import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';

class SliderForm extends Component {
  render() {
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'big_slider_page';
          const { id } = context.user;
          return (
            <Formik
              initialValues={{
                short_title: '',
                short_description: '',
                preview_image: '',
                image: '',
                slider_image1: '',
                slider_image2: '',
                slider_image3: '',
                slider_image4: '',
                slider_image5: '',
                slider_image6: '',
                slider_title1: '',
                slider_title2: '',
                slider_title3: '',
                slider_title4: '',
                slider_title5: '',
                slider_title6: '',
                paragraph: '',
                header: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                addArticle(id, pageType, values);
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
                        className="form-control"
                        type="text"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                        placeholder="Zdjęcie nagłówka"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="slider_image1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.slider_image1}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="slider_image2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.slider_image2}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="slider_image3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.slider_image3}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="slider_image4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.slider_image4}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        className="form-control"
                        type="text"
                        name="slider_image5"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.slider_image5}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        as="textarea"
                        className="form-control"
                        type="text"
                        name="slider_image6"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.slider_image6}
                        placeholder="Zdjęcie"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledInput
                        as="textarea"
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
                        as="textarea"
                        className="form-control"
                        type="text"
                        name="header"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.header}
                        placeholder="Tytuł"
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

export default SliderForm;
