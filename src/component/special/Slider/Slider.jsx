import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./slider.scss"

import house1 from '../../../img/house.png';
import house2 from '../../../img/house2.png';
import house3 from '../../../img/house3.jpg';
import house4 from '../../../img/house4.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <Carousel controls={false} fade>
            <Carousel.Item>
                <div className="slider_block">
                    <img src={house1} alt="" className='slider_photo' />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slider_block">
                    <img src={house2} alt="" className='slider_photo' />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slider_block">
                    <img src={house3} alt="" className='slider_photo'/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slider_block">
                    <img src={house4} alt="" className='slider_photo'/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;