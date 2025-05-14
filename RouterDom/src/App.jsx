import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import Header from './component/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import ComponyAbout from './pages/ComponyAbout'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />}>
          <Route path='employee' element={<EmployeeAbout />} />
          <Route path='company' element={<ComponyAbout />} />
        </Route>

        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
