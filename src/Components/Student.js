import React, { useEffect, useState } from 'react';
import MenuAppBar from './Appbar';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:5000/api/students');
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <MenuAppBar />
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <h1>Student Page</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Student ID</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Name</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Department</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Cluster Number</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Phone</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} style={{ backgroundColor: students.indexOf(student) % 2 === 0 ? '#f2f2f2' : 'white' }}>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'blue' }}>{student.id}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'blue' }}>{student.name}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'blue' }}>{student.department}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'blue' }}>{student.clusterNumber}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'blue' }}>{student.phone}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'blue' }}>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
