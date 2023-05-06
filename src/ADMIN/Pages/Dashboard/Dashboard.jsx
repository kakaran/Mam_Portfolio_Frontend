import React, { useState, useEffect } from "react";
import Sidebar from "../SideBar/Sidebar";
import axios from "axios";
import "./Dashboard.css";
// import fs from "fs";

export default function Dashboard() {
  const [name, setName] = useState();
  const [avtarimage, setAvtarimage] = useState();
  const [homeimage, setHomeimage] = useState();
  const [resume, setResume] = useState();
  const [admindetail, setAdminDetail] = useState([{}]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = (
          await axios.get("http://localhost:4000/api/admin/Dashboard")
        ).data;
        setName(data.Data[0].name);
        setAdminDetail(data.Data[0]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  const handlesubmit = async () => {
    try {
      let formData = new FormData();
      avtarimage && formData.append("file1", avtarimage);
      formData.append("name", name);
      homeimage && formData.append("file2", homeimage);
      resume && formData.append("resume", resume);

      const data = await axios.post(
        `http://localhost:4000/api/admin/Dashboard/${admindetail._id}`,
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );

      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Dashboard_Container">
      <Sidebar />
      <div className="profile_container">
        <div className="user_information">
          {/* {ImageGet()} */}
          {admindetail._id && <img
            src={`http://localhost:4000/api/admin/Dashboard/image/${admindetail?._id}`}
            alt=""
          />}
          <h1>{admindetail.name}</h1>
        </div>
        <div className="user_form">
          <div className="user_form_inputs">
            <div className="input_holder">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                placeholder="Enter your Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="input_holder">
              <label htmlFor="avtarimage">Avtar Image</label>
              <input
                type="file"
                id="avtarimage"
                placeholder="Upload the Image"
                accept="image/*"
                onChange={(e) => {
                  setAvtarimage(e.target.files[0]);
                }}
              />
            </div>
            <div className="input_holder">
              <label htmlFor="HomeImage">Your Home Page Image</label>
              <input
                type="file"
                id="HomeImage"
                placeholder="Upload on Image "
                accept="image/*"
                onChange={(e) => {
                  setHomeimage(e.target.files[0]);
                }}
              />
            </div>
            <div className="input_holder">
              <label htmlFor="resume">Resumay</label>
              <input
                type="file"
                id="resume"
                placeholder="Upload the Resume"
                onChange={(e) => {
                  setResume(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <button
            onClick={() => {
              handlesubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
