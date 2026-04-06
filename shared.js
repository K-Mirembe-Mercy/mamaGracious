// shared.js – nav scroll, hamburger, reveal, back-to-top
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('navbar');
  const bt=document.getElementById('back-top');
  window.addEventListener('scroll',()=>{
    nav.classList.toggle('scrolled',scrollY>60);
    bt&&bt.classList.toggle('visible',scrollY>350);
  });
  bt&&bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  const ham=document.getElementById('ham');
  const mob=document.getElementById('mob');
  ham&&ham.addEventListener('click',()=>{
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow=mob.classList.contains('open')?'hidden':'';
  });
  window.closeMob=()=>{
    ham.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow='';
  };

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>io.observe(el));
});
