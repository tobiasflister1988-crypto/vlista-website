/* VideoHero.jsx — Pinned video + scroll-scrubbing */
const VIDEO_PHASES = [
  { line1: "WENIGER",  line2: "ZEIT"    },
  { line1: "MEHR",     line2: "CONTENT" },
  { line1: "MIT",      line2: "VLISTA"  },
];

function VideoHero() {
  const sceneRef   = React.useRef(null);
  const videoRef   = React.useRef(null);
  const fillRef    = React.useRef(null);
  const [phase, setPhase]   = React.useState(0);
  const [ready, setReady]   = React.useState(false);

  // wait for video metadata so we know the duration
  React.useEffect(() => {
    const video = videoRef.current;
    const onMeta = () => setReady(true);
    video.addEventListener("loadedmetadata", onMeta);
    // also handle already-loaded case
    if (video.readyState >= 1) setReady(true);
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  // scroll → scrub + phase
  React.useEffect(() => {
    if (!ready) return;
    const video = videoRef.current;
    const scene = sceneRef.current;
    const fill  = fillRef.current;

    const onScroll = () => {
      const { top, height } = scene.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw   = -top / (height - viewH);
      const p     = Math.max(0, Math.min(1, raw));

      // scrub video frame
      const target = p * video.duration;
      if (isFinite(target)) video.currentTime = target;

      // progress bar inside video
      if (fill) fill.style.width = (p * 100) + "%";

      // text phases — split into thirds
      setPhase(p < 0.33 ? 0 : p < 0.66 ? 1 : 2);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [ready]);

  return (
    /* scene is 300vh — gives 200vh of scrub travel */
    <div className="video-scene" ref={sceneRef}>
      <div className="video-sticky">

        {/* background video */}
        <video
          ref={videoRef}
          className="video-bg"
          src="assets/hero-video-web.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* dark overlay for text legibility */}
        <div className="video-overlay" aria-hidden="true" />

        {/* overlaid text — three phases */}
        <div className="video-text">
          {VIDEO_PHASES.map((ph, i) => (
            <p key={i} className={`video-phase ${i === phase ? "is-active" : ""}`}>
              <span className="video-line">{ph.line1}</span>
              <span className="video-line">{ph.line2}</span>
            </p>
          ))}
        </div>

        {/* thin progress bar at bottom of video panel */}
        <div className="video-bar-track" aria-hidden="true">
          <div className="video-bar-fill" ref={fillRef} />
        </div>

        {/* scroll nudge */}
        <div className={`video-hint ${phase > 0 ? "is-gone" : ""}`}>
          # SCROLLEN ↓
        </div>

      </div>
    </div>
  );
}
window.VideoHero = VideoHero;
