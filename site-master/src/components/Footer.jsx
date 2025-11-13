import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>544 585 46 45</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>mertkagancetin@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Mansuroğlu Mah. 286/3 Sk.<br />Dedemhan Plaza D:17 Bayraklı/İzmir</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Pazartesi - Cuma: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Kira Tespit Davaları</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Tahliye Davaları</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Kira Sözleşmesi Hazırlama</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Kira Alacaklarının Tahsili</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Arabuluculuk Hizmetleri</Link></li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-accent transition-colors">Hakkımızda</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Hizmetlerimiz</Link></li>
              <li><Link to="/iletisim" className="hover:text-accent transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Hakkımızda */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İzmir Kira Avukatı</h3>
            <p className="text-sm leading-relaxed">
              İzmir'de kira hukuku alanında uzman avukat olarak, 
              kiracı ve ev sahiplerinin haklarını korumak için 
              profesyonel hukuki hizmet sunuyoruz.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 İzmir Kira Avukatı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

