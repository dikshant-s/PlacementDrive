import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    phone: '',
    email: '', // Add email property to match the data you are fetching
  });

  // useEffect hook to fetch student data when the component mounts
  useEffect(() => {
    // Fetch student data from the backend API
    fetch('http://localhost:3001/api/student', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any headers needed for your API request
        // You might need to include authentication headers if required
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Update the state with the fetched data
        setStudentData(data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error.message);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  // JSX to render the component
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
            <th>Email</th> {/* Corrected property name */}
            <td>{studentData.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
