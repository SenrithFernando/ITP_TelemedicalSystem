
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import AboutUS from "../pages/AboutUs"
import Ambulance from "../pages/Ambulance"
import Pharmacy from "../pages/Pharmacy"
import Admin from "../pages/Admin/AHome"
import Prescription from "../pages/PatientPrescription"
import DocterPrescription from "../pages/DocterAdmin/DocterPrescription"
import PrescriptionAdd from "../pages/DocterAdmin/PrescriptionAdd"
import PrescriptionView  from "../pages/DocterAdmin/PrescriptionView"   
import PatientPreView  from "../pages/PatientPresView"  


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutUS/>}/>
      <Route path="/ambulance" element={<Ambulance/>}/>
      <Route path="/pharmacy" element={<Pharmacy/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/prescription" element={<Prescription/>}/>
      <Route path="/docterprescription" element={<DocterPrescription/>}/>
      <Route path="/prescriptionadd" element={<PrescriptionAdd/>}/>
      <Route path="/prescriptionview" element={<PrescriptionView/>}/>
      <Route path="/patientpreview" element={<PatientPreView/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
