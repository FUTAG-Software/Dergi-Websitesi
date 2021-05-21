import {Navbar, Nav} from 'react-bootstrap';
import logo from '../img/futagBeyaz.webp'
import {Link} from 'react-router-dom';
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
            <Link className='nav-link' to="/">Ana Sayfa</Link>
            <Nav.Link className='nav-link' href="/#posts">Sayılar</Nav.Link>
            <Nav.Link className='nav-link' href="/#spns">Sponsorlar</Nav.Link>
            <Link className='nav-link' to="/hakkimizda">Hakkımızda</Link>
            <Nav.Link className='nav-link' href="#contact">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

}