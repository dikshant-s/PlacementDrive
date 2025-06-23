import React from 'react';
import Logo from '../Assets/Logo.png';
import './Index.css';
import { HashLink as NavLink } from 'react-router-hash-link';

const Index = () => {
  return (
    <div className="banner">
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <ul>
          <li><NavLink to="#footer">Contact</NavLink></li>
          <li><a href="/login">Student Login</a></li>
          <li><a href="/adminlogin">Admin Login</a></li>
        </ul>
      </nav>

      <div className="contents">
        <h1>Placement Drive</h1>
        <p>
          Our greatest glory is not in never falling, but in rising every time we fall.<br />
          We will make a better future for you....
        </p>
        <button>
          <span></span>
          <a href="/currentdrives">Current Drives</a>
        </button>
      </div>

      <footer id="footer" className="footer">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
        <p>© 2023 Copyright: <a href="https://tw-elements.com/">TW elements</a></p>
      </footer>
    </div>
  );
};

export default Index;
