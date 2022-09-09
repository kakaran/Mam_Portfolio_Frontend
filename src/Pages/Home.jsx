import React from 'react'
import Clients from '../Components/Clients/Clients'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Services from '../Components/Services/Services'
import Testimonials from '../Components/Testimonials/Testimonials'
  
export default function Home() {
  return (
    <>
    <Header/>
    <Services/>
    <Clients/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
