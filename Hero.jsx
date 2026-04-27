/* Hero.jsx */
function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <h1 className="hero__statement">
        <span className="hero__line">
          <span className="hero__line-inner">WENIGER ZEIT /</span>
        </span>
        <span className="hero__line">
          <span className="hero__line-inner">MEHR CONTENT</span>
        </span>
      </h1>
      <a href="#services" className="hero__scroll">
        # SCROLLEN <span className="arrow">↓</span>
      </a>
    </section>
  );
}
window.Hero = Hero;
