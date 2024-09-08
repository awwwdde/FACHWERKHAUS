import React from "react"
import "./main.scss"
import house from "./../../img/house.png"
import Slider from "../special/Slider/Slider"
import ViewProject from "../special/viewProject/ViewProject"
import ViewSlider from "../special/viewSlider/ViewSlider"
// import ViewProject from "../special/viewProject/ViewProject"
import Footer from "../special/footer/Footer"
import Btn from "../special/btn/Button"
import Questions from "../special/Questions/Questions"
import Feed from "../special/feedback/Feed"


const Main = () => {
   
    return (
      <div className="main_wrapper">
        <div className="main_block">
          <div className="main_block_first">
            <div className="main_block_first_wrap"></div>
            <div className="main_block_first_text">
              <h1 className="main_block_first_text_title">Мы строим дома Вашей мечты.</h1>
              <h2 className="main_block_first_text_subtitle">Наша компания занимается строительством домов в стиле fachwerk, который является традиционным для некоторых регионов Германии. Наша команда состоит из опытных строителей и дизайнеров, которые специализируются на создании уникальных домов в этом стиле.</h2>
            </div>
            <div className="main_block_first_slider">
              <Slider/>
            </div>
          </div>
          <div className="main_block_second">
              <div className="main_block_second_title">Мы производим экологические элитные деревянные коттеджи</div>
              <div className="main_block_second_info">
                <div className="main_block_second_info_text">
                  <div className="main_block_second_info_text_first">
                    <h2 className="main_block_second_info_text_first_title">Только наши заводские станки HUNDEGGER K3i производство Германия, могут добиться максимальной точности соединения узлов ФАХВЕРК. Станок K3i является безусловным лидером в столярном оборудовании с ЧПУ и даже близко нет второго. На сегодня K3i является 30-ти летней кульминацией, как первые в мире лидирующим на рынке столярных изделий.</h2>
                  </div>
                  <div className="main_block_second_info_text_second">
                    <h2 className="main_block_second_info_text_second_title">Постоянные инновации позволили нашей компании с помощью станков hundegger, предоставить клиентам наиболее универсальный и точный конструктив столярных изделий. Модульное проектирование Hundegger K3i  разрешает производить TIMBERFRAME от мелкомасштабного до широкомасштабного проекта. Модель k3i 1250 делает прогресс в индустрию CLT.</h2>
                  </div>
                </div>
                <div className="main_block_second_info_img">
                  <img src={house} className="main_block_second_info_img_pics"/>
                </div>
              </div>
          </div>
          <div className="main_block_third">
            <ViewSlider/>
            <Btn/>
          </div>
          <div className="main_block_fourth">
            <div className="main_block_fourth_firstblock">
              <div className="main_block_fourth_firstblock_title">
                <h2 className="main_block_fourth_firstblock_title_text">Почему выбирают нас?</h2>
              </div>
              <div className="main_block_fourth_firstblock_pic">
                <img src={house} alt="" className="main_block_fourth_firstblock_pic_img"/>
              </div>
            </div>
            <div className="main_block_fourth_secondblock">
                <div className="main_block_fourth_secondblock_text_descr">
                  <div className="main_block_fourth_secondblock_text_descr_title">
                    <h2 className="main_block_fourth_secondblock_text_descr_title_t">КАЧЕСТВО</h2>
                  </div>
                  <div className="main_block_fourth_secondblock_text_descr_subtitle">
                    <h2 className="main_block_fourth_secondblock_text_descr_subtitle_s">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                  </div>
                </div>
                <div className="main_block_fourth_secondblock_text_descr">
                  <div className="main_block_fourth_secondblock_text_descr_title">
                    <h2 className="main_block_fourth_secondblock_text_descr_title_t">НАДЕЖНОСТЬ</h2>
                  </div>
                  <div className="main_block_fourth_secondblock_text_descr_subtitle">
                    <h2 className="main_block_fourth_secondblock_text_descr_subtitle_s">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                  </div>
                </div>
                <div className="main_block_fourth_secondblock_text_descr">
                  <div className="main_block_fourth_secondblock_text_descr_title">
                    <h2 className="main_block_fourth_secondblock_text_descr_title_t">ТЕХНОЛОГИИ</h2>
                  </div>
                  <div className="main_block_fourth_secondblock_text_descr_subtitle">
                    <h2 className="main_block_fourth_secondblock_text_descr_subtitle_s">Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.</h2>
                  </div>
                </div>
              </div>
          </div>
          <div className="main_block_fives">
            <Questions/>
          </div>
          <div className="main_block_six">
            <Feed/>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
  export default Main