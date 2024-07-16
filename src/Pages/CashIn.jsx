// import React, { useState } from 'react';
// import axios from 'axios';

const CashIn = () => {
//   const [agent, setAgent] = useState('');
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState('');

//   const handleCashIn = async (e) => {
//     e.preventDefault();

//     if (amount < 50) {
//       setMessage('Amount must be at least 50 Taka');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/users/cashin', {
//         agent,
//         amount,
//       }, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });

//       if (response.data.success) {
//         setMessage('Cash in request sent successfully!');
//       } else {
//         setMessage('Failed to send cash in request. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending cash in request:', error);
//       setMessage('An error occurred. Please try again.');
//     }
//   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Cash In</h2>
        {/* {message && <p className="text-center text-red-500">{message}</p>} */}
        <form className="space-y-6">
          <div>
            <label htmlFor="agent" className="block text-sm font-medium text-gray-700">Agent's Mobile Number or Email</label>
            <input
              id="agent"
              name="agent"
              type="text"
              required
            //   value={agent}
            //   onChange={(e) => setAgent(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (Taka)</label>
            <input
              id="amount"
              name="amount"
              type="number"
              required
            //   value={amount}
            //   onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Request Cash In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CashIn;