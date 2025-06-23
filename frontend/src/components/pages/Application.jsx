import React from 'react'
import './Application.css'
const mockApplications = [
  { id: 1, company: 'Company A', position: 'Software Developer', status: 'Submitted', date: '2023-12-01' },
  { id: 2, company: 'Company B', position: 'Data Analyst', status: 'Under Review', date: '2023-12-05' },
];
const Application = () => {
  return (
    <div className='application_info'>
      <h1>Applications</h1>
      <ul>
        {mockApplications.map(application => (
          <li key={application.id}>
            <strong>{application.company}</strong> - {application.position} - Status: {application.status} - Submitted on {application.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Application
