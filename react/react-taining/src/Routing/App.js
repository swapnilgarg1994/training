import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AppLinks from './applinks.js';
import AppRoutes from './approutes.js';
import logo from './logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppLinks />
          <AppRoutes />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
