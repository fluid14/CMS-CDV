import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrap>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">CMS CDV</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/blog">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                O nas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">
                Kontakt
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText tag={Link} to="/admin">
            Nazwa uzytkownika
          </NavbarText>
        </Collapse>
      </Navbar>
    </Wrap>
  );
};

export default NavBar;
