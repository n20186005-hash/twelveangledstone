import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";

const legalLabels = {
  zh: { privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置" },
  en: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" },
  es: { privacy: "Política de privacidad", terms: "Términos del servicio", cookies: "Configuración de cookies" },
  qu: { privacy: "Sapanchasqa willay", terms: "Ruranapa kamachiykuna", cookies: "Cookie akllanakuna" },
};

export default function SiteFooter({ locale }: { locale: Locale }) {
  const { footer } = translations[locale];
  const labels = legalLabels[locale];
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{footer.linksTitle}</p>
        <div className="footer-links-grid">
          {footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <Link href="/privacy" hrefLang="zh" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {labels.privacy}
        </Link>
        <Link href="/terms" hrefLang="zh" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {labels.terms}
        </Link>
        <Link href="/cookies" hrefLang="zh" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {labels.cookies}
        </Link>
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{footer.text}</p>
    </footer>
  );
}
