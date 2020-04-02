import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import ParagraphTile from 'components/ParagraphTile/ParagraphTile';

const StyledParagraphTile = styled(ParagraphTile)`
  margin-bottom: 2em;
`;

const ArticleTilesTemplate = () => (
  <MainTemplate>
    <>
      <HeroImage imgSrc="https://source.unsplash.com/random/1280x500">
        <>Tytuł</>
      </HeroImage>
      <Container>
        <SectionWrap>
          <StyledParagraphTile title="Tytuł" imgSrc="https://source.unsplash.com/random/500x300">
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt similique
              inventore temporibus laudantium, itaque nulla quasi voluptatibus, ex dolore nisi esse
              commodi aliquam consequuntur magnam labore? Autem natus iusto explicabo. Architecto
              maxime minus ducimus ipsa, velit modi ab! Minima quos harum rem! Vel nobis, commodi
              iusto placeat aperiam impedit minima, deleniti explicabo reiciendis in qui porro sequi
              corrupti atque tempora, doloribus odio? Asperiores, perspiciatis doloremque aspernatur
              voluptatum quas inventore.
            </>
          </StyledParagraphTile>
          <StyledParagraphTile
            reverse
            title="Tytuł"
            imgSrc="https://source.unsplash.com/random/500x300"
          >
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt similique
              inventore temporibus laudantium, itaque nulla quasi voluptatibus, ex dolore nisi esse
              commodi aliquam consequuntur magnam labore? Autem natus iusto explicabo. Architecto
              maxime minus ducimus ipsa, velit modi ab! Minima quos harum rem! Vel nobis, commodi
              iusto placeat aperiam impedit minima, deleniti explicabo reiciendis in qui porro sequi
              corrupti atque tempora, doloribus odio? Asperiores, perspiciatis doloremque aspernatur
              voluptatum quas inventore.
            </>
          </StyledParagraphTile>
          <StyledParagraphTile title="Tytuł" imgSrc="https://source.unsplash.com/random/500x300">
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt similique
              inventore temporibus laudantium, itaque nulla quasi voluptatibus, ex dolore nisi esse
              commodi aliquam consequuntur magnam labore? Autem natus iusto explicabo. Architecto
              maxime minus ducimus ipsa, velit modi ab! Minima quos harum rem! Vel nobis, commodi
              iusto placeat aperiam impedit minima, deleniti explicabo reiciendis in qui porro sequi
              corrupti atque tempora, doloribus odio? Asperiores, perspiciatis doloremque aspernatur
              voluptatum quas inventore.
            </>
          </StyledParagraphTile>
        </SectionWrap>
      </Container>
    </>
  </MainTemplate>
);

export default ArticleTilesTemplate;
