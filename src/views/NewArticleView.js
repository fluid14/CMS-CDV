/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const LayoutName = styled.p`
  font-size: 1.2rem;
  font-weight: 1.5rem;
  margin-bottom: 2em;
  color: var(--dark);
`;

const StyledInput = styled(Input)`
  margin-bottom: 1em;
`;

const NewArticleView = () => {
  return (
    <MainTemplate>
      <WithoutHeroImg>
        <StyledContainer>
          <Title className="mb-2">
            <>Nowy artykuł</>
          </Title>
          <LayoutName>
            <b>Nazwa układu:</b> artykuł
          </LayoutName>
          <Row>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }
                return errors;
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
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className="col-12 no-gutters" onSubmit={handleSubmit}>
                  <Col sm="6">
                    <StyledInput
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </Col>
                  <Col sm="6">
                    <StyledInput
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                  </Col>
                  <Col sm="6">
                    <Button color="info" type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Col>
                </form>
              )}
            </Formik>
          </Row>
        </StyledContainer>
      </WithoutHeroImg>
    </MainTemplate>
  );
};

export default NewArticleView;
