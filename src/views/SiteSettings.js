import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Button, Col, Container, Row } from 'reactstrap';
import WithoutHeroImg from '../components/Helpers/WithoutHeroImg';
import MainTemplate from '../templates/MainTemplate';
import Title from '../components/text/Title/Title';
import StyledInput from '../components/text/Input/Input';
import { UserContextConsumer } from '../context/userContext/UserContext';
import addArticle from './forms/addArticle';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const SiteSettings = () => (
  <MainTemplate>
    <UserContextConsumer>
      {context => {
        const pageType = 'about_us_page';
        const { id } = context.user;
        return (
          <WithoutHeroImg>
            <StyledContainer>
              <Title className="mb-5">
                <>Ustawienia strony</>
              </Title>
              <Row>
                <Formik
                  initialValues={{
                    short_title: 'wef',
                    short_description: 'wef',
                    preview_image: 'wef',
                    hero_img1: '',
                    hero_img2: '',
                    title2: '',
                    paragraph: '',
                    email: '',
                    street: '',
                    city: '',
                    zip_code: '',
                    phone: '',
                    latitude: '',
                    longitude: '',
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
                        <p>Kontakt:</p>
                        <Col md="12">
                          <StyledInput
                            type="text"
                            name="hero_img1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.hero_img1}
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
                            name="zip_code"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.zip_code}
                            placeholder="Kod pocztowy"
                            required
                          />
                        </Col>
                        <Col md="12">
                          <StyledInput
                            as="textarea"
                            className="form-control"
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder="Numer telefony"
                            required
                          />
                        </Col>
                        <p className="mt-4">O nas:</p>
                        <Col md="12">
                          <StyledInput
                            type="text"
                            name="hero_img2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.hero_img2}
                            placeholder="Zdjęcie nagłówka - o nas"
                            required
                          />
                        </Col>
                        <Col md="12">
                          <StyledInput
                            type="text"
                            name="title2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title2}
                            placeholder="Tytuł nagłówka - o nas"
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
                            name="latitude"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.latitude}
                            placeholder="Latitude"
                            required
                          />
                        </Col>
                        <Col md="12">
                          <StyledInput
                            as="textarea"
                            className="form-control"
                            type="text"
                            name="longitude"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.longitude}
                            placeholder="Longitude"
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
        );
      }}
    </UserContextConsumer>
  </MainTemplate>
);

export default SiteSettings;
