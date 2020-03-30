import React from 'react';
import styled from 'styled-components/macro';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

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
    <Row class="mt-5">
      <Col md={12}>
        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="login">Login</Label>
                <Input type="text" name="login" id="login" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="password">Hasło</Label>
                <Input type="password" name="password" id="password" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Zaloguj się</Button>
        </Form>
      </Col>
    </Row>
  </LoginWrap>
);

export default LoginView;
