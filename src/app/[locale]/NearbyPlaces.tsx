import Link from "next/link";
import { cuscoPlaces, languageIndex } from "@/i18n/cusco-places";
import { areaLabels, visitLabels } from "@/i18n/cusco-visit";
import { guidePath, type GuideLocale } from "@/i18n/guides";

export default function NearbyPlaces({ locale }: { locale: GuideLocale }) {
  const i = languageIndex[locale];
  return (
    <section id="nearby-places" className="section">
      <h2 className="section-title">{visitLabels[locale].near}</h2>
      <div className="section-divider" />
      {(["centre", "hills", "day"] as const).map((area) => (
        <div className="cusco-nearby-group" key={area}>
          <h3 className="info-card-title">{areaLabels[area][i]}</h3>
          <ul className="cusco-nearby-links">
            {cuscoPlaces.filter((place) => place.area === area).map((place) => (
              <li key={place.slug}>
                <Link href={guidePath(locale, place.slug)}>{place.name[i]}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
