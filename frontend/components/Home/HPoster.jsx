import React from 'react'

function HPoster() {
  return (
    <div className="bg-white px-6 py-12 lg:px-20">
    {/* Layout Container */}
    <div className="flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-purple-600">We care</span> about your health
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Good health is the state of mental, physical, and social well-being
          and it does not just mean the absence of diseases.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-800">
          Our Medical Services
        </h2>
        <p className="text-gray-500">We are dedicated to serving you with the best medical services.</p>

        {/* Service Cards */}
        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
          {[
            { icon: "💊", title: "Online Pharmacy" },
            { icon: "🚑", title: "Emergency Ambulance", bg: "bg-red-600 text-white" },
            { icon: "📅", title: "Book Appointment" },
            { icon: "📞", title: "Call Center" },
          ].map((service, index) => (
            <div
              key={index}
              className={`w-40 h-24 flex flex-col items-center justify-center rounded-lg shadow-md ${
                service.bg || "bg-white"
              }`}
            >
              <span className="text-2xl">{service.icon}</span>
              <p className="mt-2 text-sm font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Image with Floating Elements */}
      <div className="relative lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="relative">
          {/* Doctors Image */}
          <img
            src="https://source.unsplash.com/400x400/?doctor,nurse"
            alt="Doctors"
            className="rounded-full border-4 border-gray-200 shadow-lg w-80 h-80 object-cover"
          />

          {/* Floating Info Cards */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-3 rounded-lg flex items-center space-x-2">
            <span className="text-purple-600">🔍</span>
            <div>
              <p className="text-sm font-semibold">Pharmacy products</p>
              <p className="text-xs text-gray-500">Online Pharmacy</p>
            </div>
          </div>

          <div className="absolute top-16 -right-10 bg-white shadow-md p-3 rounded-lg flex items-center space-x-2">
            <span className="text-blue-600">📅</span>
            <div>
              <p className="text-sm font-semibold">Book an appointment</p>
              <p className="text-xs text-gray-500">Online appointment</p>
            </div>
          </div>

          <div className="absolute bottom-10 -left-10 bg-white shadow-md p-3 rounded-lg flex items-center space-x-2">
            <span className="text-red-600">🚑</span>
            <div>
              <p className="text-sm font-semibold">Request an ambulance</p>
              <p className="text-xs text-gray-500">One tap away!</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default HPoster



