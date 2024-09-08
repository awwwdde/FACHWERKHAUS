import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./viewSlider.scss"

import house1 from '../../../img/narvik1.jpg';
import bremen from "../../../img/bremen.jpg";
import mangame from "../../../img/mangame.jpg";
import reims from "../../../img/reims.png";
import bilbarm from '../../../img/bilbarm.jpg';
import kapella from '../../../img/kapella.jpg';

import ViewProject from '../viewProject/ViewProject';

const ViewSlider = () => {
    const projectSliders = [
        {
            name: 'Нарвик',
            img: house1,
            meters: '176',
            shower: '2',
            bedroom: '3',
            price: '5 500 000'
        },
        {
            name: 'Рэймс',
            img: reims,
            meters: '127',
            shower: '2',
            bedroom: '3',
            price: ' 7 990 990'
        },
        {
            name: 'Бил Барм',
            img: bilbarm,
            meters: '115',
            shower: '1',
            bedroom: '2',
            price: '11 999 990'
        },
        {
            name: 'Бремен',
            img: bremen,
            meters: '206',
            shower: '2',
            bedroom: '5',
            price: '14 500 500'
        },
        {
            name: 'Капелла',
            img: kapella,
            meters: '102',
            shower: '1',
            bedroom: '2',
            price: '6 990 000'
        },
        {
            name: 'Мангейм',
            img: mangame,
            meters: '220',
            shower: '2',
            bedroom: '4',
            price: '14 500 500'
        },
        {
            name: 'SV41-7',
            img: house1,
            meters: '75',
            shower: '3',
            bedroom: '4',
            price: '14 500 500'
        },

    ]

    const projectSlider = projectSliders.map(({name,img,meters,shower,bedroom,price}, i) => {
        return(
            <Carousel.Item>
                <div className="slider_view_block">
                    <ViewProject name={name}  img={img}  meters={meters} shower={shower} bedroom={bedroom} price={price}/>
                </div>
            </Carousel.Item>
        )
    })
    return (
        <Carousel controls={false} fade className='View_Slider'>

           {projectSlider}

        </Carousel>
    );
};

export default ViewSlider;