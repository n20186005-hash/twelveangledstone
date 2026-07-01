export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "twelveangledstone.com"}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-PE" : locale === "qu" ? "qu-PE" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "HistoricalSite"],
        "name": locale === "en" ? "Stone of the 12 Angles" : locale === "es" ? "Piedra de los 12 ángulos" : locale === "qu" ? "Chunka iskay ñawinchayuq rumi" : "十二边印加石",
        "description": locale === "en"
          ? "The Stone of the 12 Angles is a famous Inca stonework relic located on Hatunrumiyoc Street in Cusco, Peru. It is a masterpiece of Inca masonry with a twelve-sided stone block."
          : locale === "es"
          ? "La Piedra de los 12 ángulos es un famoso relicario de albañilería inca ubicado en la calle Hatunrumiyoc en Cusco, Perú. Es una obra maestra de la albañilería inca con un bloque de piedra de doce lados."
          : locale === "qu"
          ? "Chunka iskay ñawinchayuq rumi nisqa Cusco llaqtapi Hatunrumiyoc kallapi kaq famoso inca rumi ruway relicario. Chunka iskay ladoyuq rumi bloque nisqawan inca albañilería obra maestra."
          : "十二边印加石是位于秘鲁库斯科市哈图姆鲁米约克街的著名印加石工遗迹。它是一块十二边形的巨石，是印加石工技术的杰作。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["Historical Site", "Inca Heritage", "Archaeological Site", "Stonework", "Cultural Heritage"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -13.5160923,
          "longitude": -71.9674137
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "attractionType",
            "value": "Inca Stonework, Historical Site",
            "description": "Famous twelve-sided stone block on Inca stone wall in Cusco"
          },
          {
            "@type": "PropertyValue",
            "name": "rating",
            "value": "4.6/5",
            "description": "Rated 4.6 out of 5 with 13,911 Google reviews"
          },
          {
            "@type": "PropertyValue",
            "name": "historicalPeriod",
            "value": "Inca Empire (1438-1532)",
            "description": "Built during the Inca Empire period"
          }
        ],
        "isAccessibleForFree": true,
        "maximumAttendeeCapacity": 100,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C. Hatunrumiyoc 480",
          "addressLocality": "Cusco",
          "addressRegion": "Cusco",
          "postalCode": "08002",
          "addressCountry": "PE",
        },
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "Stone of the 12 Angles: Masterpiece of Inca Masonry" : locale === "es" ? "Piedra de los 12 ángulos: Obra Maestra de la Albañilería Inca" : locale === "qu" ? "Chunka iskay ñawinchayuq rumi: Inca rumi ruway obra maestra" : "十二边印加石：印加石工的杰作",
            "about": "Guide to the Stone of the 12 Angles, a famous Inca stonework relic in Cusco, Peru"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Cusco Attractions" : locale === "es" ? "Atracciones de Cusco" : locale === "qu" ? "Cusco atractivokuna" : "库斯科景点",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}
