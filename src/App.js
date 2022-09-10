import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from "./ADMIN/Admin";
import AAbout from "./ADMIN/Components/AAbout/AAbout";
import AClients from "./ADMIN/Components/AClients/AClients";
import AServices from "./ADMIN/Components/AService/AServices";
import ATestimonials from "./ADMIN/Components/Testimonials/ATestimonials";
import Dashboard from "./ADMIN/Pages/Dashboard/Dashboard"; 
import Sidebar from "./ADMIN/Pages/SideBar/Sidebar";
import Home from "./Pages/Home";
function App() {

  // const [token, setToken] = useState();
  // setToken(localStorage.getItem("token"));

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
        </Routes>
        <Routes>
          <Route exact path="/About" element={<AAbout />} />
          <Route exact path="/Client" element={<AClients />} />
          <Route exact path="/Services" element={<AServices />} />
          <Route exact path="/Testimonials" element={<ATestimonials />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
