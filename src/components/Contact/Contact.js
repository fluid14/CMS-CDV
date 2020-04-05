import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactWrap = styled.div`
  width: 100%;
  background-color: var(--light);
  padding: 20px 40px;
`;

const Title = styled.h1`
  font-weight: 700;
  /* text-align: center; */
  letter-spacing: 5px;
  margin-bottom: 1.5em;
`;

const Info = styled.p`
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: #000;
  transition: 0.3s ease;
  &:hover {
    opacity: 0.5;
    color: #000;
    text-decoration: none;
  }

  & span {
    font-weight: 300;
  }
`;

const Contact = ({ mail, phone, street, zip, city }) => (
  <ContactWrap>
    <Title>Skontaktuj się z nami!</Title>
    <Info as="a" href={`mailto: ${mail}`}>
      Email: <span>{mail}</span>
    </Info>
    <Info as="a" href={`tel: ${phone}`}>
      Numer telefonu: <span>{phone}</span>
    </Info>
    <Info>
      Adress:{' '}
      <span>
        ul.{street}, {zip} {city}
      </span>
    </Info>
  </ContactWrap>
);

Contact.propTypes = {
  mail: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Contact;
