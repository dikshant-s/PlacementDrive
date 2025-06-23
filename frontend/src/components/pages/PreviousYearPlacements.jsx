import React from 'react';

const PlacementList = ({ placementData }) => {
  return (
    <div>
      <h1>Placement Data</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Branch</th>
            <th>Offer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {placementData.map((placement, index) => (
            <tr key={index}>
              <td>{placement.company}</td>
              <td>{placement.branch}</td>
              <td>{placement.offer}</td>
              <td>{placement.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementList;
