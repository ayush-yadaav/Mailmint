import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Saved from './pages/SavedEmails'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/saved' element={<Saved />} />
    <Route path='/faq' element={<FAQ />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
   </Routes>
  )
}

export default App