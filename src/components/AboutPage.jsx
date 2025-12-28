import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  Award, 
  Users, 
  Clock, 
  Target,
  CheckCircle,
  Scale,
  Heart,
  Shield
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Scale className="w-8 h-8 text-accent" />,
      title: "Adalet",
      description: "İzmir kira avukatı olarak her müvekkilimizin hakkını savunmak ve adaleti sağlamak en temel değerimizdir."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Empati",
      description: "Müvekkillerimizin hukuki süreçlerdeki hassasiyetini anlayarak, onlara en uygun çözümleri sunarız."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Güvenilirlik",
      description: "Şeffaf iletişim ve dürüstlük ilkesiyle İzmir'de güvenilir avukatlık hizmeti sağlıyoruz."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Çözüm Odaklılık",
      description: "Kira uyuşmazlıkları ve tahliye davalarında pratik, hızlı ve sonuç odaklı stratejiler geliştiriyoruz."
    }
  ]

  const stats = [
    { number: "500+", label: "Başarılı Dava" },
    { number: "1000+", label: "Memnun Müvekkil" },
    { number: "24/7", label: "Hukuki Destek" },
    { number: "10+", label: "Yıllık Tecrübe" }
  ]

  const expertise = [
    "İzmir Kira Tespit Davaları",
    "Tahliye Davaları (İhtiyaç, Temerrüt, Taahhüt)",
    "Kira Sözleşmesi Hazırlama ve Hukuki İnceleme",
    "Kira Alacaklarının İcra Yoluyla Tahsili",
    "Kiracı ve Ev Sahibi Hakları Danışmanlığı",
    "Gayrimenkul Hukuku ve Tapu Davaları",
    "Zorunlu Arabuluculuk Süreçleri",
    "İzmir Boşanma ve Miras Davaları"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İzmir Kira Avukatı Mert Kağan Çetin Hakkında
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              İzmir Bayraklı merkezli hukuk büromuzda, özellikle **kira hukuku**, **gayrimenkul hukuku** ve **aile hukuku** alanlarında uzmanlaşmış ekibimizle profesyonel danışmanlık sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Misyonumuz ve Vizyonumuz
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                İzmir'de faaliyet gösteren hukuk büromuz, müvekkillerine sadece hukuki temsil değil, aynı zamanda stratejik danışmanlık sağlamayı amaçlar. **İzmir kira avukatı** olarak önceliğimiz, uyuşmazlıkları en hızlı ve en az maliyetle çözüme kavuşturmaktır.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Müvekkil Haklarının Üstünlüğü</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Güncel Mevzuat ve Yargıtay Kararları Takibi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Etik ve Şeffaf Avukatlık İlkeleri</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Neden Biz?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kira hukuku, teknik detayların ve sürelerin hayati önem taşıdığı bir alandır. İzmir'deki yerel mahkemelerin işleyişine ve güncel kira piyasasına hakimiyetimizle, müvekkillerimize avantaj sağlıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                **Avukat Mert Kağan Çetin** liderliğindeki ekibimiz, tahliye süreçlerinden kira tespitine kadar her aşamada yanınızdadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deneyim ve Başarılarımız
            </h2>
            <p className="text-xl text-white/90">
              İzmir ve çevresinde yürüttüğümüz hukuki süreçlerdeki tecrübemiz
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Temel İlkelerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hukuki hizmet verirken taviz vermediğimiz profesyonel değerlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Uzmanlık ve Hizmet Alanları
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                İzmir'de kira hukuku başta olmak üzere, gayrimenkul ve aile hukuku alanlarında kapsamlı hizmet sunuyoruz.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg">
              <div className="text-center">
                <Award className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Uzman İzmir Avukatı
                </h3>
                <p className="mb-6">
                  Kira hukuku uyuşmazlıklarında hak kaybı yaşamamak için uzman desteği alın.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link to="/iletisim">
                    Hemen Randevu Alın
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Hukuki Sorunlarınıza Profesyonel Çözümler
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            İzmir'de kira, tahliye veya diğer hukuki konularda yardıma ihtiyacınız varsa bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/iletisim">İletişime Geçin</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <Link to="/hizmetlerimiz">Hizmetlerimizi İnceleyin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
