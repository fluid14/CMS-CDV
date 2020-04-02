import React from 'react';
// import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Quotation from 'components/text/Quotation/Quotation';

const IlustratedArticleTemplate = () => (
  <MainTemplate>
    <HeroImage imgSrc="https://source.unsplash.com/random/1280x500">Tytuł</HeroImage>
    <Container>
      <SectionWrap>
        <Paragraph bold>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est tenetur asperiores nulla
          neque et reprehenderit repellat expedita
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis ad beatae dolor
          aliquid cumque cum quaerat, ipsa unde aut facere incidunt hic, eaque eveniet. Dignissimos,
          et eum, est pariatur nesciunt aliquam, a harum eligendi natus repellat asperiores
          quisquam. Inventore officia exercitationem, expedita voluptatem facere voluptas error
          veritatis fugit rerum atque, suscipit quam, tempora culpa vitae ea blanditiis quaerat illo
          dolorem ipsa temporibus vel iusto esse cupiditate quisquam! Perspiciatis, nesciunt ipsum
          totam facere veritatis obcaecati in sapiente consequatur ipsam, beatae quaerat laborum
          modi amet ab harum explicabo tempora vero reprehenderit necessitatibus unde quibusdam?
          Distinctio recusandae quos a pariatur? Eum, neque.
        </Paragraph>
        <Quotation>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id. Voluptates asperiores
          atque, commodi eveniet quisquam explicabo adipisci dolore incidunt.
        </Quotation>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis ad beatae dolor
          aliquid cumque cum quaerat, ipsa unde aut facere incidunt hic, eaque eveniet. Dignissimos,
          et eum, est pariatur nesciunt aliquam, a harum eligendi natus repellat asperiores
          quisquam. Inventore officia exercitationem, expedita voluptatem facere voluptas error
          veritatis fugit rerum atque, suscipit quam, tempora culpa vitae ea blanditiis quaerat illo
          dolorem ipsa temporibus vel iusto esse cupiditate quisquam! Perspiciatis, nesciunt ipsum
          totam facere veritatis obcaecati in sapiente consequatur ipsam, beatae quaerat laborum
          modi amet ab harum explicabo tempora vero reprehenderit necessitatibus unde quibusdam?
          Distinctio recusandae quos a pariatur? Eum, neque.
        </Paragraph>
      </SectionWrap>
    </Container>
  </MainTemplate>
);

export default IlustratedArticleTemplate;
