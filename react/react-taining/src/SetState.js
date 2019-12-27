import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      count:0,
      count2:0
    }
  }

  _myBttn()
  {
    this.setState({
      count: this.state.count + 1
    });
  }

  _myBttn2()
  {
    this.setState({
      count2: this.state.count2 + 1
    });
  }



  render() {
    return (
      <div>
        <button onClick={this._myBttn.bind(this)}><h1>{this.state.count}</h1>Likes</button>
        <hr/>
        <button onClick={this._myBttn2.bind(this)}><h1>{this.state.count2}</h1>DisLikes</button>

  
      </div>
    );
  }
}

export default App;
