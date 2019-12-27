import React, { Component } from 'react';
import '../App.css';
import ListItem from './items.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: '',
      items : [],
      count: 0
    }

    this.click = this.click.bind(this);
    this.change = this.change.bind(this);
  }

  change = (e) => {
    this.setState({

      term : e.target.value
    }
    );
  }

click = (e) => {
  e.preventDefault();

  if(this.state.term != '') {

  this.setState({
    term : '',
    items : [...this.state.items,
      {
        todos : this.state.term,
        index : this.state.count + 1

      }],
      count: this.state.count + 1
      })
}
}

deleteItem = (item,event) => {
this.state.items.splice(event,1);

this.setState({
  term : ''
});
}

  render() {
    return(
      <div id="todolist">

        <input type = "text" value={this.state.term} placeholder = "Enter your text here" onChange={this.change} />
        <button type = "Submit" onClick={this.click}>Click to add</button>
        {
          this.state.items.map((item,key) =>
            <ul>
              <ListItem entry = {item} />
              <button onClick={() => {this.deleteItem(item,key)}}>DeleteItem</button>
            </ul>
            )
        }
      </div>
    );
  }
}
