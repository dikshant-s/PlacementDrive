import React, { Children } from 'react'
import './Admindashboard.css'
import {
    FaBars,
    FaUser,
    FaShapes,   
    FaEnvelope,
    FaUsers,
    FaUserCheck,
    FaSignOutAlt,
    
} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Dashboard = ({ Children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        nav('/');
    }
    const Items = [
        {
            path: "/adminprofile",
            name: "adminprofile",
            icon: <FaUser/>
        },
        {
            path: "/Interviews",
            name: "Interviews",
            icon: <FaUsers/>
        },
        {
            path: "/eligibility",
            name: "Eligibility",
            icon: <FaUserCheck/>
        },
        {
            path: '/logout',
            name: 'Logout',
            icon: <FaSignOutAlt/>,
            onClick: handleLogout, // Add an onClick function for the logout button
          },
    ]
    return (
        <div className='body'>
            <div className='header'>
                <h1>Welcome Admin</h1>
            </div>
            <div className='container_a'>
                <div style={{ width: isOpen ? "300px" : "50px" }} className='dashboard' >
                    <div className='top_section'>
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo1">Dashboard</h1>
                        <div style={{ marginLeft: isOpen ? "20px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {
                        Items.map((item, index) => (
                            <div key={index} className="link" onClick={item.onClick || (() => { })}>
                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </NavLink>
                                
                            </div>
                        ))
                    }
                    
                </div>
                <main>{Children}</main>
            </div>
            <div className='text'>
                
            </div>
        </div>
    )
}

export default Dashboard
