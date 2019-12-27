import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  myBttn(){
    alert("my name is swapnil");
  }
  render() {
    return (
      <div>
        <p>my name is </ p>
        <button onClick={this.myBttn}>Click here to view the name</button>
      </div>
    );
  }
}



export default App;
