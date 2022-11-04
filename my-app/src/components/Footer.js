import React from "react"
import zuriLogo from "../images/Zuri.Internship_Logo.png"
import i4gLogo from "../images/I4G.png"

const Footer = () => {
     return(
          <footer>
                 <div className="footer-div">
                     <img src={zuriLogo} alt="" />
                     <p>HNG Internship 9 Frontend Task</p>
                     <img src={i4gLogo} alt="" />
                 </div>
          </footer>
     )
}

export default Footer