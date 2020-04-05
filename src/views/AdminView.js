import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col } from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';
import LinkAdmin from 'components/navigations/LinkAdmin/LinkAdmin';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const AdminView = () => (
  <MainTemplate>
    <WithoutHeroImg>
      <StyledContainer>
        <Title className="mb-5">
          <>Panel administracyjny</>
        </Title>
        <Row>
          <Col sm="12">
            <LinkAdmin link="/new/choose-article">
              <>Nowy artykuł</>
            </LinkAdmin>
          </Col>
          <Col sm="12">
            <LinkAdmin link="/blog/all-articles/dsfg">
              <>Moje artykuły</>
            </LinkAdmin>
          </Col>
          <Col sm="12">
            <LinkAdmin link="/blog">
              <>Edytuj artykuł</>
            </LinkAdmin>
          </Col>
          <Col sm="12">
            <LinkAdmin link="/blog">
              <>Ustawienia konta</>
            </LinkAdmin>
          </Col>
          <Col sm="12">
            <LinkAdmin link="/blog">
              <>Ustawienia strony</>
            </LinkAdmin>
          </Col>
        </Row>
      </StyledContainer>
    </WithoutHeroImg>
  </MainTemplate>
);

export default AdminView;
