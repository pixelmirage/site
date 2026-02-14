import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description: "İzmir Bayraklı'da kira hukuku üzerine uzman hukuk büromuza ulaşın. Randevu ve danışmanlık talepleriniz için iletişim bilgilerimiz.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">İletişim</h1>
                        <p className="text-xl text-primary-foreground/80">
                            Hukuki süreçlerinizde yanınızdayız. Sorularınız, randevu talepleriniz ve danışmanlık ihtiyaçlarınız için bize dilediğiniz zaman ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Details */}
                        <div className="lg:w-1/3 space-y-12">
                            <div>
                                <h2 className="text-3xl font-playfair font-bold text-primary mb-8">Bize Ulaşın</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Ofis Adresi</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 <br />
                                                Bayraklı / İZMİR
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Telefon</h4>
                                            <p className="text-muted-foreground text-sm">0544 585 46 45</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">E-posta</h4>
                                            <p className="text-muted-foreground text-sm">info@mertkagancetin.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Çalışma Saatleri</h4>
                                            <p className="text-muted-foreground text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-muted-foreground text-sm leading-relaxed">
                                "Ofisimiz İzmir Bayraklı Adliyesi'ne yürüme mesafesinde, merkezi bir konumdadır. Randevu alarak gelmeniz, size daha iyi hizmet vermemizi sağlar."
                            </div>

                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-14 text-lg font-bold" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp ile Yazın
                                </a>
                            </Button>
                        </div>

                        {/* Inquiry Form */}
                        <div className="lg:w-2/3">
                            <Card className="border-none shadow-2xl bg-white">
                                <CardContent className="p-8 md:p-12">
                                    <h3 className="text-3xl font-playfair font-bold text-primary mb-4">Hukuki Danışmanlık Formu</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Aşağıdaki formu doldurarak durumunuz hakkında ön bilgi iletebilirsiniz. Mesajınıza en kısa sürede dönüş sağlanacaktır.
                                    </p>

                                    <form
                                        action="https://formspree.io/f/mlglyrzp"
                                        method="POST"
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Ad Soyad</label>
                                                <Input name="ad-soyad" placeholder="Adınız ve Soyadınız" required className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Telefon</label>
                                                <Input name="telefon" placeholder="05XX XXX XX XX" required className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">E-posta</label>
                                            <Input name="email" type="email" placeholder="ornek@mail.com" required className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Konu / Hizmet</label>
                                            <select name="konu" className="flex h-12 w-full rounded-md border border-transparent bg-slate-50 px-3 py-2 text-base font-sans">
                                                <option>Tahliye Davası</option>
                                                <option>Kira Tespit Davası</option>
                                                <option>Gayrimenkul Hukuku</option>
                                                <option>Diğer</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Mesajınız</label>
                                            <Textarea name="mesaj" placeholder="Hukuki uyuşmazlığınızı kısaca özetleyin..." required className="min-h-[150px] bg-slate-50 border-transparent focus:bg-white focus:border-primary/20" />
                                        </div>

                                        <input type="hidden" name="_replyto" value="info@mertkagancetin.com" />
                                        <input type="hidden" name="_subject" value="Yeni Web Sitesi İletişim Mesajı" />

                                        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg font-bold gap-2">
                                            <Send className="w-5 h-5" />
                                            Gönder
                                        </Button>
                                        <p className="text-[10px] text-center text-muted-foreground mt-4">
                                            * Gönder tuşuna basarak kişisel verilerinizin Aydınlatma Metni kapsamında işlenmesini kabul etmiş olursunuz.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] w-full bg-slate-200 border-t border-slate-300">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5558616591056!2d27.1845286!3d38.4517266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd87a2b16be11%3A0x5f6419cacaf7ed94!2sDedemhan%20Plaza!5e0!3m2!1sen!2ssg!4v1766958056080!5m2!1sen!2ssg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mert Kağan Çetin Hukuk Bürosu Konumu"
                ></iframe>
            </section>
        </div>
    );
}
