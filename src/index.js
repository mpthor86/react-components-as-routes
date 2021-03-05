import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Login from './login'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <Navbar /><br></br>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
