import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import Dashboard from './component/dashboard';
import './App.css';

function App() {
  return (

    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;