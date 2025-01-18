import React from "react";

import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to the Dashboard
          </h2>
          <p className="text-gray-600">
            This is a simple React dashboard with a Tailwind CSS-styled navbar.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
