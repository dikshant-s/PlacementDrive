import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    phone: '',
    email: '', 
    dob: '',
    semester: '',
    branch: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/student', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
      
        setStudentData(data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error.message);
      });
  }, []);
  
  return (
    <div className="profile-container">
      <h2 className="profile-heading">Student Profile</h2>

      <table className="profile-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{studentData.name}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{studentData.phone}</td>
          </tr>
          <tr>
            <th>Email</th> 
            <td>{studentData.email}</td>
          </tr>
          <tr>
            <th>Semester</th>
            <td>{studentData.semester}</td>
          </tr>
          <tr>
            <th>Branch</th>
            <td>{studentData.branch}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
