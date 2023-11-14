// veterans.js

import React from 'react';

const VeteransPage = () => {
  const containerStyle = {
    backgroundColor: 'black', // Set background color to black
    padding: '20px', // Add padding for spacing
    position: 'relative', // Position relative for absolute positioning of menu
  };

  const imageStyle = {
    width: '40%', // Reduce the image size by half
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Center the image within the container
    margin: '0 auto', // Center the image horizontally
  };

  const menuStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    border: '2px solid gold', // Gold border around the menu
    borderRadius: '5px', // Optional: Add border-radius for rounded corners
  };

  const menuItemStyle = {
    borderBottom: '1px solid gold', // Gold border between menu items
    padding: '8px', // Add padding for spacing
    fontWeight: 'bold', // Make the text bold
  };
  

  return (
    <div style={containerStyle}>
      <div style={menuStyle}>
      <div style={menuItemStyle}>Local Events</div>
        <div style={menuItemStyle}>About Us</div>

        <div style={menuItemStyle}>Contact</div>
      </div>
      <img
        src="https://fridaystuff.com/wp-content/uploads/2019/09/Canadian-Veteran-Honour-And-Freedom-800x800.jpg"
        alt="Veterans Image"
        className="rounded-lg shadow-lg"
        style={imageStyle}
      />
    </div>
  );
};

export default VeteransPage;
