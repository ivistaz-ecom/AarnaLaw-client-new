import React, { useState } from 'react';
import axios from 'axios';

function ApplyNow({ handleClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    college: '',
    role: '',
    experienceYears: '',
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const mailServerUrl = `${process.env.REACT_APP_MAIL_URL}:${process.env.REACT_APP_MAIL_PORT}/apply`;
      alert('url mail  mail',process.env.REACT_APP_MAIL_URL) 
      alert('url mail port',process.env.REACT_APP_MAIL_PORT )
      await axios.post(mailServerUrl, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Application submitted successfully');
      handleClose();
    } catch (error) {
      console.error('Error submitting application:', error.message);
      alert('Failed to submit application: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl relative">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply Now</h2>
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ×
        </button>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <div className="flex flex-wrap mb-4 -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                onChange={handleInputChange}
                value={formData.firstName}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                onChange={handleInputChange}
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-4 -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                onChange={handleInputChange}
                value={formData.phoneNumber}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
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
          </div>
          <div className="mb-4">
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.college}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Pick a Role <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.role}
              required
            >
              <option value="">Please select</option>
              <option value="Legal">Legal</option>
              <option value="Administration">Administration</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700">
              Number of Years of Post Qualification Experience
            </label>
            <input
              type="number"
              id="experienceYears"
              name="experienceYears"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.experienceYears}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Choose a File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyNow;
