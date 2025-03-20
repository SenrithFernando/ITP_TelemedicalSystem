import React, { useState } from 'react';

const PharmacyOrderForm = () => {
  const [formData, setFormData] = useState({
    orderDate: '',
    orderStatus: 'Confirmed',
    fullName: '',
    PatientID: '',
    phone: '',
    address: '',
    doctorName: '',
    quantity: '',
    prescriptionID: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/pharmacyOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Order submitted successfully!');
      } else {
        alert('Error submitting order.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting order.');
    }
  };

  return (
    <div className="flex w-4/5 flex-col lg:flex-row bg-blue-100 shadow-lg rounded-lg max-w-8xl mx-auto mt-10 mb-10">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Pharmacy Order Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Order Date & Status */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Order Date</label>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Order Status</label>
              <select
                name="orderStatus"
                value={formData.orderStatus}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Name & Patient ID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter full name"
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Patient ID</label>
              <input
                type="text"
                name="PatientID"
                value={formData.PatientID}
                onChange={handleChange}
                required
                placeholder="Enter Patient ID"
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Phone & Address */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter address"
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Doctor Name & Quantity */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Doctor's Name</label>
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
                required
                placeholder="Enter doctor name"
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="Enter quantity"
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Prescription ID */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Prescription ID</label>
            <input
              type="text"
              name="prescriptionID"
              value={formData.prescriptionID}
              onChange={handleChange}
              required
              placeholder="Enter prescription ID"
              className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
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

      {/* Right Side - Image */}
      <div className=" flex w-full lg:w-3/8 mx-auto bg-blue-100 flex items-center justify-center p-6 rounded-r-lg">
        <img
          src="../Images/formimg.png"
          alt="Pharmacy"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default PharmacyOrderForm;
