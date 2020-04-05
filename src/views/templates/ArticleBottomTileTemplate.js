import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import ParagraphTile from 'components/ParagraphTile/ParagraphTile';
import MainTitle from 'components/text/MainTitle/MainTitle';
import Paragraph from 'components/text/Paragraph/Paragraph';

const ArticleBottomTileTemplate = () => (
  <MainTemplate>
    <>
      <HeroImage imgSrc="https://source.unsplash.com/random/1280x500">
        <>Tytuł</>
      </HeroImage>
      <Container>
        <SectionWrap>
          <MainTitle>Tytuł</MainTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit quia qui ratione
            earum architecto, facere pariatur deleniti at omnis, commodi laudantium voluptate rem
            cumque explicabo tempora obcaecati dolor aut illum reprehenderit laborum ipsa dolore
            quis non. Aliquid necessitatibus optio blanditiis atque maiores, hic a, at sed eligendi
            non officia tenetur esse provident quibusdam quidem fugit inventore vero! Totam quis
            eius incidunt quidem, soluta aperiam cupiditate rerum, illum vitae illo distinctio
            eveniet officia minus, earum quasi excepturi? Enim ipsam fugiat voluptate maiores dicta
            dignissimos et deserunt cum rerum iste. Quam, architecto reiciendis autem sapiente
            nostrum magnam ipsa dicta exercitationem provident?
          </Paragraph>
        </SectionWrap>
        <SectionWrap>
          <ParagraphTile title="Tytuł" imgSrc="https://source.unsplash.com/random/500x300">
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt similique
              inventore temporibus laudantium, itaque nulla quasi voluptatibus, ex dolore nisi esse
              commodi aliquam consequuntur magnam labore? Autem natus iusto explicabo. Architecto
              maxime minus ducimus ipsa, velit modi ab! Minima quos harum rem! Vel nobis, commodi
              iusto placeat aperiam impedit minima, deleniti explicabo reiciendis in qui porro sequi
              corrupti atque tempora, doloribus odio? Asperiores, perspiciatis doloremque aspernatur
              voluptatum quas inventore.
            </>
          </ParagraphTile>
        </SectionWrap>
      </Container>
    </>
  </MainTemplate>
);

export default ArticleBottomTileTemplate;
