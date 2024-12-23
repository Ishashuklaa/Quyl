const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();

// Supabase client initialization
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const cors = require('cors');
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());



// Get all data from "StudentData" table
app.get("/api/supabase-data", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("StudentData")
      .select("*");

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(400).json({ message: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST route for adding a student
app.post('/api/add-student', async (req, res) => {
  const { studentName} = req.body;

  if (!studentName ) {
    return res.status(400).json({ error: 'Student Name  is required' });
  }


  const Date_Joined = new Date('2011-11-24').toISOString();
  const Status = false;
  const Last_Login = new Date().toISOString();
  const Cohort = "AY 2024-25";
  const Courses =  "CBSE 9 Science, CBSE 9 Math";
  const Student_Name= studentName

  try {
    
    const { data, error } = await supabase.from('StudentData').insert([
       {
         Student_Name,
         Cohort,
         Courses,
         Date_Joined,
         Last_Login,
         Status,
       },
     ]).select();

     if (error) {
       console.error('Supabase Insert Error:', error);
       return res.status(500).json({ error: 'Error adding student data', details: error.message });
     }

     res.status(201).json({ message: 'Student data added successfully', data });
   } 
 catch (error) {
    console.error('Unexpected Error:', error);
    res.status(500).json({ error: 'Unexpected error occurred', details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
