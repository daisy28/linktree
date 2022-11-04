import React from "react"
import Menu from "./components/Menu"
import ProfileImg from "./components/Profile"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import "./style.css"

const Homepage = () => {
     return(
          <section>
               <section className="section">
                    <div className="container">
                         <Menu />
                         <ProfileImg />
                         <Buttons />    
                    </div>
               </section>
               <Footer />
          </section>
           
     )
}

export default Homepage