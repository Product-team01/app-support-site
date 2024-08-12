// src/theme/Navbar/index.js
import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import NewsfeedLauncher from '../../components/NewsfeedLauncher'; // Adjust path if necessary

export default function Navbar(props) {
  return (
    <>
      <OriginalNavbar {...props} />

      {/* Here you can position your NewsfeedLauncher as needed */}
      <div style={{ position: 'absolute', right: '20px', top: '10px' }}>
        <NewsfeedLauncher />
      </div>
    </>
  );
}
