/* Contact.jsx */
function Contact() {
  return (
    <footer className="contact" id="contact" data-screen-label="06 Kontakt">
      <h2 className="contact__big">BEREIT<br/>LOSZULEGEN?</h2>
      <p className="contact__line">
        Jedes Projekt beginnt mit einem kurzen Gespräch. Erzählen Sie uns, was Sie erreichen wollen – wir sagen Ihnen ehrlich, ob und wie wir helfen können. Kein Pitch, kein Druck.
      </p>
      <a href="mailto:hello@vlista.de" className="contact__email">HELLO@VLISTA.DE</a>
      <div className="footer-meta">
        <span><img src="assets/logo.png" className="footer-meta__logo" alt="VLISTA" /> · EDERMÜNDE, DEUTSCHLAND</span>
        <span>© VLISTA.MEDIA 2026 — ALLE RECHTE VORBEHALTEN</span>
      </div>
    </footer>
  );
}
window.Contact = Contact;
