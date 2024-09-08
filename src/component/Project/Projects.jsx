import React, { useEffect } from "react";
import "./projects.scss";
import PrCp from "./projectsComp/ProjectsComp";
import narvik from "../../img/narvik1.jpg";
import bremen from "../../img/bremen.jpg";
import mangame from "../../img/mangame.jpg";
import reims from "../../img/reims.png";
import bilbarm from '../../img/bilbarm.jpg';
import kapella from '../../img/kapella.jpg';
import house4 from "../../img/house4.jpg";
import Footer from "../special/footer/Footer";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const ProjectView = [
    {
      name: "Нарвик",
      img: narvik,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/Narvik",
    },
    {
      name: "Мангейм",
      img: mangame,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/Mangame",
    },
    {
      name: "Рэймс",
      img: reims,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/Reims",
    },
    {
      name: "Биль-Барн",
      img: bilbarm,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/BilBarn",
    },
    {
      name: "Капелла",
      img: kapella,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/Kapella",
    },
    {
      name: "Бремен",
      img: bremen,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/Bremen",
    },
    {
      name: "Место свободно)",
      img: house4,
      descr:
        'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
      button: "/SV947",
    },
  ];

  const ProjectsViews = ProjectView.map(({ name, img, descr, button }, i) => {
    return (
      <div className="prcp_route">
        <PrCp name={name} img={img} descr={descr} button={button} />
      </div>
    );
  });

  const { Projects } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Projects]);

  return (
    <div>
      <div className="projects">
        <div className="projects_top">
          <div className="projects_top_title">
            <h2 className="projects_top_title_text">Проекты</h2>
          </div>
          <div className="projects_top_subtitle">
            <h2 className="projects_top_subtitle_text">
            Мы строим дома разных размеров и конфигураций, включая одноэтажные и многоэтажные дома, коттеджи и загородные дома. Мы гарантируем высокое качество работ и быстрое выполнение проектов. Если вы хотите создать уникальный дом в стиле fachwerk, наша компания готова помочь вам воплотить ваши мечты в реальность.
            </h2>
          </div>
        </div>
        {ProjectsViews}
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
