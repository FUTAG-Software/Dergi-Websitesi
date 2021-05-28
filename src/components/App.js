import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Suspense, lazy } from 'react';
import '../App.css';
import Copyright from './Copyright';
import Navbar from './Navbar';
//import Footer from './Footer';
//import Home from './Home';
//import About from './About';

const Home = lazy(() => import('./Home'));
const Footer = lazy(() => import('./Footer'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <div className="App">
        <div className='background'>
          <Navbar />
        </div>
        <Suspense fallback={<p>Yükleniyor...</p>}>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/hakkimizda' component={About}></Route>
          </Switch>
          <Footer />
          <Copyright />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
