// SubMenu.js
import Link from 'next/link';
import React from 'react';

const SubMenu = () => {
  return (
    <div className="text-white mt-4 mr-5">
      <h2 className="text-2xl font-bold mb-2">Events in Calgary</h2>
      <div className="grid grid-cols-1 gap-2">
        <Link href="https://www.google.com/maps/search/Royal+Canadian+Legion+Calgary">Head to the Legion</Link>
        <Link href="https://www.google.com/maps/search/Food+Banks+in+Calgary">Head to the Food Bank</Link>
        <Link href="https://www.volunteercalgary.ab.ca/"> N.A.V.Y... but if you want to</Link>


        {/* <div
          className="bg-gray-800 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700"
          onClick={() => window.open('https://www.google.com/maps/search/Royal+Canadian+Legion+Calgary')}
        >
          Head to the Legion
        </div>
        <div
          className="bg-gray-800 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700"
          onClick={() => window.open('https://www.google.com/maps/search/Food+Banks+in+Calgary')}
        >
          Head to the Food Bank
        </div>
        <div
          className="bg-gray-800 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700"
          onClick={() => window.open('https://www.volunteercalgary.ab.ca/')}
        >
          N.A.V.Y... but if you want to
        </div> */}
      </div>
    </div>
  );
};

export default SubMenu;
