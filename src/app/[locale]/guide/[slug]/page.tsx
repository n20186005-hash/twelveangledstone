import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guideLocales, guidePath, guides, isGuideLocale } from "@/i18n/guides";
import { cuscoPlaces, languageIndex, managers } from "@/i18n/cusco-places";
import { accessLabels, areaLabels, directionsMap, placeBySlug, placeMap, roadRoute, transportByArea, tripMap, visitLabels } from "@/i18n/cusco-visit";
import { admission, circuitPrice, details, kindLabels, sectionLabels, stayAreas, tariff } from "@/i18n/cusco-details";
import { guideClusters, regionalDetails } from "@/i18n/cusco-regional-details";
import { questions } from "@/i18n/cusco-questions";
import photoData from "@/i18n/cusco-photos.json";
import { siteUrl } from "@/app/site-url";

type Props = { params: Promise<{ locale: string; slug: string }> };
type GuidePhoto = { source: string; width: number; height: number };
const photos: Readonly<Partial<Record<string, GuidePhoto>>> = photoData;
const guideSlugs = [...guides, ...cuscoPlaces].map(({ slug }) => slug);
const touristTicket = "https://cosituc.gob.pe/inicio-web2/";

export const dynamicParams = false;

export function generateStaticParams() {
  return guideLocales.flatMap((locale) => guideSlugs.map((slug) => ({ locale, slug })));
}

async function getGuide(params: Props["params"]) {
  const { locale, slug } = await params;
  const place = placeBySlug.get(slug);
  if (!place || !isGuideLocale(locale)) notFound();

  const i = languageIndex[locale];
  const oldGuide = guides.find((entry) => entry.slug === slug);
  const copy = oldGuide?.content[locale];
  const labels = guideLabels[locale];
  const title = copy?.title ?? place.name[i];
  const description = copy?.description ?? (
    place.history[i].split(". ")[0].split("。")[0].replace(/\.$/, "") + (locale === "zh" ? "。" : ".")
  );
  return { place, locale, slug, i, title, description, copy, labels };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description, locale, slug } = await getGuide(params);
  const images = photos[slug] ? [`/cusco/${slug}.webp`] : [];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: guidePath(locale, slug),
      languages: {
        ...Object.fromEntries(guideLocales.map((language) => [language, guidePath(language, slug)])),
        "x-default": guidePath("en", slug),
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: guidePath(locale, slug),
      images,
    },
    twitter: { card: images.length ? "summary_large_image" : "summary", title, description, images },
  };
}

export default async function GuidePage({ params }: Props) {
  const { place, locale, slug, i, title, description, copy, labels } = await getGuide(params);
  const ui = visitLabels[locale];
  const sections = sectionLabels[locale];
  const [kind, tagline, visitTip, circuit] = details[slug] ?? regionalDetails[slug];
  const published = admission[slug];
  const manager = managers[place.manager];
  const access = accessLabels[place.access];
  const hours = published?.hours?.[i] ?? access.hours[i];
  const price = published?.price?.[i] ?? (circuit ? circuitPrice(circuit)[i] : access.entry[i]);
  const valleyPlaces = ["salineras-maras", "pueblo-maras", "huchuy-qosqo", "pumamarca", "naupa-iglesia", "urubamba", "calca", "pisac-market", "awanacancha"];
  const lodgingArea = slug === "ollantaytambo" ? slug
    : circuit === "III" || valleyPlaces.includes(slug) ? "valley"
    : ["paucartambo", "tarawasi"].includes(slug) ? "road"
    : place.area === "day" ? "south" : place.area;
  const lodging = stayAreas[lodgingArea][i];
  const photo = photos[slug];
  const map = guides.find((entry) => entry.slug === slug)?.map ?? placeMap(place);
  const directMap = ["hatun-rumiyoc", "huchuy-qosqo", "pumamarca", "naupa-iglesia", "rumiwasi", "inkilltambo", "templo-luna", "templo-san-sebastian", "templo-san-jeronimo"].includes(slug);
  const canonical = siteUrl + guidePath(locale, slug);
  const official = place.source ?? manager.source;
  const managementReference = place.manager === "city" ? official : manager.source;
  const companions = guideClusters.filter((group) => group.includes(slug)).flat()
    .map((nearbySlug) => placeBySlug.get(nearbySlug))
    .filter((entry) => entry !== undefined)
    .filter((entry) => entry.slug !== slug);
  const previousRelated = [...placeBySlug.values()]
    .filter((entry) => entry.slug !== slug)
    .filter((entry) => entry.area === place.area || (copy && guides.some((guide) => guide.slug === entry.slug)))
    .slice(0, 4);
  const related = [...new Set(regionalDetails[slug] && companions.length
    ? [...companions, ...previousRelated]
    : [...previousRelated, ...companions])].slice(0, 7);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonical,
    mainEntityOfPage: canonical,
    inLanguage: locale,
    citation: official,
    ...(photo ? { image: siteUrl + `/cusco/${slug}.webp` } : {}),
    about: { "@type": "TouristAttraction", name: place.name[i], address: place.address, hasMap: map },
  };
  const route = copy?.steps ?? place.walk[i]
    .split(locale === "zh" ? /(?<=。)/ : /(?<=[.!?])\s+/)
    .filter(Boolean);

  return (
    <main lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="cusco-guide-header">
        <div className="section">
          <Link href={`/${locale}#walking-guides`}>{labels.home}</Link>
          <h1>{title}</h1>
          <p>{tagline[i]}</p>
          <dl className="cusco-guide-summary">
            <div><dt>{ui.hours}</dt><dd>{hours}</dd></div>
            <div>
              <dt>{ui.rating}</dt>
              {slug === "hatun-rumiyoc" && <dd>{sections.reviewSnapshot}</dd>}
              <dd><a href={map}>{ui.liveReviews}</a></dd>
            </div>
          </dl>
          <div className="cusco-guide-actions">
            <a className="hero-cta" href={map}>{labels.map}</a>
            <a href="#visitor-reviews">{ui.rating}</a>
          </div>
        </div>
      </header>
      <article className="section cusco-guide-article">
        <section id="discover">
          <h2>{sections.intro}</h2>
          <p>{description}</p>
        </section>
        <section id="visit-planning">
          <h2>{ui.visit}</h2>
          <p>{visitTip[i]}</p>
        </section>
        <section id="highlights">
          <h2>{sections.highlights}</h2>
          <p>{copy ? place.history[i] : place.history[i].split(locale === "zh" ? /(?<=。)/ : /(?<=[.!?])\s+/).filter(Boolean).at(-1)}</p>
        </section>
        <section id="about" className="info-card cusco-guide-management">
          <h2>{ui.about}</h2>
          <p><strong>{ui.management}</strong> · {manager.name[i]}</p>
          {copy && <p>{place.history[i]}</p>}
          <p><a href={managementReference}>{ui.official}</a></p>
        </section>
        <section id="basic-information">
          <h2>{ui.basic}</h2>
          <table className="cusco-guide-table" aria-label={ui.basic}>
            <tbody>
              {[
                [sections.name, place.name[i]],
                [sections.kind, kindLabels[kind][i]],
                [ui.address, place.address],
                [sections.city, sections.region],
                [ui.area, areaLabels[place.area][i]],
                [ui.management, manager.name[i]],
                [ui.hours, hours],
                [ui.entry, price],
              ].map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
            </tbody>
          </table>
        </section>
        <section id="opening-hours">
          <h2>{ui.hours}</h2>
          <p>{hours}</p>
          {published?.hours && <p>{sections.checked} <a href={published.source}>{sections.operator}</a></p>}
        </section>
        <section id="admission">
          <h2>{ui.entry}</h2>
          <p>{price}</p>
          {published?.price && <p><a href={published.source}>{sections.operator}</a></p>}
          {circuit && <p><a href={tariff}>{ui.tickets}</a> · <a href={touristTicket}>{sections.operator}</a></p>}
        </section>
        <section id="transport">
          <h2>{ui.transport}</h2>
          <p>{copy || directMap ? place.walk[i] : transportByArea[place.area][i]}</p>
          <p><a href={directMap ? map : directionsMap(place)}>
            {directMap ? labels.map : tripMap[i]}
          </a></p>
        </section>
        <section id="history-and-architecture">
          <h2>{labels.history}</h2>
          <p>{copy?.history ?? place.history[i]}</p>
          {photo && (
            <figure className="cusco-guide-photo">
              <Image src={`/cusco/${slug}.webp`} alt={place.name[i]} width={photo.width} height={photo.height}
                sizes="(max-width: 850px) 90vw, 48rem" unoptimized />
              <figcaption><a href={photo.source}>{ui.photo}</a></figcaption>
            </figure>
          )}
        </section>
        <section id="visit-route">
          <h2>{place.area === "day" ? roadRoute[i] : labels.route}</h2>
          <ol>{route.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section id="visiting-notes">
          <h2>{sections.notice}</h2>
          <p>{access.advice[i]}</p>
        </section>
        <section id="photo-spots">
          <h2>{labels.photo}</h2>
          <p>{copy?.photo ?? place.photoTip[i]}</p>
        </section>
        <section>
          <h2>{labels.faq}</h2>
          <h3>{copy?.question ?? place.faqQuestion?.[i] ?? questions[slug]?.[i]}</h3>
          <p>{copy?.answer ?? place.faq[i]}</p>
        </section>
        <section id="where-to-stay">
          <h2>{sections.stay}</h2>
          <p>{lodging}</p>
        </section>
        <section id="visitor-reviews">
          <h2>{ui.rating}</h2>
          {slug === "hatun-rumiyoc" && <p>{sections.reviewSnapshot}</p>}
          <p><a href={map}>{ui.liveReviews}</a></p>
        </section>
        <section id="location">
          <h2>{sections.location}</h2>
          <p>{place.address}</p>
          <p><a href={map}>{labels.map}</a></p>
        </section>
        <section>
          <h2>{ui.related}</h2>
          <ul>
            {related.map((entry) => (
              <li key={entry.slug}><Link href={guidePath(locale, entry.slug)}>{guides.find((guide) => guide.slug === entry.slug)?.content[locale].title ?? entry.name[i]}</Link></li>
            ))}
          </ul>
          <p><Link href={`/${locale}#nearby-places`}>{ui.near}</Link></p>
        </section>
        <p><a href={official}>{labels.source}</a></p>
        <div className="cusco-guide-languages">
          {guideLocales.map((language) => (
            <Link key={language} href={guidePath(language, slug)} hrefLang={language}
              lang={language} aria-current={language === locale ? "page" : undefined}>
              {{ en: "English", es: "Español", zh: "中文" }[language]}
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
