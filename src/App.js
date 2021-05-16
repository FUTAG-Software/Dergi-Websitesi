import logo from './logo.png';
import './App.css';
import UserCard from './UserCard';
import Swiper from './Swiper';
import Footer from './Footer';
var users=[
  {"name": "kursat",
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div >
        <Swiper users = {users}/>
        <Footer social = {social} />
      </div>
      
    </div>
  );
}

export default App;
