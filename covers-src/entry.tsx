import React, {useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CreditKarmaSpendingCover} from '@/components/sections/portfolio/credit-karma-spending-cover';
import {PelotonLanebreakCover} from '@/components/sections/portfolio/peloton-lanebreak-cover';
import {CaseCoverLit} from '@/components/sections/portfolio/case-cover-reveal';
import styles from '@/app/work/work.module.css';
const kind = document.body.dataset.cover;
function Cover(){
 const [lit,setLit]=useState(false);
 useEffect(()=>{
  const receive=(event:MessageEvent)=>{if(event.source===parent && event.origin===location.origin && event.data?.type==='cover-playback')setLit(event.data.active===true)};
  const request=()=>parent.postMessage({type:'cover-request'},location.origin);
  window.addEventListener('message',receive);
  window.addEventListener('pointerdown',request);
  window.addEventListener('focusin',request);
  parent.postMessage({type:'cover-ready'},location.origin);
  return()=>{window.removeEventListener('message',receive);window.removeEventListener('pointerdown',request);window.removeEventListener('focusin',request)};
 },[]);
 return <CaseCoverLit lit={lit}><div className={styles.caseCover} data-hover-root="" style={{width:'100%',height:'100%',aspectRatio:'auto',border:0,borderRadius:0}}>{kind==='credit-karma'?<CreditKarmaSpendingCover/>:<PelotonLanebreakCover/>}</div></CaseCoverLit>;
}
createRoot(document.getElementById('root')!).render(<Cover/>);
