import React, { useEffect, useState } from "react";
import Sidebar from "../../Pages/SideBar/Sidebar";
import axios from "axios";
import "./Aclient.css";
import { FiDelete } from 'react-icons/fi';

// import { BiLogIn } from 'react-icons/bi';

export default function AClients() {
  const [fetcdata, setFetcdata] = useState([]);
  const [climage, setClimage] = useState();
  const [clname, setClname] = useState();
  const [render,setRender] = useState(0)

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = (await axios.get("http://localhost:4000/api/Client", {}))
          .data;
        setFetcdata(data);
        setRender(0)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [render]);

  const DeletData = async (_id) =>{
    try {
      axios.defaults.headers = {
        auth: localStorage.getItem("token"),
      };  
      const data = await axios.delete(`http://localhost:4000/api/Client/${_id}`)
      console.log(data);
      setRender(1)

    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitData = async () => {
    try {
      axios.defaults.headers = {
        auth: localStorage.getItem("token"),
      };
      let formData = new FormData();
      formData.append("climage", climage);
      formData.append("clname", clname);
      const data = (
        await axios.post("http://localhost:4000/api/Client", formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        })
      ).data;
        setRender(1)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Aclient_Container">
      <Sidebar />
      <div className="Aclient_form_container">
        <div className="Clients_form">
          <h1>Add the New Clients</h1>
          <div className="input_holder">
            <label htmlFor="C-Image">Client Image</label>
            <input
              type="file"
              id="C-Image "
              placeholder="Upload the Client Image "
              accept="image/*"
              onChange={(e) => {
                setClimage(e.target.files[0]);
              }}
            />
          </div>
          <div className="input_holder">
            <label htmlFor="C-Name">Client Name</label>
            <input
              id="C-Name "
              placeholder="Enter the Client Name "
              onChange={(e) => {
                setClname(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              onSubmitData();
            }}
          >
            Submit
          </button>
          {/* <div className="delete_clients_form">
            <h1>Delete Clients</h1>
            <div className="input_holder">
              <label htmlFor="C-ID">Client ID</label>
              <input id='C-ID ' placeholder='Enter the Client ID' onChange={(e) => { setClientid(e.target.value) }} />
            </div>
            <button onClick={() => { onDeleteClient() }}>Delete</button>
          </div> */}
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
              {fetcdata.map((data, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.clname}</td>
                    <td><img src={`http://localhost:4000/api/Client/Image/${data?._id}`} alt="" /></td>
                    <td><FiDelete onClick={() =>{
                      DeletData(data?._id)
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
