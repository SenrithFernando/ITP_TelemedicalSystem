import React from "react";

function PhaCarousal() {
  return (
    <div  className="w-4/5 mx-auto flex justify-center items-center bg-blue-100 p-16 h-[400px]">
    {/* Left Side */}
    <div className="w-2/3 space-y-4 mr-8">
      <h4 className="text-pink-600 font-medium">Pharmacy Store</h4>
      <h2 className="text-5xl font-bold text-gray-900">
        Your Trusted <br /> Pharmacy Store
      </h2>
      <p className="text-gray-700">
        Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
        Nullam vitae sit tempus diam.
      </p>

      {/* Customer Stats */}
      <div className="flex items-center space-x-4 mt-6">
        {/* Four Black Circles */}
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="w-6 h-6 bg-black rounded-full"></div>
          ))}
        </div>
        <div>
          <span className="text-pink-600 font-semibold text-lg">100k+</span>
          <p className="text-gray-700 text-sm">Satisfied Customers</p>
        </div>
      </div>
    </div>

    {/* Right Side - Image Placeholder */}
    <div className="w-1/3 relative">
    
      <div className="bg-white w-full h-[400px] transform translate-y-4  rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none flex justify-end p-4">
       
        {/* Small white dots in the top-right corner */}
        <div className="space-y-1">
          
          <img src="Images/pharmacist.png" alt="Pharmacy" className="transform -translate-x-25 w-60 translate-y-2" />
        </div>
        
      </div>
      
    </div>
  </div>
  );
}

export default PhaCarousal;
