/* CaseStudies.jsx */
const CASES = [
  {
    num: "01",
    client: "MODEHÄNDLER / REGIONAL",
    industry: "RETAIL · FASHION",
    title: "REELS, DIE DEN LADEN FÜLLEN",
    work: "12 vertikale Video-Assets für Instagram & TikTok in 3 Wochen. Produktpräsentationen, Behind-the-Scenes und saisonale Aktionen – vollständig produziert, getextet und optimiert.",
    kpiValue: 380, kpiPrefix: "+", kpiSuffix: "%",
    kpiLabel: "Mehr Profilaufrufe in den ersten 30 Tagen",
  },
  {
    num: "02",
    client: "DIENSTLEISTER / MITTELSTAND",
    industry: "B2B · CONSULTING",
    title: "MARKEN-IDENTS IN BEWEGUNG",
    work: "Logo-System + 6 animierte Motion-Idents für Präsentationen, Social Media und Sales-Material. Einmal produziert, überall einsetzbar – konsistent in Farbe, Rhythmus und Wirkung.",
    kpiValue: 5, kpiPrefix: "", kpiSuffix: " TAGE",
    kpiLabel: "Vom Briefing bis zu fertigen, einsatzbereiten Files",
  },
  {
    num: "03",
    client: "EINZELHANDEL / GASTRONOMIE",
    industry: "LOKAL · FOOD & BEVERAGE",
    title: "IMMER ON, IMMER KONSISTENT",
    work: "Always-on Content-Retainer: 8 Short-Form-Videos + 4 Grafiken pro Monat. Gleiches Team, gleiche Tonalität, jede Woche pünktlich – ohne interne Ressourcen zu binden.",
    kpiValue: 28, kpiPrefix: "", kpiSuffix: " STD.",
    kpiLabel: "Eingesparte interne Stunden pro Monat",
  },
];

function KpiCounter({ value, prefix, suffix }) {
  const ref = React.useRef(null);
  const fired = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired.current) {
        fired.current = true;
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(eased * value) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, prefix, suffix]);

  return (
    <span className="case__kpi-num" ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

function CaseStudies() {
  return (
    <section className="section" id="cases" data-screen-label="04 Cases">
      <div className="eyebrow"><span className="marker">+</span> REFERENZEN</div>
      <h2 className="section-title">AUSGEWÄHLTE<br/>ARBEITEN</h2>
      <div>
        {CASES.map(c => (
          <article className="case" key={c.num}>
            <div className="case__num">{c.num}</div>
            <div className="case__body">
              <div className="case__meta">{c.client} &nbsp;/&nbsp; {c.industry}</div>
              <h3 className="case__title">{c.title}</h3>
              <div className="case__media" role="img" aria-label="Case-Study Medien">
                <span className="case__placeholder">[ VIDEO / STILL — DEMNÄCHST ]</span>
              </div>
              <p className="list-row__desc" style={{ maxWidth: "60ch" }}>{c.work}</p>
              <div className="case__kpi">
                <KpiCounter value={c.kpiValue} prefix={c.kpiPrefix} suffix={c.kpiSuffix} />
                <span className="case__kpi-label">{c.kpiLabel}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.CaseStudies = CaseStudies;
