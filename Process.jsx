/* Process.jsx */
const STEPS = [
  { num: "01", title: "— BRIEFING",   desc: "Kurzes Gespräch, klares Briefing. Wir definieren Ziele, Kanäle und was Erfolg bedeutet – in Tagen, nicht Wochen." },
  { num: "02", title: "— PRODUKTION", desc: "KI‑beschleunigte Produktion mit menschlichem Handwerk. Skripte, Schnitt, Motion und Text laufen parallel in einem Team." },
  { num: "03", title: "— DELIVERY",   desc: "Files, wo Sie sie brauchen, auf der Plattform, wenn Sie sie brauchen. Wir messen, justieren und schärfen die nächste Welle." },
];

function Process() {
  return (
    <section className="section" id="process" data-screen-label="03 So arbeiten wir">
      <div className="eyebrow"><span className="marker">+</span> SO ARBEITEN WIR</div>
      <h2 className="section-title">DREI<br/>SCHRITTE</h2>
      <div className="list-rows">
        {STEPS.map(s => (
          <div className="list-row" key={s.num}>
            <div className="list-row__num">{s.num}</div>
            <div className="list-row__title">{s.title}</div>
            <p className="list-row__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Process = Process;
