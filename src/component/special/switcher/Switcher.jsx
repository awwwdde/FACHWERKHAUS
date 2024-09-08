import React from 'react'

import './switcher.scss'

const Switcher  = ({img , descr}) => {
  return (
    <div>

        <div className="switcher">
            <div className="switcher_img">
                <img src={img} alt="" className="switcher_img_pic" />
            </div>
            <div className="switcher_text">
                <h2 className="switcher_text_descr">{descr}</h2>
            </div>
        </div>

    </div>
  )
}

export default Switcher