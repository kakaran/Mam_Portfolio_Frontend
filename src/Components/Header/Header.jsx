import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Header.css"

export default function Header() {
  return (
    <>
        <div className="info_Container">
        <Navbar/>
            <div className="info_textData">
            <h5>Hello,</h5>
            <h1>Poorav Keshri</h1>
            <h2>A Freelance UX Designer</h2>
            <button>Let's Talk</button>
            </div>
        </div>
    </>
  )
}
