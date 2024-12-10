import React from 'react'
import Home from './pages/Home'
import AddProperty from './pages/AddProperty'
import EditProperty from './pages/EditProperty'
import ShowProperties from './pages/ShowProperties'
import { Router, Route, Routes } from "react-router-dom"


function App() {
  Route
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ShowProperties' element={<ShowProperties />} />
        <Route path='/add' element={<AddProperty />} />
        <Route path='/edit:id' element={< EditProperty />} />
      </Routes>
    </div>
  )
}

export default App
