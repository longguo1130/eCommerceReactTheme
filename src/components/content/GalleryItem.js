import React, { Component } from 'react';


class GalleryItem extends Component {
    constructor(props) {
      super(props);
    }   

    render() {
      console.log(this.props)
      return (
          <li className="gallery-item">
            <figure className="">
                <img src={this.props.image} className="gallery-image"/>
                <figcaption>
                  <div className="gallery-date">{this.props.date}</div>
                  <div className="gallery-title">{this.props.title}</div>
                  <div className="gallery-link">Presented by <a href={this.props.link}>Lorem Ipsum</a></div>
                </figcaption>
            </figure>
          </li>
      );
    }
  }

  export default GalleryItem;