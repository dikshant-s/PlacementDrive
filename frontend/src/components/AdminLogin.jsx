import React from 'react'
import './Admin.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AdminLogin = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const nav = useNavigate()
    const handleSubmit = (e)=> {
        e.preventDefault()
    
    axios.post('http://localhost:3002/adminlogin',{email,password})
    .then(result=> {
        
        console.log('Got reponse from backend..',result)
        if(result.data==="Success"){
            nav('/Admindashboard')
        }
           
        })
    .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Student Login</a></li>
                    <li><a href="/adminlogin">Administrative Login</a></li>
                </ul>
            </div>
            <div className="login-container">
                <div className="login-heading">Administrative login</div>
                <form onSubmit={handleSubmit}>
                
                    <div className="form-group">
                        <label >Enter your Email</label>
                        <input type="email" placeholder="abcd@gmail.com" required  onChange={(e)=> setEmail(e.target.value)} />
                        <br />
                        <label>Enter your Password</label>
                        <input type="password" placeholder="DIpa@34" required  onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                    <p>New User!? click here to register ➤<a href="/AdminSignup">Register</a></p>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
