import React from "react"
import Footer from "./Footer"
import { useForm } from "react-hook-form";

const Contact = () => {

     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
     const name = "Gloria";

     return(
          <section>
               <section className="contact-form">
                    <div className="contact">
                         <div className="header">
                         <h1>Contact me</h1>
                         <p>Hi there, contact me to ask me about anything you have in mind.</p>
                         </div>
                    
                         <form onSubmit={handleSubmit(onSubmit)} className="form">

                              <div className="input-group">

                                   <div className="group">
                                        <label>First Name</label>
                                        <input type="text" id="first_name" placeholder="Enter your first name" />
                                   </div>

                                   <div className="group">
                                        <label>Last Name</label>
                                        <input type="text" id="last_name" placeholder="Enter your last name" />
                                   </div>
                              </div>

                              <label>Email</label>
                              <input type="email" id="email" placeholder="yourname@email.com"/>

                              <label>Message</label>
                              <textarea className={`form-control ${errors.message && "invalid"}`} id="message" placeholder="Send me a message and I'll reply you as soon as possible..." {...register("message",{required: true})}></textarea>
                              <div className="error">
                                   <small>
                                        {errors.message?.type === "required" && "Please enter a message"}
                                   </small>
                              </div>
                              
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