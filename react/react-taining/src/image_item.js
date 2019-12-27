import React, { Component } from 'react';
import './header.css';

class ImageItem extends Component{
  render(){
    return(
      <div>
      <div class="col">
					<div class="card">
						<img class="card-img-top" src={require("../images/Landscape/"+this.props.imageSource.source)} />
							<div class="card-body">
	  						<button type="button" class="btn btn-success">Like</button>
								<button type="button" class="btn btn-success">Dislike</button>
							</div>
						</div>
					</div>
      </div>

    )
  }
}

export default ImageItem;
