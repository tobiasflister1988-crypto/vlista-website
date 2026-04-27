/* App.jsx */
function App() {
  // reveal-on-scroll
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
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
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
