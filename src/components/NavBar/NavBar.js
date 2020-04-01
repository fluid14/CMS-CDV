import React, { useState } from 'react';
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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
    </div>
  );
};

export default NavBar;
