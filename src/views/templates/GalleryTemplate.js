import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Gallery from 'components/Gallery/Gallery';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import HeroImage from 'components/Image/HeroImage';

const GalleryTemplate = () => (
  <MainTemplate>
    <>
      <HeroImage imgSrc="https://source.unsplash.com/random/1200x801">
        <>Tytuł</>
      </HeroImage>
      <Container>
        <WithoutHeroImg>
          <SectionWrap m="100">
            <MainTitle>
              <>Galeria Tytuł</>
            </MainTitle>
            <Paragraph>
              <>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam consequuntur
                necessitatibus eos laudantium neque, molestiae autem perspiciatis quia officia
                similique et ipsum ut illo ipsa quaerat omnis numquam totam? Eius cumque
                perspiciatis aut quo et obcaecati dignissimos. Rem soluta pariatur saepe, deleniti
                optio eos sequi numquam molestias ea necessitatibus ipsam.
              </>
            </Paragraph>
          </SectionWrap>
          <SectionWrap>
            <Gallery />
          </SectionWrap>
        </WithoutHeroImg>
      </Container>
    </>
  </MainTemplate>
);

export default GalleryTemplate;
