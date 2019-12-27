import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Nav from './nav.js';
import Section from './action.js';
import './logo.svg';
import Mybutton from '../hooks/demo.js';
export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route path="/navigation" component = {Nav} />
        <Route path="/section" component = {Section} />
        <Route path="/article" component = {Mybutton}/>
      </div>
    )
  }
}
