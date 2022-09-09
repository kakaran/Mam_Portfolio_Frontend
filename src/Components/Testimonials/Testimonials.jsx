import React from 'react';
import './Testimonials.css'
import {ImQuotesLeft} from 'react-icons/im';


export default function Testimonials() {
  return (
    <>
        <div className="testimonials_container">
            <h3>Testimonials</h3>
            <h1>What People Says</h1>
            <div className="message_container">
                <ImQuotesLeft className='message_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio perferendis suscipit eligendi voluptatum quasi? Fuga deleniti eligendi, nulla nisi, itaque quibusdam eveniet excepturi accusantium praesentium non ducimus magni possimus assumenda! Dolorem suscipit similique dolore molestiae voluptatem qui beatae magnam quos quibusdam, in eos reiciendis repellat, cupiditate obcaecati sit id error officiis cum incidunt ea deserunt quis, provident nihil? Laborum.</p>
                <div className="client_detail">
                    <img src="" alt="" />
                    <h2>name</h2>
                    <p>profeshion</p>
                </div>
            </div>
        </div>
    </>
  )
}
