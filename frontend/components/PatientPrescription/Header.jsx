import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">My Prescriptions</h1>
      <div className="flex items-center space-x-4">
        <span>En <button>v</button></span>
        <button><FaBell className="text-gray-600" /></button>
        <div className="flex items-center space-x-2">
          <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png" alt="User" className="w-10 h-10 rounded-full" />
          <span>Stevan dux</span>
        </div>
      </div>
    </div>
  );
}

