import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-5 ">
      {/* <img src="Green Modern Medical Health Care Logo copy.png" alt="Medilife" className="w-30 h-10 " /> */}
      <img src="Images//Medilifelogo.png" alt="Logo" className="w-50 mr-2" />
      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <FaHome /> <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <FaUser /> <span>Profile</span>
          </li>
          <li className="flex items-center space-x-3 text-blue-600 cursor-pointer">
            <BsFileText /> <span>Prescriptions</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 cursor-pointer">
            <BsFileText /> <span>Pharmacy Orders</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-red-600 cursor-pointer">
            <FaSignOutAlt /> <span>Log out</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
