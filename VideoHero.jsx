/* VideoHero.jsx — fixed video synced to total page scroll */
const VIDEO_PHASES = [
  { line1: "WENIGER",  line2: "ZEIT"    },
  { line1: "MEHR",     line2: "CONTENT" },
  { line1: "MIT",      line2: null, logoPhase: true },
];

function VideoHero() {
  const videoRef = React.useRef(null);
  const fillRef  = React.useRef(null);
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    const video = videoRef.current;

    const scrub = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const p = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;

      if (video.readyState >= 1 && isFinite(video.duration) && video.duration > 0) {
        video.currentTime = p * video.duration;
        video.pause();
      }

      if (fillRef.current) fillRef.current.style.width = (p * 100) + "%";
      setPhase(p < 0.33 ? 0 : p < 0.66 ? 1 : 2);
    };

    video.addEventListener("loadedmetadata", scrub);
    video.addEventListener("canplaythrough", scrub);
    window.addEventListener("scroll", scrub, { passive: true });
    scrub();

    return () => {
      video.removeEventListener("loadedmetadata", scrub);
      video.removeEventListener("canplaythrough", scrub);
      window.removeEventListener("scroll", scrub);
    };
  }, []);

  return (
    <div className="video-scene">
      {/* Fixed behind all content — scrubs with total page scroll */}
      <video
        ref={videoRef}
        className="video-bg-fixed"
        src="assets/hero-video-web.mp4"
        poster="assets/hero-poster.jpg"
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay + text visible only in first viewport */}
      <div className="video-overlay" />
      <div className="video-text">
        {VIDEO_PHASES.map((ph, i) => (
          <p key={i} className={`video-phase ${i === phase ? "is-active" : ""}`}>
            <span className="video-line">{ph.line1}</span>
            {ph.logoPhase
              ? <img src="assets/logo.png" className="video-logo" alt="VLISTA" />
              : <span className="video-line">{ph.line2}</span>
            }
          </p>
        ))}
      </div>
      <div className="video-bar-track">
        <div className="video-bar-fill" ref={fillRef} />
      </div>
      <div className={`video-hint ${phase > 0 ? "is-gone" : ""}`}>
        # SCROLLEN ↓
      </div>
    </div>
  );
}
window.VideoHero = VideoHero;
