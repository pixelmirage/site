import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/layout/SchemaMarkup";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://mertkagancetin.com'),
  title: {
    template: "%s | Av. Mert Kağan Çetin",
    default: "İzmir Kira Avukatı | Av. Mert Kağan Çetin - Gayrimenkul Hukuku",
  },
  description: "İzmir Bayraklı ve Karşıyaka bölgesinde kira hukuku, tahliye davaları ve gayrimenkul danışmanlığı alanında uzman Avukat Mert Kağan Çetin. Ücretsiz ön görüşme için hemen arayın.",
  keywords: ["İzmir kira avukatı", "tahliye davası", "kira hukuku", "gayrimenkul avukatı", "İzmir avukat", "kira tespit davası", "Bayraklı avukat", "Karşıyaka avukat"],
  authors: [{ name: "Av. Mert Kağan Çetin" }],
  creator: "Mert Kağan Çetin Hukuk Bürosu",
  publisher: "Mert Kağan Çetin Hukuk Bürosu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://mertkagancetin.com',
    siteName: 'Av. Mert Kağan Çetin - İzmir Kira Avukatı',
    title: 'İzmir Kira Avukatı | Av. Mert Kağan Çetin',
    description: 'İzmir\'de kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıklarında uzman avukatlık hizmeti. Ücretsiz ön görüşme için arayın.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Av. Mert Kağan Çetin - İzmir Kira Avukatı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İzmir Kira Avukatı | Av. Mert Kağan Çetin',
    description: 'İzmir\'de kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıklarında uzman avukatlık hizmeti.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mertkagancetin.com',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        playfair.variable
      )}>
        <SchemaMarkup />
        <Header />
        <main className="flex-1 w-full pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
