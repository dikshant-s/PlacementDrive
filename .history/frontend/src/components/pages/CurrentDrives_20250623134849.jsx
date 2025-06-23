import React from 'react';
import photo1 from '../../Assets/photo1.jpg';
import photo2 from '../../Assets/photo2.jpeg';
import photo3 from '../../Assets/photo3.jpeg';
import photo4 from '../../Assets/img2.jpeg';

const CurrentDrives = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={photo1}
              alt="Tata Steel"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Tata Steel TomorrowLab (Student Track)
              </h3>
              <p className="text-gray-700">
                Tata Steel TomorrowLab is hiring for the role of Junior Operator
                - Packing!
              </p>
              <a
                href="/Companydetails1"
                className="text-blue-600 hover:underline block mt-2"
              >
                Read More
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={photo2}
              alt="Cipla"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Cipla: Junior Operator - Packing
              </h3>
              <p className="text-gray-700">
                Cipla is hiring for the role of Junior Operator - Packing!
              </p>
              <a
                href="/Companydetails2"
                className="text-blue-600 hover:underline block mt-2"
              >
                Read More
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={photo3}
              alt="CITI BANK"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                CITI BANK: Quality Analyst 2!
              </h3>
              <p className="text-gray-700">
                Citi Bank is hiring for the role of IT Quality Analyst 2!
              </p>
              <a
                href="/Companydetails3"
                className="text-blue-600 hover:underline block mt-2"
              >
                Read More
              </a>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={photo4}
              alt="Lakshmi"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Lakshmi: Sales Consultant
              </h3>
              <p className="text-gray-700">
                Srilakshmi Auto Enterprises is hiring for the role of Sales
                Consultant!
              </p>
              <a
                href="/Companydetails4"
                className="text-blue-600 hover:underline block mt-2"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDrives;
