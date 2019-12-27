import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Action1 from './action.js';
import Nav1 from './nav.js';
import App from './App.js';



class Home extends Component{
  render() {
    return(
      <BrowserRouter>
      <div>

          <Link to="/action">Action</Link>
          <Link to="/nav">Nav</Link>
          <Route path="/nav"  component={Nav1} />
          <Route path="/action"  component={Action1} />
          <br />
          <Link to="/header"><h1>Header</h1></Link>
          <Link to="/logo">logo</Link>
          <Route path="/logo" component={App} />
      </div>
      </BrowserRouter>
    )
  }
}

export default Home;
