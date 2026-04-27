/* VideoHero.jsx — Pinned video + scroll-scrubbing */
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

    // core scrub — runs on every scroll event AND after metadata loads
    const scrub = () => {
      const { top, height } = scene.getBoundingClientRect();
      const viewH = window.innerHeight;
      const p = Math.max(0, Math.min(1, -top / (height - viewH)));

      // only seek when duration is known
      if (video.duration && isFinite(video.duration)) {
        video.currentTime = p * video.duration;
        // prevent browser from auto-playing after seek
        video.pause();
      }

      if (fillRef.current) fillRef.current.style.width = (p * 100) + "%";
      setPhase(p < 0.33 ? 0 : p < 0.66 ? 1 : 2);
    };

    // re-run scrub once duration is available
    video.addEventListener("loadedmetadata", scrub);
    // re-run if more data arrives (canplay covers partial loads)
    video.addEventListener("canplay", scrub);

    window.addEventListener("scroll", scrub, { passive: true });
    scrub(); // initial position on mount

    return () => {
      video.removeEventListener("loadedmetadata", scrub);
      video.removeEventListener("canplay", scrub);
      window.removeEventListener("scroll", scrub);
    };
  }, []); // runs once — no external deps needed

  return (
    <div className="video-scene" ref={sceneRef}>
      <div className="video-sticky">

        <video
          ref={videoRef}
          className="video-bg"
          src="assets/hero-video-web.mp4"
          muted
          playsInline
          preload="auto"
        />

        <div className="video-overlay" aria-hidden="true" />

        <div className="video-text">
          {VIDEO_PHASES.map((ph, i) => (
            <p key={i} className={`video-phase ${i === phase ? "is-active" : ""}`}>
              <span className="video-line">{ph.line1}</span>
              <span className="video-line">{ph.line2}</span>
            </p>
          ))}
        </div>

        <div className="video-bar-track" aria-hidden="true">
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
