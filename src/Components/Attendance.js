import React, { useEffect, useState } from 'react';
import MenuAppBar from './Appbar';

const Attendance = () => {
  // Sample data for students
  const students = [
    { id: 'S001', name: 'Alice Johnson' },
    { id: 'S002', name: 'Bob Smith' },
    { id: 'S003', name: 'Cathy Brown' },
    { id: 'S004', name: 'David Wilson' },
    { id: 'S005', name: 'Eva White' },
  ];

  // State to track attendance
  const [attendance, setAttendance] = useState({});

  // Fetch attendance data on mount
  useEffect(() => {
    const fetchAttendance = async () => {
      const response = await fetch('http://localhost:5000/api/attendance');
      const data = await response.json();
      const attendanceData = {};
      data.forEach(record => {
        attendanceData[record.id] = record.status;
      });
      setAttendance(attendanceData);
    };

    fetchAttendance();
  }, []);

  // Function to handle attendance button click
  const handleAttendance = async (id, status) => {
    // Update local state
    setAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));

    // Send attendance record to server
    await fetch('http://localhost:5000/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    });
  };

  return (
    <div>
      <MenuAppBar />
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <h1>Attendance Page</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Student ID</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Name</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}>{student.id}</td>
                <td style={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}>{student.name}</td>
                <td style={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}>
                  <button
                    onClick={() => handleAttendance(student.id, 'Present')}
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      marginRight: '5px',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleAttendance(student.id, 'Absent')}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ marginTop: '20px' }}>Attendance Summary</h2>
        <div>
          <h3>Present Students:</h3>
          <ul>
            {Object.entries(attendance)
              .filter(([, status]) => status === 'Present')
              .map(([id]) => {
                const student = students.find((s) => s.id === id);
                return (
                  <li key={id}>
                    {student.id} - {student.name}
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <h3>Absent Students:</h3>
          <ul>
            {Object.entries(attendance)
              .filter(([, status]) => status === 'Absent')
              .map(([id]) => {
                const student = students.find((s) => s.id === id);
                return (
                  <li key={id}>
                    {student.id} - {student.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
