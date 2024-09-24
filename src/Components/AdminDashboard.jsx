import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 border border-gray-300 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Admin Dashboard</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-custom-red">{error}</p>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">First Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Last Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b border-gray-200">{user.firstName}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.lastName}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
