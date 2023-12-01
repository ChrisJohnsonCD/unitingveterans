import React, { useState } from 'react';
import Image from 'next/image';
import { useUserAuth } from './_utils/auth_context';

const VeteransPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth() ;

  // Function to handle GitHub sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      closeModal(); // Close the modal after successful sign-in
    } catch (error) {
      console.log(error);
    }
  };

  
  // Function to handle sign-up (update this function as needed)
const handleSignUp = async () => {
  try {
    // Add logic for sign-up action (e.g., firebaseSignUp())
    closeModal(); // Close the modal after successful sign-up
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="bg-black flex items-center justify-center">
      {/* Image Container */}
      <div className="flex flex-col items-center">
        <div className="ml-[-25%]" onClick={handleImageClick}>
          <Image
            src="https://fridaystuff.com/wp-content/uploads/2019/09/Canadian-Veteran-Honour-And-Freedom-800x800.jpg"
            alt="Veterans Image"
            className="rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            width={600}
            height={300}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">Please select an option:</p>

            <div className="flex space-x-4">
              {/* Login Button */}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={handleSignIn}
              >
                Login
              </button>

              {/* Sign Up Button */}
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>

            {/* Close Button */}
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 mx-auto"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VeteransPage;
