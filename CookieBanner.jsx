/* CookieBanner.jsx */
function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("vlista_consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("vlista_consent", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Datenschutzhinweis">
      <p className="cookie-banner__text">
        Diese Website wird über GitHub Pages (GitHub Inc., USA) gehostet und lädt Ressourcen von Google Fonts, Cloudflare und unpkg.com. Dabei werden technisch notwendige Daten (z.B. Ihre IP-Adresse) an diese Anbieter übertragen. Es werden keine Tracking- oder Werbe-Cookies gesetzt.
        {" "}<button className="cookie-banner__link" onClick={() => window.dispatchEvent(new CustomEvent("open-datenschutz"))}>Datenschutzerklärung</button>
      </p>
      <button className="cookie-banner__btn" onClick={accept}>Verstanden</button>
    </div>
  );
}
window.CookieBanner = CookieBanner;
