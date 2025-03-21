import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const prescriptions = [
  { day: "Thu", date: "15", issue: "Fever", meds: ["paracetamol 500mg", "zitrocin 50mg", "piroton 40", "amoxicillin 500mg"] },
  { day: "Fri", date: "16", issue: "Cold", meds: ["paracetamol 500mg", "cetirizine 10mg"] },
  { day: "Mon", date: "19", issue: "Headache", meds: ["ibuprofen 400mg", "paracetamol 500mg"] },
];

export default function PrescriptionUI() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen space-x-6">
      {prescriptions.map((prescription, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`relative p-6 bg-gray-300 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
            selected === index ? "scale-110 z-10 bg-white border border-black" : "opacity-70"
          }`}
          style={{ width: selected === index ? "320px" : "220px", height: selected === index ? "420px" : "300px" }}
        >
          {/* Date */}
          <h2 className="text-lg font-bold">{prescription.day} {prescription.date}</h2>
          <p className="mt-2 text-gray-700">Issue - {prescription.issue}</p>

          {/* Medications */}
          <ul className="mt-3 text-gray-700">
            {prescription.meds.map((med, i) => (
              <li key={i}>{med}</li>
            ))}
          </ul>

          {/* Actions */}
          <div className="absolute bottom-4 left-6 flex space-x-4 text-sm">
            <button className="text-blue-600 hover:underline">Edit prescription</button>
            {selected === index && (
              <button className="text-red-600 flex items-center hover:underline">
                <FiTrash2 className="mr-1" /> Delete prescription
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}