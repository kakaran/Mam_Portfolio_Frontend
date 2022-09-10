import React from 'react';
import { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import axios from 'axios';
import "./Dashboard.css"

export default function Dashboard() {
  const [name , setName] = useState();
  const [avtarimage , setAvtarimage] = useState();
  const [homeimage , setHomeimage] = useState();
  const [resume , setResume] = useState();

  const admininformation = {
    name,
    avtarimage,
    homeimage,
    resume
  }

  console.log(admininformation);
  const handlesubmit = async () =>{
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };

      const data  = await axios.post("http://localhost:4000/api/admin",admininformation).then((res)=>{
        console.log(res);
      }).catch((err) =>{
        console.log(err);
      })
  }


  return (
   <div className="Dashboard_Container">
   <Sidebar/>
   <div className="profile_container">
    <div className="user_information">
      <img src="" alt="" />
      <h1>name</h1>
    </div>
    <div className="user_form">
      <div className="user_form_inputs">
        <div className="input_holder">
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" placeholder='Enter your Name'onChange={(e) =>{setName(e.target.value)}}/>
        </div>
        <div className="input_holder">
        <label htmlFor="avtarimage">Avtar Image</label>
        <input id='avtarimage'placeholder='Upload the Image' onChange={(e) =>{setAvtarimage(e.target.value)}}/>
        </div>
        <div className="input_holder">
        <label htmlFor="HomeImage">Your Home Page Image</label>
        <input id='HomeImage' placeholder='Upload on Image ' onChange={(e) =>{setHomeimage(e.target.value)}}/>
        </div>
        <div className="input_holder">
        <label htmlFor="resume">Resumay</label>
        <input id='resume' placeholder='Upload the Resume'onChange={(e) =>{setResume(e.target.value)}}/>
        </div>
      </div>
      <button onClick={() =>{handlesubmit()}}>Submit</button>
    </div>
   </div>
   </div>
  )
}
