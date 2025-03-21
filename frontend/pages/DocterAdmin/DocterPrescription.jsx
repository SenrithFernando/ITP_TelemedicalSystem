import Sidebar2 from "../../components/DocterPrescription/Sidebar2";
import Header2 from "../../components/DocterPrescription/Header2";
import Profile from "../../components/DocterPrescription/profile"
import Dashboard from "../../components/DocterPrescription/Dashboard";


import React from 'react'

function DocterPrescription() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar2 />
    <div className="flex-1 p-6 ">
      <Header2 />
      <Profile/>


  <Dashboard /></div>
      
      
    
  </div>
  )
}

export default DocterPrescription