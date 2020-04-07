import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';

class HeroForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          imageHeader: '',
          titleHeader: '',
          title: '',
          paragraph1: '',
          image1: '',
          paragraph2: '',
          image2: '',
          paragraph3: '',
          image3: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
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
                  name="imageHeader"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.imageHeader}
                  placeholder="Zdjęcie nagłówka"
                  required
                />
              </Col>
              <Col md="12">
                <StyledInput
                  type="text"
                  name="titleHeader"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.titleHeader}
                  placeholder="Tytuł nagłówka"
                  required
                />
              </Col>
              <Col md="12">
                <StyledInput
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder="Tytuł"
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
                  placeholder="Link do obrazka"
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
              <Col md="12">
                <StyledInput
                  className="form-control"
                  type="text"
                  name="image2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image2}
                  placeholder="Link do obrazka"
                  required
                />
              </Col>
              <Col md="12">
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
              </Col>
              <Col md="12">
                <StyledInput
                  className="form-control"
                  type="text"
                  name="image3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image3}
                  placeholder="Link do obrazka"
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
              <Button color="info" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Row>
          </form>
        )}
      </Formik>
    );
  }
}

export default HeroForm;
