import React, { Component } from 'react';

class SliderItem extends Component {
    constructor(props) {
        super(props);
    }   
    render() {

        return (
            <figure>
                <div className="overlay"></div>
                <img src={process.env.PUBLIC_URL +this.props.image}/>
                <figcaption>
                    <div className="slide-title">{this.props.title}</div>
                    <div className="slide-date">{this.props.date}</div>
                    <div className="slide-body">{this.props.body}</div>
                </figcaption>
            </figure>
        );
    }
};

export default SliderItem;