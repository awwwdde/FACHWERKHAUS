import React from 'react';

import './materials.scss'

import brus from '../../img/brus.png'
import Footer from '../special/footer/Footer';


const Materials = () => {
    return (
        <div>
            <div className="material">
                <div className="material_top">
                    <h2 className="material_top_title">Материалы</h2>
                    <h2 className="material_top_subtitle">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                </div>
                <div className="material_block">
                    <div className="material_block_descr">
                        <img src={brus} alt="" className='material_block_descr_img'/>
                        <div className="material_block_descr_text">
                            <h2 className="material_block_descr_text_title">Клееный брус</h2>
                            <h2 className="material_block_descr_text_subtitle">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                        </div>
                    </div>
                    <div className="material_block_descr">
                        <img src={brus} alt="" className='material_block_descr_img'/>
                        <div className="material_block_descr_text">
                            <h2 className="material_block_descr_text_title">Клееный брус</h2>
                            <h2 className="material_block_descr_text_subtitle">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                        </div>
                    </div>
                    <div className="material_block_descr">
                        <img src={brus} alt="" className='material_block_descr_img'/>
                        <div className="material_block_descr_text">
                            <h2 className="material_block_descr_text_title">Клееный брус</h2>
                            <h2 className="material_block_descr_text_subtitle">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </div>
    );
};

export default Materials;