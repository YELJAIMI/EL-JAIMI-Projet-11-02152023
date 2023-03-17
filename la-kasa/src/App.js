import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './style.css'
import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer/Footer'
import useFetch from './Components/Hook/useFetch'
import LocationInfo from './Pages/LocationInfo'
import Apropos from './Pages/Apropos'
import Error from './Pages/Error'

function App() {
  const [fetchLocations] = useFetch("/locations.json")
  console.log(fetchLocations)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home locations={fetchLocations} />} />
          <Route path="location/:id" element={<LocationInfo locations={fetchLocations} />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App
