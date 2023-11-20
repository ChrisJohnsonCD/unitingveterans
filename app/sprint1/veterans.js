import React from 'react';


const VeteransPage = () => {
  return (
    <div className="bg-black  h-full flex items-center justify-center">
      
      {/* Image Container */}
      <div className="flex flex-col items-center">
      <div className="ml-[-25%]">
          <img
            src="https://fridaystuff.com/wp-content/uploads/2019/09/Canadian-Veteran-Honour-And-Freedom-800x800.jpg"
            alt="Veterans Image"
            className="rounded-lg shadow-lg"
            style={{ width: '600px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default VeteransPage;
