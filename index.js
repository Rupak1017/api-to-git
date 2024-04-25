const express = require('express');
const app = express();

// Sample course data
const courses = [
  {
    id: 1,
    name: 'Backend Development',
    instructor: 'Raj Krishnan',
    schedule: 'Thursday (6:25-9:05pm)'
  },
  {
    id: 2,
    name: 'Business Innovation',
    instructor: 'Mark Campbell',
    schedule: 'Wednesday (6:00-8:30pm)'
  },
  {
    id: 3,
    name: 'Full Stack Development',
    instructor: 'Brian Bailey',
    schedule: 'Tuesday (6:00-8:30pm)'
  },
  {
    id: 4,
    name: 'Human-Computer Interaction',
    instructor: 'Calvin Nobles',
    schedule: 'Monday (6:30-9:00pm)'
  },
  {
    id: 5,
    name: 'ITM Frameworks',
    instructor: 'Rahul Patel',
    schedule: 'Wednesday (6:25-9:00pm)'
  },
  {
    id: 6,
    name: 'Database Security',
    instructor: 'Dawson Maurice',
    schedule: 'Monday (3:30-5:30pm)'
  },
  {
    id: 7,
    name: 'Web App Development',
    instructor: 'Anita Debarlaben',
    schedule: 'Wednesday (1:50-3:05pm)'
  },
  {
    id: 8,
    name: 'Cyber Security Management',
    instructor: 'Johnson Andrew',
    schedule: 'Thursday (5:00-7:40pm)'
  }
];


// Route to get all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Route to get a specific course by ID
app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(course => course.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
