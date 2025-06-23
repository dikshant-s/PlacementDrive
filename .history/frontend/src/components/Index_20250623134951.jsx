import React from 'react'
import Logo from '../Assets/Logo.png'
import './Index.css'
import { HashLink as NavLink } from 'react-router-hash-link'

const Index = () => {
    return (
        <div className="banner">
            <div className="navbar">
                <img src={Logo} alt="Logo" className="logo" />
                <ul>
                    {/* <li><NavLink to="#footer">Contact</NavLink></li> */}
                    <li><a href="/login">Student Login</a></li>
                    <li><a href="/adminlogin">Admin Login</a></li>
                </ul>
            </div>

            <div className="contents">
                <h1>Placement Drive</h1>
                <p>
                    Our greatest glory is not in never falling, but in rising every time we fall<br />
                    We will make a better future for you....
                </p>
                <button><a href="">Current Drives</a></button>
            </div>

            <footer id="footer">
                <div className="social-icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-github"></i>
                </div>
                <p>© 2023 Copyright: <a href="https://tw-elements.com/">TW elements</a></p>
            </footer>
        </div>
    )
}

export default Index
