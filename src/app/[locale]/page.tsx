import { notFound } from "next/navigation";
import Home from "./Home";
import NearbyPlaces from "./NearbyPlaces";
import { isGuideLocale } from "@/i18n/guides";
import { generateSchema } from "../schema";

export function generateStaticParams() {
  return ["es", "en", "zh", "qu"].map((locale) => ({ locale }));
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isGuideLocale(locale) && locale !== "qu") notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(locale)) }}
      />
      <Home locale={locale}>
        {isGuideLocale(locale) && <NearbyPlaces locale={locale} />}
      </Home>
    </>
  );
}
