import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import Paragraph from 'components/text/Paragraph/Paragraph';

const SimpleTextTemplate = () => (
  <MainTemplate>
    <HeroImage imgSrc="https://source.unsplash.com/random/1280x500" />
    <Container>
      <SectionWrap>
        <MainTitle>Tutaj jeszcze jeden tytuł</MainTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est tenetur asperiores nulla
          neque et reprehenderit repellat expedita fuga illum reiciendis vero nisi quasi similique
          officiis, quisquam quos magni aperiam esse corrupti nihil? Obcaecati veritatis earum,
          mollitia voluptatibus sapiente porro expedita? Accusamus placeat quisquam nam nostrum quos
          enim non officiis consequatur eum id quod ducimus cupiditate similique, ea itaque beatae
          dignissimos voluptas! Tenetur eum eos vel inventore, consequatur quidem doloremque at
          voluptatum quasi saepe ut officiis cumque quos cum exercitationem id ad veniam libero
          dolorem consectetur nobis ipsum possimus molestias! Reprehenderit nesciunt delectus at
          quasi ullam repellat eos rerum libero possimus?
        </Paragraph>
      </SectionWrap>
    </Container>
  </MainTemplate>
);

export default SimpleTextTemplate;
