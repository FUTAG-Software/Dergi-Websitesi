import logo from '../img/guy.webp';
import '../App.css';
import Swiper from './Swiper';
import Footer from './Footer';
import Copyright from './Copyright';
import Navbar from './Navbar';
import Intro from './Intro';
import Sponsors from './Sponsors';

var users=[
  {"key": 1,
    "name": "sdafasdf",
  "img": logo,
  "specs": "ise yaramaz"
  },
  {"key": 2,
    "name": "werwrer",
  "img": logo,
  "specs": "iasdfsadfsdf"
  },
  {"key": 3,
    "name": "gdfgdfg",
  "img": logo,
  "specs": "iwerwrewer"
  },
  {"key": 4,
    "name": "gdfgdfg",
  "img": logo,
  "specs": "iwerwrewer"
  },
  {"key": 5,
    "name": "gdfgdfg",
  "img": logo,
  "specs": "iwerwrewer"
  }
]

var social = [
  {
    "key": 1,
    "link": "sadfasdf.com",
    "icon": "fa-facebook-f"
  },
  {
    "key": 2,
    "link": "213123.com",
    "icon": "fa-instagram"
  },
  {
    "key": 3,
    "link": "qdscc.com",
    "icon": "fa-youtube"
  },
  {
    "key": 4,
    "link": "qwqeqwe.com",
    "icon": "fa-pinterest"
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
        <Intro />
        <Sponsors users = {users} key={users.key}/>
        <Footer social = {social} key={users.key}/>
        <Copyright />
    </div>
  );
}

export default App;
