/* Packages.jsx — Retailer-Pakete mit Preisen */
const PACKAGES = [
  {
    num: "01",
    name: "STARTER",
    price: "490",
    unit: "/ MONAT",
    tag: "Für den Einstieg",
    items: [
      "4 Reels oder TikToks",
      "Captions & Hashtags",
      "1 Kanal-Strategie",
      "Lieferung in 72 Std.",
      "Monatliches Reporting",
    ],
  },
  {
    num: "02",
    name: "GROWTH",
    price: "990",
    unit: "/ MONAT",
    tag: "Für aktives Wachstum",
    highlight: true,
    items: [
      "8 Reels & TikToks",
      "2 Motion Graphics",
      "Vollständige Copy",
      "2 Kanäle (IG + TT)",
      "Strategie-Anpassung",
      "Monatlicher Report + Call",
    ],
  },
  {
    num: "03",
    name: "SCALE",
    price: "1.890",
    unit: "/ MONAT",
    tag: "Für maximale Präsenz",
    items: [
      "16 Video-Assets",
      "Unbegrenzte Motion Graphics",
      "Full-Service Copy",
      "Alle Kanäle",
      "Wöchentliches Reporting",
      "Dedizierter Strategie-Call",
      "Priorität-Support",
    ],
  },
  {
    num: "04",
    name: "ENTERPRISE",
    price: "AUF ANFRAGE",
    unit: "",
    tag: "Individuelle Lösung",
    items: [
      "Individueller Umfang",
      "Eigenes Content-Team",
      "Multi-Marken fähig",
      "SLA-Vereinbarung",
      "Onboarding vor Ort",
    ],
  },
];

function Packages() {
  return (
    <section className="section" id="pakete" data-screen-label="03 Pakete">
      <div className="eyebrow trigger" data-stagger><span className="marker">+</span> RETAILER-PAKETE</div>
      <h2 className="section-title trigger" data-stagger>KLARE<br/>PREISE</h2>
      <div className="packages-grid trigger" data-stagger>
        {PACKAGES.map(p => (
          <div key={p.num} className={`package-card ${p.highlight ? "package-card--highlight" : ""}`} data-stagger>
            <div className="package-card__tag">{p.tag}</div>
            <div className="package-card__name">{p.name}</div>
            <div className="package-card__price">
              {p.price !== "AUF ANFRAGE"
                ? <><span className="package-card__currency">€</span>{p.price}</>
                : p.price
              }
              {p.unit && <span className="package-card__unit">{p.unit}</span>}
            </div>
            <ul className="package-card__list">
              {p.items.map((item, i) => (
                <li key={i} className="package-card__item">
                  <span className="package-card__check">+</span> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="package-card__cta">
              {p.price === "AUF ANFRAGE" ? "ANFRAGEN" : "PAKET WÄHLEN"} →
            </a>
          </div>
        ))}
      </div>
      <p className="packages-note">Alle Preise zzgl. MwSt. · Monatlich kündbar · Keine Mindestlaufzeit beim Starter-Paket.</p>
    </section>
  );
}
window.Packages = Packages;
