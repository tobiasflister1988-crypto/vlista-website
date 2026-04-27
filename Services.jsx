/* Services.jsx */
const SERVICES = [
  { num: "01", title: "— STRATEGIE",       desc: "KI‑gestützte Content‑Strategie für Ihre Kanäle. Wir definieren die richtigen Formate, Frequenz und Tonalität für Ihre Zielgruppe – und die Kennzahlen, die wirklich aufs Geschäft einzahlen." },
  { num: "02", title: "— REELS & TIKTOKS", desc: "Studio‑Qualität in einem Bruchteil der Zeit. Vertikales Video im Tempo der Plattformen, ohne Abstriche bei der Handwerkskunst." },
  { num: "03", title: "— MOTION GRAPHICS", desc: "Bewegtbild, das Ihre Marke trägt. Logo‑Idents, Social‑Loops, Erklärfilme – immer absichtsvoll, nie generisch." },
  { num: "04", title: "— TEXT & COPY",     desc: "Kommunikation, die zu Ihrer Marke passt – nicht generisch. Wir schreiben Captions, Skripte und Langform in Ihrer Stimme und testen, was wirkt." },
];

function Services() {
  return (
    <section className="section" id="services" data-screen-label="02 Leistungen">
      <div className="eyebrow"><span className="marker">+</span> LEISTUNGEN</div>
      <h2 className="section-title">WAS WIR<br/>MACHEN</h2>
      <div className="list-rows">
        {SERVICES.map(s => (
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
window.Services = Services;
