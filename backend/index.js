require('dotenv').config(); // Load .env variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentModel = require("./models/students");
const adminModel = require("./models/adminlogin");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Correct connection to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Student Routes (external file)
app.use('/api', studentRoutes);

// Student Login (Sign In)
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  studentModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Invalid Password!");
        }
      } else {
        res.json("No record Found");
      }
    });
});

// Student Signup
app.post('/Studentlogin', (req, res) => {
  studentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err));
});

// Admin Login
app.post('/adminlogin', (req, res) => {
  const { email, password } = req.body;
  adminModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Invalid Password!");
        }
      } else {
        res.json("No record Found");
      }
    });
});

// Admin Signup
app.post('/AdminSignup', (req, res) => {
  adminModel.create(req.body)
    .then(admin => res.json(admin))
    .catch(err => res.json(err));
});

// Get one student (make sure 'studentModel' is used here)
app.get('/student', async (req, res) => {
  try {
    const studentData = await studentModel.findOne();
    if (!studentData) {
      return res.status(404).json({ error: 'Student data not found' });
    }
    res.json(studentData);
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// Single listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
