import '../App.css';
import Footer from './Footer';
import Copyright from './Copyright';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='background'>
          <Navbar />
        </div>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/hakkimizda' component={About}></Route>
        </Switch>
        <Footer />
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
