/* VideoHero.jsx */
const VIDEO_PHASES = [
  { line1: "WENIGER",  line2: "ZEIT"    },
  { line1: "MEHR",     line2: "CONTENT" },
  { line1: "MIT",      line2: "VLISTA"  },
];

function VideoHero() {
  const sceneRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const fillRef  = React.useRef(null);
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    const video = videoRef.current;
    const scene = sceneRef.current;

    const scrub = () => {
      const rect = scene.getBoundingClientRect();
      const scrolled = -rect.top;
      const travelDistance = rect.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / travelDistance));

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
    <div className="video-scene" ref={sceneRef}>
      <div className="video-sticky">
        <video
          ref={videoRef}
          className="video-bg"
          src="assets/hero-video-web.mp4"
          poster="assets/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
        />
        <div className="video-overlay" />
        <div className="video-text">
          {VIDEO_PHASES.map((ph, i) => (
            <p key={i} className={`video-phase ${i === phase ? "is-active" : ""}`}>
              <span className="video-line">{ph.line1}</span>
              <span className="video-line">{ph.line2}</span>
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
    </div>
  );
}
window.VideoHero = VideoHero;
