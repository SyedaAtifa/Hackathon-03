import React from 'react'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Funiro from '@/components/Funiro'
import Footer from '@/components/Footer'
import SOFA from '@/components/sofa/page'



function page() {
  return (
    <div className="h-auto w-screen">
      <Header />
      <Main />
      <Home />
      <SOFA />
      <Funiro />
      <Footer />
    </div>
  )
}

export default page