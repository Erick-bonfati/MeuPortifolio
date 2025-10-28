import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import ProjetoDetalhe from './pages/ProjetoDetalhe'



function App() {

  return (
    <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/contato' element={<Contato />} />
            <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
          </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App