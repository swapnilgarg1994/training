import React, { Component } from 'react';
import ImageItem from './image_item.js';
var data  = require('../images.json');

class ImageGallery extends Component{
  render(){
    return(
      <div>
      <article>
        <div class="container-fluid">
						<h1 class="h1-article" >Landscape</h1>
				</div>


				<div  class="row container-fluid">
        {
            data[0].images.map((item) => {
              return(
            <ImageItem imageSource={item} />
            )
            }
            )
          }
        </div>
      </article>
      </div>
    )
  }
}

export default ImageGallery;
