import React from 'react';
import photo1 from '../../Assets/photo1.jpg';
import photo2 from '../../Assets/photo2.jpeg';
import photo3 from '../../Assets/photo3.jpeg';
import photo4 from '../../Assets/img2.jpeg';
import { Link } from 'react-router-dom';

const CurrentDrives = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Current Placement Drives</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={photo1} alt="Tata Steel" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-2">Tata Steel TomorrowLab</h2>
            <p className="text-sm text-gray-600">
              Hiring for Junior Operator - Packing!
            </p>
            <Link to="/Companydetails1" className="text-blue-600 font-medium hover:underline block mt-3">
              Read More
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={photo2} alt="Cipla" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-2">Cipla</h2>
            <p className="text-sm text-gray-600">
              Hiring for Junior Operator - Packing!
            </p>
            <Link to="/Companydetails2" className="text-blue-600 font-medium hover:underline block mt-3">
              Read More
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={photo3} alt="Citi Bank" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-2">CITI BANK</h2>
            <p className="text-sm text-gray-600">
              Hiring for IT Quality Analyst 2!
            </p>
            <Link to="/Companydetails3" className="text-blue-600 font-medium hover:underline block mt-3">
              Read More
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={photo4} alt="Lakshmi" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-2">Lakshmi</h2>
            <p className="text-sm text-gray-600">
              Hiring for Sales Consultant!
            </p>
            <Link to="/Companydetails4" className="text-blue-600 font-medium hover:underline block mt-3">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDrives;
