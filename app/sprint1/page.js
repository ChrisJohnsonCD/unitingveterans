

"use client";
import React, { useState } from 'react';
import VeteransPage from './veterans';
import LocalEventsPage from './localEvents';
import AboutUsPage from './aboutUs';
import ContactForm from './contact';





// Contact Page Component
// const ContactPage = () => (
//   <div className="bg-green-500 p-20 h-full flex items-center justify-center">
//     <div className="text-white">
//       {/* Include the ContactForm component */}
//       <ContactForm />
//     </div>
//   </div>
// );

const Page = () => {
  const [currentPage, setCurrentPage] = useState('veterans');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

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
      <header style={headerStyle} className="p-8 text-center border-b-2 border-gold">
        <h1>
          Uniting Veterans
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-black p-20 flex">
        <div className="flex-none">
          {/* Menu */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Explore</h2>
            <div
              className={`bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105 ${currentPage === 'veterans' ? 'bg-gray-600' : ''}`}
              onClick={() => handleMenuClick('veterans')}
            >
              Veterans Page
            </div>
            <div
              className={`bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105 ${currentPage === 'localEvents' ? 'bg-gray-600' : ''}`}
              onClick={() => handleMenuClick('localEvents')}
            >
              Local Events
            </div>
            <div
              className={`bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105 ${currentPage === 'aboutUs' ? 'bg-gray-600' : ''}`}
              onClick={() => handleMenuClick('aboutUs')}
            >
              About Us
            </div>
            <div
              className={`bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105 ${currentPage === 'contact' ? 'bg-gray-600' : ''}`}
              onClick={() => handleMenuClick('contact')}
            >
              Contact
            </div>
          </div>
          
        </div>

        <div className="flex-grow">
          {/* Display Content based on the selected page */}
          {currentPage === 'veterans' && <VeteransPage />}
          {currentPage === 'localEvents' && <LocalEventsPage />}
          {currentPage === 'aboutUs' && <AboutUsPage />}
          {currentPage === 'contact' && <ContactForm />}
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle} className="p-8 text-center border-t-2 border-gold">
        <p>
          &copy; 2023 Chris Johnson, CD Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
