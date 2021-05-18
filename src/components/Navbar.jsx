import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../img/futagBeyaz.png'
var cpMenu = [
    {
        "key": 1,
        "link" : "sdfsdf.ht",
        "name" : "Ana Sayfa"
    },
    {
        "key": 2,
        "link" : "sdfsdf.ht",
        "name" : "Yesss"
    },
    {
        "key": 3,
        "link" : "sdfsdf.ht",
        "name" : "Privacy"
    },

]
export default(props) =>{
    return(
      <Navbar className='backdrop' variant="dark" expand="lg">
        <Navbar.Brand className='mx-auto' href="#home">
          <img className='navbar-logo' src={logo} width='70' alt='logo'></img>
          <span>Fütag Dergi</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Ana Sayfa</Nav.Link>
            <Nav.Link href="#features">Sayılar</Nav.Link>
            <Nav.Link href="#pricing">Sponsorlar</Nav.Link>
            <Nav.Link href="#pricing">Hakkımızda</Nav.Link>
            <Nav.Link href="#pricing">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

}