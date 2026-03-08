"use strict";
/* ── LOADER ── */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hide'),1600);
});

/* ── HAMBURGER ── */
const ham=document.getElementById('ham'),nl=document.getElementById('navLinks');
ham.addEventListener('click',()=>nl.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nl.classList.remove('open')));

/* ── STICKY NAV SHADOW ── */
window.addEventListener('scroll',()=>{
  document.getElementById('nav').style.boxShadow=window.scrollY>10?'0 4px 36px rgba(0,0,0,.35)':'';
});

/* ── SCROLL REVEAL (staggered in grids) ── */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const siblings=[...e.target.parentElement.querySelectorAll('.reveal')];
    const idx=siblings.indexOf(e.target);
    const delay=e.target.closest('.products-grid,.why-grid,.features-row')?idx*80:0;
    setTimeout(()=>e.target.classList.add('vis'),delay);
    obs.unobserve(e.target);
  });
},{threshold:0.10});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ── PARALLAX BLOBS ── */
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  [.035,.055,.025].forEach((s,i)=>{
    const b=document.querySelectorAll('.blob')[i];
    if(b)b.style.transform=`translateY(${y*s}px)`;
  });
});

/* ── ADD TO CART ── */
function addToCart(btn){
  const orig=btn.textContent;
  btn.textContent='✓ Added!';
  btn.style.background='rgba(100,255,150,.2)';
  btn.style.borderColor='rgba(100,255,150,.5)';
  setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.style.borderColor='';},2000);
}

/* ── CONTACT FORM ── */
function sendMsg(){
  const n=document.getElementById('cName').value.trim();
  const e=document.getElementById('cEmail').value.trim();
  const m=document.getElementById('cMsg').value.trim();
  const r=document.getElementById('formResult');
  if(!n||!e||!m){r.textContent='⚠️ Please fill in all fields.';r.style.color='#FFCC66';r.style.display='block';return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){r.textContent='⚠️ Please enter a valid email address.';r.style.color='#FFCC66';r.style.display='block';return;}
  r.textContent="✅ Message sent! We'll be in touch soon.";r.style.color='#88FFBB';r.style.display='block';
  document.getElementById('cName').value='';
  document.getElementById('cEmail').value='';
  document.getElementById('cMsg').value='';
}