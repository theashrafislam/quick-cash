import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState('user'); // Default role is 'user'

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pin = form.pin.value;
    const mobileNumber = form.mobileNumber.value;
    const email = form.email.value;

    if (!/^\d{5}$/.test(pin)) {
      toast.error('PIN must be a 5-digit number.')
      return
    }

    // Example of what you can do with selectedRole
    console.log(name, pin, mobileNumber, email, selectedRole);
  }

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name"
              placeholder='Enter your name'
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">5-digit PIN</label>
            <input 
              type="password" 
              name="pin"
              placeholder='Enter your PIN'
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
              title="PIN must be a 5-digit number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input 
              type="number" 
              name="mobileNumber"
              placeholder='Enter your mobile number'
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              placeholder='Enter your e-mail'
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedRole}
              onChange={handleRoleChange}
              name="role"
            >
              <option value="user">User</option>
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Register
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;