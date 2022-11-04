import React from "react"
import slack from "../images/slack.png"
import github from "../images/Social icon.png"
import { Link } from "react-router-dom"

const Buttons = () => {
     return(
          <div className="link-container">
                    <h2>Gloria Ubah</h2>
                    <span><a href="https://twitter.com/gloriah_CU" id="twitter">Twitter</a>
                    </span>

                    <span><a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a></span>

                    <span><a href="http://books.zuri.team" id="books">Zuri Books</a>
                    <p className="tooltipbtntext"><span>Zuri Books:</span>Find books about design and coding.</p>
                    </span>

                    <span><a href="https://books.zuri.team/python-for-beginners?/ref_id=Glowria"  id="book__python">Python Books</a>
                    <p className="tooltipbtntext">Purchase this book to improve your coding skills in python.</p>
                    </span>

                    <span><a href="https://background.zuri.team" id="pitch">Background checks for coders</a>
                    <p className="tooltipbtntext">To help you market and promote your Tech brand, contact us.</p>
                    </span>

                    <span><a href="https://books.zuri.team/design-rules"  id="book__design">Design Books</a>
                    <p className="tooltipbtntext">Get this design book to enable you scale up in your designs.</p>
                    </span>

                    <span><Link to="/contact" id="contact">Contact Me</Link></span>

                    <div className="social-icons">
                         <img src={slack} alt="" />
                         <img src={github} alt="" />
                    </div>
               </div>
     )
}

export default Buttons