import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Row, Col, Label } from 'reactstrap';
import StyledInput from '../../components/text/Input/Input';
import { UserContextConsumer } from '../../context/userContext/UserContext';
import addArticle from './addArticle';
import convertToBase64 from './convertToBase64';
import getArticle from '../templates/getArticle';
import editArticle from './editArticle';
import StyledCard from '../../components/StyledCard/StyledCard';
import PreloaderNewArticle from '../../components/Preloader/PreloaderNewArticle';

class SliderForm extends Component {
  state = {
    preloader: false,
    file: null,
    base64URL: [],
    article: {},
  };

  componentDidMount() {
    const { edit } = this.props;
    if (edit) {
      getArticle(this.changeStateArticle, edit);
    }
  }

  showPreloader = () => {
    this.setState({
      preloader: true,
    });
  };

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
    if (edit) {
      return {
        short_title: `${article.short_title}`,
        short_description: `${article.short_description}`,
        preview_image: '',
        image: '',
        slider_image1: '',
        slider_image2: '',
        slider_image3: '',
        slider_image4: '',
        slider_image5: '',
        slider_image6: '',
        slider_title1: `${article.slider_title1}`,
        slider_title2: `${article.slider_title2}`,
        slider_title3: `${article.slider_title3}`,
        slider_title4: `${article.slider_title4}`,
        slider_title5: `${article.slider_title5}`,
        slider_title6: `${article.slider_title6}`,
        paragraph: `${article.paragraph}`,
        header: `${article.header}`,
      };
    } else {
      return {
        short_title: '',
        short_description: '',
        preview_image: '',
        image: '',
        slider_image1: '',
        slider_image2: '',
        slider_image3: '',
        slider_image4: '',
        slider_image5: '',
        slider_image6: '',
        slider_title1: '',
        slider_title2: '',
        slider_title3: '',
        slider_title4: '',
        slider_title5: '',
        slider_title6: '',
        paragraph: '',
        header: '',
      };
    }
  };

  render() {
    const { edit, history } = this.props;
    const { article, preloader } = this.state;
    console.log(article);
    return (
      <UserContextConsumer>
        {context => {
          const pageType = 'big_slider_page';
          const { id } = context.user;
          return (
            <Formik
              enableReinitialize
              initialValues={this.initialData(edit, article)}
              onSubmit={(values, { setSubmitting }) => {
                const { base64URL } = this.state;
                let data = values;
                data.preview_image = base64URL[0];
                data.image = base64URL[1];
                data.slider_image1 = base64URL[2];
                data.slider_image2 = base64URL[3];
                data.slider_image3 = base64URL[4];
                data.slider_image4 = base64URL[5];
                data.slider_image5 = base64URL[6];
                data.slider_image6 = base64URL[7];
                console.log(data);
                if (edit) {
                  editArticle(edit, pageType, data, history);
                } else {
                  addArticle(id, pageType, data, history);
                }
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
                        <Label>Ogólne:</Label>
                        <StyledInput
                          type="text"
                          name="short_title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.short_title}
                          placeholder="Krótki tytuł"
                          required
                        />

                        <StyledInput
                          type="text"
                          name="short_description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.short_description}
                          placeholder="Krótki opis"
                          required
                        />

                        <Label for="preview_image">Miniaturka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="preview_image"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Nagłówek:</Label>
                        <Label for="image">Zdjęcie nagłówka</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="image"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledInput
                        as="textarea"
                        className="form-control"
                        type="text"
                        name="header"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.header}
                        placeholder="Tytuł"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Slide:</Label>
                        <Label for="slider_image1">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="slider_image1"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <StyledInput
                          className="form-control"
                          type="text"
                          name="slider_title1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.slider_title1}
                          placeholder="Podpis"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Slide:</Label>
                        <Label for="slider_image2">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="slider_image2"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />

                        <StyledInput
                          className="form-control"
                          type="text"
                          name="slider_title2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.slider_title2}
                          placeholder="Podpis"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Slide:</Label>
                        <Label for="slider_image3">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="slider_image3"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="slider_title3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.slider_title3}
                          placeholder="Podpis"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Slide:</Label>
                        <Label for="slider_image4">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="slider_image4"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="slider_title4"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.slider_title4}
                          placeholder="Podpis"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Slide:</Label>
                        <Label for="slider_image5">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="slider_image5"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="slider_title5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.slider_title5}
                          placeholder="Podpis"
                          required
                        />
                      </StyledCard>
                    </Col>
                    <Col md="12">
                      <StyledCard>
                        <Label>Slide:</Label>
                        <Label for="slider_image6">Zdjęcie</Label>
                        <StyledInput
                          type="file"
                          accept="image/png, image/jpeg"
                          name="slider_image6"
                          onBlur={handleBlur}
                          onChange={e => convertToBase64(e, this.state, this.changeState)}
                          required
                        />
                        <StyledInput
                          className="form-control"
                          type="text"
                          name="slider_title6"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.slider_title6}
                          placeholder="Podpis"
                          required
                        />
                      </StyledCard>
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
                      <Button
                        color="info"
                        onClick={this.showPreloader}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Dodaj
                      </Button>
                      {preloader && <PreloaderNewArticle />}
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

export default SliderForm;
