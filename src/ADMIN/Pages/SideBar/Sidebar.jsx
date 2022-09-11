import React,{ useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { BiDetail,BiMessageSquareDetail } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { NavLink , Link} from 'react-router-dom';
import axios from 'axios'
import "./Sidebar.css"

export default function Sidebar({ children }) {
  // const [adminimage, setAdminimage] = useState()

  const routes = [
    {
      path: "/About",
      name: "About",
      icon: <BiDetail />
    },
    {
      path: "/Client",
      name: "Client",
      icon: <HiOutlineUsers />
    },
    {
      path: "/Services",
      name: "Services",
      icon: <MdOutlineDesignServices />
    },
    {
      path: "/Testimonials",
      name: "Testimonials",
      icon: <BiMessageSquareDetail />
    },
  ]

  // useEffect(() =>{
      
  //   async function fetchdata(){
      
  //     await axios.get("http://localhost:4000/api/admin",{}).then((res) => {
  //     setAdminimage(res)
  //     console.log(adminimage.data.name);
  //     // console.log(res.request.response,"====",adminimage);
  //     }).catch((err) =>{
  //       console.log(err);
  //     })
  //   }
    
  //   fetchdata();
  // },[])

  return (
    <>
      <div className="Sidebar_container">
        <motion.div animate={{ width: "230px" }} className="sidebar">
          <div className="header_name">
            <img src="" alt="" />
            <Link to="/Dashboard"><h1>name</h1></Link>
            </div>
          <div className="routes">
            {routes.map((route) => {
              return(
              <NavLink to={route.path} key={route.name} className="sidebar_link">
                <div className="sidebar_route_icons">{route.icon}</div>
                <div className="sidebar_link_name">{route.name}</div>
              </NavLink>
            )})}
          </div>
        </motion.div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
