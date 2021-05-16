import logo from '../img/guy.png';
import '../App.css';
import Swiper from './Swiper';
import Footer from './Footer';
import Copyright from './Copyright';
import Navbar from './Navbar';
import Intro from './Intro';
import Sponsors from './Sponsors';

import 'bootstrap/dist/css/bootstrap.css';
var users=[
  {"name": "sdafasdf",
  "img": logo,
  "specs": "ise yaramaz"
  },
  {"name": "werwrer",
  "img": logo,
  "specs": "iasdfsadfsdf"
  },
  {"name": "gdfgdfg",
  "img": logo,
  "specs": "iwerwrewer"
  },
  {"name": "gdfgdfg",
  "img": logo,
  "specs": "iwerwrewer"
  },
  {"name": "gdfgdfg",
  "img": logo,
  "specs": "iwerwrewer"
  }
]

var social = [
  {
    "link": "sadfasdf.com",
    "icon": "fa-facebook-f"
  },
  {
    "link": "213123.com",
    "icon": "fa-instagram"
  },
  {
    "link": "qdscc.com",
    "icon": "fa-youtube"
  },
  {
    "link": "qwqeqwe.com",
    "icon": "fa-pinterest"
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container-fluid'>
        <Intro />
        <div>
          <h2>Ekibimiz</h2>
          <Swiper users = {users}/>
          <h2>Sponsorlar</h2>
          <Sponsors users = {users}/>
        </div>
        <Footer social = {social} />
        <Copyright />
      </div>
      
    </div>
  );
}

export default App;
