import React from "react";

function SlideBar() {
  return (
    <aside className="w-64 bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold flex items-center space-x-2">
      <img src="Images//Medilifelogo.png" alt="Logo" className=" mr-2" />
        
       
      </h2>
      <nav className="mt-6 space-y-4 text-gray-700">
        <a href="#" className="block hover:text-blue-500">
          📅 My Availability
        </a>
        <a href="#" className="block hover:text-blue-500">
          🧑‍⚕️ Patient
        </a>
        <a href="#" className="block hover:text-blue-500">
          📋 Appointments
        </a>
        <a href="#" className="block text-blue-600 font-semibold">
          💊 Prescriptions
        </a>
        <a href="#" className="block hover:text-blue-500">
          📊 Reports
        </a>
        <a href="#" className="block hover:text-red-500">
          🚪 Log Out
        </a>
      </nav>
    </aside>
  );
}

export default SlideBar;
