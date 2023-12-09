import React, { useState } from 'react';
import Image from 'next/image';
import { useUserAuth } from '../_services/auth_context';

export default function VeteransPage() {
  // State for controlling the modal visibility
  const [showModal, setShowModal] = useState(false);
  // const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


  // TODO  issue with the sign in********


  // User authentication context
  const { gitHubSignIn } = useUserAuth() || {};

  // Handle click on the image to show the modal
  const handleImageClick = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle GitHub sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      // closeModal(); // Close the modal after successful sign-in
      // Handle the navigation or page change directly within the component
      // Replace the following line with the desired navigation logic
      // window.location.href = '/_utils/secured/profilePage';
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  // Function to handle sign-up (update this function as needed)
  const handleSignUp = async () => {
    try {
      // Add logic for sign-up action (e.g., firebaseSignUp())
      closeModal(); // Close the modal after successful sign-up
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
  
  );
}

