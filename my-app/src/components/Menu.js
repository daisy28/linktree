import React from "react"
import icon from "../images/Icon.png"

const Menu = () => {
     return(
          <div className="menu-container">
                    <div className="menu">
                         <span></span>
                         <span></span>
                         <span></span>
                         <img src={icon} alt="" />
                         <p className="tooltiptext">Share Link</p>
                         
                    </div>
          </div>
     )
}

export default Menu