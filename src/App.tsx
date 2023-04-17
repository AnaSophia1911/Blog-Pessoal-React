import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/login" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/cadastro" element={<Cadastro />} />
</Routes>
</div>

      <Home />
      <Footer />
      </Router>
    </>
  )
}

export default App
