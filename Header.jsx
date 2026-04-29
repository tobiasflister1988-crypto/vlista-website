/* Header.jsx */
function Header() {
  return (
    <header className="header" data-screen-label="Header">
      <a href="#top" className="header__word" aria-label="VLISTA — Startseite">VLISTA</a>
      <nav className="header__social" aria-label="Social Media">
        <a href="https://www.instagram.com/himynameis_kintaro/" target="_blank" rel="noopener" className="header__social-link" aria-label="Instagram">
          <i className="fab fa-instagram header__icon-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@vlista.de" target="_blank" rel="noopener" className="header__social-link" aria-label="TikTok">
          <i className="fab fa-tiktok header__icon-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/vlista.de" target="_blank" rel="noopener" className="header__social-link" aria-label="Facebook">
          <i className="fab fa-facebook header__icon-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/company/vlista" target="_blank" rel="noopener" className="header__social-link" aria-label="LinkedIn">
          <i className="fab fa-linkedin header__icon-linkedin"></i>
        </a>
        <a href="#contact" className="header__nav">+ KONTAKT</a>
      </nav>
    </header>
  );
}
window.Header = Header;
