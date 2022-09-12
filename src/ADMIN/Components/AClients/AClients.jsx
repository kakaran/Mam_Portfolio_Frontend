import React, { useEffect, useState } from 'react'
import Sidebar from '../../Pages/SideBar/Sidebar'
import axios from 'axios';
import './Aclient.css'
// import { BiLogIn } from 'react-icons/bi';

export default function AClients() {

  const [fetcdata, setFetcdata] = useState([]);
  const [climage, setClimage] = useState();
  const [clname, setClname] = useState();
  const [_id, setClientid] = useState();

  useEffect(() => {

    async function fetchdata() {
      try {
        const data = (await axios.get("http://localhost:4000/api/Client", {})).data
        setFetcdata(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  const clientData = {
    climage,
    clname
  }
  const onSubmitData = async () => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    await axios.post("http://localhost:4000/api/Client", clientData).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })
  }


  const onDeleteClient = async () => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    await axios.delete(`http://localhost:4000/api/Client/${_id}`).then((res) => {
      window.location.reload()
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <div className='Aclient_Container'>
      <Sidebar />
      <div className="Aclient_form_container">
        <div className="Clients_form">
          <h1>Add the New Clients</h1>
          <div className="input_holder">
            <label htmlFor="C-Image">Client Image</label>
            <input id='C-Image ' placeholder='Upload the Client Image ' onChange={(e) => { setClimage(e.target.value) }} />
          </div>
          <div className="input_holder">
            <label htmlFor="C-Name">Client Name</label>
            <input id='C-Name ' placeholder='Enter the Client Name ' onChange={(e) => { setClname(e.target.value) }} />
          </div>
          <button onClick={() => { onSubmitData() }}>Submit</button>
          <div className="delete_clients_form">
            <h1>Delete Clients</h1>
            <div className="input_holder">
              <label htmlFor="C-ID">Client ID</label>
              <input id='C-ID ' placeholder='Enter the Client ID' onChange={(e) => { setClientid(e.target.value) }} />
            </div>
            <button onClick={() => { onDeleteClient() }}>Delete</button>
          </div>
        </div>
        <div className="display_allClients_container">
          <div className="table_heading">
            <table style={{ width: "750px" }} className="auto_index">
              <tr>
                <th>Index</th>
                <th>Client Name</th>
                <th>Client ID</th>
              </tr>
              {fetcdata.map((data, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.clname}</td>
                    <td>{data._id}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
