import React from 'react'
import Header from '../Components/Header'
import SectionBan from '../Components/SectionBan'
import Footer from '../Footer/Footer'
import Gallery from '../Components/Gallery'

function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionBan />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default Home
