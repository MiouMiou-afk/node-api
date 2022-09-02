import React from 'react'
import { browserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Profil from '../../pages/Profil'
import Trending from '../../pages/Trending'

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profil' element={<Profil />} />
        <Route path='/Trending' element={<Trending />} />
      </Routes>
    </Router>
  )
}

export default Index
