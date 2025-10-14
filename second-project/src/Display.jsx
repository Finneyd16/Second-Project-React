import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

import Footer from './components/Footer'

const Display = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer></Footer>
            
        </BrowserRouter>
    </>
  )
}

export default Display
