import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Cairo,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title:
    "RESTAURANT 7 | Authentic Moroccan Restaurant in Ait Toughtach, Morocco",
  description:
    "Discover the Taste of Morocco at RESTAURANT 7 in Ait Toughtach (Q32J+HQ4). Authentic Moroccan Flavors, Traditional Hospitality, Camel Tajine, Chicken Pastilla, Atlas Trout & Couscous. Rated 4.2/5 on Google Maps.",
  keywords: [
    "RESTAURANT 7",
    "Moroccan Restaurant",
    "Ait Toughtach",
    "Q32J+HQ4",
    "Camel Tajine Morocco",
    "Chicken Pastilla",
    "Trout of the Atlas",
    "Couscous Marocain",
    "Restaurant Marocain Ait Toughtach",
  ],
  openGraph: {
    title: "RESTAURANT 7 — Discover the Taste of Morocco",
    description:
      "Authentic Moroccan Flavors, Traditional Hospitality, Unforgettable Experiences in Ait Toughtach, Morocco (Q32J+HQ4). Phone: +212 6 36 03 68 68.",
    type: "website",
    locale: "fr_MA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "RESTAURANT 7",
  servesCuisine: ["Moroccan", "Traditional Moroccan", "Mediterranean"],
  priceRange: "MAD 50–100",
  telephone: "+212 6 36 03 68 68",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Q32J+HQ4",
    addressLocality: "Ait Toughtach",
    addressCountry: "MA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    bestRating: "5",
    ratingCount: "58",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable} ${cairo.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF6F0] text-[#14231B] antialiased selection:bg-[#C89D54]/30 selection:text-[#0F291E]">
        {children}
      </body>
    </html>
  );
}
