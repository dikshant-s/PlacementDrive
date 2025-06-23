import React from 'react'
import './Interviews.css'
const Interviews = () => {
  return (
    <div>
      <div className='bodya'>
      <h2>Interview Information</h2>

      <table>
        <tr>
          <th>FIRM</th>
          <th>ROLE</th>
          <th>INTERVIEW DATE</th>
        </tr>
        <tr>
          <td>INFOSYS</td>
          <td>SOFTWARE ENGINEER</td>
          <td>12/01/2024</td>
        </tr>
        <tr>
          <td>SERVICE NOW</td>
          <td>SQL DEVELOPER</td>
          <td>05/12/2023</td>
        </tr>
        <tr>
          <td>SRCESIUM</td>
          <td>SOFTWARE ENGINEER</td>
          <td>16/12/2023</td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default Interviews
