/* eslint-disable react/self-closing-comp */
import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import Contact from 'components/Contact/Contact';
import Map from 'components/Map/Map';

const ContactView = () => {
  return (
    <MainTemplate>
      <>
        <HeroImage imgSrc="https://source.unsplash.com/random/1200x801">
          <>Tytuł</>
        </HeroImage>
        <Container>
          <Contact
            mail="mail@gmail.com"
            phone="888111222"
            city="Warszawa"
            zip="01-001"
            street="Kutrzeby 12"
          />
        </Container>
        <Map lat="-1.2884" lng="36.8233" />
      </>
    </MainTemplate>
  );
};

export default ContactView;
