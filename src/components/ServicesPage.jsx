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
      icon: <Scale className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Kira Tespit Davaları" title="İzmir Kira Avukatı" />,
      title: "Kira Tespit Davaları",
      description: "Kira bedelinin güncel piyasa koşullarına göre belirlenmesi için açılan davalar.",
      details: [
        "Piyasa araştırması ve değerlendirme",
        "Uzman bilirkişi raporları",
        "Mahkeme sürecinde temsil",
        "Kira artış oranlarının belirlenmesi"
      ],
      process: "Öncelikle mevcut kira sözleşmesi ve piyasa koşulları analiz edilir. Gerekli belgeler hazırlanarak mahkemeye başvuru yapılır."
    },
    {
      icon: <Home className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Tahliye Davaları" title="İzmir Kira Avukatı" />,
      title: "Tahliye Davaları",
      description: "İhtiyaç, temerrüt ve taahhüt sebebiyle tahliye süreçlerinde hukuki destek.",
      details: [
        "İhtiyaç sebebiyle tahliye",
        "Kira borcundan dolayı tahliye",
        "Taahhüt sebebiyle tahliye",
        "Yasadışı tahliye savunması"
      ],
      process: "Tahliye sebebi belirlenerek gerekli ihtar ve bildirimler yapılır. Mahkeme süreci boyunca müvekkil temsil edilir."
    },
    {
      icon: <FileText className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Kira Sözleşmesi Hazırlama" title="İzmir Kira Avukatı" />,
      title: "Kira Sözleşmesi Hazırlama",
      description: "Hukuka uygun konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi.",
      details: [
        "Konut kira sözleşmeleri",
        "İşyeri kira sözleşmeleri",
        "Mevcut sözleşme inceleme",
        "Sözleşme tadil ve ekleri"
      ],
      process: "Tarafların ihtiyaçları belirlenerek, hukuka uygun ve kapsamlı sözleşme metni hazırlanır."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Kira Alacaklarının Tahsili" title="İzmir Kira Avukatı" />,
      title: "Kira Alacaklarının Tahsili",
      description: "Ödenmeyen kira bedellerinin icra yoluyla tahsil edilmesi süreçleri.",
      details: [
        "İcra takibi başlatma",
        "Haciz işlemleri",
        "Ödeme planı müzakereleri",
        "Alacak güvence altına alma"
      ],
      process: "Borç miktarı belirlenerek icra müdürlüğüne başvuru yapılır. Takip süreci boyunca müvekkil bilgilendirilir."
    },
    {
      icon: <Users className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Kiracı ve Ev Sahibi Hakları" title="İzmir Kira Avukatı" />,
      title: "Kiracı ve Ev Sahibi Hakları",
      description: "Tarafların yasal hak ve yükümlülükleri konusunda kapsamlı danışmanlık.",
      details: [
        "Kiracı hakları danışmanlığı",
        "Ev sahibi yükümlülükleri",
        "Depozito iadesi süreçleri",
        "Onarım ve bakım sorumlulukları"
      ],
      process: "Mevcut durum analiz edilerek tarafların hak ve yükümlülükleri detaylı olarak açıklanır."
    },
    {
      icon: <Building className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Kentsel Dönüşüm" title="İzmir Kira Avukatı" />,
      title: "Kentsel Dönüşüm ve Kira Hukuku",
      description: "Kentsel dönüşüm süreçlerinin kira ilişkilerine etkisi konusunda danışmanlık.",
      details: [
        "Dönüşüm sürecinde kiracı hakları",
        "Geçici konut sağlanması",
        "Tazminat hesaplamaları",
        "Yeni sözleşme düzenlemeleri"
      ],
      process: "Kentsel dönüşüm projesi incelenerek kiracı haklarının korunması için gerekli adımlar atılır."
    },
    {
      icon: <HandHeart className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Arabuluculuk" title="İzmir Kira Avukatı" />,
      title: "Arabuluculuk Hizmetleri",
      description: "Kira uyuşmazlıklarında dava öncesi arabuluculuk süreçleri.",
      details: [
        "Uyuşmazlık analizi",
        "Taraflar arası müzakere",
        "Anlaşma metni hazırlama",
        "Dava öncesi çözüm arayışı"
      ],
      process: "Tarafların bir araya getirilmesi sağlanarak, karşılıklı müzakere ile çözüm aranır."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Boşanma Hukuku" title="İzmir Kira Avukatı" />,
      title: "Boşanma Hukuku",
      description: "Boşanma, çocukların velayeti, tazminat, mal paylaşımı ve nafaka konularında hukuki destek.",
      details: [
        "Anlaşmalı boşanma protokolü",
        "Çocuk velayeti davası",
        "Nafaka belirleme",
        "Mal paylaşımı danışmanlığı",
        "Boşanma sonrası hukuki işlemler"
      ],
      process: "Boşanma süreci analiz edilerek, tarafların haklarının korunması için gerekli tüm işlemler yapılır."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-accent" aria-label="İzmir Kira Avukatı - Miras Hukuku" title="İzmir Kira Avukatı" />,
      title: "Miras Hukuku",
      description: "Miras hukukunu ilgilendiren davalar ve danışmanlık hizmetleri.",
      details: [
        "Miras payı hesaplaması",
        "Tenkis davası",
        "Miras sözleşmesi hazırlama",
        "Saklı pay koruması",
        "Vasiyetname düzenlemesi"
      ],
      process: "Miras hukuku konularında detaylı analiz yapılarak, mirasçıların haklarının korunması sağlanır."
    }
  ]

  const advantages = [
    "Şeffaf ücretlendirme sistemi",
    "Deneyimli avukat kadrosu",
    "Hızlı süreç yönetimi",
    "7/24 iletişim imkanı",
    "Başarı odaklı yaklaşım"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Kira hukuku alanında kapsamlı hukuki hizmetler sunarak, 
              müvekkillerimizin haklarını en iyi şekilde koruyoruz.
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
                      <h4 className="font-semibold text-primary mb-2">Süreç:</h4>
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
              Avantajlarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hizmet kalitemizi artıran ve müvekkillerimizi memnun eden özelliklerimiz
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müvekkillerimizle nasıl çalıştığımız ve süreçlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "İlk Görüşme",
                description: "Ücretsiz ön değerlendirme ve durum analizi"
              },
              {
                step: "2",
                title: "Strateji Belirleme",
                description: "En uygun hukuki yol haritasının çizilmesi"
              },
              {
                step: "3",
                title: "Süreç Yönetimi",
                description: "Tüm hukuki işlemlerin takibi ve yürütülmesi"
              },
              {
                step: "4",
                title: "Sonuç",
                description: "Başarılı sonuç ve müvekkil memnuniyeti"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hizmetlerimiz hakkında merak edilen konular
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Kira tespit davası ne kadar sürer?",
                answer: "Kira tespit davaları genellikle 6-12 ay arasında sonuçlanır. Süre, mahkemenin iş yoğunluğu ve davanın karmaşıklığına bağlı olarak değişebilir."
              },
              {
                question: "Tahliye davası açmak için hangi belgeler gerekir?",
                answer: "Kira sözleşmesi, tapu senedi, kimlik belgesi ve tahliye sebebini gösteren belgeler (ihtar, fesih bildirimi vb.) gereklidir."
              },
              {
                question: "Avukat ücretleri nasıl belirlenir?",
                answer: "Ücretlerimiz davanın türü, karmaşıklığı ve süresine göre belirlenir. İlk görüşmede şeffaf bir şekilde ücret bilgisi verilir."
              },
              {
                question: "Arabuluculuk hizmeti nasıl işler?",
                answer: "Taraflar arasında anlaşmazlık çözümü için dava öncesi müzakere süreci yürütülür. Bu süreç hem zaman hem de maliyet tasarrufu sağlar."
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
    </div>
  )
}

export default ServicesPage

