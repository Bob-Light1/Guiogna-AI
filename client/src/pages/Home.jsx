import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Trusted from '../components/Trusted'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import SchoolTools from '../components/SchoolTools'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <SchoolTools />
      <Testimonial />
      <Trusted />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home
