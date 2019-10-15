import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Friends</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;