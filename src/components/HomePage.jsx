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
      icon: <Scale className="w-8 h-8 text-accent" />,
      title: "Kira Tespit Davaları",
      description: "Kira bedelinin güncel piyasa koşullarına göre belirlenmesi için İzmir kira avukatı olarak profesyonel hukuki destek sağlıyoruz."
    },
    {
      icon: <Home className="w-8 h-8 text-accent" />,
      title: "Tahliye Davaları",
      description: "İhtiyaç, temerrüt ve tahliye taahhütnamesi nedeniyle kiracı tahliyesi süreçlerinde İzmir'de uzman avukatlık hizmeti."
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Kira Sözleşmesi Hazırlama",
      description: "Hukuka uygun, haklarınızı koruyan konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Arabuluculuk Hizmetleri",
      description: "Kira uyuşmazlıklarında zorunlu arabuluculuk süreçlerinde İzmir kira avukatı danışmanlığı."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Boşanma Hukuku",
      description: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında İzmir boşanma avukatı desteği."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      title: "Miras Hukuku",
      description: "İzmir miras avukatı olarak veraset ilamı, izale-i şuyu ve tenkis davalarında profesyonel danışmanlık."
    }
  ]

  const features = [
    "Uzman İzmir Kira Avukatı",
    "Şeffaf ve Adil Ücretlendirme",
    "7/24 Hukuki Danışmanlık Hattı",
    "Hızlı ve Çözüm Odaklı Hizmet",
    "Bayraklı ve İzmir Geneli Hizmet"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                İzmir Kira Avukatı ve Hukuki Danışmanlık <span className="block text-2xl mt-2 font-semibold text-white/90">Avukat Mert Kağan Çetin</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                İzmir'de **kira hukuku**, **tahliye davaları**, **boşanma** ve **miras hukuku** alanlarında uzman kadromuzla yanınızdayız. Haklarınızı korumak ve hızlı çözümler üretmek için profesyonel avukatlık hizmeti sunuyoruz.
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
                alt="İzmir Kira Avukatı Mert Kağan Çetin - Hukuk Bürosu" 
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
              İzmir Avukatlık ve Danışmanlık Hizmetleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Özellikle **kira hukuku**, **tahliye süreçleri** ve **gayrimenkul uyuşmazlıkları** konularında İzmir Bayraklı'da uzmanlaşmış hukuk büromuzla hizmetinizdeyiz.
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
                Neden İzmir Kira Avukatı Mert Kağan Çetin?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                İzmir'de kira hukuku, boşanma ve miras davalarında edindiğimiz tecrübe ile müvekkillerimize en şeffaf ve etkili hukuki desteği sağlıyoruz. Bayraklı'daki ofisimizde yerel mahkeme süreçlerine hakimiyetimizle fark yaratıyoruz.
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
                  Güvenilir İzmir Avukatı
                </h3>
                <p className="mb-6">
                  Kira tespiti, tahliye davası, boşanma ve miras hukuku konularında profesyonel destek almak için hemen arayın.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <a href="tel:+905445854645">
                    <Phone className="w-4 h-4 mr-2" />
                    0544 585 46 45
                  </a>
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
              Müvekkil Deneyimleri
            </h2>
            <p className="text-lg text-gray-600">
              İzmir'de hizmet verdiğimiz müvekkillerimizin yorumları
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmet K.",
                text: "İzmir'deki tahliye davamda Mert Bey'den profesyonel destek aldım. Süreç çok hızlı ilerledi.",
                rating: 5
              },
              {
                name: "Fatma S.",
                text: "Kira tespit davamda haklarımı en iyi şekilde savundular. İzmir kira avukatı arayanlara tavsiye ederim.",
                rating: 5
              },
              {
                name: "Mehmet Y.",
                text: "Kira sözleşmesi hazırlama ve hukuki danışmanlık konusunda çok titiz bir çalışma yürüttüler.",
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
            Hukuki Danışmanlık İçin Bize Ulaşın
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            İzmir'de kira, boşanma veya miras hukuku konularında yardıma mı ihtiyacınız var? Hemen iletişime geçin.
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
              asChild
            >
              <a href="tel:+905445854645">
                <Phone className="w-4 h-4 mr-2" />
                544 585 46 45
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
