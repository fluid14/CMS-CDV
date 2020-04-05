import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Contact from 'components/Contact/Contact';

const AboutUsView = () => (
  <MainTemplate>
    <>
      <HeroImage imgSrc="https://source.unsplash.com/random/1200x801">
        <>Tytuł</>
      </HeroImage>
      <Container>
        <SectionWrap>
          <Paragraph>
            <>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et commodi, dolorem
              ipsa vel repellendus sit iusto magnam consequatur molestiae. Consequuntur sed
              voluptatibus libero unde corrupti illum nulla, consequatur repellat, totam fugit
              laborum inventore aliquid itaque rem, velit minus asperiores ex distinctio excepturi
              exercitationem perferendis? Beatae nobis sint sunt expedita laborum, tempora fugiat,
              quae facere libero cumque ab aperiam odio. Perferendis dicta laborum ut architecto
              praesentium, quidem ad magnam laboriosam consectetur sunt dolore natus voluptatibus
              nostrum exercitationem est ab quas. Hic iusto doloribus recusandae, ab eaque, harum
              possimus quia dolores iure aliquid fugit quasi. Minus cumque inventore sed, eligendi,
              quas, dolores repellendus autem sit debitis tenetur at. Accusantium autem laborum
              aliquam pariatur sit mollitia molestias, corrupti dolorum quia rerum temporibus earum
              nisi odio distinctio fugit culpa modi, animi eos quas illo ab, cupiditate quisquam
              possimus. Earum, eaque vitae est quas reiciendis aut adipisci atque illo modi
              dignissimos dolorum repellat consectetur iusto impedit voluptatum fuga quod,
              repudiandae sint nostrum? Exercitationem a pariatur molestias labore, architecto quia
              minus enim illum, maiores itaque delectus eos, optio necessitatibus omnis eaque
              voluptas repellendus nisi! Repudiandae recusandae sequi perspiciatis, labore hic
              similique nostrum vel non vitae esse odio nisi magnam delectus iure consequuntur
              facere cupiditate quis.
            </>
          </Paragraph>
        </SectionWrap>
        <Contact
          mail="mail@gmail.com"
          phone="888111222"
          city="Warszawa"
          zip="01-001"
          street="Kutrzeby 12"
        />
      </Container>
    </>
  </MainTemplate>
);

export default AboutUsView;
