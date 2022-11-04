import React from "react"
import profileImg from "../images/ZwjOPs2h_400x400.jpg"
import profileHover from "../images/camera-01.png"

const ProfileImg = () => {
     return(
          <div className="img-div">
                    <img id="profile__img" src={profileImg} alt="" />
                    <img className="image-hover" src={profileHover} alt="" />
                    <p id="slack">Glowria</p>
          </div>
     )
}

export default ProfileImg