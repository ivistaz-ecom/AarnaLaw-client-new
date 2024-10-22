import React, { useState } from 'react';
import axios from 'axios';

function ContactForm({ handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    // Alert form data
    alert('Form Data: ' + JSON.stringify(formData));

    try {
      await axios.post('http://localhost:3001/sendEmail', formData);
      alert('Email sent successfully');
      handleClose();
    } catch (error) {
      console.error('Error sending email:', error.message);
      alert('Failed to send email: ' + error.response.data);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-8 rounded-lg w-[800px] relative">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <button onClick={handleClose} className="absolute top-2 right-2 text-red-500 hover:text-red-600">
         <span className="text-black">×</span>
        </button>
        <form onSubmit={handleSendMessage}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.phone}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.message}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
