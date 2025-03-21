import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Overview() {
  const [orderCount, setOrderCount] = useState(0);
  const [confirmOrderCount, setConfirmOrderCount] = useState(0);
  const [pendingOrderCount, setPendingOrderCount] = useState(0);

  // Fetch pharmacy order counts from the backend
  useEffect(() => {
    const fetchOrderCounts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pharmacyOrders');
        const orders = response.data.pharmacyOrders; // Assuming the API returns { pharmacyOrders: [...] }

        // Set total order count
        setOrderCount(orders.length);

        // Filter and count Confirmed and Pending orders
        const confirmedOrders = orders.filter(order => order.orderStatus === 'Confirmed');
        const pendingOrders = orders.filter(order => order.orderStatus === 'Pending');

        setConfirmOrderCount(confirmedOrders.length);
        setPendingOrderCount(pendingOrders.length);
      } catch (error) {
        console.error('Error fetching pharmacy order counts:', error);
      }
    };

    fetchOrderCounts();
  }, []);

  return (
    <div>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {[
          { label: "Pharmacy Orders", count: orderCount, bg: "bg-blue-100" }, // Total orders
          { label: "Confirm Orders", count: confirmOrderCount, bg: "bg-green-100" }, // Confirmed orders
          { label: "Pending Orders", count: pendingOrderCount, bg: "bg-yellow-100" }, // Pending orders
          { label: "Patients", count: 100, bg: "bg-purple-100" }, // Static example
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-4 rounded-lg text-center`}
          >
            <p className="text-lg font-semibold">{item.count}</p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;