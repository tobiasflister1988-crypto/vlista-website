/* Process.jsx */
const STEPS = [
  {
    num: "01",
    title: "— BRIEFING",
    desc: "Ein 30-minütiges Gespräch reicht. Wir hören zu, stellen die richtigen Fragen und definieren gemeinsam Ziele, Zielgruppe, Kanäle und Erfolgskriterien. Kein Fragebogen-Chaos, kein wochenlanges Hin und Her.",
  },
  {
    num: "02",
    title: "— KONZEPT",
    desc: "Auf Basis des Briefings entwickeln wir Ihre Content-Strategie: Formate, Frequenz, Tonalität und Redaktionsplan. Sie bekommen ein klares Bild, bevor die erste Produktion startet – und können steuern, bevor es teuer wird.",
  },
  {
    num: "03",
    title: "— PRODUKTION",
    desc: "Skripte, Schnitt, Motion und Copy laufen parallel in einem eingespielten Team. KI beschleunigt Drafts und Varianten, menschliches Handwerk liefert die Qualität. Erste Assets erreichen Sie in 72 Stunden.",
  },
  {
    num: "04",
    title: "— ANALYSE",
    desc: "Nach der Lieferung ist vor der Optimierung. Wir messen, was funktioniert, berichten transparent gegen Ihre KPIs und schärfen die nächste Content-Welle. Dauerhafter Lerneffekt inklusive.",
  },
];

function Process() {
  const [active, setActive] = React.useState(0);
  const sceneRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      const scene = sceneRef.current;
      if (!scene) return;
      const { top, height } = scene.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (-top) / (height - viewH);
      const clamped = Math.max(0, Math.min(0.999, progress));
      const step = Math.min(Math.floor(clamped * STEPS.length), STEPS.length - 1);
      setActive(step);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-scene" ref={sceneRef} id="process">
      <div className="scroll-sticky">
        <div className="eyebrow"><span className="marker">+</span> SO ARBEITEN WIR</div>
        <h2 className="section-title">VIER<br/>SCHRITTE</h2>

        <div className="process-dots" aria-hidden="true">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`process-dot ${i < active ? "is-done" : ""} ${i === active ? "is-active" : ""}`}
            />
          ))}
        </div>

        <div className="process-stage">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`process-step ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
            >
              <div className="list-row__num">{s.num}</div>
              <div className="list-row__title">{s.title}</div>
              <p className="list-row__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={`process-scroll-hint ${active > 0 ? "is-hidden" : ""}`}>
          # WEITERSCROLLEN ↓
        </div>
      </div>
    </div>
  );
}
window.Process = Process;
