import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiDetail, BiLogIn, BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

export default function Sidebar({ children }) {
  const [adminimage, setAdminimage] = useState([]);

  const routes = [
    {
      path: "/About",
      name: "About",
      icon: <BiDetail />,
    },
    {
      path: "/Client",
      name: "Client",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/Services",
      name: "Services",
      icon: <MdOutlineDesignServices />,
    },
    {
      path: "/Testimonials",
      name: "Testimonials",
      icon: <BiMessageSquareDetail />,
    },
  ];

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = (
          await axios.get("http://localhost:4000/api/admin/Dashboard")
        ).data;
        await setAdminimage(data.Data[0]);
        // console.log(data.Data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchdata();
  }, []);

  return (
    <>
      <div className="Sidebar_container">
        <motion.div animate={{ width: "230px" }} className="sidebar">
          <div className="header_name">
            {adminimage._id && <img
              src={`http://localhost:4000/api/admin/Dashboard/image/${adminimage?._id}`}
              alt=""
            />}
            <Link to="/Dashboard">
              <h1>{adminimage.name}</h1>
            </Link>
          </div>
          <div className="routes">
            {routes.map((route) => {
              return (
                <NavLink
                  to={route.path}
                  key={route.name}
                  className="sidebar_link"
                >
                  <div className="sidebar_route_icons">{route?.icon}</div>
                  <div className="sidebar_link_name">{route?.name}</div>
                </NavLink>
              );
            })}
          </div>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
}
