import React from 'react'

function ChanelDoc() {
  return (
    <div className=" bg-gray-100 flex items-center justify-center  pt-10 pb-10">
    <div className="w-3/9 bg-white  rounded-2xl p-8  text-center">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Channel your doctor
      </h2>

      {/* Input Fields */}
      {["Select Doctor", "Any Specialization", "Any Date"].map((placeholder, index) => (
        <input
          key={index}
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-3 mb-4 text-gray-500 bg-gray-100 rounded-md outline-none"
          
        />
      ))}

      {/* Search Button */}
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-700 transition">
        Search
      </button>

    </div>
  </div>
  )
}

export default ChanelDoc
