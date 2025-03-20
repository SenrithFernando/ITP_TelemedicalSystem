import React from 'react'

function Fot() {
  return (
    <footer className="bg-blue-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
          {/* <!-- Left Section --> */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center">
              <img src="Images/Medilifelogo.png" alt="Logo" className="w-40 mr-" />
            </h2>
          </div>

          {/* <!-- Links Section --> */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            {/* <!-- Company Links --> */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Blog & News</a></li>
              </ul>
            </div>

            {/* <!-- Resources Links --> */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Educational</a></li>
                <li><a href="#" className="hover:underline">Mental Health Resources</a></li>
                <li><a href="#" className="hover:underline">Nutrition</a></li>
                <li><a href="#" className="hover:underline">Medication Guides</a></li>
              </ul>
            </div>
          </div>

          {/* <!-- Social Media Section --> */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Our Social Media</h3>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="bg-black text-white px-3 py-1 rounded-md">Instagram</a>
              <a href="#" className="bg-black text-white px-3 py-1 rounded-md">Youtube</a>
              <a href="#" className="bg-black text-white px-3 py-1 rounded-md">Facebook</a>
              <a href="#" className="bg-black text-white px-3 py-1 rounded-md">LinkedIn</a>
              <a href="#" className="bg-black text-white px-3 py-1 rounded-md">Twitter</a>
              <a href="#" className="bg-black text-white px-3 py-1 rounded-md">Tik Tok</a>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
          <p>Copyright © 2023 Pharmacy Store | Design by TEAM-WE-3.1-58</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Terms of Use</a> | 
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
  )
}

export default Fot
