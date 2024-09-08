import React from 'react';
import './projectSwitch.scss';
import Carousel from 'react-bootstrap/Carousel';


const ProjectSwitch = ({img,img2,img3,img4}) => {
    return (
        <Carousel controls={false} fade className='ProjectSwitch'>

            <Carousel.Item>
                <div className="ProjectSwitch_photo">
                    <img src={img} alt="" className='ProjectSwitch_photo_pic' />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="ProjectSwitch_photo">
                    <img src={img2} alt="" className='ProjectSwitch_photo_pic' />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="ProjectSwitch_photo">
                    <img src={img3} alt="" className='ProjectSwitch_photo_pic' />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="ProjectSwitch_photo">
                    <img src={img4} alt="" className='ProjectSwitch_photo_pic' />
                </div>
            </Carousel.Item>

        </Carousel>
    );
};

export default ProjectSwitch;