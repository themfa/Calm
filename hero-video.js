const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Both aquarium films share the same fade and replay timing.
document.querySelectorAll('.hero-film video').forEach(video => {
  let replayTimer, filmFrame;
  let inView = false;
  let motionPaused = reducedMotion.matches;

  function paintFilm() {
    const remaining = video.duration - video.currentTime;
    const fade = Math.max(0, Math.min(1, video.currentTime / 1.1, remaining / 1.6));
    video.style.opacity = Number.isFinite(fade) ? String(fade) : '0';
    if (!video.paused) filmFrame = requestAnimationFrame(paintFilm);
  }
  function playFilm() {
    if (motionPaused || document.hidden || !inView) return;
    if (video.ended) video.currentTime = 0;
    video.play().catch(() => {});
  }
  function pauseFilm() {
    video.pause();
    clearTimeout(replayTimer);
    cancelAnimationFrame(filmFrame);
  }
  video.addEventListener('playing', () => { cancelAnimationFrame(filmFrame); paintFilm(); });
  video.addEventListener('ended', () => {
    video.style.opacity = '0';
    replayTimer = setTimeout(() => { video.currentTime = 0; playFilm(); }, 1200);
  });
  reducedMotion.addEventListener('change', event => {
    motionPaused = event.matches;
    if (motionPaused) { pauseFilm(); video.style.opacity = '0'; }
    else playFilm();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseFilm();
    else playFilm();
  });
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    if (inView) playFilm();
    else pauseFilm();
  }).observe(video);
});
