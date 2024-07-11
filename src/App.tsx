import { useState } from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import './App.css'

function App() {

  return (
    <div className='AppWrapper'>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
