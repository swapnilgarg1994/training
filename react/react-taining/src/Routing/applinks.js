import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class AppLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/navigation">Navigation</Link>
        <Link to="/section">Section</Link>
        <Link to="/article">Logo</Link>
      </div>
    )
  }
}
