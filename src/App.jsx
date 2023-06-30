import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import {Landing} from "./pages/landing"
import {Login} from "./pages/login"
import {SignUp, Onboarding, Dashboard} from "./pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/userdetails' element={<Onboarding />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
