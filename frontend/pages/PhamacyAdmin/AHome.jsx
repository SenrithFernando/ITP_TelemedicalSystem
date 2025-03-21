import React from "react";
import Header from "../../components/AdminPharmacy/Header";
import Overview from "../../components/AdminPharmacy/Overview";
import OrderTable from "../../components/AdminPharmacy/OrderTable";
import SlideBar from "../../components/AdminPharmacy/SlideBar";

function AHome() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SlideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Activity Overview */}
        <Overview />

        {/* Order  Table */}
        <OrderTable />

        {/* Bottom Section */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {/* Education Content */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Education Content</h2>
            <ul className="space-y-2">
              {["4 Nutritions to Take Daily", "Healthy Lifestyle Tips"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded"
                  >
                    <span>{item}</span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Assign
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Patient Fee */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Patient Fee</h2>
            <ul className="space-y-2">
              {[
                { name: "EG Subramani", status: "Doctor fee pending" },
                { name: "Elizabeth Polson", status: "Doctor fee pending" },
              ].map((patient, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded"
                >
                  <span>
                    {patient.name}{" "}
                    <span className="text-sm text-red-500">
                      {patient.status}
                    </span>
                  </span>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Request Fee
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AHome;
