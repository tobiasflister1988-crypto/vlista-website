/* Process.jsx */
const STEPS = [
  { num: "01", title: "— BRIEFING",   desc: "Kurzes Gespräch, klares Briefing. Wir definieren Ziele, Kanäle und was Erfolg bedeutet – in Tagen, nicht Wochen." },
  { num: "02", title: "— PRODUKTION", desc: "KI‑beschleunigte Produktion mit menschlichem Handwerk. Skripte, Schnitt, Motion und Text laufen parallel in einem Team." },
  { num: "03", title: "— DELIVERY",   desc: "Files, wo Sie sie brauchen, auf der Plattform, wenn Sie sie brauchen. Wir messen, justieren und schärfen die nächste Welle." },
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
      // progress 0→1 through the scroll scene
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
        <h2 className="section-title">DREI<br/>SCHRITTE</h2>

        {/* step dots */}
        <div className="process-dots" aria-hidden="true">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`process-dot ${i < active ? "is-done" : ""} ${i === active ? "is-active" : ""}`}
            />
          ))}
        </div>

        {/* animated steps */}
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

        {/* scroll nudge — hides after first step advances */}
        <div className={`process-scroll-hint ${active > 0 ? "is-hidden" : ""}`}>
          # WEITERSCROLLEN ↓
        </div>
      </div>
    </div>
  );
}
window.Process = Process;
