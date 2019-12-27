import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.id}</h1>
        <h1>{this.props.name}</h1>
        <h1><Emp/></h1>
      </div>
    );
  }
}

class Emp extends React.Component {
  render() {
    return(
    <div>
    <h1> hello swapnil </h1>
    </div>
  );
}
}

export default App;
