/* Services.jsx */
const SERVICES = [
  {
    num: "01",
    title: "— STRATEGIE",
    desc: "Kein Content ohne Plan. Wir analysieren Ihre Zielgruppe, Mitbewerber und Kanäle – und entwickeln eine Content-Strategie, die auf Ihre Geschäftsziele einzahlt. Format, Frequenz, Tonalität und KPIs: alles definiert, bevor die erste Kamera läuft.",
  },
  {
    num: "02",
    title: "— REELS & TIKTOKS",
    desc: "Vertikales Video in Plattform-Geschwindigkeit. Wir produzieren Short-Form-Content für Instagram, TikTok und YouTube Shorts – optimiert für Algorithmus und Aufmerksamkeitsspanne. Schnitt, Sound, Hook und Call-to-Action: in Studio-Qualität, in Tagen statt Wochen.",
  },
  {
    num: "03",
    title: "— MOTION GRAPHICS",
    desc: "Bewegtbild, das Ihre Marke unverwechselbar macht. Logo-Idents, animierte Produktpräsentationen, Social-Loops und Erklärfilme – handwerklich sauber, nie generisch. Einmal produziert, dauerhaft einsetzbar in Marketing, Sales und Employer Branding.",
  },
  {
    num: "04",
    title: "— TEXT & COPY",
    desc: "Worte, die wirken. Wir schreiben Captions, Videoskripte, Ad-Texte und Longform in Ihrer Stimme – nicht in der eines KI-Tools. Jeder Text wird auf Conversion, Tonalität und Plattform-Fit geprüft. Was nicht funktioniert, wird angepasst.",
  },
];

function Services() {
  return (
    <section className="section" id="services" data-screen-label="02 Leistungen">
      <div className="eyebrow trigger" data-stagger><span className="marker">+</span> LEISTUNGEN</div>
      <h2 className="section-title trigger" data-stagger>WAS WIR<br/>MACHEN</h2>
      <div className="list-rows trigger" data-stagger>
        {SERVICES.map(s => (
          <div className="list-row" key={s.num} data-stagger>
            <div className="list-row__num">{s.num}</div>
            <div className="list-row__title">{s.title}</div>
            <p className="list-row__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Services = Services;
