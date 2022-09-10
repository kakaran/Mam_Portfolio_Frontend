import React,{ useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './Login.css'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate =  useNavigate();

    const admin = {
        email,
        password
    }

    const onloginHandle = async () => {

        await axios.post("http://localhost:4000/api/login", admin).then((res) => {
            if(res.data.token)
            {
                localStorage.setItem("token" , res.data.token);
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 900,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setTimeout(() => {
                        navigate('/Dashboard')
                    }, 1500);
            }
        }).catch((err) => {
            toast.error(err.request.response, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })

    }

    return (
        <>
            <div className="login_container">
                <h1>Login Page</h1>
                <div className="login_form">
                    <label htmlFor="Email">Email ID</label>
                    <input type="email" id="Email" placeholder='Enter Email Id' onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    <label htmlFor="Password">Password</label>
                    <input type="password" id='Password' placeholder='Enter the Password' onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                    <button onClick={() => {
                        onloginHandle()
                    }}>Login</button>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
