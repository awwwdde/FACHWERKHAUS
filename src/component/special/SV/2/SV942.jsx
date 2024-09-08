import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import { useLocation } from "react-router-dom";
import "./sv942.scss";
import house3 from "../../../../img/house3.jpg";
import house1 from "../../../../img/house5.jpg";
import WannaProjectScript from "../../wannaprojectScript/WannaProjectScript";
import Switcher from "../../switcher/Switcher";
import { useState } from "react";
import ProjectSwitch from "../../projectsSwitch/ProjectSwitch";

const SV942 = ({ img, descr }) => {
  const SwitcherPlan = [
    {
      img: house3,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
    },
    {
      img: house3,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
    },
    {
      img: house3,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
    },
  ];

  const SwitcherInter = [
    {
      img: house1,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
    },
    {
      img: house1,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
    },
    {
      img: house1,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
    },
  ];

  const SwitchersPlan = SwitcherPlan.map(({ img, descr }, i) => {
    return <Switcher img={img} descr={descr} />;
  });

  const SwitchersInter = SwitcherInter.map(({ img, descr }, i) => {
    return <Switcher img={img} descr={descr} />;
  });

  const buttonsSwitch = [{ name: "Интерьер" }, { name: "План" }];

  const [activeBtn, setActiveBtn] = useState(0);
  const [switchArr, setSwitchArr] = useState(false);

  const switchButton = (i) => {
    setActiveBtn(i);
    if (i === 1) {
      setSwitchArr(true);
    } else {
      setSwitchArr(false);
    }
  };

  const buttonSwitch = buttonsSwitch.map(({ name }, i) => {
    return (
      <button
        onClick={() => switchButton(i)}
        className={
          activeBtn === i
            ? "sv_middle_switch sv_middle_switch_active"
            : "sv_middle_switch"
        }
      >
        {name}
      </button>
    );
  });

  const { SV941 } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [SV941]);

  return (
    <div className="sv">
      <div className="sv_top">
        <div className="sv_top_text">
          <h2 className="sv_top_text_title">SV94-2</h2>
          <h2 className="sv_top_text_price">от 7 990 000 руб</h2>
        </div>

        <div className="sv_top_slider">
          <ProjectSwitch
            img={house1}
            img2={house3}
            img3={house1}
            img4={house3}
          />
          <div className="sv_top_slider_text">
            <div className="sv_top_slider_text_block">
              <h2 className="sv_top_slider_text_block_title">
                Подробнее про дом
              </h2>
              <h2 className="sv_top_slider_text_block_subtitle">
                Многие программы электронной вёрстки и редакторы HTML используют
                Lorem Ipsum в качестве текста по умолчанию, так что поиск по
                ключевым словам "lorem ipsum" сразу показывает, как много
                веб-страниц всё ещё дожидаются своего настоящего рождения.
              </h2>
            </div>
            <div className="sv_top_slider_text_block">
              <h2 className="sv_top_slider_text_block_title">Размеры</h2>
              <h2 className="sv_top_slider_text_block_subtitle">
                Многие программы электронной вёрстки и редакторы HTML используют
                Lorem Ipsum в качестве текста по умолчанию, так что поиск по
                ключевым словам "lorem ipsum" сразу показывает, как много
                веб-страниц всё ещё дожидаются своего настоящего рождения.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sv_middle">
        <h2 className="sv_middle_text">Планировка</h2>
        <div className="sv_middle_btn-wrapper">{buttonSwitch}</div>
        <div className="sv_middle_switch-block">
          {switchArr ? SwitchersPlan : SwitchersInter}
        </div>
      </div>
      <div className="sv_fot">
        <WannaProjectScript project={"SV942"} />
      </div>
      <Footer />
    </div>
  );
};

export default SV942;
