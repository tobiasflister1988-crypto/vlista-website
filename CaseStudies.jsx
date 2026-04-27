/* CaseStudies.jsx */
const CASES = [
  {
    num: "01",
    client: "KUNDE / PLATZHALTER",
    industry: "DTC · BEAUTY",
    title: "REELS, DIE KONVERTIERT HABEN",
    work: "12 vertikale Video‑Assets für IG + TikTok in 4 Wochen. Strategie, Produktion und Post komplett aus einer Hand.",
    kpiValue: 412, kpiPrefix: "+", kpiSuffix: "%",
    kpiLabel: "Reichweiten‑Steigerung in den ersten 30 Tagen",
  },
  {
    num: "02",
    client: "KUNDE / PLATZHALTER",
    industry: "B2B SAAS",
    title: "MARKEN‑IDENTS IN BEWEGUNG",
    work: "Logo‑System + 6 Motion‑Idents, wiederverwendbar in Produkt, Marketing und Sales‑Decks.",
    kpiValue: 5, kpiPrefix: "", kpiSuffix: " TAGE",
    kpiLabel: "Vom Konzept bis zu fertigen Files",
  },
  {
    num: "03",
    client: "KUNDE / PLATZHALTER",
    industry: "LOKAL · GASTRONOMIE",
    title: "WÖCHENTLICHER CONTENT, EIN RETAINER",
    work: "Always‑on Content‑Engine: 8 Short‑Form‑Pieces + 2 Long‑Form pro Monat. Gleiches Team, gleiche Tonalität, jede Woche.",
    kpiValue: 30, kpiPrefix: "", kpiSuffix: " STD.",
    kpiLabel: "Eingespart pro Monat gegenüber dem alten Workflow",
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
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
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
      <div className="eyebrow"><span className="marker">+</span> CASES</div>
      <h2 className="section-title">AUSGEWÄHLTE<br/>ARBEITEN</h2>
      <div>
        {CASES.map(c => (
          <article className="case" key={c.num}>
            <div className="case__num">{c.num}</div>
            <div className="case__body">
              <div className="case__meta">{c.client} &nbsp;/&nbsp; {c.industry}</div>
              <h3 className="case__title">{c.title}</h3>
              <div className="case__media" role="img" aria-label="Case‑Study‑Medien Platzhalter">
                <span className="case__placeholder">[ VIDEO / STILL — PLATZHALTER ]</span>
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
