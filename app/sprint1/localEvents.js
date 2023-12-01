import React from 'react';
import SubMenu from './submenu';
import Image from 'next/image';

// Local Legion Image Component
const LocalLegionImage = () => (
  <div className="rounded-lg shadow-lg ">
    <Image
      src="https://i.pinimg.com/originals/0b/02/dd/0b02dda195601246e0601ff08dba4676.jpg"
      alt="Local Legion in Calgary"
      width={800}
      height={500}
       
    />
  </div>
);

// Local Events Page Component
const LocalEventsPage = () => (
  <div className="bg-gray-900 p-10 ml-10 h-full flex justify-center">
    <SubMenu />
    {/* Render the LocalLegionImage component */}
    <div className="ml-10">
      <LocalLegionImage />
    </div>
  </div>
);

export default LocalEventsPage;
