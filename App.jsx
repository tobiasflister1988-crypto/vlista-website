/* App.jsx */
function App() {
  // ── Scroll progress bar ──────────────────────────────────────────────────
  React.useEffect(() => {
    const fill = document.getElementById("scroll-bar-fill");
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      fill.style.width = (Math.min(pct, 1) * 100) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Reveal-on-scroll (sections, hero, contact) ───────────────────────────
  React.useEffect(() => {
    const els = document.querySelectorAll(".section, .hero, .contact");
    els.forEach(el => el.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.06 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── Hero line reveal ─────────────────────────────────────────────────────
  React.useEffect(() => {
    const inners = document.querySelectorAll(".hero__line-inner");
    // small delay so the page paint settles
    const t = setTimeout(() => inners.forEach(el => el.classList.add("is-in")), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="site">
      {/* scroll progress bar */}
      <div className="scroll-bar-track" aria-hidden="true">
        <div className="scroll-bar-fill" id="scroll-bar-fill" />
      </div>

      <Header />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <About />
      <Contact />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
