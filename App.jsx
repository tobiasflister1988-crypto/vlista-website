/* App.jsx */
function App() {

  // ── 1. Scroll progress bar ───────────────────────────────────────────────
  React.useEffect(() => {
    const fill = document.getElementById("scroll-bar-fill");
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      fill.style.width = (Math.min(pct, 1) * 100) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── 2. Parallax ──────────────────────────────────────────────────────────
  // Elements move at different speeds relative to the scroll — creates depth.
  React.useEffect(() => {
    const LAYERS = [
      { sel: ".hero__statement", speed: 0.22 },   // slower = feels further back
      { sel: ".hero__scroll",    speed: -0.08 },  // faster = feels closer
    ];

    const targets = LAYERS.map(l => ({
      el: document.querySelector(l.sel),
      speed: l.speed,
    }));

    const onScroll = () => {
      const y = window.scrollY;
      targets.forEach(({ el, speed }) => {
        if (el) el.style.transform = `translateY(${y * speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── 3. Trigger-Events ────────────────────────────────────────────────────
  // Animations fire at a precise viewport threshold, not just "enters screen".
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("triggered");
        // staggered children
        e.target.querySelectorAll("[data-stagger]").forEach((child, i) => {
          setTimeout(() => child.classList.add("triggered"), i * 90);
        });
        io.unobserve(e.target);
      });
    }, {
      rootMargin: "0px 0px -18% 0px",  // fires when element is 18% above bottom
      threshold: 0.08,
    });

    document.querySelectorAll(".trigger").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── 4. Reveal-on-scroll (sections, hero, contact) ───────────────────────
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

  // ── 5. Hero line reveal ──────────────────────────────────────────────────
  React.useEffect(() => {
    const inners = document.querySelectorAll(".hero__line-inner");
    const t = setTimeout(() => inners.forEach(el => el.classList.add("is-in")), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="site">
      <div className="scroll-bar-track" aria-hidden="true">
        <div className="scroll-bar-fill" id="scroll-bar-fill" />
      </div>

      <Header />
      <VideoHero />
      <Services />
      <StickyFeature />
      <Process />
      <CaseStudies />
      <About />
      <Contact />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
