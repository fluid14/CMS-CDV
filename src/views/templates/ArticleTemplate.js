import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Image from 'components/Image/Image';

const ImageStyled = styled(Image)`
  margin: 2em 0;
`;

const ArticleTemplate = () => (
  <MainTemplate>
    <HeroImage imgSrc="https://source.unsplash.com/random/1280x500">
      <>Tytuł</>
    </HeroImage>
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
        <ImageStyled src="https://source.unsplash.com/random/1170x500" />
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
        <ImageStyled src="https://source.unsplash.com/random/1170x501" />
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

export default ArticleTemplate;
