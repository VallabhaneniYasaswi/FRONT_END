import React, { useEffect, useState } from 'react';
import MenuAppBar from './Appbar';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/api/courses');
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <MenuAppBar />
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <h1>Courses Page</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Course Code</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Course Name</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Department</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Credits</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.code} style={{ backgroundColor: courses.indexOf(course) % 2 === 0 ? '#f2f2f2' : 'white' }}>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{course.code}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{course.name}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{course.department}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{course.credits}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{course.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
