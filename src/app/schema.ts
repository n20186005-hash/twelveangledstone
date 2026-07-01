export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "twelveangledstone.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Piedra de los 12 Ángulos"
    : locale === "zh"
    ? "十二边印加石"
    : locale === "qu"
    ? "12 K'uchuyuq Rumi"
    : "Stone of the 12 Angles";

  const description = locale === "es"
    ? "La Piedra de los 12 Ángulos en Cusco, Perú. Obra maestra de la arquitectura inca con doce lados precisos."
    : locale === "zh"
    ? "秘鲁库斯科的十二边印加石（Piedra de los 12 ángulos），印加帝国石工技术的巅峰之作。"
    : locale === "qu"
    ? "12 K'uchuyuq Rumi, Cusco, Piruw. Inca rumi ruway."
    : "The Stone of the 12 Angles in Cusco, Peru. Masterpiece of Inca stonework with twelve precise sides.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "HistoricalLandmark"],
        "name": name,
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/twelveangledstone (1).jpg`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C. Hatunrumiyoc 480",
          "addressLocality": "Cusco",
          "addressCountry": "PE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -13.5160923,
          "longitude": -71.9674137
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "Free",
        "isAccessibleForFree": true,
        "sameAs": [
          "https://maps.app.goo.gl/79MfxrTMHU53c33J6"
        ]
      },
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-PE" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-PE" : "en-US",
        "isAccessibleForFree": true
      }
    ]
  };
}
