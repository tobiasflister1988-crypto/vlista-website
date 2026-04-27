/* StickyFeature.jsx — sticky card left, scrolling text right */
const FEATURES = [
  {
    num: "01", title: "SCHNELL",
    sub: "Lieferung in Tagen, nicht Wochen",
    desc: "Kein endloser Feedback-Loop. Wir liefern erste Assets in 72 Stunden. Strategie, Produktion und Freigabe laufen parallel – nicht nacheinander.",
  },
  {
    num: "02", title: "PRÄZISE",
    sub: "Strategie vor Produktion",
    desc: "Jedes Stück Content hat eine Aufgabe. Wir definieren Zielgruppe, Kanal und Metrik vor dem ersten Schnitt – nicht danach.",
  },
  {
    num: "03", title: "KI-FIRST",
    sub: "Menschliches Handwerk, KI-Geschwindigkeit",
    desc: "KI übernimmt Drafts, Varianten und Schnitte. Menschen übernehmen Urteil, Ton und Feinschliff. Das Ergebnis klingt nach Marke – nicht nach Prompt.",
  },
  {
    num: "04", title: "MESSBAR",
    sub: "Kennzahlen, die aufs Geschäft einzahlen",
    desc: "Reichweite ist kein Ergebnis. Wir definieren KPIs, die zählen: Leads, Conversion, Retention. Und wir berichten transparent dagegen.",
  },
];

function StickyFeature() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const items = document.querySelectorAll(".sticky-item");
    const observers = [];
    items.forEach((el, idx) => {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(idx);
      }, { rootMargin: "-35% 0px -35% 0px", threshold: 0 });
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach(io => io.disconnect());
  }, []);

  const f = FEATURES[active];

  return (
    <section className="section" id="features">
      <div className="eyebrow"><span className="marker">+</span> WARUM VLISTA</div>
      <div className="sticky-layout">

        {/* LEFT — sticky card, updates as right side scrolls */}
        <div className="sticky-col-left">
          <div className="sticky-card">
            <div className="sticky-card__num">{f.num}</div>
            <div className="sticky-card__title">{f.title}</div>
            <div className="sticky-card__sub">{f.sub}</div>
          </div>
        </div>

        {/* RIGHT — scrolling items, each 60vh tall */}
        <div className="sticky-col-right">
          {FEATURES.map((item, i) => (
            <div key={item.num} className={`sticky-item ${i === active ? "is-active" : ""}`}>
              <p className="sticky-item__desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
window.StickyFeature = StickyFeature;
