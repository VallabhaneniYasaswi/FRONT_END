import React, { useEffect, useState } from 'react';
import MenuAppBar from './Appbar';

const Timetable = () => {
  const [timetable, setTimetable] = useState({});

  useEffect(() => {
    const fetchTimetable = async () => {
      const response = await fetch('http://localhost:5000/api/timetable');
      const data = await response.json();
      setTimetable(data);
    };

    fetchTimetable();
  }, []);

  return (
    <div>
      <MenuAppBar/>
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <h1>Timetable</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Time</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Monday</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Tuesday</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Wednesday</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Thursday</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Friday</th>
              <th style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#4682B4', color: 'white' }}>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(timetable).map(time => (
              <tr key={time}>
                <td style={{ border: '1px solid #000', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>{time}</td>
                {Object.keys(timetable[time]).map(day => (
                  <td key={day} style={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}>
                    {timetable[time][day].subject === 'Leisure' ? (
                      <span style={{ color: 'green', fontWeight: 'bold' }}>{timetable[time][day].subject}</span>
                    ) : (
                      <>
                        <div style={{ fontWeight: 'bold' }}>{timetable[time][day].subject}</div>
                        <div>{`Room: ${timetable[time][day].room}`}</div>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
