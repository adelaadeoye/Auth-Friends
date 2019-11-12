import React from 'react';
import {  Link } from "react-router-dom";

import {
  
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

const NavBar = () => {
  

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Friends</NavbarBrand>
        <NavbarToggler  />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Login</NavLink>
            </NavItem>
            <NavItem>
              <Link to="/friendPage">Friend Page</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;