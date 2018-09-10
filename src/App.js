import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

//importando cada pagina 
import Home from './views/Home.jsx';
import Characters from './views/Characters.jsx';
import Planets from './views/Planets.jsx';
import Ships from './views/Ships.jsx';
import Starships from './views/Starships.jsx';

//importando componentes 
import Footer from './components/Footer.jsx';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid m-0 p-0">
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/Characters" component={Characters}/>
              <Route path="/Planets" component={Planets}/>
              <Route path="/Ships" component={Ships}/>
              <Route path="/Starships" component={Starships}/>
            </div>
          </Router>

          <Footer key="footer"></Footer>
        </div>
      </div>
    );
  }
}

export default App;
