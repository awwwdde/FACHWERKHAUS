import React from 'react';

import './contact.scss'

import Footer from '../special/footer/Footer';
import FeedCon from '../special/feedcon/FeedCon';


const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="contact_top">
                    <div className="contact_top_text">
                        <h2 className="contact_top_text_title">Контакты</h2>
                    </div>
                </div>
                <div className="contact_main">
                    <div className="contact_main_descr">
                        <div className="contact_main_descr_s">
                            <div className="contact_main_descr_s_block">
                                <h2 className="contact_main_descr_s_block_title">Где мы находимся?</h2>
                                <h2 className="contact_main_descr_s_block_subtitle">Москва</h2>
                            </div>
                            <div className="contact_main_descr_s_block">
                                <h2 className="contact_main_descr_s_block_title">Наша почта</h2>
                                <h2 className="contact_main_descr_s_block_subtitle">info@fachwerkhaus.moscow</h2>
                            </div>
                            <div className="contact_main_descr_s_block">
                                <h2 className="contact_main_descr_s_block_title">Наш телефон</h2>
                                <h2 className="contact_main_descr_s_block_subtitle">+7 495 999 99 99</h2>
                            </div>
                            <div className="contact_main_descr_s_block">
                                <h2 className="contact_main_descr_s_block_title">Наш мобильный телефон</h2>
                                <h2 className="contact_main_descr_s_block_subtitle">+7 916 999 99 99</h2>
                            </div>              
                        </div>
                        <div className="contact_main_descr_form">
                            <FeedCon/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Contact;