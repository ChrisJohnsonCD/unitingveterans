// sprint1/page.js
"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Menu from './menus/mainMenu';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('veterans');
  const Component = dynamic(() => import(`./events/${currentPage}`));

  useEffect(() => {
    // Set default page here, for example:
    setCurrentPage('veterans');
  }, []);

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex ml-10 mt-10 mb-10 gap-96">
      {/* Menu on the top left */}
      <div className="">
        <Menu onClick={handleMenuClick} />
      </div>
      
      {/* Content on the right */}
      <div className="">
        {/* Shifted Image */}
        <div className="">
          <Component />
        </div>
      </div>
    </main>
  );
}
