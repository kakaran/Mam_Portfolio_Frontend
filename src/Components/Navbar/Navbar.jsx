import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'

import "./Navbar.css"

export default function Navbar() {
    const [activevalue , setActiveValue] =useState("#");  
    const [menu, setmenu] = useState(false);


  return (
    <>
        <div className="navbar_Container">
            <div className="navbar_logo">logo</div>
            <div className="navbar_links">
                <Link onClick={() =>{setActiveValue("#")}} className = { activevalue === "#" ? "active" : " " } to= "" >About</Link>
                <Link onClick={() =>{setActiveValue("#Service")}} className = { activevalue === "#Service" ? "active" : " " } to= "" >Service</Link>
                <Link onClick={() =>{setActiveValue("#Works")}} className = { activevalue === "#Works" ? "active" : " " } to= "" >Works</Link>
            </div>
            <div className="second_navbar_hamburger">
            <Hamburger 
            color="#572138" rounded
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                setmenu(true);
              } else {
                // close a menu
                setmenu(false)
              }
            }}
            /></div>
        </div>
    </>
  )
}
