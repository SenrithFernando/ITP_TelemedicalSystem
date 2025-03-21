import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to store the selected order
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  // Fetch pharmacy orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pharmacyOrders');
        setOrders(response.data.pharmacyOrders); // Assuming the API returns { pharmacyOrders: [...] }
      } catch (error) {
        console.error('Error fetching pharmacy orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Function to handle the View button click
  const handleViewClick = (order) => {
    setSelectedOrder(order); // Set the selected order
    setIsPopupOpen(true); // Open the popup
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedOrder(null); // Clear the selected order
  };

  return (
    <div>
      <div className="mt-6 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Pharmacy Orders</h2>

        <table className="w-full">
          <thead>
            <tr className="bg-blue-100 text-left text-gray-700">
              <th className="p-3">Full Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Doctor Name</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Order Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index} className="text-left hover:bg-gray-100">
                  <td className="p-3">{order.fullName}</td> {/* Full Name */}
                  <td className="p-3">{order.address}</td> {/* Address */}
                  <td className="p-3">{order.phone}</td>
                  <td className="p-3">{order.doctorName}</td>
                  <td className="p-3">{order.quantity}</td>
                  <td
                    className={`p-3 font-semibold ${
                      order.orderStatus === 'Confirmed' ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {order.orderStatus} {/* Order Status */}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                      Done
                    </button>
                    <button
                      onClick={() => handleViewClick(order)} // Open popup with order details
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-3 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Popup Card */}
      {isPopupOpen && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred Background */}
          <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md"></div>

          {/* Popup Card */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-1/3 z-10">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Order Details</h2>
            <p><strong>Full Name:</strong> {selectedOrder.fullName}</p>
            <p><strong>Address:</strong> {selectedOrder.address}</p>
            <p><strong>Phone:</strong> {selectedOrder.phone}</p>
            <p><strong>Doctor Name:</strong> {selectedOrder.doctorName}</p>
            <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
            <p><strong>Order Status:</strong> {selectedOrder.orderStatus}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleClosePopup}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderTable;