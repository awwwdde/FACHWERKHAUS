import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import { useLocation } from "react-router-dom";
import "./sv941.scss";
import narvik4 from "../../../../img/narvik4.jpg";
import narvik3 from "../../../../img/narvik3r.jpg";
import narvik2 from "../../../../img/narvik2.jpg";
import narvik1 from "../../../../img/narvik1.jpg";
import narvikpl from "../../../../img/narvikpl.png";
import narvikplsa from "../../../../img/narvikplsa.png";
import WannaProjectScript from "../../wannaprojectScript/WannaProjectScript";
import Switcher from "../../switcher/Switcher";
import { useState } from "react";
import ProjectSwitch from "../../projectsSwitch/ProjectSwitch";

const SV941 = ({ img, descr }) => {
  const SwitcherInter = [
    {
      img: narvikplsa,
      descr:
        'Главное отличие от предыдущей планировки - это наличие сауны и удобное расположение площадей. Гостиная 44,5 метров и отдельная кухня 24 метра площади с отдельным панорамным фахверковым остеклением. Холл 16 метров, который находится в центре планировки дома. В доме две спальни. Обе спальни по 17 метров, одна из них с угловым остеклением Фахверк. Сауна 11 метров, достаточно хорошая квадратура для расположения полков и печи. Топочная 3 метра. Небольшой Сан.узел 4 метра, с раздельной ванной 8 метров. Котельная 8 метров вход в которую с прихожей 7 метров. Достаточно удобная площадь небольшой террасы 13 метров, хорошо гармонирует с внешним фасадом дома.',
    },
  ];
  const SwitcherPlan = [
    {
      img: narvikpl,
      descr:
        'Планировка одноэтажного дома прекрасна по расположению и площади этажа. Гостиная совмещенная с кухней 47 метров площади с панорамным фахверковым остеклением с объединённым холлом 15 метров, который находится в центре планировки дома. В доме три спальни. Главная спальня 26 метров, используется для хозяев дома. Две остальные комнаты распределены под детскую 17 метров и гостевую 26 метров. Особое расположение отдельного кабинета 14,5 метров, достаточно хорошая квадратура для расположения офисной техники. Небольшой Сан.узел 2,5 метра, и помещение с отдельным входом в котельную 5 метров. Достаточно удобная площадь небольшой террасы 13 метров, хорошо гармонирует с внешним фасадом дома. Второй сан.узел 8,5 метров. Спроектирован отдельный выход на ваш любимый участок сада, из коридора.',
    },
  ];



  const SwitchersPlan = SwitcherPlan.map(({ img, descr }, i) => {
    return <Switcher img={img} descr={descr} />;
  });

  const SwitchersInter = SwitcherInter.map(({ img, descr }, i) => {
    return <Switcher img={img} descr={descr} />;
  });

  const buttonsSwitch = [{ name: "План с сауной" }, { name: "План" }];

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
          <h2 className="sv_top_text_title">Нарвик</h2>
          <h2 className="sv_top_text_price">от 5 500 000 руб</h2>
        </div>

        <div className="sv_top_slider">
          <ProjectSwitch
            img={narvik1}
            img2={narvik2}
            img3={narvik3}
            img4={narvik4}
          />
          <div className="sv_top_slider_text">
            <div className="sv_top_slider_text_block">
              <h2 className="sv_top_slider_text_block_title">
                Подробнее про дом
              </h2>
              <h2 className="sv_top_slider_text_block_subtitle">
              Проект Нарвик – дом 162 метра удобной планировки, мечта любой семьи дома по технологии Фахверк. Дом понравится всем, кто ценит сочетание функциональности и привлекательности дизайна. Отличительная особенность данного проекта – один этаж с высокими потолками и большим количеством естественного света. В доме три комнаты, для вашей семьи и для любимых гостей. Два сан.узла, личный кабинет, очень просторная гостиная с панорамными окнами и кухня-столовая и терраса – все это вы найдете в данном проекте.
              </h2>
            </div>
            <div className="sv_top_slider_text_block">
              <h2 className="sv_top_slider_text_block_title">Размеры</h2>
              <h2 className="sv_top_slider_text_block_subtitle">
              Проект для комфортной жизни и максимального удобства, естественное освещение наполняет дом теплом и уютом что безусловно будет радовать вас на протяжении всего времени эксплуатации.  ОБЩАЯ ПЛОЩАДЬ 176,0 м2. Высота первого этажа h1 – 3,0 м. Предлагаем построить дом Нарвик из высококачественного материала по технологии Фахверк и конечно рассмотреть материал клееный брус или сухой профилированный брус камерной сушки.
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
        <WannaProjectScript project={"Нарвик"} />
      </div>
      <Footer />
    </div>
  );
};

export default SV941;
