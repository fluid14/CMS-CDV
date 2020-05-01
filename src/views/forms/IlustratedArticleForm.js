import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';

class IlustratedArticleForm extends Component {
  render() {
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'ilustrated_page';
          const { id } = context.user;
          return (
            <Formik
              initialValues={{
                short_title: '',
                short_description: '',
                preview_image: '',
                image: '',
                paragraph1: '',
                paragraph2: '',
                paragraph3: '',
                quote: '',
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
                        as="textarea"
                        className="form-control"
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
                        as="textarea"
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
                        as="textarea"
                        className="form-control"
                        type="text"
                        name="paragraph1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.paragraph1}
                        placeholder="Paragraf wyrózniony"
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
                    <Col md="12">
                      <StyledInput
                        as="textarea"
                        className="form-control"
                        type="text"
                        name="quote"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.quote}
                        placeholder="Cytat"
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

export default IlustratedArticleForm;
