import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import "./projectsComp.scss";

const ProjectsComp = ({ name, img, descr, button }) => {
  return (
    <div>
      <div className="prcm">
        <div className="prcm_img">
          <img src={img} alt="" className="prcm_img_pics" />
        </div>
        <div className="prcm_info">
          <div className="prcm_info_name">
            <h2 className="prcm_info_name_text">{name}</h2>
          </div>
          <div className="prcm_info_descr"></div>
          <h2 className="prcm_info_descr_text">{descr}</h2>
          <Link className="prcm_info_link" to={`/projects${button}`}>
            <div className="prcm_info_button">
              <button className="prcm_info_button_text">
                Подробнее про этот проект
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComp;
