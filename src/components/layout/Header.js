import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="brand">
          <Link to="/" className="brand">
            R-Stock
          </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to ="#" className="nav-link">
                  Companies
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;