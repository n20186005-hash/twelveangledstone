import type { MetadataRoute } from "next";
import { guideLocales, guidePath, guides } from "@/i18n/guides";
import { cuscoPlaces } from "@/i18n/cusco-places";
import { siteUrl } from "./site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLocales = [...guideLocales, "qu"];
  const homeLanguages = Object.fromEntries(
    [...homeLocales.map((locale) => [locale, `${siteUrl}/${locale}`]), ["x-default", `${siteUrl}/en`]],
  );

  return [
    ...homeLocales.map((locale) => ({
      url: homeLanguages[locale],
      alternates: { languages: homeLanguages },
    })),
    ...[...guides, ...cuscoPlaces].flatMap(({ slug }) => {
      const languages = Object.fromEntries(
        guideLocales.map((locale) => [locale, siteUrl + guidePath(locale, slug)]),
      );
      return guideLocales.map((locale) => ({
        url: languages[locale],
        alternates: { languages: { ...languages, "x-default": languages.en } },
      }));
    }),
  ];
}
