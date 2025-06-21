
const StudentModel = require('../models/students');

const getStudentData = async (req, res) => {
  try {
   
    const studentData = await StudentModel.findOne();
    
    if (!studentData) {
      return res.status(404).json({ error: 'Student data not found' });
    }

    res.json(studentData);
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getStudentData };
