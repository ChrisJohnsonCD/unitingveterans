// sprint1/page.js

"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from './layout'; // Import the Layout component
import Menu from './menus/mainMenu';

export default function Page () {
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
    <Layout>
      <main className="flex-grow bg-black p-20 flex">
        <div className="flex-grow">
          <Menu />
          <Component />
        </div>
      </main>
    </Layout>
  );
};


