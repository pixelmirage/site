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
      description: "Her müvekkilimizin hakkını savunmak ve adaleti sağlamak en temel değerimizdir."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Empati",
      description: "Müvekkillerimizin durumunu anlayarak, onların yanında olmaya özen gösteririz."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Güvenilirlik",
      description: "Sözümüzün arkasında durarak, güvenilir hukuki hizmet sunmayı ilke ediniriz."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Çözüm Odaklılık",
      description: "Her soruna pratik ve etkili çözümler üreterek sonuç almaya odaklanırız."
    }
  ]

  const stats = [
    { number: "500+", label: "Başarılı Dava" },
    { number: "1000+", label: "Memnun Müvekkil" },
    { number: "24/7", label: "Hukuki Destek" }
  ]

  const expertise = [
    "Kira Tespit Davaları",
    "Tahliye Davaları (İhtiyaç, Temerrüt, Taahhüt)",
    "Kira Sözleşmesi Hazırlama ve İnceleme",
    "Kira Alacaklarının Tahsili",
    "Kiracı ve Ev Sahibi Hakları Danışmanlığı",
    "Kentsel Dönüşüm ve Kira Hukuku",
    "Arabuluculuk Hizmetleri",
    "Kira Uyuşmazlıkları Çözümü"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              İzmir'de kira hukuku alanında uzmanlaşmış, deneyimli ve güvenilir 
              avukat kadromuz ile müvekkillerimizin haklarını koruyoruz.
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
                Misyonumuz
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                İzmir'de kira hukuku alanında faaliyet gösteren hukuk büromuz, 
                kiracı ve ev sahiplerinin yaşadığı hukuki sorunları çözmek ve 
                haklarını en iyi şekilde korumak amacıyla kurulmuştur.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Müvekkil memnuniyeti odaklı hizmet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Şeffaf ve adil ücretlendirme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Hızlı ve etkili çözümler</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Vizyonumuz
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                İzmir'de kira hukuku alanında en güvenilir ve tercih edilen 
                hukuk bürosu olmak, müvekkillerimize en kaliteli hukuki hizmeti 
                sunarak sektörde öncü konumda yer almaktır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sürekli gelişen hukuk dünyasında kendimizi güncel tutarak, 
                müvekkillerimizin değişen ihtiyaçlarına en iyi şekilde 
                cevap verebilmeyi hedefliyoruz.
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
              Rakamlarla Başarımız
            </h2>
            <p className="text-xl text-white/90">
              Yıllar içinde elde ettiğimiz başarılar ve deneyimlerimiz
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
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hukuki hizmet verirken benimsediğimiz temel değerler ve ilkeler
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
                Uzmanlık Alanlarımız
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kira hukuku alanında geniş bir yelpazede hizmet sunarak, 
                müvekkillerimizin her türlü hukuki ihtiyacını karşılıyoruz.
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
                  Deneyimli Kadro
                </h3>
                <p className="mb-6">
                  Kira hukuku alanında uzmanlaşmış, deneyimli avukat kadromuz 
                  ile en kaliteli hukuki hizmeti sunuyoruz.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link to="/iletisim">
                    Randevu Alın
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
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kira hukuku konularında yaşadığınız sorunları çözmek için 
            deneyimli ekibimizle tanışın.
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

