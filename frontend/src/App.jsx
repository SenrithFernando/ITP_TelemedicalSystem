
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import AboutUS from "../pages/AboutUs"
import Ambulance from "../pages/Ambulance"
import Pharmacy from "../pages/Pharmacy"
import Admin from "../pages/PhamacyAdmin/AHome"


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


    </Routes>
    </BrowserRouter>
  )
}

export default App
