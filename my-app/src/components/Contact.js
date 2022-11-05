import React from "react"
// import  { useState } from "react"
import Footer from "./Footer"

const Contact = () => {


     const name = "Gloria";

     return(
          <section>
               <section className="contact-form">
                    <div className="contact">
                         <div className="header">
                         <h1>Contact me</h1>
                         <p>Hi there, contact me to ask me about anything you have in mind.</p>
                         </div>
               
                         <form className="form">

                              <div className="input-group">

                                   <div className="group">
                                        <label for="first_name">First Name</label>
                                        <input type="text" id="first_name" placeholder="Enter your first name" required/>
                                   </div>

                                   <div className="group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" id="last_name" placeholder="Enter your last name" required/>
                                   </div>
                              </div>

                              <label for="email">Email</label>
                              <input type="email" id="email" placeholder="yourname@email.com" required />

                              <label for="message">Message</label>
                              <textarea
                               id="message" 
                               placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
                         
                              
                              <label className="checkbox"><p>You agree to providing your data to {name} who may contact you.</p>
                              <input type="checkbox" />
                              <span className="check"></span>
                              </label>
                              
                              <button id="btn__submit" className="submit-btn">Send message</button>

                         </form>
                    </div>
               </section>
               <Footer />
          </section>
          
     )
}

export default Contact