import React from 'react'
import Nav from '../components/Nav/nav'
import HPoster from '../components/Home/HPoster'
import ChanelDoc from '../components/Home/ChanelDoc'
import DoctorsCards from '../components/Home/DoctorsCards'
import Testimonials from '../components/Home/Testimonials '
import Article from '../components/Home/article'
import NewsletterSubscription from '../components/Home/NewsletterSubscription '
import Fot from '../components/Footer/Fot'

function Home() {
  return (
    <div>
      <Nav/>
      <HPoster/>
      <ChanelDoc/>
      <DoctorsCards/>
      <Testimonials/>
      <Article/>
      <NewsletterSubscription/>
      <Fot/>
    </div>
  )
}

export default Home
