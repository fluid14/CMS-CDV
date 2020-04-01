import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import MainTitle from 'components/text/MainTitle/MainTitle';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Gallery from 'components/Gallery/Gallery';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';

const GalleryTemplate = () => (
  <MainTemplate>
    <WithoutHeroImg>
      <SectionWrap m="100">
        <MainTitle>Galeria Tytuł</MainTitle>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam consequuntur
          necessitatibus eos laudantium neque, molestiae autem perspiciatis quia officia similique
          et ipsum ut illo ipsa quaerat omnis numquam totam? Eius cumque perspiciatis aut quo et
          obcaecati dignissimos. Rem soluta pariatur saepe, deleniti optio eos sequi numquam
          molestias ea necessitatibus ipsam.
        </Paragraph>
      </SectionWrap>
      <SectionWrap>
        <Gallery />
      </SectionWrap>
    </WithoutHeroImg>
  </MainTemplate>
);

export default GalleryTemplate;
