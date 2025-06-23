import React from 'react';
import photo1 from '../../Assets/photo1.jpg';
import photo2 from '../../Assets/photo2.jpeg';
import photo3 from '../../Assets/photo3.jpeg';
import photo4 from '../../Assets/img2.jpeg';
import './CurrentDrives.css'; // ✅ Link to the new CSS

const CurrentDrives = () => {
  return (
    <div className="drives-page">
      <div className="drives-container">
        <div className="drives-grid">
          {/* CARD 1 */}
          <div className="drive-card">
            <img src={photo1} alt="Tata Steel" className="drive-image" />
            <div className="drive-content">
              <h3>Tata Steel TomorrowLab (Student Track)</h3>
              <p>
                Tata Steel TomorrowLab is hiring for the role of Junior Operator - Packing!
              </p>
              <a href="/Companydetails1">Read More</a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="drive-card">
            <img src={photo2} alt="Cipla" className="drive-image" />
            <div className="drive-content">
              <h3>Cipla: Junior Operator - Packing</h3>
              <p>
                Cipla is hiring for the role of Junior Operator - Packing!
              </p>
              <a href="/Companydetails2">Read More</a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="drive-card">
            <img src={photo3} alt="CITI BANK" className="drive-image" />
            <div className="drive-content">
              <h3>CITI BANK: Quality Analyst 2!</h3>
              <p>
                Citi Bank is hiring for the role of IT Quality Analyst 2!
              </p>
              <a href="/Companydetails3">Read More</a>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="drive-card">
            <img src={photo4} alt="Lakshmi" className="drive-image" />
            <div className="drive-content">
              <h3>Lakshmi: Sales Consultant</h3>
              <p>
                Srilakshmi Auto Enterprises is hiring for the role of Sales Consultant!
              </p>
              <a href="/Companydetails4">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDrives;
