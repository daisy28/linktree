import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage"
import Contact from "./components/Contact"



const App = () => {
     return(
          <div>
               <HashRouter Basename="/">
                    <Routes>
                         <Route path="/" element = {<Homepage /> }></Route>

                         <Route exact path="/contact" element = {<Contact />} ></Route>
                    </Routes>
               </HashRouter>
          </div>
     )
}

export default App

