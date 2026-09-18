const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Aquarium films share the same fade and replay timing.
document.querySelectorAll('.hero-film video').forEach(video => {
  let replayTimer, filmFrame;
  let inView = false;
  let ctaHovered = false;
  let ctaFocused = false;
  let motionPaused = reducedMotion.matches;
  const workflow = video.id === 'workflow-video' ? video.closest('.integrated-flow') : null;
  function resetWorkflowColor() {
    workflow?.style.setProperty('--workflow-film-ink', '#ffffff');
    workflow?.style.setProperty('--workflow-tools-ink', '#6cdae5');
  }
  function setFade(opacity, inkAmount = Number(opacity)) {
    video.style.opacity = opacity;
    if (workflow) {
      const amount = motionPaused ? 0 : inkAmount;
      const rgb = [108, 218, 229].map(channel => Math.round(255 + (channel - 255) * amount));
      workflow.style.setProperty('--workflow-film-ink', `rgb(${rgb.join(', ')})`);
      const toolsAmount = motionPaused ? 1 : inkAmount;
      const toolsRgb = [108, 218, 229].map(channel => Math.round(channel * toolsAmount));
      workflow.style.setProperty('--workflow-tools-ink', `rgb(${toolsRgb.join(', ')})`);
    }
  }
  video.addEventListener('error', resetWorkflowColor, true);

  function paintFilm() {
    const remaining = video.duration - video.currentTime;
    const fade = Math.max(0, Math.min(1, video.currentTime / 1.1, remaining / 1.6));
    // Hold white for 700ms, then turn aqua over 800ms. Return to white
    // in the first 600ms of the video’s 1600ms fade-out.
    const ink = Math.max(0, Math.min(1, (video.currentTime - 0.7) / 0.8, (remaining - 1) / 0.6));
    setFade(Number.isFinite(fade) ? String(fade) : '0', Number.isFinite(ink) ? ink : 0);
    if (!video.paused) filmFrame = requestAnimationFrame(paintFilm);
  }
  function playFilm() {
    if (motionPaused || document.hidden || !inView || ctaHovered || ctaFocused) return;
    if (video.ended) video.currentTime = 0;
    video.play().catch(resetWorkflowColor);
  }
  function pauseFilm() {
    video.pause();
    clearTimeout(replayTimer);
    cancelAnimationFrame(filmFrame);
  }
  if (video.id === 'footer-video') {
    const cta = document.querySelector('.closing > .button');
    cta.addEventListener('pointerenter', () => { ctaHovered = true; pauseFilm(); });
    cta.addEventListener('pointerleave', () => { ctaHovered = false; playFilm(); });
    cta.addEventListener('focus', () => { ctaFocused = true; pauseFilm(); });
    cta.addEventListener('blur', () => { ctaFocused = false; playFilm(); });
  }
  video.addEventListener('playing', () => { cancelAnimationFrame(filmFrame); paintFilm(); });
  video.addEventListener('ended', () => {
    setFade('0');
    replayTimer = setTimeout(() => { video.currentTime = 0; playFilm(); }, 1200);
  });
  reducedMotion.addEventListener('change', event => {
    motionPaused = event.matches;
    if (motionPaused) { pauseFilm(); setFade('0'); }
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

// Play the magazine preview only while it is visible.
document.querySelectorAll('.exploration-video').forEach(video => {
  let inView = false;
  function syncPlayback() {
    if (inView && !document.hidden && !reducedMotion.matches) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncPlayback();
  }).observe(video);
  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener('change', syncPlayback);
});
