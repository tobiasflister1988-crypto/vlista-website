/* Contact.jsx */
function Contact() {
  return (
    <footer className="contact" id="contact" data-screen-label="06 Kontakt">
      <h2 className="contact__big">SPRECHEN<br/>WIR.</h2>
      <p className="contact__line">
        Jedes Projekt beginnt mit einem kurzen Gespräch. Sagen Sie uns, was Sie aufbauen, wo es hakt und wie das fertige Ergebnis aussieht.
      </p>
      <a href="mailto:hello@vlista.de" className="contact__email">HELLO@VLISTA.DE</a>
      <div className="footer-meta">
        <span><span className="footer-meta__plus">+ </span>VLISTA · EDERMÜNDE, DE</span>
        <span>© VLISTA 2026 — ALLE RECHTE VORBEHALTEN</span>
      </div>
    </footer>
  );
}
window.Contact = Contact;
