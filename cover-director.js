// Give the original portfolio covers one shared playback spotlight.
(() => {
 const frames=[...document.querySelectorAll('.product-cover iframe')];
 const visible=new Set();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let active=null;
 function publish(){frames.forEach(frame=>frame.contentWindow?.postMessage({type:'cover-playback',active:frame===active&&!document.hidden&&!reduced.matches},location.origin));}
 function choose(frame){active=frame;publish();}
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>entry.isIntersecting?visible.add(entry.target):visible.delete(entry.target));
  if(!visible.has(active))choose(frames.find(frame=>visible.has(frame))||null);
 },{threshold:.35});
 frames.forEach(frame=>observer.observe(frame));
 window.addEventListener('message',event=>{
  if(event.origin!==location.origin)return;
  const frame=frames.find(item=>item.contentWindow===event.source);
  if(!frame)return;
  if(event.data?.type==='cover-ready')publish();
  if(event.data?.type==='cover-request'&&visible.has(frame))choose(frame);
 });
 setInterval(()=>{
  if(document.hidden||reduced.matches||frames.includes(document.activeElement))return;
  const candidates=frames.filter(frame=>visible.has(frame));
  if(candidates.length>1)choose(candidates[(candidates.indexOf(active)+1)%candidates.length]);
 },14000);
 document.addEventListener('visibilitychange',publish);
 reduced.addEventListener('change',publish);
})();
