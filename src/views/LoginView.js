import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import styled from 'styled-components/macro';
import { Col, Row, Button, FormGroup, Label, Container } from 'reactstrap';
import { Formik, Form as FormikForm, Field } from 'formik';

import axios from 'axios';
import { UserContextConsumer, UserContextProvider } from '../context/userContext/UserContext';

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

const LoginView = () => {
  const history = useHistory();
  const login = (username, password, context) => {
    axios
      .post('http://127.0.0.1:5000/login', {
        username,
        password,
      })
      .then(response => {
        context.loginUser('userName', username);
        context.loginUser('id', response.data.id);
        context.loginUser('role', response.data.role);
        sessionStorage.setItem('token', response.data.id);
        sessionStorage.setItem('role', response.data.role);
        sessionStorage.setItem('userName', username);
        sessionStorage.setItem('logged', 'true');
        history.push('/blog');
      })
      .catch(error => {
        console.log('Nieprawidłowy login lub hasło');
        console.log(error);
      });
  };
  if (sessionStorage.getItem('logged') == 'true') {
    return <Redirect to="/blog" />;
  }
  return (
    <UserContextProvider>
      <UserContextConsumer>
        {context => (
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
                    const { username, password } = values;
                    login(username, password, context);
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
                            <Field
                              type="password"
                              className="form-control"
                              name="password"
                              required
                            />
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
        )}
      </UserContextConsumer>
    </UserContextProvider>
  );
};

export default LoginView;
