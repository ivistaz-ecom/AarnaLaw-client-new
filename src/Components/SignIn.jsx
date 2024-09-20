import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate , Link} from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = formData.email ? '' : 'Email is required';
    tempErrors.password = formData.password ? '' : 'Password is required';

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      });

      //alert(`jha: ${process.env.REACT_APP_API_URL}`);

      try {
        const response = await api.post('/auth/login', formData);
        setMessage('Logged in successfully');
        setErrors({});
        // Handle successful login
        console.log(response.data);
        navigate('/home');
      } catch (error) {
        setMessage(error.response?.data?.message || 'Something went wrong');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              Email <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Password <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 leading-tight"
              />
              <span className="text-sm">Remember me</span>
            </label>
            <Link to="/forgotPassword" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Login
            </button>
          </div>
        </form>
        
        <p className="mt-4 text-center text-sm">Don't have an account? <Link to="/signUp" className="text-blue-500 hover:underline">Register</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
