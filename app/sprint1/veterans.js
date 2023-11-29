// VeteransPage.js
import React from 'react';
import Image from 'next/image';

const VeteransPage = () => {
  return (
    <div className="bg-black flex items-center justify-center">
      {/* Image Container */}
      <div className="flex flex-col items-center">
        <div className="ml-[-25%]">
          <Image
            src="https://fridaystuff.com/wp-content/uploads/2019/09/Canadian-Veteran-Honour-And-Freedom-800x800.jpg"
            alt="Veterans Image"
            className="rounded-lg shadow-lg"
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default VeteransPage;
