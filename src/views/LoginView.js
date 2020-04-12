import React from 'react';
import styled from 'styled-components/macro';
import { Col, Row, Button, FormGroup, Label, Container } from 'reactstrap';
import { Formik, Form as FormikForm, Field } from 'formik';

import axios from 'axios';
import context from 'react-router/modules/RouterContext';

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled(Container)`
  text-align: center;
`;
const LoginView = () => (
  <LoginWrap>
    <TitleContainer fluid="xl">
      <h1 className="display-3 mt-0 mb-2">CMS Cdv</h1>
      <p className="lead mb-0">Wykonali:</p>
      <p className="lead d-block mb-0">Jakub Dolata</p>
      <p className="lead d-block">Filip Baumgart</p>
    </TitleContainer>
    <Row className="mt-5">
      <Col md={12}>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            // const api = process.env.API_URL;
            const { username, password } = values;
            axios
              .post('http://127.0.0.1:5000/login', {
                username: username,
                password: password,
              })
              .then(function(response) {
                console.log(response);
              })
              .catch(function(error) {
                console.log(error);
              });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="username">Login</Label>
                    <Field type="text" className="form-control" name="username" required />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="password">Hasło</Label>
                    <Field type="password" className="form-control" name="password" required />
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit" color="info" disabled={isSubmitting}>
                Zaloguj
              </Button>
            </FormikForm>
          )}
        </Formik>
      </Col>
    </Row>
  </LoginWrap>
);

export default LoginView;
