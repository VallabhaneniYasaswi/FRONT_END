import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AcademicRegistrations from './Components/AcademicRegistrations';
import Attendance from './Components/Attendance';
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Student from './Components/Student';
import TimeTable from './Components/TimeTable';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic-registrations" element={<AcademicRegistrations />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student" element={<Student />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
