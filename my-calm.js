(() => {
 const profile={style:'gentle',light:'dim',speaker:true,lamp:true};
 let running=false;
 const get=id=>document.getElementById(id);
 function message(text){get('coach-message').textContent=text;}
 function render(){
  get('routine-sound').textContent=profile.speaker?'Rain at the window':'Not included';
  get('routine-light').textContent=profile.lamp?(profile.light==='bright'?'Warm light · 70%':'Warm light · 30%'):'Not included';
  get('coach-reason').textContent=(profile.style==='quiet'?'Space to settle, with no spoken guidance.':'A gentle opening prompt to help you settle.')+' Shaped by your profile.';
  get('coach-style').value=profile.style;get('coach-light').value=profile.light;
  get('coach-speaker').checked=profile.speaker;get('coach-lamp').checked=profile.lamp;
  document.querySelector('[data-coach="quiet"]').setAttribute('aria-pressed',String(profile.style==='quiet'));
  document.querySelector('[data-coach="bright"]').setAttribute('aria-pressed',String(profile.light==='bright'));
  get('start-routine').textContent=running?'End preview':'Start my wind-down';
 }
 function edit(open){get('coach-profile').hidden=!open;get('coach-routine').hidden=open;get('edit-coach').setAttribute('aria-expanded',String(open));get('edit-coach').textContent=open?'Cancel':'Edit my profile';}
 get('edit-coach').addEventListener('click',()=>{const open=get('coach-profile').hidden;render();edit(open);if(open)get('coach-style').focus();});
 get('coach-profile').addEventListener('submit',event=>{event.preventDefault();Object.assign(profile,{style:get('coach-style').value,light:get('coach-light').value,speaker:get('coach-speaker').checked,lamp:get('coach-lamp').checked});render();edit(false);get('edit-coach').focus();message('Profile updated. Your routine now reflects these choices.');});
 document.querySelectorAll('[data-coach]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.coach==='quiet'){profile.style=profile.style==='quiet'?'gentle':'quiet';}else{profile.light=profile.light==='bright'?'dim':'bright';}render();message(profile.light==='bright'&&!profile.lamp?'Brighter lighting saved to your profile. Lights are currently excluded.':'Profile updated for this preview. You can change it anytime.');}));
 get('start-routine').addEventListener('click',()=>{running=!running;render();message(running?'Wind-down preview started. No devices are being controlled and no audio is playing.':'Preview ended. Your profile is ready for next time.');});
 render();
})();
