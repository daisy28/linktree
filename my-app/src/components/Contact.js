import React, { useState } from "react"
import Footer from "./Footer"

const Contact = () => {

     const [formData, setFormData] = useState({
          firstname: "",
          lastname: "",
          email: "",
          message: ""
     })


     const [formError, setFormError] = useState({})


     const onChangeHandler = (event) => {
          console.log(event)
          if (event.target.checked === "checked"){
               console.log("")
          }
          // setFormData(copy)
          else {
               setFormData(() => ({
                    ...formData,
                    [event.target.name]: event.target.value
               }))
          }
     }



     const validateForm = () => {
          let err = {}
          if (formData.firstname === ""){
               err.firstname = "First name required!"
          }

           if (formData.lastname === ""){
                err.lastname = "Last name required!"
           }

          if (formData.email === ""){
               err.email = "Email required!"
          }

          if (formData.message === ""){
               err.message= "Please enter a message"
          }

          setFormError({ ...err })
     }

     const onSubmitHandler = (event) => {
          event.preventDefault()
          console.log(formData)

         let isValid = validateForm()
         if (isValid){
          alert("Submitted")
         }
     }
     

     const name = "Gloria";

     return(
          <section>
               <section className="contact-form">
                    <div className="contact">
                         <div className="header">
                         <h1>Contact me</h1>
                         <p>Hi there, contact me to ask me about anything you have in mind.</p>
                         </div>

                         <form className="form" onSubmit={onSubmitHandler}>

                              <div className="input-group">

                                   <div className="group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input 
                                        type="text" 
                                        id="first_name" 
                                        name="firstname"
                                        placeholder="Enter your first name"
                                        onChange={onChangeHandler}
                                        value={formData.firstname}
                                        />
                                        <small>{formError.firstname}</small>
                                   </div>

                                   <div className="group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input
                                         type="text" 
                                         id="last_name" 
                                         name="lastname"
                                         placeholder="Enter your last name"
                                         onChange={onChangeHandler}
                                         value={formData.lastname}
                                         />
                                         <small>{formError.lastname}</small>
                                   </div>
                              </div>

                              <label htmlFor="email">Email</label>
                              <input 
                              type="email" 
                              id="email" 
                              name="email"
                              placeholder="yourname@email.com"
                              onChange={onChangeHandler}
                              value={formData.email}
                              />
                              <small>{formError.email}</small>

                              <label htmlFor="message">Message</label>
                              <textarea
                               id="message" 
                               placeholder="Send me a message and I'll reply you as soon as possible..."
                               name="message" 
                               onChange={onChangeHandler}
                               value={formData.message}
                               >
                               </textarea>
                               <small>{formError.message}</small>
                         
                              
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