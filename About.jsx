/* About.jsx */
function About() {
  return (
    <section className="section" id="about" data-screen-label="05 Über uns">

      {/* 3D rotating logo — floats over the monitor in the background video */}
      <div className="logo3d-wrap" aria-hidden="true">
        <div className="logo3d-scene">
          <div className="logo3d-card">
            <div className="logo3d-front">
              <img src="assets/logo.png" alt="" className="logo3d-img" />
            </div>
            <div className="logo3d-back">
              <img src="assets/logo.png" alt="" className="logo3d-img logo3d-img--flip" />
            </div>
          </div>
        </div>
        <div className="logo3d-shadow" />
      </div>

      <div className="eyebrow"><span className="marker">+</span> ÜBER UNS</div>
      <h2 className="section-title">ÜBER<br/>VLISTA</h2>
      <div className="about__sub">KI-CONTENT-AGENTUR &nbsp;/&nbsp; EDERMÜNDE, DEUTSCHLAND</div>
      <div className="about__cols">
        <div className="about__col">
          <p>
            VLISTA ist eine KI-gestützte Content-Agentur aus Edermünde. Wir helfen kleinen und mittelständischen Unternehmen sowie Einzelhändlern, professionellen Content zu produzieren – schneller, günstiger und konsistenter als klassische Agenturen.
          </p>
          <p>
            Wir arbeiten an der Schnittstelle von Strategie, Bewegtbild und Sprache. Reels, TikToks, Motion Graphics und Texte, die nach Ihrer Marke klingen – nicht nach einem Tool.
          </p>
        </div>
        <div className="about__col">
          <p>
            Unser Ansatz: schlanke Teams, scharfe Briefings, kurze Produktionsschleifen. KI übernimmt, was sie kann – Drafts, Varianten, Schnitte. Menschliches Handwerk und Markenverständnis liefern den Rest.
          </p>
          <p>
            Das Ergebnis: bis zu 80 % günstiger als klassische Videoproduktion, mit voller Markenkontrolle und messbaren Ergebnissen. Sitz in Nordhessen, im Einsatz für Marken in ganz Deutschland und Europa.
          </p>
        </div>
      </div>
    </section>
  );
}
window.About = About;
