import React from 'react';
import VeteransPage from './veterans';


export default function Page() {
    const gradientStyle = {
        background: 'radial-gradient(circle,  #ffffff, #e63946)',
        padding: '20px', // Add padding to adjust the size of the circular gradient
        textAlign: 'center', // Center the text
        borderBottom: '2px solid gold', // Border style
      };



    return (
      <main>
        <div style= {gradientStyle}>
        <h1 className="text-2xl font-bold mb-4 text-center">
            Uniting Veterans</h1>
        </div>
        
      <VeteransPage />
      
      </main>
    );
  }
        