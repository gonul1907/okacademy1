import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OKAcademy – Persoonlijke Voetbaltraining | Vleuten",
    template: "%s | OKAcademy",
  },
  description:
    "OKAcademy biedt persoonlijke voetbaltraining voor jonge spelers in Vleuten. Kleine groepen, KNVB-gecertificeerde trainers en zichtbare groei in techniek, tactiek en zelfvertrouwen.",
  keywords: [
    "voetbaltraining",
    "OKAcademy",
    "persoonlijke training",
    "Vleuten",
    "KNVB",
    "jeugdvoetbal",
  ],
  openGraph: {
    siteName: "OKAcademy",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "OKAcademy",
    description:
      "Persoonlijke voetbaltraining voor jonge spelers in Vleuten. Kleine groepen, KNVB-gecertificeerde trainers en zichtbare groei.",
    url: "https://www.okacademy.nl",
    telephone: "+31640727145",
    email: "OKAcademy2026@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Europaweg 52",
      postalCode: "3451HG",
      addressLocality: "Vleuten",
      addressCountry: "NL",
    },
    priceRange: "€€",
    openingHours: "Mo-Su 08:00-21:00",
    sameAs: [
      "https://instagram.com/olekoningacademy",
      "https://tiktok.com/@okacademy",
    ],
  };

  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
