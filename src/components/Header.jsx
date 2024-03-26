import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Image from './Image';
import Img from '../images/logo.png';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <>
      <Navbar sticky="top" bg="" variant="light" className="nav">
        <Container>
        <Navbar.Brand> <Image logo={Img}/> </Navbar.Brand>
        <Nav className="ms-auto nav-item">
          <Nav.Link as={NavLink} to="/" activeClassName="active"><span className='heads'>Home</span></Nav.Link>
          <Nav.Link as={NavLink} to='/Startup' activeClassName="active"><span className='heads'>Startup</span></Nav.Link>
          <Nav.Link as={NavLink} to='/Register' activeClassName="active"><span className='heads'>Register</span></Nav.Link>
          <Nav.Link as={NavLink} to='/Login' activeClassName="active"><span className='heads'>Log In</span></Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
  );
};

export default Header;