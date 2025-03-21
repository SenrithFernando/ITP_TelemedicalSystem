import React from "react";

export default function ProfileSection() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Card */}
      <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
        <img
          src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025030623" // Replace with actual image URL
          alt="User"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">Stevan Dux</h2>
          <p className="text-gray-500">Teacher</p>
          <p className="text-gray-400 text-sm">United States</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <div>
            <p className="font-medium">Name</p>
            <p className="text-gray-800">Stavn Dux</p>
          </div>
          <div>
            <p className="font-medium">Date of Birth</p>
            <p className="text-gray-800">03/04/1996</p>
          </div>
          <div>
            <p className="font-medium">Phone Number</p>
            <p className="text-gray-800">+1 2387428345</p>
          </div>
          <div>
            <p className="font-medium">Email Address</p>
            <p className="text-gray-800">gastro@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Age</p>
            <p className="text-gray-800">29</p>
          </div>
          <div>
            <p className="font-medium">Bio</p>
            <p className="text-gray-800">Government Teacher</p>
          </div>
        </div>
      </div>

      {/* Pre-existing Diseases */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Pre-existing Diseases</h3>
        <div className="grid grid-cols-3 gap-4 text-gray-600">
          <div>
            <p className="font-medium">Speech</p>
            <p className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm inline-block">
              None
            </p>
          </div>
          <div>
            <p className="font-medium">Physical</p>
            <p className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm inline-block">
              None
            </p>
          </div>
          <div>
            <p className="font-medium">Mental</p>
            <p className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm inline-block">
              None
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
