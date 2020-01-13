import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import SliderItem from './SliderItem.js';

const mapStatetoProps =  (state) =>{

    const slides = state.slider.hero;
    return {slides};
}
class Slider extends Component {
    constructor(props) {
        super(props);
    }   
    
    render() {
        // console.log(this.props.slides)
        return (

            <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} showStatus={false}>
                {
                this.props.slides.map((item, key) => {         
                    return <SliderItem key={key} image={item.heroImageLink} title={item.heroTitle} date={item.heroDate} body={item.heroBody}/>;
                })
                }

            </Carousel>
        );
    }
};

export default connect(mapStatetoProps)(Slider);