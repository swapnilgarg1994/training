import React, { Component } from 'react';
import ImageItem from './components/image_item.js';

var request = require('request');

export class App extends Component {
  constructor() {
    super();
    this.state = {
      alldata: {}
    }
    this.getImage = this._get_random_image.bind(this);
    this.getImage();
  }

  _get_random_image() {
    var options = {
      "url": "https://api.unsplash.com/photos/random",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "authorization": "Client-ID a98dba349774b965678f3f578decae295ca23434e5fa027519d4c25f7696556e"
      }
    };

    var data = {};
    var resp = function (err, res, body) {

      data = JSON.parse(body);
      //console.log(data);

      this.setState({
        alldata: data,
      })
    }.bind(this);

    request(options, resp);
  }


  render() {
    if(Object.keys(this.state.alldata).length > 0 ){
      return (
        <div class="container">
        <button onClick = {this.getImage}>Change</button>
        <ImageItem source = { this.state.alldata } />
        </div>
      )
    }
    else {
      return("");
    }
  }
}
