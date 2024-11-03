import React, { useEffect, useState } from 'react';
import MenuAppBar from './Appbar';

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);

  useEffect(() => {
    const fetchFacultyMembers = async () => {
      const response = await fetch('http://localhost:5000/api/faculty');
      const data = await response.json();
      setFacultyMembers(data);
    };

    fetchFacultyMembers();
  }, []);

  return (
    <div>
      <MenuAppBar />
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <h1>Faculty Page</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Faculty ID</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Name</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Department</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Cabin Number</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Phone</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white', fontWeight: 'bold' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {facultyMembers.map(faculty => (
              <tr key={faculty.id} style={{ backgroundColor: facultyMembers.indexOf(faculty) % 2 === 0 ? '#f2f2f2' : 'white' }}>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{faculty.id}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{faculty.name}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{faculty.department}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{faculty.cabinNumber}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{faculty.phone}</td>
                <td style={{ border: '1px solid #000', padding: '10px', color: 'black' }}>{faculty.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faculty;
