import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "twelveangledstone.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: locale === "es" ? "Piedra de los 12 ángulos — Cusco, Perú"
        : locale === "zh" ? "十二边印加石 — 秘鲁库斯科"
        : locale === "qu" ? "Piedra de los 12 ángulos — Cusco, Piruw"
        : "Stone of the 12 Angles — Cusco, Peru",
      template: locale === "es" ? "%s | Piedra de los 12 ángulos"
        : locale === "zh" ? "%s | 十二边印加石"
        : locale === "qu" ? "%s | Piedra de los 12 ángulos"
        : "%s | Stone of the 12 Angles",
    },
    description:
      locale === 'es' ? "Guía de viaje a la Piedra de los 12 ángulos en Cusco, Perú. La piedra inca con doce lados, obra maestra de la arquitectura inca." :
      locale === 'zh' ? "十二边印加石旅行指南——探索秘鲁库斯科的印加古迹，欣赏印加石工技术的巅峰之作。" :
      locale === 'qu' ? "Piedra de los 12 ángulos rikuy, Cusco, Piruw. Inca rumi." :
      "A travel guide to the Stone of the 12 Angles in Cusco, Peru. The famous twelve-sided Inca stone, masterpiece of Inca stonework.",
    keywords: [
      "Piedra de los 12 ángulos",
      "Stone of the 12 Angles",
      "Cusco tourism",
      "Inca stonework",
      "Hatunrumiyoc street",
      "Twelve-sided stone",
      "Inca architecture",
      "Cusco attractions",
      "Peru tourism",
      "Qorikancha",
    ],
    authors: [{ name: "Piedra de los 12 ángulos Travel Guide" }],
    creator: "Piedra de los 12 ángulos Travel Guide",
    publisher: "Piedra de los 12 ángulos Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_PE" : locale === "zh" ? "zh_CN" : locale === "qu" ? "qu_PE" : "en_US",
      alternateLocale: (locale === "es" ? ["en_US", "zh_CN", "qu_PE"] : locale === "en" ? ["es_PE", "zh_CN", "qu_PE"] : locale === "zh" ? ["es_PE", "en_US", "qu_PE"] : ["es_PE", "en_US", "zh_CN"]),
      url: `${baseUrl}/${locale}`,
      title: locale === "es" ? "Piedra de los 12 ángulos — Cusco, Perú"
        : locale === "zh" ? "十二边印加石 — 秘鲁库斯科"
        : locale === "qu" ? "Piedra de los 12 ángulos — Cusco, Piruw"
        : "Stone of the 12 Angles — Cusco, Peru",
      description: locale === 'es' ? "Guía de viaje a la Piedra de los 12 ángulos en Cusco, Perú. La piedra inca con doce lados." :
        (locale === 'zh' ? "十二边印加石旅行指南——探索秘鲁库斯科的印加古迹。" :
        (locale === 'qu' ? "Piedra de los 12 ángulos rikuy, Cusco, Piruw." :
        "A travel guide to the Stone of the 12 Angles in Cusco, Peru.")),
      siteName: locale === "es" ? "Piedra de los 12 ángulos Guía de Viaje"
        : locale === "zh" ? "十二边印加石旅行指南"
        : locale === "qu" ? "Piedra de los 12 ángulos rikuy"
        : "Stone of the 12 Angles Travel Guide",
      images: [
        {
          url: "/gallery/piedra-de-los-12-angulos (1).jpg",
          width: 1200,
          height: 630,
          alt: locale === "es" ? "Piedra de los 12 ángulos - Cusco, Perú"
            : locale === "zh" ? "十二边印加石 - 秘鲁库斯科"
            : locale === "qu" ? "Piedra de los 12 ángulos - Cusco, Piruw"
            : "Stone of the 12 Angles - Cusco, Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "es" ? "Piedra de los 12 ángulos — Cusco, Perú"
        : locale === "zh" ? "十二边印加石 — 秘鲁库斯科"
        : locale === "qu" ? "Piedra de los 12 ángulos — Cusco, Piruw"
        : "Stone of the 12 Angles — Cusco, Peru",
      description:
        locale === 'es' ? "Guía de viaje a la Piedra de los 12 ángulos en Cusco, Perú." :
        locale === 'zh' ? "十二边印加石旅行指南——探索秘鲁库斯科的印加古迹。" :
        locale === 'qu' ? "Piedra de los 12 ángulos rikuy, Cusco, Piruw." :
        "A travel guide to the Stone of the 12 Angles in Cusco, Peru.",
      images: ["/gallery/piedra-de-los-12-angulos (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "es": "/es",
        "en": "/en",
        "zh": "/zh",
        "qu": "/qu",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }, { locale: "qu" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <>
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
