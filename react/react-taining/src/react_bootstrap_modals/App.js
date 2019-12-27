import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyModal from './MyModal.js';



export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Show : false,
      Size : "sm"
    }
  }
render() {
  return(
    <div>
      <div class="container-fluid">
        <h1>Hi, please press this button to show PoP-up</h1>
      </div>
      <Button variant="primary" onClick={() => {this.setState({Show : true})}}>Click Me!!</Button>
      <MyModal
      setSize={()=> {this.setState({Size:"lg"})}}
      size={this.state.Size}
      show={this.state.Show} onHide={() => {this.setState({Show:false,Size:"sm"})}}
      />
    </div>
  )
}
}


export default App;
