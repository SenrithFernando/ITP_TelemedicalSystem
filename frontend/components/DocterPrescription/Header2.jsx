import { FaSearch, FaBell, FaInfoCircle } from "react-icons/fa";

export default function Header2() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <div className="relative">
        <FaSearch className="absolute left-3 top-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500" />
        <FaInfoCircle className="text-gray-500" />
        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png" alt="User" className="w-10 h-10 rounded-full" />
    
      </div>
    </div>
  );
}