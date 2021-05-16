import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
var cpMenu = [
    {
        "link" : "sdfsdf.ht",
        "name" : "Ana Sayfa"
    },
    {
        "link" : "sdfsdf.ht",
        "name" : "Yesss"
    },
    {
        "link" : "sdfsdf.ht",
        "name" : "Privacy"
    },

]
export default(props) =>{
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className='mx-auto' href="#home">Hasbi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

}