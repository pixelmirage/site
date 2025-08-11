import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-1 md:mb-0">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>544 585 46 45</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>mertkagancetin@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            İzmir Kira Avukatı
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/hakkimizda" className="text-gray-700 hover:text-primary transition-colors">
                Hakkımızda
              </Link>
              <Link to="/hizmetlerimiz" className="text-gray-700 hover:text-primary transition-colors">
                Hizmetlerimiz
              </Link>
              <Link to="/iletisim" className="text-gray-700 hover:text-primary transition-colors">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                to="/hakkimizda" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                to="/hizmetlerimiz" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link 
                to="/iletisim" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

