import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Section from './components/section.js';
import ImageGallery from './components/image_gallery.js';
import Footer from './components/footer.js';
import './header.css';


class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Section />
        <ImageGallery />
        <Footer />
			</div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <div>
      <header>
      <h1>Image Gallery</h1>
      </header>
      </div>
    );
  }
}







export default App;
