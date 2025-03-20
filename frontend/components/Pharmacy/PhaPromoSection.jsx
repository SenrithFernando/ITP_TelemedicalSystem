import React from "react";
import { FaTruck, FaCreditCard, FaGift, FaHeadphones } from "react-icons/fa";

function PhaPromoSection() {
    return (
      <div className="w-4/5 mx-auto py-10">
        {/* Top Icons Section */}
        <div className="grid grid-cols-4 gap-6 text-center mb-12">
          <div className="flex flex-col items-center">
            <FaTruck className="w-8 h-8 text-blue-500" />
            <p className="font-semibold mt-2">Free Shipping</p>
            <span className="text-gray-500 text-sm">Order Over $900</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCreditCard className="w-8 h-8 text-blue-500" />
            <p className="font-semibold mt-2">Quick Payment</p>
            <span className="text-gray-500 text-sm">100% Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGift className="w-8 h-8 text-blue-500" />
            <p className="font-semibold mt-2">Big Cashback</p>
            <span className="text-gray-500 text-sm">Over 30% Cashback</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHeadphones className="w-8 h-8 text-blue-500" />
            <p className="font-semibold mt-2">24/7 Support</p>
            <span className="text-gray-500 text-sm">Ready for You</span>
          </div>
        </div>
  
        {/* Bottom Sales Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Sale Card */}
          <div className="bg-blue-100 p-6 rounded-lg flex items-center">
            <div className="w-2/3">
              <h4 className="text-gray-700 font-semibold">Big Sale</h4>
              <h2 className="text-3xl font-bold mt-2">
                Get an Extra <span className="text-blue-500">50% Off</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Libero diam auctor tristique hendrerit in eu vel id.
              </p>
            </div>
            <div className="w-1/3 bg-black h-32 rounded-md"></div>
          </div>
  
          {/* Right Discount Card */}
          <div className="bg-blue-600 p-6 rounded-lg text-white relative">
            <p className="text-sm">
              Take the discount for the first shopping on our website
            </p>
            <h2 className="text-3xl font-bold mt-2">30%</h2>
            <button className="mt-4 bg-white text-black py-2 px-4 rounded-md">
              Shop Now
            </button>
  
            {/* Top-right white dots */}
            <div className="absolute top-4 right-4 space-y-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default PhaPromoSection;
