import React, { Component } from 'react';
import '../App.css';

class ListItem extends Component {

  render() {
    return(
      <div>
      <li>
      {this.props.entry.todos},{this.props.entry.index}
      </li>

      </div>
    )
  }
}
export default ListItem;
