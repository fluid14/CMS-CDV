import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';

class SimpleTextForm extends Component {
  render() {
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'simple_page';
          const { id } = context.user;
          return (
            <Formik
              initialValues={{
                short_title: '',
                short_description: '',
                preview_image: '',
                image: '',
                paragraph: '',
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
                        type="text"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                        placeholder="Główne zdjęcie"
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
                    <Col>
                      <Button color="info" type="submit" disabled={isSubmitting}>
                        Submit
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

export default SimpleTextForm;
