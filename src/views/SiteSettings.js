import React, { Component } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Button, Col, Container, Label, Row } from 'reactstrap';
import WithoutHeroImg from '../components/Helpers/WithoutHeroImg';
import MainTemplate from '../templates/MainTemplate';
import Title from '../components/text/Title/Title';
import StyledInput from '../components/text/Input/Input';
import { UserContextConsumer } from '../context/userContext/UserContext';
import getArticle from './templates/getArticle';
import convertToBase64 from './forms/convertToBase64';
import editArticle from './forms/editArticle';
import StyledCard from '../components/StyledCard/StyledCard';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

class SiteSettings extends Component {
  state = {
    file: null,
    base64URL: [],
    article: {},
  };

  componentDidMount() {
    getArticle(this.changeStateArticle, 85);
  }

  changeStateArticle = article => {
    this.setState({
      article,
    });
  };

  changeState = result => {
    this.setState(state => {
      let imgList = state.base64URL.concat(result);
      return {
        base64URL: imgList,
      };
    });
  };

  initialData = (edit, article) => {
    return {
      short_title: `${article.short_title}`,
      short_description: 'about_us_page',
      preview_image: 'ghj',
      hero_img1: '',
      hero_img2: '',
      title1: `${article.short_title}`,
      title2: `${article.title2}`,
      paragraph: `${article.paragraph}`,
      email: `${article.email}`,
      street: `${article.street}`,
      city: `${article.city}`,
      zip_code: `${article.zip_code}`,
      phone: `${article.phone}`,
      latitude: `${article.latitude}`,
      longitude: `${article.longitude}`,
    };
  };

  render() {
    const { article } = this.state;
    console.log(article);
    return (
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
                      enableReinitialize
                      initialValues={this.initialData(85, article)}
                      onSubmit={(values, { setSubmitting }) => {
                        const { base64URL } = this.state;
                        let data = values;
                        data.hero_img1 = base64URL[0];
                        data.hero_img2 = base64URL[1];
                        console.log(data);
                        editArticle(85, pageType, data);
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
                              <StyledCard>
                                <Label>O nas:</Label>
                                <Label for="hero_img1">Zdjęcie nagłówka</Label>
                                <StyledInput
                                  type="file"
                                  accept="image/png, image/jpeg"
                                  name="hero_img1"
                                  onBlur={handleBlur}
                                  onChange={e => convertToBase64(e, this.state, this.changeState)}
                                  required
                                />
                                <Label for="short_title">Tytuł nagłówka</Label>
                                <StyledInput
                                  type="text"
                                  name="short_title"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.short_title}
                                  placeholder="Tytuł nagłówka"
                                  required
                                />
                              </StyledCard>
                            </Col>
                            <Col md="12">
                              <StyledCard>
                                <Label>Kontakt:</Label>
                                <Label for="hero_img2">Zdjęcie nagłówka</Label>
                                <StyledInput
                                  type="file"
                                  accept="image/png, image/jpeg"
                                  name="hero_img2"
                                  onBlur={handleBlur}
                                  onChange={e => convertToBase64(e, this.state, this.changeState)}
                                  required
                                />
                                <Label for="title2">Tytuł nagłówka</Label>
                                <StyledInput
                                  type="text"
                                  name="title2"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.title2}
                                  placeholder="Tytuł nagłówka"
                                  required
                                />
                                <Label for="paragraph">Paragraf</Label>
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
                                <Label for="email">E-mail</Label>
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
                                <Label for="street">Ulica</Label>
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
                                <Label for="city">Miasto</Label>
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
                                <Label for="zip_code">Kod pocztowy</Label>
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
                                <Label for="phone">Telefon</Label>
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
                                <Label for="latitude">Długość geograficzna</Label>
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
                                <Label for="longitude">Szerokość geograficzna</Label>
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
                              </StyledCard>
                            </Col>
                            <Button color="info" type="submit" disabled={isSubmitting}>
                              Zapisz
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
  }
}

export default SiteSettings;
