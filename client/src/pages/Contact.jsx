import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./Contact.css";

const Contact = () => {
  return (
    <div>
        <Header/>
        <main>
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magni odit! Odio nostrum aut aliquam natus hic sapiente quos explicabo eius.</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>123 NW 61st Avenue, Hollywood, Florida, 33024</p>
                        </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>787-600-9370</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>Renecito_santiago@outlook.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div class="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Full Name</span>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Email</span>
                        </div>
                        <div class="inputBox">
                            <textarea required="required"></textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div class="inputBox">
                            <input type="submit" name="" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </main>
    <Footer/>
    </div>
  )
}

export default Contact
