import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Telefon",
      content: "544 585 46 45",
      description: "7/24 acil durumlarda arayabilirsiniz"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "E-posta",
      content: "mertkagancetin@gmail.com",
      description: "24 saat içinde yanıtlıyoruz"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Adres",
      content: "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir",
      description: "Konak merkez konumda"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      description: "Cumartesi: 09:00 - 13:00"
    }
  ]

  const services = [
    "Kira Tespit Davaları",
    "Tahliye Davaları",
    "Kira Sözleşmesi Hazırlama",
    "Kira Alacaklarının Tahsili",
    "Arabuluculuk Hizmetleri",
    "Diğer"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Kira hukuku konularında yaşadığınız sorunları çözmek için 
              bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {info.title}
                  </h3>
                  <p className="font-medium text-gray-800 mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Bize Ulaşın
                </CardTitle>
                <p className="text-gray-600">
                  Formu doldurarak bizimle iletişime geçebilirsiniz. 
                  En kısa sürede size dönüş yapacağız.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Mesajınız Gönderildi!
                    </h3>
                    <p className="text-gray-600">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ad Soyad *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="0532 123 45 67"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="ornek@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konu
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Konu seçiniz</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mesajınız *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Lütfen durumunuzu detaylı olarak açıklayın..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map and Office Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Ofis Konumumuz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Google Haritalar</p>
                      <p className="text-sm">Kültür Mah. Şevket Özçelik Sk.</p>
                      <p className="text-sm">Konak/İzmir</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Ulaşım</h4>
                      <p className="text-gray-600 text-sm">
                        Konak metro istasyonuna 5 dakika yürüme mesafesinde. 
                        Alsancak ve Karşıyaka'dan kolay ulaşım imkanı.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Otopark</h4>
                      <p className="text-gray-600 text-sm">
                        Binada kapalı otopark bulunmaktadır. 
                        Çevrede ücretli sokak otoparkları mevcuttur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Acil Durum İletişim
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">7/24 Acil Hat</p>
                        <p className="text-sm text-gray-600">0532 123 45 67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Acil E-posta</p>
                        <p className="text-sm text-gray-600">acil@izmirkiravukati.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Not:</strong> Acil durumlarda (tahliye, haciz vb.) 
                      7/24 ulaşabilirsiniz. Normal danışmanlık için 
                      çalışma saatleri içinde arayınız.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            <p className="text-lg text-gray-600">
              İletişim ve randevu konularında merak edilenler
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Randevu nasıl alınır?",
                answer: "Telefon, e-posta veya iletişim formu ile randevu alabilirsiniz. Acil durumlar için 7/24 ulaşabilirsiniz."
              },
              {
                question: "Online görüşme yapılıyor mu?",
                answer: "Evet, gerekli durumlarda video konferans ile online görüşme yapabiliyoruz. Özellikle ön değerlendirme için uygundur."
              },
              {
                question: "Hangi saatlerde ulaşabilirim?",
                answer: "Normal çalışma saatleri Pazartesi-Cuma 09:00-18:00, Cumartesi 09:00-13:00. Acil durumlar için 7/24 ulaşabilirsiniz."
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

export default ContactPage

