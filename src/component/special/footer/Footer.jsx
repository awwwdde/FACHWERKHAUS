import React from "react"
import "./footer.scss"

import tg from "../../../img/tg.png"
import yt from "../../../img/yt.png"

const Footer = () => {
    return (
        <div>
            <div className="block_footer">
                <div className="block_footer_text">
                    <h2 className="block_footer_text_logo">FACHWERKHAUS</h2>
                </div>
                <div className="block_footer_social">
                    <img src={tg} alt="" className="block_footer_social_img"/>
                    <img src={yt} alt="" className="block_footer_social_img"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;