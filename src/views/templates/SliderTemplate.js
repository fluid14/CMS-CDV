import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import HeroImage from 'components/Image/HeroImage';
import Slider from 'components/Slider/Slider';
import MainTitle from 'components/text/MainTitle/MainTitle';

const SliderTemplate = () => {
  const data = [
    { url: 'https://source.unsplash.com/random/501x501', title: 'Tytuł' },
    { url: 'https://source.unsplash.com/random/500x500', title: 'Jkiś' },
    { url: 'https://source.unsplash.com/random/502x502', title: 'Kolejny' },
    { url: 'https://source.unsplash.com/random/501x500', title: 'Cos' },
    { url: 'https://source.unsplash.com/random/502x500', title: 'Dupa' },
    { url: 'https://source.unsplash.com/random/500x501', title: 'Jasia' },
  ];
  return (
    <MainTemplate>
      <>
        <HeroImage imgSrc="https://source.unsplash.com/random/1400x801">
          <>Tytuł</>
        </HeroImage>
        <Container>
          <MainTitle className="mb-3">
            <>Tutaj jakiś tytuł</>
          </MainTitle>
          <Slider data={data} />
          <SectionWrap>
            <Paragraph>
              <>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam consequuntur
                necessitatibus eos laudantium neque, molestiae autem perspiciatis quia officia
                similique et ipsum ut illo ipsa quaerat omnis numquam totam? Eius cumque
                perspiciatis aut quo et obcaecati dignissimos. Rem soluta pariatur saepe, deleniti
                optio eos sequi numquam molestias ea necessitatibus ipsam. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Unde doloribus, deserunt expedita possimus libero
                quis exercitationem, eum perferendis maxime natus delectus cum. Eius in eaque nulla
                totam officia explicabo sapiente iure saepe at eveniet aut blanditiis dicta
                possimus, unde voluptatibus ea perferendis exercitationem vitae aliquid maxime
                similique ipsa sed velit. Obcaecati doloremque asperiores qui ipsa fugiat corporis
                esse cupiditate nisi? Totam, magnam. Velit nemo dolorem deserunt, voluptas
                repellendus facere quasi repellat id laudantium iusto nulla obcaecati nihil
                exercitationem ipsam cupiditate eum expedita eveniet dolor placeat? Nisi pariatur
                asperiores dolor animi unde vel magnam cumque, neque, velit quam, voluptates facere
                vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quam. Illum
                expedita cum modi beatae soluta iure quia quisquam perspiciatis cupiditate pariatur
                suscipit asperiores exercitationem quasi deleniti, quod tenetur aut nostrum quis
                rerum commodi. Exercitationem aliquid similique, obcaecati labore facere quos non
                eligendi voluptatem odio reprehenderit laudantium numquam mollitia sed dolor rem
                expedita esse quibusdam quia eveniet asperiores. Ex atque porro in quas blanditiis!
                Perferendis sapiente ea cum assumenda fuga voluptates iure illum, quo quae quam
                magnam odio voluptatibus, alias corrupti ab? Enim dolorum omnis tempora quas nisi
                quo tempore, harum laboriosam aliquam at ab molestiae possimus facere impedit quos.
              </>
            </Paragraph>
          </SectionWrap>
        </Container>
      </>
    </MainTemplate>
  );
};
export default SliderTemplate;
