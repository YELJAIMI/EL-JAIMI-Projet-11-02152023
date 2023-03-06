import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './styles/index.scss'
import Apropos from './Pages/Apropos'
import Error from './Pages/Error'
import LocationInfo from './Pages/LocationInfo'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/location-info/:idLogement" element={<LocationInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App