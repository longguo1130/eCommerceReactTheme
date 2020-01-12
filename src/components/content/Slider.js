import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SliderItem from './SliderItem.js'

class Slider extends Component {
    constructor(props) {
        super(props);
    }   
    
    render() {

        
        return (
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
                {
                this.props.slides.map((item, key) => {         
                    return <SliderItem key={key} image={item.heroImageLink} title={item.heroTitle} date={item.heroDate} body={item.heroBody}/>;
                })
                }

            </Carousel>
        );
    }
};

export default Slider;