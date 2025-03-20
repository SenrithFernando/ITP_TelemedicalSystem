import React from 'react'

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="relative">
              🔔
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                !
              </span>
            </span>
            <div className="flex items-center space-x-2">
              <img
                src="profile-pic.png"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">Jonitha Cathrine</span>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
