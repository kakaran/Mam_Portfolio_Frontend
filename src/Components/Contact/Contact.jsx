import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
        <div className="contact_container">
            <div className="line">
            <h3>Contact Me</h3>
            </div>
            <div className="title">
            <h1>Let me Know if you want to talk about a potential 
                collaboration. I'm available for working together.
            </h1>
            <h3 className="mail">Infoname@Gmail.com</h3>
            </div>
            <div className="info">
                <input type="text" placeholder="What's Your Name?"></input>
                <input type="text" placeholder="Your Email"></input>
                <input type="text" placeholder="Tell Me About Your Purpose.."></input>
            </div>
            <div className="go">
            <button>Get A Quota</button>
            <svg className="arrow"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
            </div>
        </div>
    </>
  )
}
