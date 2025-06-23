import React from 'react';
import Logo from '../Assets/Logo.png';
import './Index.css';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="banner">
      {/* Navbar */}
      <div className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <ul>
          <li><Link to="/login">Student Login</Link></li>
          <li><Link to="/adminlogin">Admin Login</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="contents">
        <h1>Placement Drive</h1>
        <p>
          Our greatest glory is not in never falling,<br />
          but in rising every time we fall.
          <br />
          We will make a better future for you...
        </p>
        <button>
          <Link to="/CurrentDrives">Current Drives</Link>
        </button>
      </div>

      {/* Footer */}
      <footer id="footer" className="footer">
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
  );
};

export default Index;
