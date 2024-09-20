import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user session data (e.g., token) from localStorage or any other storage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');

    // Redirect to the sign-in page
    navigate('/signin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-4">
      <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Out</h2>
        <p className="mb-4 text-gray-600">Are you sure you want to sign out?</p>
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SignOut;
