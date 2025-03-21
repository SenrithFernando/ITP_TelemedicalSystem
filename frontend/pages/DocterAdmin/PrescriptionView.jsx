import React from 'react'
import Sidebar2 from "../../components/DocterPrescription/Sidebar2";
import Header2 from "../../components/DocterPrescription/Header2";
import ViewText from "../../components/DocterPrescription/ViewText";

function PrescriptionView() {
  return (

    <div className="flex h-screen bg-gray-100">
            <Sidebar2 />
            <div className="flex-1 p-6">
              <Header2 />
              
              <ViewText />
        
        
          </div>
              
              
            
          </div>
    
  )
}

export default PrescriptionView
