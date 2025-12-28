import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { 
  Scale, 
  Home, 
  FileText, 
  Users, 
  Shield, 
  CheckCircle,
  Phone,
  Star,
  Heart,
  Briefcase
} from 'lucide-react'
import heroImage from '../assets/homepage_hero.png'

const HomePage = () => {
  const services = [
    {
      icon: <Scale className="w-8 h-8 text-accent" aria-label="İzmir Kira Avukatı - Kira Tespit Davaları" title="İzmir Kira Avukatı" />,
      title: "Kira Tespit Davaları",
      description: "Kira bedelinin güncel piyasa koşullarına göre belirlenmesi için hukuki destek."
    },
    {
      icon: <Home className="w-8 h-8 text-accent" aria-label="İzmir Kira Avukatı - Tahliye Davaları" title="İzmir Kira Avukatı" />,
      title: "Tahliye Davaları",
      description: "İhtiyaç, temerrüt ve taahhüt sebebiyle tahliye süreçlerinde profesyonel temsil."
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" aria-label="İzmir Kira Avukatı - Kira Sözleşmesi Hazırlama" title="İzmir Kira Avukatı" />,
      title: "Kira Sözleşmesi Hazırlama",
      description: "Hukuka uygun konut ve işyeri kira sözleşmelerinin hazırlanması."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" aria-label="İzmir Kira Avukatı - Arabuluculuk Hizmetleri" title="İzmir Kira Avukatı" />,
      title: "Arabuluculuk Hizmetleri",
      description: "Kira uyuşmazlıklarında dava öncesi arabuluculuk süreçleri."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" aria-label="İzmir Kira Avukatı - Boşanma Hukuku" title="İzmir Kira Avukatı" />,
      title: "Boşanma Hukuku",
      description: "Boşanma, çocukların velayeti, tazminat, mal paylaşımı ve nafaka konularında destek."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent" aria-label="İzmir Kira Avukatı - Miras Hukuku" title="İzmir Kira Avukatı" />,
      title: "Miras Hukuku",
      description: "Miras hukukunu ilgilendiren davalarınızda profesyonel destek ve danışmanlık."
    }
  ]

  const features = [
    "Müvekkil odaklı yaklaşım",
    "Şeffaf ücretlendirme",
    "7/24 hukuki danışmanlık",
    "Hızlı çözüm odaklı hizmet",
    "İzmir genelinde hizmet"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                İzmir Kira ve Tahliye Davası Avukatı: Güvenilir Çözüm Ortağınız <span className="block text-lg font-semibold text-white/90">Avukat Mert Kağan Çetin</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                İzmir kira avukatı olarak Av. Mert Kağan Çetin, kira tespiti, kiracı tahliyesi ve tahliye taahhütnamesi süreçlerinde uzmanlaşmıştır. İzmir'de kira hukuku, boşanma ve miras hukuku alanlarında profesyonel hukuki destek sunarak haklarınızı en etkili şekilde koruyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link to="/iletisim">İletişime Geçin</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link to="/hizmetlerimiz">Hizmetlerimizi İnceleyin</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="İzmir Kira Avukatı - Av. Mert Kağan Çetin Hukuk Bürosu" title="İzmir Kira Avukatı Mert Kağan Çetin" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Avukatlık Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kira hukuku, boşanma hukuku, miras hukuku ve gayrimenkul hukuku alanında kapsamlı hukuki hizmetler sunarak, müvekkillerimizin haklarını en iyi şekilde koruyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Neden Av. Mert Kağan Çetin'i Tercih Etmelisiniz?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                İzmir'de kira hukuku, boşanma hukuku ve miras hukuku alanında uzman kadromuz ile müvekkillerimize en kaliteli hukuki hizmeti sunuyoruz. Yerel mahkeme tecrübemiz ve çözüm odaklı yaklaşımımızla yanınızdayız.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg">
              <div className="text-center">
                <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Güvenilir Hukuki Destek
                </h3>
                <p className="mb-6">
                  Kira hukuku, boşanma hukuku, miras hukuku ve gayrimenkul hukuku konularında yaşadığınız sorunları deneyimli avukat kadromuz ile çözüme kavuşturun.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link to="/iletisim">
                    <Phone className="w-4 h-4 mr-2" />
                    Hemen Arayın
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Müvekkil Görüşleri
            </h2>
            <p className="text-lg text-gray-600">
              Hizmet verdiğimiz müvekkillerimizin deneyimleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmet K.",
                text: "Tahliye davamda çok profesyonel destek aldım. Süreç boyunca her aşamada bilgilendirildim.",
                rating: 5
              },
              {
                name: "Fatma S.",
                text: "Kira tespit davamı başarıyla sonuçlandırdılar. Şeffaf ücretlendirme ve kaliteli hizmet.",
                rating: 5
              },
              {
                name: "Mehmet Y.",
                text: "Kira sözleşmesi hazırlama konusunda çok detaylı ve dikkatli çalıştılar. Teşekkürler.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hukuki Desteğe İhtiyacınız mı Var?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Kira hukuku, boşanma hukuku, miras hukuku ve gayrimenkul hukuku konularında yaşadığınız sorunları çözmek için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link to="/iletisim">İletişime Geçin</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="w-4 h-4 mr-2" />
              544 585 46 45
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
