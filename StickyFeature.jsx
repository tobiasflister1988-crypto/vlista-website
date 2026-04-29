/* StickyFeature.jsx — sticky card left, scrolling text right */
const FEATURES = [
  {
    num: "01", title: "SCHNELL",
    sub: "Erste Assets in 72 Stunden",
    desc: "Klassische Agenturen brauchen 4 bis 8 Wochen. Wir liefern erste fertige Assets in 72 Stunden. Kein endloser Feedback-Loop, kein Abstimmungsmarathon. Strategie, Produktion und Freigabe laufen parallel – weil wir so aufgestellt sind.",
  },
  {
    num: "02", title: "SKALIERBAR",
    sub: "Mehr Content, kein mehr Personal",
    desc: "Mit KI skalieren wir Produktionsvolumen, ohne Qualität zu opfern. Was früher ein ganzes Team brauchte, liefern wir mit einem kleinen, eingespielten Kern. Sie bekommen mehr Output – für weniger Budget als eine Inhouse-Lösung.",
  },
  {
    num: "03", title: "KI-FIRST",
    sub: "Menschliches Urteil, KI-Geschwindigkeit",
    desc: "KI übernimmt Drafts, Varianten, Schnitte und erste Texte. Menschen übernehmen Urteilsvermögen, Markenkonsistenz und den letzten Schliff. Das Ergebnis: Content, der nach Ihrer Marke klingt – nicht nach einem Prompt.",
  },
  {
    num: "04", title: "MESSBAR",
    sub: "KPIs, die aufs Geschäft einzahlen",
    desc: "Reichweite ist kein Geschäftsergebnis. Wir definieren vor dem Start, was zählt: Leads, Conversion, Retention, Markenbekanntheit. Und wir berichten monatlich transparent, was funktioniert – und was wir als Nächstes schärfen.",
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

        <div className="sticky-col-left">
          <div className="sticky-card">
            <div className="sticky-card__num">{f.num}</div>
            <div className="sticky-card__title">{f.title}</div>
            <div className="sticky-card__sub">{f.sub}</div>
          </div>
        </div>

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
