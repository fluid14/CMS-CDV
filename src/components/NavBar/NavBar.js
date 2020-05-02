import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { UserContextConsumer } from '../../context/userContext/UserContext';

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const StyledNavbarText = styled(NavbarText)`
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }
`;

const StyledNvItem = styled(NavItem)`
  padding-left: 0.7rem;
  padding-right: 0.7rem;
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    sessionStorage.clear();
    history.push('/blog');
  };

  const toggle = () => setIsOpen(!isOpen);
  let doneUserName = '';
  const userName = sessionStorage.getItem('userName');
  if (userName) {
    doneUserName = userName.charAt(0).toUpperCase() + userName.substr(1);
  }

  return (
    <UserContextConsumer>
      {context => (
        <Wrap>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/blog">CMS CDV</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <StyledNvItem>
                  <NavLink tag={Link} to="/blog">
                    Blog
                  </NavLink>
                </StyledNvItem>
                <StyledNvItem>
                  <NavLink tag={Link} to="/about">
                    O nas
                  </NavLink>
                </StyledNvItem>
                <StyledNvItem>
                  <NavLink tag={Link} to="/contact">
                    Kontakt
                  </NavLink>
                </StyledNvItem>
              </Nav>
              {userName && (
                <>
                  <StyledNavbarText className="mr-4" onClick={logout}>
                    Wyloguj
                  </StyledNavbarText>
                  <StyledNavbarText tag={Link} to="/admin">
                    {doneUserName}
                  </StyledNavbarText>
                </>
              )}
              {!userName && (
                <StyledNavbarText tag={Link} to="/login">
                  Zaloguj
                </StyledNavbarText>
              )}
            </Collapse>
          </Navbar>
        </Wrap>
      )}
    </UserContextConsumer>
  );
};

export default NavBar;
