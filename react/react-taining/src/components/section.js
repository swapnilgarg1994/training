import React, { Component } from 'react';

export default class Section extends Component{
  constructor() {
    super();
    this.setScreen = this._setScreen.bind(this);
  }

  _setScreen(e) {
    e.preventDefault();
  }
  render(){
    return (
      <div>
        <section>
          <div>
						<a href="Landscape.html" onClick={this.setScreen} target="_blank" class="btn btn-info" role="button">
              <b>Landscape</b>
            </a>
          </div>
					<div>
						<a href="Mountains.html" target="_blank" class="btn btn-info" role="button">
							<b>Mountains</b>
						</a>
					</div>
					<div>
						<a href="City.html"  class="btn btn-info" role="button">
							<b>City</b>
						</a>
					</div>
					<div>
						<a href="Nature.html" target="_blank" class="btn btn-info" role="button">
              <b>Nature</b>
            </a>
					</div>
					<div>
						<a href="Painting.html" target="_blank" class="btn btn-info" role="button">
							<b>Painting</b>
            </a>
					</div>
					<div>
						<a href="Sunset.html" target="_blank" class="btn btn-info" role="button">
              <b>Sunset</b>
            </a>
			    </div>
       </section>
      </div>
    );
  }
}
