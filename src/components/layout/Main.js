import React, { Component } from 'react';
import Slider from '../content/Slider.js'
import Gallery from '../content/Gallery.js'

class Main extends Component {
  constructor(props) {
    super(props);
  }   

  render() {

    return(
      <main>
        <section className="slider-section">
          <Slider slides={this.props.slides}/>
        </section>
        <section className="gallery-section">
          <Gallery posts={this.props.posts}/>
        </section>
      </main>
    );
  }
}

  export default Main;