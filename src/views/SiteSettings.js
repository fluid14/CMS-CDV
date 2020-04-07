import React from 'react';
import styled from 'styled-components';
import WithoutHeroImg from '../components/Helpers/WithoutHeroImg';
import MainTemplate from '../templates/MainTemplate';
import { Button, Col, Container, Row } from 'reactstrap';
import Title from '../components/text/Title/Title';
import StyledInput from '../components/text/Input/Input';
import { Formik } from 'formik';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const SiteSettings = () => (
  <MainTemplate>
    <WithoutHeroImg>
      <StyledContainer>
        <Title className="mb-5">
          <>Ustawienia strony</>
        </Title>
        <Row>
          <Formik
            initialValues={{
              imageHeaderContact: '',
              titleHeaderContact: '',
              email: '',
              street: '',
              city: '',
              zip: '',
              tel: '',
              imageHeaderAbout: '',
              titleHeaderAbout: '',
              paragraphAbout: '',
              lat: '',
              lng: '',
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
                  <p>Kontakt:</p>
                  <Col md="12">
                    <StyledInput
                      type="text"
                      name="imageHeaderContact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.imageHeaderContact}
                      placeholder="Zdjęcie nagłówka - kontakt"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      type="text"
                      name="titleHeaderContact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.titleHeaderContact}
                      placeholder="Tytuł nagłówka - kontakt"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      as="textarea"
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="E-mail"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      className="form-control"
                      type="text"
                      name="street"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street}
                      placeholder="Ulica"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      as="textarea"
                      className="form-control"
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      placeholder="Miejscowość"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      className="form-control"
                      type="text"
                      name="zip"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.zip}
                      placeholder="Kod pocztowy"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      as="textarea"
                      className="form-control"
                      type="text"
                      name="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tel}
                      placeholder="Numer telefony"
                      required
                    />
                  </Col>
                  <p className="mt-4">O nas:</p>
                  <Col md="12">
                    <StyledInput
                      type="text"
                      name="imageHeaderAbout"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.imageHeaderAbout}
                      placeholder="Zdjęcie nagłówka - o nas"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      type="text"
                      name="titleHeaderAbout"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.titleHeaderAbout}
                      placeholder="Tytuł nagłówka - o nas"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      as="textarea"
                      className="form-control"
                      type="text"
                      name="paragraphAbout"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.paragraphAbout}
                      placeholder="Paragraf - o nas"
                      required
                    />
                  </Col>
                  <p className="mt-4">Lokalizacja na mapie:</p>
                  <Col md="12">
                    <StyledInput
                      as="textarea"
                      className="form-control"
                      type="text"
                      name="lat"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lat}
                      placeholder="Lat"
                      required
                    />
                  </Col>
                  <Col md="12">
                    <StyledInput
                      as="textarea"
                      className="form-control"
                      type="text"
                      name="lng"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lng}
                      placeholder="Lng"
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
        </Row>
      </StyledContainer>
    </WithoutHeroImg>
  </MainTemplate>
);

export default SiteSettings;
