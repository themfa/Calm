// Portfolio media is user-initiated; motion never starts on hover or scroll.
document.querySelectorAll('.product-cover').forEach(cover => {
  const video = cover.querySelector('video');
  const button = cover.querySelector('button');
  const title = video.getAttribute('aria-label').replace(' product preview', '');
  const update = () => {
    button.textContent = video.paused ? 'Play preview' : 'Pause preview';
    button.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} ${title} preview`);
  };
  button.addEventListener('click', async () => {
    if (!video.paused) video.pause();
    else {
      if (video.ended) video.currentTime = 0;
      try { await video.play(); } catch { button.textContent = 'Retry preview'; }
    }
  });
  video.addEventListener('play', update);
  video.addEventListener('pause', update);
  video.addEventListener('ended', update);
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) video.pause();
  }).observe(cover);
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
});
