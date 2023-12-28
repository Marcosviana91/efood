import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Footer from './container/Footer'

import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Home />
      <Footer />
    </>
  )
}

export default App
