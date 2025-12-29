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
  Briefcase,
  Gavel,
  Info,
  Building2,
  Gavel as GavelIcon
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
                İzmir'de <Link to="/hizmetlerimiz" className="underline hover:text-accent transition-colors">kira hukuku</Link>, <Link to="/hizmetlerimiz" className="underline hover:text-accent transition-colors">tahliye davaları</Link>, <Link to="/hizmetlerimiz" className="underline hover:text-accent transition-colors">boşanma</Link> ve <Link to="/hizmetlerimiz" className="underline hover:text-accent transition-colors">miras hukuku</Link> alanlarında uzman kadromuzla yanınızdayız. Haklarınızı korumak ve hızlı çözümler üretmek için profesyonel avukatlık hizmeti sunuyoruz.
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

      {/* SEO Content Section - EXPANDED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">İzmir Kira Hukuku ve Tahliye Süreçlerinde Uzman Desteği</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Günümüzde kira uyuşmazlıkları, özellikle İzmir gibi metropol şehirlerde en sık karşılaşılan hukuki sorunların başında gelmektedir. 
                <strong>İzmir kira avukatı</strong> olarak, hem kiracıların hem de kiraya verenlerin haklarını korumak adına güncel mevzuat ve Yargıtay kararları ışığında profesyonel hizmet sunuyoruz. 
                Özellikle Bayraklı, Bornova, Karşıyaka ve Konak gibi kira hareketliliğinin yoğun olduğu bölgelerde, taraflar arasındaki dengenin korunması büyük önem taşımaktadır.
              </p>
              <p>
                Kira bedelinin tespiti, tahliye taahhütnamesinin geçerliliği, ihtiyaç nedeniyle tahliye ve kira alacaklarının icra yoluyla tahsili gibi konularda teknik bilgi ve tecrübe hayati önem taşır. 
                Bayraklı'da bulunan ofisimizde, İzmir Adliyesi'ne yakınlığımız ve yerel mahkeme uygulamalarına hakimiyetimizle müvekkillerimize hızlı çözümler üretiyoruz. 
                Hukuki süreçlerin doğru yönetilmesi, sadece davanın kazanılmasını değil, aynı zamanda sürecin en kısa sürede tamamlanmasını da sağlar.
              </p>
              <p>
                Kira hukuku sadece dava açmaktan ibaret değildir; aynı zamanda uyuşmazlıkları önleyici hukuki danışmanlık hizmetini de kapsar. 
                Doğru hazırlanmış bir kira sözleşmesi, ileride yaşanabilecek pek çok sorunu henüz başlamadan çözebilir. 
                Bu nedenle, sözleşme aşamasından tahliye aşamasına kadar her adımda profesyonel bir <Link to="/hakkimizda" className="text-primary font-semibold hover:underline">İzmir avukatı</Link> ile çalışmak hak kaybını önleyecektir.
              </p>
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
              Özellikle <Link to="/hizmetlerimiz" className="text-primary hover:underline">kira hukuku</Link>, <strong>tahliye süreçleri</strong> ve <strong>gayrimenkul uyuşmazlıkları</strong> konularında İzmir Bayraklı'da uzmanlaşmış hukuk büromuzla hizmetinizdeyiz.
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

      {/* Real Estate Law Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Gayrimenkul Hukuku ve Danışmanlık
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Gayrimenkul hukuku, mülkiyet hakkının korunmasından tapu iptal ve tescil davalarına kadar geniş bir yelpazeyi kapsar. 
                  İzmir'de kentsel dönüşüm projelerinin artması ve gayrimenkul değerlerinin hızla değişmesi, bu alandaki hukuki desteği daha da kritik hale getirmiştir.
                </p>
                <p>
                  Ofisimiz, gayrimenkul satış vaadi sözleşmeleri, kat karşılığı inşaat sözleşmeleri ve ortaklığın giderilmesi (izale-i şuyu) davalarında müvekkillerine kapsamlı hizmet sunmaktadır. 
                  Taşınmazların hukuki durumunun analizi ve risk yönetimi konularında profesyonel danışmanlık sağlıyoruz.
                </p>
                <ul className="list-none space-y-3 mt-6">
                  <li className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent" />
                    <span>Tapu İptal ve Tescil Davaları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent" />
                    <span>Kat Karşılığı İnşaat Sözleşmeleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent" />
                    <span>Müdahalenin Men-i ve Ecrimisil Davaları</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GavelIcon className="w-6 h-6 text-accent" />
                Hukuki Süreç Nasıl İşler?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-primary">Ön Görüşme ve Analiz</h4>
                    <p className="text-gray-600 text-sm">Durumunuzu dinliyor, belgelerinizi inceliyor ve hukuki riskleri analiz ediyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-primary">Strateji Belirleme</h4>
                    <p className="text-gray-600 text-sm">Dava veya uzlaşma yolunda en hızlı ve etkili stratejiyi belirliyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-primary">Uygulama ve Takip</h4>
                    <p className="text-gray-600 text-sm">Dava sürecini başlatıyor ve her aşamada sizi düzenli olarak bilgilendiriyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Neden İzmir Kira Avukatı Mert Kağan Çetin?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                İzmir'de kira hukuku, boşanma ve miras davalarında edindiğimiz tecrübe ile müvekkillerimize en şeffaf ve etkili hukuki desteği sağlıyoruz. Bayraklı'daki ofisimizde yerel mahkeme süreçlerine hakimiyetimizle fark yaratıyoruz. 
                Daha fazla bilgi için <Link to="/makaleler" className="text-primary font-semibold hover:underline">hukuki makalelerimizi</Link> inceleyebilirsiniz.
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

      {/* FAQ Section - EXPANDED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              İzmir Kira Hukuku Hakkında Sıkça Sorulanlar
            </h2>
            <p className="text-lg text-gray-600">
              Müvekkillerimizin en çok merak ettiği konular
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-accent" />
                  İzmir'de kira tahliye davası ne kadar sürer?
                </h3>
                <p className="text-gray-600">
                  Tahliye davaları, davanın türüne ve mahkemenin iş yüküne bağlı olarak İzmir'de ortalama 8 ay ile 1.5 yıl arasında sonuçlanmaktadır. Bir <strong>İzmir kira avukatı</strong> ile çalışmak, usul hatalarını önleyerek sürecin uzamasını engeller.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-accent" />
                  Kira tespit davası hangi durumlarda açılır?
                </h3>
                <p className="text-gray-600">
                  Kira sözleşmesinin üzerinden 5 yıl geçmişse, taraflar kira bedelinin emsal rayiçlere göre yeniden belirlenmesi için kira tespit davası açabilirler. Bu süreçte doğru bilirkişi raporu ve emsal sunumu kritik önem taşır.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-accent" />
                  Arabuluculuk süreci zorunlu mu?
                </h3>
                <p className="text-gray-600">
                  Evet, 1 Eylül 2023 tarihinden itibaren kira uyuşmazlıklarında dava açmadan önce arabuluculuğa başvurmak zorunludur. Arabuluculuk aşamasında bir avukatla temsil edilmek, haklarınızı korumak adına tavsiye edilir.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-accent" />
                  Tahliye taahhütnamesi ne zaman imzalanmalıdır?
                </h3>
                <p className="text-gray-600">
                  Tahliye taahhütnamesinin geçerli olması için kira sözleşmesinin imza tarihinden sonraki bir tarihte düzenlenmiş olması gerekir. Sözleşme ile aynı gün imzalanan taahhütnameler genellikle geçersiz sayılmaktadır.
                </p>
              </CardContent>
            </Card>
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
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-primary">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hukuki Sorunlarınıza Profesyonel Çözümler
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            İzmir'de kira, gayrimenkul, boşanma veya miras hukuku konularında uzman desteği almak için hemen iletişime geçin.
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
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="tel:+905445854645">Hemen Arayın</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
