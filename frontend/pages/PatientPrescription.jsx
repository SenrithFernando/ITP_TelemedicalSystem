import React from 'react'
import Sidebar from "../components/PatientPrescription/Sidebar"
import Header from "../components/PatientPrescription/Header"
import PrescriptionList from "../components/PatientPrescription/PrescriptionList"

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
