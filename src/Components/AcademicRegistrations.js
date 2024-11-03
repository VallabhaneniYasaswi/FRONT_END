import React from 'react';
import MenuAppBar from './Appbar';

const AcademicRegistrations = () => {
  return (
    <div>
      <MenuAppBar/>
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h1 style={{ color: '#4682B4' }}>Academic Registrations</h1>
        <div style={styles.message}>
          <p style={styles.warning}>🚫 Academic Registrations are currently closed 🚫</p>
          <p style={styles.checkBackMessage}>Please check back later for updates.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // High z-index to stay on top
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  message: {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'red',
  },
  warning: {
    margin: 0,
  },
  checkBackMessage: {
    color: 'black', // Changed the color to black
  },
};

export default AcademicRegistrations;
