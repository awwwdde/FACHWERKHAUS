import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Btn = () => {
  return (
    <div>
      <div className="btn_block">
        <Link className="btn_link" to="/projects">
          <div className="btn_kn">
            <h2 className="btn_kn_text">Посмотреть все проекты</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Btn;
