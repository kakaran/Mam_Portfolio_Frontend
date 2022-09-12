import axios from 'axios';
import './Clients.css'
import React,{ useState, useEffect} from 'react';

export default function Clients() {
  const [clientdetail,  setClientDetail] = useState([{}]);

  useEffect(() => {

    async function fetchdata() {
      try {
        const data = (await axios.get("http://localhost:4000/api/Client", {})).data
        console.log(data);
        setClientDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  },[])

  console.log(clientdetail.clname);

  return (
  
    <>
        <div className="clients_Container">
            <h1>Clients</h1>
            <p>Big Deal With</p>
            <div className="Company_Detail_Container">
              {clientdetail.map((data)=>{
                return(
                <div className="Box_Container">
                    <img src={data.climage} alt="image" />
                    <p>{data.clname}</p>
                </div>
                )
              })}
            </div>
        </div>
    </>
  )
}
