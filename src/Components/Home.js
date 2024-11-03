import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from './Appbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <MenuAppBar/>
      </div>
    <div>
      <h1>Welcome to the Home Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '200px' }}>
        <button onClick={() => navigate('/academic-registrations')}>Academic Registrations</button>
        <button onClick={() => navigate('/attendance')}>Attendance</button>
        <button onClick={() => navigate('/courses')}>Courses</button>
        <button onClick={() => navigate('/faculty')}>Faculty</button>
        <button onClick={() => navigate('/student')}>Student</button>
        <button onClick={() => navigate('/timetable')}>Time Table</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Home;
