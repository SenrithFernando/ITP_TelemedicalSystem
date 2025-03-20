import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="   transform translate-y-  bg-white shadow-lg rounded-2xl p-4 m-5 justify-between items-center  top-0 left-0 right-0 mx-auto z-10">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="Images//Medilifelogo.png" alt="Logo" className="w-50 mr-2" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link>
          
          
          
          {/* Dropdown Menu */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-700 hover:text-blue-500">Services</button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md w-40 py-2">
                <Link to="/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</Link>
                <Link to="/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link>
                <Link to="/service3" className="block px-4 py-2 hover:bg-gray-100">Service 3</Link>
              </div>
            )}
          </div>
          <Link to="/ambulance" className="text-gray-700 hover:text-blue-500">Doctors</Link>
          <Link to="/ambulance" className="text-gray-700 hover:text-blue-500">Ambulance</Link>
          <Link to="/pharmacy" className="text-gray-700 hover:text-blue-500">Pharmacy</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About US</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sign In</button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-white p-4 rounded-lg shadow-md">
          <Link to="/mainhome" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link to="/pharmacy" className="text-gray-700 hover:text-blue-500">Pharmacy</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About US</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sign In</button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;