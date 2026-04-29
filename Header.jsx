/* Header.jsx */
function Header() {
  return (
    <header className="header" data-screen-label="Header">
      <a href="#top" className="header__word" aria-label="VLISTA — Startseite">VLISTA</a>
      <nav className="header__social" aria-label="Social Media">
        <a href="https://www.instagram.com/vlista.de" target="_blank" rel="noopener" className="header__social-link">IG</a>
        <a href="https://www.tiktok.com/@vlista.de" target="_blank" rel="noopener" className="header__social-link">TT</a>
        <a href="https://www.facebook.com/vlista.de" target="_blank" rel="noopener" className="header__social-link">FB</a>
        <a href="https://www.linkedin.com/company/vlista" target="_blank" rel="noopener" className="header__social-link">LI</a>
        <a href="#contact" className="header__nav">+ KONTAKT</a>
      </nav>
    </header>
  );
}
window.Header = Header;
