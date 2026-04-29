/* Datenschutz.jsx */
function Datenschutz() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-datenschutz", handler);
    return () => window.removeEventListener("open-datenschutz", handler);
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="legal-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="legal-modal">
        <button className="legal-modal__close" onClick={() => setOpen(false)} aria-label="Schließen">✕</button>
        <h2 className="legal-modal__title">DATENSCHUTZERKLÄRUNG</h2>

        <h3>1. Verantwortlicher</h3>
        <p>
          Tobias Flister<br />
          Scharfensteinstraße 16, 34295 Edermünde<br />
          E-Mail: <a href="mailto:vlistamedia@gmail.com">vlistamedia@gmail.com</a>
        </p>

        <h3>2. Hosting — GitHub Pages</h3>
        <p>
          Diese Website wird bei GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Website werden automatisch Verbindungsdaten verarbeitet (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browsertyp). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb). GitHub kann diese Daten in die USA übertragen; GitHub LLC unterliegt den EU Standardvertragsklauseln. Weitere Informationen: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement</a>.
        </p>

        <h3>3. Externe Ressourcen</h3>
        <p>
          Zum Laden von Schriftarten wird <strong>Google Fonts</strong> (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland) eingebunden. Dabei wird Ihre IP-Adresse an Google übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Datenschutzerklärung Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.
        </p>
        <p>
          Icons werden über <strong>Font Awesome (Cloudflare CDN)</strong> (Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA) geladen. Dabei wird Ihre IP-Adresse übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Technische Bibliotheken (React, Babel) werden von <strong>unpkg.com</strong> (npm Inc., USA) geladen. Dabei wird Ihre IP-Adresse übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h3>4. Kontaktaufnahme per E-Mail</h3>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Daten werden nicht an Dritte weitergegeben und nach Abschluss des Anliegens gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>

        <h3>5. Cookies</h3>
        <p>
          Diese Website setzt ausschließlich ein technisch notwendiges Cookie (<code>vlista_consent</code>), das Ihre Kenntnisnahme dieses Hinweises speichert. Es werden keine Tracking-, Analyse- oder Werbe-Cookies verwendet.
        </p>

        <h3>6. Ihre Rechte (Art. 15–22 DSGVO)</h3>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16)</li>
          <li>Löschung Ihrer Daten (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
        </ul>
        <p>
          Anfragen richten Sie bitte an: <a href="mailto:vlistamedia@gmail.com">vlistamedia@gmail.com</a>
        </p>

        <h3>7. Beschwerderecht</h3>
        <p>
          Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. Für Hessen ist dies der <strong>Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</strong>, Gustav-Stresemann-Ring 1, 65189 Wiesbaden, <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener">datenschutz.hessen.de</a>.
        </p>

        <p className="legal-modal__date">Stand: April 2026</p>
      </div>
    </div>
  );
}
window.Datenschutz = Datenschutz;
