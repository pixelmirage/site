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
      content: "0544 585 46 45",
      description: "İzmir kira avukatı danışmanlık hattı"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "E-posta",
      content: "mertkagancetin@gmail.com",
      description: "Hukuki sorularınız için yazabilirsiniz"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Adres",
      content: "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir",
      description: "Bayraklı Adliyesi yakınında"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      description: "Randevu ile görüşme sağlanmaktadır"
    }
  ]

  const services = [
    "Kira Tespit Davası",
    "Tahliye Davası",
    "Kira Sözleşmesi Hazırlama",
    "Kira Alacaklarının Tahsili",
    "Boşanma ve Miras Hukuku",
    "Diğer"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İzmir Kira Avukatı İletişim
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Kira uyuşmazlıkları, tahliye süreçleri ve diğer hukuki konular için İzmir Bayraklı'daki ofisimizle iletişime geçebilirsiniz.
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
                  Hukuki Danışmanlık Formu
                </CardTitle>
                <p className="text-gray-600">
                  Aşağıdaki formu doldurarak durumunuz hakkında ön bilgi verebilirsiniz. 
                  **İzmir kira avukatı** ekibimiz en kısa sürede size dönüş yapacaktır.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Mesajınız Başarıyla İletildi!
                    </h3>
                    <p className="text-gray-600">
                      En kısa sürede sizinle iletişime geçeceğiz.
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
                          placeholder="05xx xxx xx xx"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        İlgili Hizmet
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Hizmet seçiniz</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mesajınız / Sorunuz *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Hukuki sorununuzu kısaca özetleyiniz..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Danışmanlık Talebi Gönder
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map Placeholder / Info */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Ofisimiz Nerede?</h3>
              <p className="text-gray-600 mb-6">
                Hukuk büromuz İzmir'in Bayraklı ilçesinde, adliye sarayına ve ulaşım noktalarına oldukça yakın bir konumda yer almaktadır. 
                **Dedemhan Plaza** içerisinde müvekkillerimizi ağırlamaktayız.
              </p>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5558616591056!2d27.1845286!3d38.4517266!2m3!1f0!2m2!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd87a2b16be11%3A0x5f6419cacaf7ed94!2sDedemhan%20Plaza!5e0!3m2!1str!2str!4v1735483146000!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dedemhan Plaza Konumu"
                ></iframe>
              </div>
              <div className="mt-8 space-y-4">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <span>Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+905445854645" className="hover:text-primary transition-colors">0544 585 46 45</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
