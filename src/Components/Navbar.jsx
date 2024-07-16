import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="drawer text-white">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar content here */}
        <div className="navbar bg-blue-500">
          <div className="navbar-start">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <Link to="/" className="btn btn-ghost text-xl">QuickCash</Link>
          </div>
          <div className="navbar-end">
            <button className='btn'><Link to="/user-dashboard">Dashboard</Link></button>
          </div>
        </div>
        {/* Page content here */}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li><Link to="/register">Registration</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/send-money">Send Money</Link></li>
          <li><Link to="/cash-out">Cash Out</Link></li>
          <li><Link to="/cash-in">Cash In</Link></li>
          {/* <li><a>Balance Inquiry</a></li>
          <li><a>Transaction History</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
