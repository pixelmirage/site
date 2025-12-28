import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  Scale, 
  Home, 
  FileText, 
  Users, 
  DollarSign,
  Building,
  HandHeart,
  CheckCircle,
  Clock,
  Phone,
  Heart,
  Briefcase
} from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Scale className="w-12 h-12 text-accent" />,
      title: "İzmir Kira Tespit Davaları",
      description: "Kira bedelinin güncel piyasa rayiçlerine göre belirlenmesi için İzmir kira avukatı desteği.",
      details: [
        "Rayiç kira bedeli araştırması",
        "Bilirkişi raporlarının analizi",
        "5 yıl kuralı ve kira uyarlama",
        "Mahkeme sürecinde profesyonel temsil"
      ],
      process: "Mevcut kira sözleşmesi ve bölgedeki emsal kira bedelleri analiz edilerek dava stratejisi oluşturulur."
    },
    {
      icon: <Home className="w-12 h-12 text-accent" />,
      title: "Kiracı Tahliye Davaları",
      description: "İhtiyaç, temerrüt, iki haklı ihtar veya tahliye taahhüdü nedeniyle tahliye süreçleri.",
      details: [
        "İhtiyaç nedeniyle tahliye davası",
        "Tahliye taahhütnamesi icrası",
        "Kira borcu nedeniyle tahliye",
        "Yeni malikin ihtiyacı nedeniyle tahliye"
      ],
      process: "Yasal süreler ve ihtarname şartları kontrol edilerek en hızlı tahliye yolu belirlenir."
    },
    {
      icon: <FileText className="w-12 h-12 text-accent" />,
      title: "Kira Sözleşmesi Danışmanlığı",
      description: "İleride yaşanabilecek uyuşmazlıkları önlemek adına profesyonel sözleşme hazırlama.",
      details: [
        "Özel şartların düzenlenmesi",
        "Tahliye taahhütnamesi hazırlama",
        "Depozito ve kefalet hükümleri",
        "Ticari işyeri kira sözleşmeleri"
      ],
      process: "Müvekkilin haklarını en üst düzeyde koruyan, güncel mevzuata uygun metinler hazırlanır."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent" />,
      title: "Kira Alacakları ve İcra Takibi",
      description: "Ödenmeyen kira bedellerinin ve aidat borçlarının icra yoluyla tahsil edilmesi.",
      details: [
        "Örnek No: 13 tahliye talepli takip",
        "Maaş ve banka hacizleri",
        "İtirazın kaldırılması davaları",
        "Haciz ve muhafaza işlemleri"
      ],
      process: "Alacak miktarı hesaplanarak hızlıca icra takibi başlatılır ve tahsilat süreci yönetilir."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "İzmir Boşanma Avukatı",
      description: "Anlaşmalı ve çekişmeli boşanma süreçlerinde profesyonel hukuki destek.",
      details: [
        "Boşanma protokolü hazırlama",
        "Velayet ve nafaka davaları",
        "Maddi ve manevi tazminat",
        "Mal rejimi tasfiyesi"
      ],
      process: "Müvekkilin özel hayatının gizliliği korunarak, hak kaybı yaşanmadan süreç tamamlanır."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-accent" />,
      title: "İzmir Miras Avukatı",
      description: "Veraset ilamı, miras paylaşımı ve tenkis davalarında uzman danışmanlık.",
      details: [
        "Mirasçılık belgesi alınması",
        "İzale-i şuyu (ortaklığın giderilmesi)",
        "Muris muvazaası davaları",
        "Vasiyetname ve miras sözleşmesi"
      ],
      process: "Miras kalan malvarlığı tespit edilerek, yasal payların korunması için gerekli davalar açılır."
    }
  ]

  const advantages = [
    "Kira Hukukunda Uzmanlaşmış Kadro",
    "Şeffaf ve Öngörülebilir Ücretlendirme",
    "Hızlı ve Sonuç Odaklı Süreç Yönetimi",
    "Düzenli Bilgilendirme ve Raporlama",
    "İzmir ve Ege Bölgesi Genelinde Hizmet"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hukuki Hizmetlerimiz ve Uzmanlık Alanlarımız
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              İzmir'de **kira hukuku**, **tahliye davaları**, **boşanma** ve **miras** konularında profesyonel avukatlık hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-2xl text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Hizmet Kapsamı:</h4>
                      <ul className="space-y-1">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Çalışma Yöntemimiz:</h4>
                      <p className="text-gray-600 text-sm">
                        {service.process}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İzmir'de kira ve gayrimenkul hukuku alanındaki tecrübemizle fark yaratıyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-gray-700 font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kira hukuku ve tahliye süreçleri hakkında merak edilenler
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "İzmir'de kira tespit davası ne kadar sürer?",
                answer: "Kira tespit davaları İzmir mahkemelerinin iş yüküne göre genellikle 8-14 ay arasında sonuçlanmaktadır. 5 yılı dolan kiracılar için rayiç bedel tespiti istenebilir."
              },
              {
                question: "Tahliye taahhütnamesi ile kiracı nasıl çıkarılır?",
                answer: "Geçerli bir tahliye taahhütnamesi varsa, taahhüt edilen tarihten itibaren 1 ay içinde icra takibi başlatılarak tahliye süreci yönetilir."
              },
              {
                question: "Kira uyuşmazlıklarında arabuluculuk zorunlu mu?",
                answer: "Evet, 1 Eylül 2023 itibarıyla kira uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak yasal bir zorunluluktur."
              },
              {
                question: "İzmir kira avukatı ücretleri ne kadardır?",
                answer: "Avukatlık ücretleri, davanın niteliğine ve Türkiye Barolar Birliği'nin asgari ücret tarifesine göre belirlenir. Detaylı bilgi için iletişime geçebilirsiniz."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
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
            Hukuki Desteğe mi İhtiyacınız Var?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            İzmir'de kira, boşanma veya miras hukuku konularında uzman desteği almak için hemen randevu oluşturun.
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

export default ServicesPage
