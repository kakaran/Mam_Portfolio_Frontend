import React from 'react';
import './Footer.css'
import { AiFillLinkedin , AiFillInstagram ,AiFillYoutube} from 'react-icons/ai';


export default function Footer() {
  return (
    <>
        <div className="footer_container">
            <h1>Let's be Friends</h1>
            <div className="scoialMedia_Container">
                <a href=""><AiFillLinkedin/></a>
                <a href=""><AiFillInstagram/></a>
                <a href=""><AiFillYoutube/></a>
            </div>
        </div>
    </>
  )
}
