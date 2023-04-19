import { useState } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import './App.css'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/login" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/cadastro" element={<Cadastro />} />
<Route path="/temas" element={<ListaTema />} />
<Route path="posts" element={<ListaPostagem/>} />
</Routes>
</div>

      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
