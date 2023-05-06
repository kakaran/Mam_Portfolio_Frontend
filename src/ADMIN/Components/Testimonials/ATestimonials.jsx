import React, { useState,useEffect } from "react";
import Sidebar from "../../Pages/SideBar/Sidebar";
import "./ATestimonials.css";
import "../AClients/Aclient.css"
import axios from "axios";
import { FiDelete } from 'react-icons/fi';


export default function ATestimonials() {
  const [formDetail, setFormDetail] = useState({
    Name: "",
    Profeshion: "",
    Detail: "",
  });
  const [formimage, setFormimage] = useState();
  const [render, setRender] = useState(0);
  const [testimonialdata ,setTestimonialData] = useState();

  const HandleChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const TeststimonilaDataget = async () =>{
      try {
        const Data = (await axios.get("http://localhost:4000/api/Testimonial")).data
        setTestimonialData(Data)
        // console.log(Data);
      } catch (error) {
        console.log(error);
      }
    }
    TeststimonilaDataget()
  }, [render])
  

  const TetstimonialDataDelete = async (_id) =>{
    try {
      const Data = (await axios.delete(`http://localhost:4000/api/Testimonial/${_id}`)).data
      setRender(1)
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  }
console.log(testimonialdata);
  const TestimonialDataSubmit = async () => {
    try {
      axios.defaults.headers = {
        auth: localStorage.getItem("token"),
      };
      let formData = new FormData();
      formData.append("Image", formimage,);
      formData.append("Name", formDetail.Name);
      formData.append("Profeshion", formDetail.Profeshion);
      formData.append("Detail", formDetail.Detail);
      const Data = (
        await axios.post("http://localhost:4000/api/Testimonial", formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        })
      ).data;
      console.log(Data);
      setRender(0)
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="TestimonialContainer">
      <Sidebar />
      <div className="TestimonialFormContainer">
        <div className="Testimonial_form">
          <h1>Add Tetimonials</h1>
          <div className="input_holder">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              onChange={HandleChange}
              placeholder="Enter the Name"
            />
          </div>
          <div className="input_holder">
            <label htmlFor="Profeshion">Profeshion</label>
            <input
              type="text"
              name="Profeshion"
              id="Profeshion"
              onChange={HandleChange}
              placeholder="Enter the Profeshion"
            />
          </div>
          <div className="input_holder">
            <label htmlFor="Detail">Detail</label>
            <input
              type="text"
              name="Detail"
              id="Detail"
              onChange={HandleChange}
              placeholder="Enter the Detail"
            />
          </div>
          <div className="input_holder">
            <label htmlFor="Image">Image</label>
            <input
              type="file"
              name="Image"
              id="Image"
              onChange={(e) => {
                setFormimage(e.target.files[0]);
              }}
            />
          </div>
          <button onClick={TestimonialDataSubmit}>Submit</button>
        </div>
        <div className="display_allClients_container">
          <div className="table_heading">
            <table style={{ width: "750px" ,margin : "auto"}} className="auto_index">
              <tr>
                <th>Index</th>
                <th>Client Name</th>
                <th>Image</th>
                <th>Option</th>
              </tr>
              {testimonialdata?.map((data, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data?.Name}</td>
                    <td><img src={`http://localhost:4000/api/Testimonial/image/${data?._id}`} alt="" /></td>
                    <td><FiDelete onClick={() =>{
                      TetstimonialDataDelete(data?._id)
                    }}/></td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
