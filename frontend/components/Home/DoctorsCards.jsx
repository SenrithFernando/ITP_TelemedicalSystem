import React from 'react';

function DoctorsCards() {
  const doctors = [
    {
      name: "Dr. Robert Henry",
      specialty: "Cardiologist",
      rating: 102,
      image: "/Images/doc1.png", // Corrected path
    },
    {
      name: "Dr. Harry Littleton",
      specialty: "Neurologist",
      rating: 97,
      image: "/Images/doc2.png", // Example for another doctor
    },
    {
      name: "Dr. Sharina Khan",
      specialty: "Gynecologist",
      rating: 116,
      image: "/Images/doc3.png", // Example for another doctor
    },
    {
      name: "Dr. Sanjeev Kapoor",
      specialty: "Child Specialist",
      rating: 72,
      image: "/Images/doc4.png", // Example for another doctor
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 py-12">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-800">Meet our Doctors</h2>
      <p className="text-gray-500 mb-8">Well-qualified doctors are ready to serve you</p>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 ">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5 m-5 w-80 text-center relative ">
            {/* Image */}
            <div className="bg-blue-600 rounded-t-lg p-4 flex justify-center relative">
              <img
                src={doctor.image} // Dynamically use the image path
                alt={doctor.name}
                className="w-24 h-36 rounded-full object-cover absolute -top-19 border-4 border-white"
              />
            </div>

            {/* Doctor Info */}
            <h3 className="mt-12 text-lg font-semibold text-gray-800">{doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialty}</p>

            {/* Ratings */}
            <div className="flex justify-center items-center gap-1 mt-2 text-yellow-400">
              {"★".repeat(5)}
              <span className="text-gray-500 text-sm">({doctor.rating})</span>
            </div>

            {/* Appointment Button */}
            <button className="mt-4 px-4 py-2 w-full border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
              Book an Appointment
            </button>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
        See more
      </button>
    </div>
  );
}

export default DoctorsCards;