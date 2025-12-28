import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+905445854645" className="hover:text-accent transition-colors">0544 585 46 45</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:mertkagancetin@gmail.com" className="hover:text-accent transition-colors">mertkagancetin@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-1" />
                <span className="text-sm">Mansuroğlu Mah. 286/3 Sk.<br />Dedemhan Plaza D:17 Bayraklı/İzmir</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-accent" />
                <span className="text-sm">Pazartesi - Cuma: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hukuki Hizmetler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">İzmir Kira Tespit Davası</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Kiracı Tahliye Süreçleri</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Kira Sözleşmesi Hazırlama</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Kira Alacakları İcra Takibi</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Boşanma ve Miras Hukuku</Link></li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-accent transition-colors">Hakkımızda</Link></li>
              <li><Link to="/hizmetlerimiz" className="hover:text-accent transition-colors">Hizmetlerimiz</Link></li>
              <li><Link to="/makaleler" className="hover:text-accent transition-colors">Hukuki Makaleler</Link></li>
              <li><Link to="/iletisim" className="hover:text-accent transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Hakkımızda */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Av. Mert Kağan Çetin</h3>
            <p className="text-sm leading-relaxed">
              İzmir Bayraklı'da kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıkları alanında uzmanlaşmış hukuk büromuzla, müvekkillerimize profesyonel ve çözüm odaklı avukatlık hizmeti sunmaktayız.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © 2025 Av. Mert Kağan Çetin - İzmir Kira Avukatı. Tüm hakları saklıdır. Bu sitedeki bilgiler genel bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
