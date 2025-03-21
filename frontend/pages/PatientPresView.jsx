import React from 'react'
import Sidebar from "../components/PatientPrescription/Sidebar";
import Header from "../components/PatientPrescription/Header";
import ViewText from "../components/DocterPrescription/ViewText";

function PrescriptionView() {
  return (

    <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 p-6">
              <Header />
              
              <ViewText />
        
        
          </div>
              
              
            
          </div>
    
  )
}

export default PrescriptionView
