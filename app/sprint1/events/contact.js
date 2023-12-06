// Import necessary modules
import React, { useState } from 'react';

// ContactForm component definition
const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  // State for feedback messages
  const [feedback, setFeedback] = useState('');

  // State for loading state
  const [loading, setLoading] = useState(false);

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display loading state
    setLoading(true);

    // Simulate a delay (you can remove this in a real-world scenario)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Assuming you have a server endpoint to handle the email sending process
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback('Email sent successfully!');
        // Clear the form
        setFormData({
          name: '',
          subject: '',
          message: '',
        });
      } else {
        setFeedback('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedback('An error occurred. Please try again.');
    } finally {
      // Hide loading state
      setLoading(false);
    }
  };

  // JSX structure for the ContactForm component

  return (
    <div className="bg-gray-800 p-10 ml-10 h-full flex justify-center border-2 border-yellow-500 rounded-lg">
      <div className="text-white">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400 mb-6">
          We welcome your feedback! Please feel free to reach out to us using the form below.
        </p>
        {/* Display feedback to the user */}
        {feedback && <div className="mb-4 text-green-600">{feedback}</div>}
        <form onSubmit={handleSubmit} className="max-w-md">
          {/* Input field for name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2 ">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 bg-gray-700 text-white border-yellow-500 "
              required
            />
          </div>
          {/* Input field for subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-600 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 bg-gray-700 text-white border-yellow-500 "
              required
            />
          </div>
          {/* Input field for message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 h-32 bg-gray-700 text-white border-yellow-500 "
              required
            ></textarea>
          </div>
          {/* Submit button */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the ContactForm component
export default ContactForm;
