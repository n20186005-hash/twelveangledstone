const fs = require('fs');

let content = fs.readFileSync('src/app/[locale]/page.tsx', 'utf8');

const newComponents = `

function Ecology() {
  const { t } = useLang();
  if (!t.ecology) return null;
  return (
    <section id="ecology" className="section" style={{ background: "linear-gradient(180deg, #fefefe 0%, #f4f1eb 100%)" }}>
      <ScrollReveal>
        <p className="section-label">02</p>
        <h2 className="section-title">{t.nav.ecology}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ marginTop: "2rem", padding: "2rem", background: "#fff", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem" }}>
            {t.ecology.subtitle}
          </h3>
          <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--color-earth)", whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: t.ecology.content.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>') }} />
        </div>
      </ScrollReveal>
    </section>
  );
}

function Culture() {
  const { t } = useLang();
  if (!t.culture) return null;
  return (
    <section id="culture" className="section">
      <ScrollReveal>
        <p className="section-label">03</p>
        <h2 className="section-title">{t.nav.culture}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ marginTop: "2rem", padding: "2rem", background: "var(--color-deep)", borderRadius: "8px", color: "rgba(255,255,255,0.9)", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "var(--color-gold)", marginBottom: "1rem" }}>
            {t.culture.subtitle}
          </h3>
          <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.85)", whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: t.culture.content.replace(/\\*\\*(.*?)\\*\\*/g, '<strong style="color:var(--color-gold)">$1</strong>') }} />
        </div>
      </ScrollReveal>
    </section>
  );
}
`;

content = content.replace('function Visiting() {', newComponents + '\nfunction Visiting() {');

// Update section labels
content = content.replace('<p className="section-label">02</p>\n          <h2 className="section-title">{t.visiting.title}</h2>', '<p className="section-label">04</p>\n          <h2 className="section-title">{t.visiting.title}</h2>');
content = content.replace('<p className="section-label">06</p>\n        <h2 className="section-title">{t.transportation.title}</h2>', '<p className="section-label">05</p>\n        <h2 className="section-title">{t.transportation.title}</h2>');
content = content.replace('<p className="section-label">07</p>\n          <h2 className="section-title">{t.tips.title}</h2>', '<p className="section-label">06</p>\n          <h2 className="section-title">{t.tips.title}</h2>');
content = content.replace('<p className="section-label">08</p>\n        <h2 className="section-title">{t.gallery.title}</h2>', '<p className="section-label">07</p>\n        <h2 className="section-title">{t.gallery.title}</h2>');
content = content.replace('<p className="section-label">09</p>\n        <h2 className="section-title">{t.reviews.title}</h2>', '<p className="section-label">08</p>\n        <h2 className="section-title">{t.reviews.title}</h2>');
content = content.replace('<p className="section-label">10</p>\n        <h2 className="section-title">{t.faq.title}</h2>', '<p className="section-label">09</p>\n        <h2 className="section-title">{t.faq.title}</h2>');
content = content.replace('<p className="section-label">11</p>\n        <h2 className="section-title">{t.location.title}</h2>', '<p className="section-label">10</p>\n        <h2 className="section-title">{t.location.title}</h2>');

// Add to Nav
content = content.replace(
  '<a href="#visiting">{t.nav.visiting}</a>',
  '<a href="#ecology">{t.nav.ecology}</a>\n          <a href="#culture">{t.nav.culture}</a>\n          <a href="#visiting">{t.nav.visiting}</a>'
);

// Add to Home component
content = content.replace(
  '<About />\n      <Visiting />',
  '<About />\n      <Ecology />\n      <Culture />\n      <Visiting />'
);

fs.writeFileSync('src/app/[locale]/page.tsx', content, 'utf8');
