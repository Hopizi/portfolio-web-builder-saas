import React from 'react'
import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import {Landing} from "./pages/landing"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />}/>
      </Routes>
    </div>
  )
}

export default App
