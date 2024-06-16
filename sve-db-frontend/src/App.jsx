import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Grid from './components/Grid'

function Background() {
  return (
    <div className='container'>
      <p>hello world</p>
      <Outlet /> 
    </div>
  )
  
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Background />}>
        <Route index element={<Grid />} />
        
      </Route>
    </Routes>
  )
}

export default App
