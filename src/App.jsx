import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage';
import Makaleler from './pages/Makaleler/Makaleler';
import MakaleDetay from './pages/Makaleler/MakaleDetay';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" role="main" className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/makaleler" element={<Makaleler />} />
            <Route path="/makaleler/:slug" element={<MakaleDetay />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
