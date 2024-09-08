import React from 'react';
import bath from '../../../img/shower.png'
import bed from '../../../img/bed.png'
import './viewProject.scss';

const ViewProject = ({name,img,meters,shower,bedroom,price}) => {
    
    return (
        <div>
            <div className="view_main">
                <div className="view_main_title">
                    <div className="view_main_title_project">
                        <h2 className="view_main_title_project_stitle">Проект</h2>
                    </div>
                    <div className="view_main_title_project">
                        <h2 className="view_main_title_project_name">{name}</h2>
                    </div>
                </div>
                <div className="view_main_img">
                    <img src={img} alt="" className='view_main_img_pic'/>
                </div>
                <div className="view_main_footer">
                    <div className="view_main_footer_first">
                        
                            <h1 className="view_main_footer_first_block_meters">{meters} м²</h1>
                        
                        <div className="view_main_footer_first_block">
                            <img src={bath} alt="" className='view_main_footer_first_block_pic'/>
                            <h1 className="view_main_footer_first_block_shower">{shower}</h1>
                        </div>
                        <div className="view_main_footer_first_block">
                            <img src={bed} alt="" className='view_main_footer_first_block_pic'/>
                            <h1 className="view_main_footer_first_block_bedroom">{bedroom}</h1>
                        </div>
                    </div>
                    <div className="view_main_footer_second">
                        <h1 className="view_main_footer_second_price">от {price} рублей</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProject;