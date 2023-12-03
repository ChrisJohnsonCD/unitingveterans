import React from 'react';

const Menu = ({ onClick }) => {
  const handleItemClick = (page) => {
    if (onClick) {
      onClick(page);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold mb-4">Explore</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Add the Veterans menu item */}
        <div
          className="bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          onClick={() => handleItemClick('veterans')}
        >
          Veterans
        </div>
        <div
          className="bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          onClick={() => handleItemClick('localEvents')}
        >
          Local Events
        </div>
        <div
          className="bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          onClick={() => handleItemClick('aboutUs')}
        >
          About Us
        </div>
        <div
          className="bg-gradient-to-r from-gray-800 to-gray-700 py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          onClick={() => handleItemClick('contact')}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Menu;
