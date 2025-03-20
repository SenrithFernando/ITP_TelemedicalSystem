import React from 'react'

import Nav from '../components/Nav/nav'
import PhaCarousal from '../components/Pharmacy/PhaCarousal'
import PhaPromoSection from '../components/Pharmacy/PhaPromoSection'
import PharmacyOrderForm from '../components/Pharmacy/PharmacyOrderForm'
import Fot from '../components/Footer/Fot'





function Pharmacy() {
  return (
    <div>
      <Nav/>
      <PhaCarousal/>
      <PhaPromoSection/>
      <PharmacyOrderForm/>
      <Fot />
    </div>
  )
}

export default Pharmacy
