import React from 'react'

function Overview() {
  return (
    <div>
      <div className="mt-6 grid grid-cols-4 gap-4">
          {[
            { label: "Appointments", count: 100, bg: "bg-blue-100" },
            { label: "New Patients", count: 50, bg: "bg-green-100" },
            { label: "Medicines Sold", count: 500, bg: "bg-yellow-100" },
            { label: "Lab Tests", count: 100, bg: "bg-purple-100" },
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
  )
}

export default Overview
