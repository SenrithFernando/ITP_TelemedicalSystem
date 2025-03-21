import { FaHome, FaCalendarAlt, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar2() {
  return (
    <div className="w-64 bg-white h-screen p-5  flex flex-col">
      
      <img src="Images//Medilifelogo.png" alt="Logo" className="w-50 mr-2 mb-10" />

      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <FaHome /> <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <FaCalendarAlt /> <span>Appointment Request</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <FaUser /> <span>Profile</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-red-600 cursor-pointer">
            <FaSignOutAlt /> <span>Log out</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
