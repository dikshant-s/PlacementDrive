import React from "react";
import "./App.css";
import LoginSignup from "./components/LoginSignup";
import Index from "./components/Index";
import AdminLogin from "./components/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminSignup from "./components/AdminSignup";
import Dashboard from "./components/Dashboard";
import Admindashboard from './components/Admindashboard';
import Adminprofile from './components/pages/Adminprofile';
import Profile from './components/pages/Profile';
import Application from "./components/pages/Application";
import Status from "./components/pages/Status";
import Interviews from "./components/pages/Interviews";
import Eligibility from "./components/pages/Eligibility";
import CurrentDrives from "./components/pages/CurrentDrives";
import Companydetails1 from "./components/pages/Companydetails1";
import Companydetails2 from "./components/pages/Companydetails2";
import Companydetails4 from "./components/pages/Companydetails4";
import Companydetails3 from "./components/pages/Companydetails3";
import LogOut from './components/pages/LogOut';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/Studentlogin" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
        <Route path="/currentdrives" element={<CurrentDrives />} />
        <Route path="/Companydetails1" element={<Companydetails1 />} />
        <Route path="/Companydetails2" element={<Companydetails2 />} />
        <Route path="/Companydetails3" element={<Companydetails3 />} />
        <Route path="/Companydetails4" element={<Companydetails4 />} /> 
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Admindashboard" element={<Admindashboard/>}/>
        <Route path="/Adminprofile" element={<Adminprofile />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/status" element={<Status />} />
        <Route path="/Interviews" element={<Interviews />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/logout" element={<LogOut/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
