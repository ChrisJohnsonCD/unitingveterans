import React from 'react';

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
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header style={headerStyle} className="p-8 text-center border-b-2 border-gold">
            <h1>
              Uniting Veterans
            </h1>
          </header>

          {/* Main Content */}
          {children}

          {/* Footer */}
          <footer style={footerStyle} className="p-8 text-center border-t-2 border-gold">
            <p>
              &copy; 2023 Chris Johnson, CD Website. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
