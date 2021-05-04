import React from "react";
import NavBarCSS from "./styles";
import navbarContent from '../../static/navbar';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <NavBarCSS>
      <Navbar collapseOnSelect expand="md" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={navbarContent.logo} alt='logo' />
        </Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navbarContent.options.map((item, idx) => (
              <LinkContainer to={item.link} key={idx}>
                <Nav.Link><h5>{item.name}</h5></Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBarCSS>
  );
};

export default NavBar;
