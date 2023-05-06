import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import "./Header.css"

export default function Header() {

  const [userimage , setUserimage] = useState([{}]);
  useEffect(() =>{
      
    async function fetchdata(){
      
      const data =  (await axios.get("http://localhost:4000/api/admin",{})).data
      // setUserimage(data[0]);
    }
    
    fetchdata();
  },[])

  return (
    <>
        <div className="info_Container">
        <Navbar/>
            <div className="info_textData">
            <h5>Hello,</h5>
            <h1>{userimage.name}</h1>
            <h2>A Freelance UX Designer</h2>
            <button>Let's Talk</button>
            <img src={userimage.homeimage} alt="" />
            </div>
        </div>
    </>
  )
}
