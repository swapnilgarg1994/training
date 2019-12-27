import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <h1>hi my Emp id is {this.props.id}</h1>
        <h1>my name is {this.props.name}</h1>
      </div>
    );
  }
}
App.propTypes = {
  id : PropTypes.string,
  name: PropTypes.string,
};

App.defaultProps = {
  id : "Ks103",
  name : "swapnil",
};


export default App;
