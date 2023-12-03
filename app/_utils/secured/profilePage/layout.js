// Layout.js

import React from 'react';
import Menu from './menus/mainMenu';

const Layout = ({ children }) => {
  const headerStyle = {
    background: 'radial-gradient(circle,#ffffff, #e63946)',
    padding: '20px',
    textAlign: 'center',
    border: '2px solid gold',
    color: 'black',
    fontFamily: 'Old English Text MT, serif',
    fontSize: '2.5rem',
  };

  const footerStyle = {
    background: 'radial-gradient(circle,#ffffff, #e63946)',
    padding: '20px',
    textAlign: 'center',
    border: '2px solid gold',
    color: 'black',
    fontFamily: 'Old English Text MT, serif',
    fontSize: '.85rem',
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header style={headerStyle}>
        <h1>
          Uniting Veterans
        </h1>
      </header>

      {/* Main Menu */}
      {/* <Menu /> */}

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer style={footerStyle}>
        <p>
          &copy; 2023 Chris Johnson, CD Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
