import React, { Component } from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col } from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';
import LinkAdmin from 'components/navigations/LinkAdmin/LinkAdmin';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

class AdminView extends Component {
  state = {
    userId: '',
  };
  componentDidMount() {
    this.setState({
      userId: sessionStorage.getItem('token'),
    });
  }

  render() {
    const { userId } = this.state;
    return (
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
                <LinkAdmin link={`/admin/all-articles/${userId}`}>
                  <>Moje artykuły</>
                </LinkAdmin>
              </Col>
              <Col sm="12">
                <LinkAdmin link={`/admin/all-articles/${userId}`}>
                  <>Edytuj artykuł</>
                </LinkAdmin>
              </Col>
              {sessionStorage.getItem('role') === 'admin' && (
                <Col sm="12">
                  <LinkAdmin link="/settings">
                    <>Ustawienia strony</>
                  </LinkAdmin>
                </Col>
              )}
            </Row>
          </StyledContainer>
        </WithoutHeroImg>
      </MainTemplate>
    );
  }
}

export default AdminView;
