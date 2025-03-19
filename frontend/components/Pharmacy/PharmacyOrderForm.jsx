import React from "react";

function PharmacyOrderForm() {

    
  return (
    <div className="w-4/5 fw-4/5 mx-auto py-10 flex items-center justify-between">
      {/* Left side - Form */}
      <div className="w-3/5 bg-blue-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Order Your Medicines
        </h2>

        <form className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-small">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-small">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Phone & Address */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-small">Phone</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-small">Address</label>
              <input 
                type="text" 
                placeholder="Enter your address" 
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Medicine Details */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-small">Doctor Name</label>
              <input 
                type="text" 
                placeholder="Enter doctor name" 
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-small">Quantity</label>
              <input 
                type="number" 
                placeholder="Enter quantity" 
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Prescription Upload */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-small">Upload Prescription</label>
            <input 
              type="file" 
              className="p-3 border rounded-md bg-white focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit Order
          </button>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="w-2/5 h-full flex justify-center items-center">
        <img 
          src="Images/formimg.png" 
          alt="Pharmacy" 
          className="object-cover rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
}

export default PharmacyOrderForm;
