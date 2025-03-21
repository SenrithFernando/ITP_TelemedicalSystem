import React from 'react'
import Sidebar from "../components/Prescription/Sidebar"
import Header from "../components/Prescription/Header"
import PrescriptionList from "../components/Prescription/PrescriptionList"

function PatientPrescription() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <PrescriptionList />
      </div>
    </div>
  )
}

export default PatientPrescription
