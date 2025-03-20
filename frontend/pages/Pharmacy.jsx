import React from 'react'

import Nav from '../components/Nav/nav'
import PhaCarousal from '../components/PhamacyAdmin/PhaCarousal'
import PhaPromoSection from '../components/PhamacyAdmin/PhaPromoSection'
import PharmacyOrderForm from '../components/PhamacyAdmin/PharmacyOrderForm'
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
