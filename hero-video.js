const heroVideo = document.getElementById('hero-video');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = reducedMotion.matches, replayTimer, filmFrame;

function paintFilm() {
  const remaining = heroVideo.duration - heroVideo.currentTime;
  const fade = Math.max(0, Math.min(1, heroVideo.currentTime / 1.1, remaining / 1.6));
  heroVideo.style.opacity = Number.isFinite(fade) ? String(fade) : '0';
  if (!heroVideo.paused) filmFrame = requestAnimationFrame(paintFilm);
}
function playFilm() {
  if (motionPaused || document.hidden) return;
  heroVideo.play().catch(() => { motionPaused = true; });
}
heroVideo.addEventListener('playing', () => { cancelAnimationFrame(filmFrame); paintFilm(); });
heroVideo.addEventListener('ended', () => {
  heroVideo.style.opacity = '0';
  replayTimer = setTimeout(() => { heroVideo.currentTime = 0; playFilm(); }, 1200);
});
reducedMotion.addEventListener('change', event => {
  motionPaused = event.matches;
  clearTimeout(replayTimer);
  if (motionPaused) { heroVideo.pause(); heroVideo.style.opacity = '0'; }
  else playFilm();
 
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { heroVideo.pause(); clearTimeout(replayTimer); }
  else { if (heroVideo.ended) heroVideo.currentTime = 0; playFilm(); }
});
playFilm();
