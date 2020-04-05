import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Image from 'components/Image/Image';

const StyledImage = styled(Image)`
  margin-bottom: 2em;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: justify;
`;

const HeroTemplate = () => (
  <MainTemplate>
    <>
      <HeroImage imgSrc="https://source.unsplash.com/random/1280x500">
        <>Tytuł</>
      </HeroImage>
      <Container>
        <SectionWrap>
          <MainTitle>
            <>Tytuł</>
          </MainTitle>
          <Row>
            <Col md="4" className="mt-5">
              <StyledImage src="https://source.unsplash.com/random/502x250" />
              <StyledParagraph>
                <>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est tenetur asperiores
                  nulla neque et reprehenderit repellat expedita fuga illum reiciendis vero nisi
                  quasi similique officiis, quisquam quos magni aperiam esse corrupti nihil?
                  Obcaecati veritatis earum, mollitia voluptatibus sapiente porro expedita?
                  Accusamus placeat quisquam nam nostrum quos enim non officiis consequatur eum id
                  quod ducimus cupiditate similique, ea itaque beatae dignissimos voluptas! Tenetur
                  eum eos vel inventore, consequatur quidem doloremque at voluptatum quasi saepe ut
                  officiis cumque quos cum exercitationem id ad veniam libero dolorem consectetur
                  nobis ipsum possimus molestias! Reprehenderit nesciunt delectus at quasi ullam
                  repellat eos rerum libero possimus?
                </>
              </StyledParagraph>
            </Col>
            <Col md="4" className="mt-5">
              <StyledImage src="https://source.unsplash.com/random/501x250" />
              <StyledParagraph>
                <>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est tenetur asperiores
                  nulla neque et reprehenderit repellat expedita fuga illum reiciendis vero nisi
                  quasi similique officiis, quisquam quos magni aperiam esse corrupti nihil?
                  Obcaecati veritatis earum, mollitia voluptatibus sapiente porro expedita?
                  Accusamus placeat quisquam nam nostrum quos enim non officiis consequatur eum id
                  quod ducimus cupiditate similique, ea itaque beatae dignissimos voluptas! Tenetur
                  eum eos vel inventore, consequatur quidem doloremque at voluptatum quasi saepe ut
                  officiis cumque quos cum exercitationem id ad veniam libero dolorem consectetur
                  nobis ipsum possimus molestias! Reprehenderit nesciunt delectus at quasi ullam
                  repellat eos rerum libero possimus?
                </>
              </StyledParagraph>
            </Col>
            <Col md="4" className="mt-5">
              <StyledImage src="https://source.unsplash.com/random/500x250" />
              <StyledParagraph>
                <>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est tenetur asperiores
                  nulla neque et reprehenderit repellat expedita fuga illum reiciendis vero nisi
                  quasi similique officiis, quisquam quos magni aperiam esse corrupti nihil?
                  Obcaecati veritatis earum, mollitia voluptatibus sapiente porro expedita?
                  Accusamus placeat quisquam nam nostrum quos enim non officiis consequatur eum id
                  quod ducimus cupiditate similique, ea itaque beatae dignissimos voluptas! Tenetur
                  eum eos vel inventore, consequatur quidem doloremque at voluptatum quasi saepe ut
                  officiis cumque quos cum exercitationem id ad veniam libero dolorem consectetur
                  nobis ipsum possimus molestias! Reprehenderit nesciunt delectus at quasi ullam
                  repellat eos rerum libero possimus?
                </>
              </StyledParagraph>
            </Col>
          </Row>
        </SectionWrap>
      </Container>
    </>
  </MainTemplate>
);

export default HeroTemplate;
