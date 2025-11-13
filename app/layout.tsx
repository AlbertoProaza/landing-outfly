import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Outfly Marketing - 3 a 5 Reuniones Cualificadas sin Anuncios",
  description: "Sistema de prospección en frío automatizado que genera de 3 a 5 reuniones cualificadas semanales para tu negocio. Sin gastar en publicidad. Resultados garantizados.",
  keywords: [
    "prospección en frío",
    "cold calling",
    "reuniones cualificadas",
    "agencia marketing b2b",
    "generación de leads",
    "ventas sin anuncios",
    "SDR externos",
    "agendamiento de reuniones",
    "outbound marketing",
    "prospección comercial"
  ],
  authors: [{ name: "Outfly Marketing" }],
  creator: "Outfly Marketing",
  publisher: "Outfly Marketing",
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
    type: "website",
    locale: "es_ES",
    url: "https://outfly-marketing.com",
    siteName: "Outfly Marketing",
    title: "Outfly Marketing - 3 a 5 Reuniones Cualificadas sin Anuncios",
    description: "Sistema de prospección en frío automatizado. Conseguimos reuniones cualificadas para tu negocio sin gastar en publicidad.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Outfly Marketing - Reuniones Cualificadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outfly Marketing - 3 a 5 Reuniones Cualificadas sin Anuncios",
    description: "Sistema de prospección en frío automatizado que genera reuniones cualificadas para tu negocio.",
    images: ["/opengraph.png"],
    creator: "@outflymarketing",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google", // Lo obtienes de Google Search Console
  },
  alternates: {
    canonical: "https://outfly-marketing.com",
  },
  category: "Marketing B2B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Outfly Marketing',
    description: 'Agencia de prospección en frío que genera reuniones cualificadas sin gastar en anuncios',
    url: 'https://outfly-marketing.com',
    logo: 'https://outfly-marketing.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-XXX-XXX-XXX', // Añade tu teléfono real
      contactType: 'Sales',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/outfly-marketing',
      'https://twitter.com/outflymarketing',
      // Añade tus redes sociales reales
    ],
    service: {
      '@type': 'Service',
      name: 'Prospección en Frío Automatizada',
      description: 'Sistema que genera de 3 a 5 reuniones cualificadas semanales sin gastar en publicidad',
      provider: {
        '@type': 'Organization',
        name: 'Outfly Marketing',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Spain',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Marketing B2B',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Plan Growth',
              description: 'Sistema de prospección en frío automatizado',
            },
          },
        ],
      },
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
