const projects={
 matchlens:{title:'MatchLens',kind:'AI & FOOTBALL / HACKATHON PROJECT',image:'matchlens-home.jpg',summary:'An explainable football analysis platform built for the Microsoft Inside the Game Developer Hackathon.',details:['Interactive pitch replay, match statistics, and probability charts make match events easier to explore.','Evidence-backed summaries, conversational Q&A, and presenter recaps use Microsoft Foundry.','Built and evaluated using synthetic matches, with separate training, validation, and evaluation splits. Results do not establish performance on real football.'],tech:'React · TypeScript · Node.js · Express · PostgreSQL · Microsoft Foundry · Azure · Docker',links:[['View on GitHub','https://github.com/nathanielkong/MatchLens']],caption:'Actual MatchLens homepage captured from the local project.'},
 analyq:{title:'Analyq',kind:'FULL-STACK AI / INDEPENDENT PROJECT',image:'analyq.jpg',summary:'A stock research platform that turns natural-language questions into charts, comparisons, and explanations grounded in market data.',details:['Built the React and TypeScript frontend, Python/FastAPI API, and PostgreSQL storage.','Integrated market and news APIs with AI summaries, persistent conversations, and shared research caching.','Developed logistic regression models with gap-aware walk-forward validation and baseline comparisons; shipped automated backend tests and a Docker-based CI/CD pipeline.'],tech:'React · TypeScript · Python · FastAPI · PostgreSQL · scikit-learn · Docker · GitHub Actions',links:[['Visit live site','https://analyq.vercel.app'],['View on GitHub','https://github.com/nathanielkong/Analyq']],caption:'Actual screenshot from the deployed application.'},
 racing:{title:'Obstacle Overdrive',kind:'MIXED REALITY / GAME DEVELOPMENT',image:'obstacle-overdrive-art.svg',artwork:true,summary:'A mixed reality racing game built in Unity, bringing a playful racing experience beyond a traditional screen.',details:['Built with Unity and C#, with a kart controller, racing UI, and lap-counting logic.','The repository includes track selection, track saving and loading, and obstacle behaviours.','An experiment in spatial interaction and translating game ideas into a mixed reality experience.'],tech:'Unity · C# · Mixed reality · XR Interaction Toolkit',links:[['View on GitHub','https://github.com/mkbirb/obstacleoverdrive']],caption:'Original project artwork inspired by the racing game.'},
 vows:{title:'The House of Vows',kind:'CLIENT WEBSITE / FULL-STACK DEVELOPMENT',image:'vows.jpg',summary:'A responsive website for a wedding planning and styling business, delivered from client brief to launch.',details:['Developed with Next.js, React, and TypeScript, translating client feedback into responsive pages and clear enquiry pathways.','Implemented metadata, structured data, and an XML sitemap.','Deployed and maintained on Netlify as part of contract work with 1Oak Marketing and Agency Company.'],tech:'Next.js · React · TypeScript · Responsive design · SEO · Netlify',links:[['Visit live site','https://thehouseofvows.netlify.app'],['View on GitHub','https://github.com/nat-0401/house-of-vow-website']],caption:'Actual screenshot from the deployed client website.'},
 eventhub:{title:'EventHub',kind:'FULL-STACK WEB / UNIVERSITY TEAM PROJECT',summary:'A campus event management platform that helps students discover events and organisers manage them.',details:['A team project at RMIT, built with Next.js and a Spring Boot backend.','Includes event discovery, RSVP flows, event galleries, authentication, and administration features.','Worked as part of a five-person team using shared project planning, reviews, and a Docker-based development setup.'],tech:'Next.js · React · Java · Spring Boot · Docker',links:[['View team repository','https://github.com/cosc2299-2025/team-project-group-p07-04'],['View portfolio repository','https://github.com/nat-0401/eventhub-fullstack-platform']],caption:'The project card uses an original graphic illustration rather than an application screenshot.'},
 chainguard:{title:'ChainGuard',kind:'AI & BLOCKCHAIN / FINAL-YEAR TEAM PROJECT',image:'chainguard-home-clean.png',summary:'An AI investigation assistant that helps users ask blockchain questions and understand the evidence behind an Ethereum address.',details:['Implemented chat and CLI workflows with OpenAI, Gemini, and Claude provider options.','Normalised contract, transaction, token, and liquidity evidence into validated structures with source provenance.','Integrated an external detector through a typed HTTP API, with frontend, backend, and detector services separated in Docker Compose. Missing evidence remains explicit; findings are not guarantees of safety.'],tech:'React · Python · FastAPI · Pydantic · LiteLLM · Blockchain APIs · Docker Compose',links:[['View on GitHub','https://github.com/print-livelongflame/ChainGuard']],caption:'Homepage screenshot supplied by Nathaniel, with the session warning removed.'}
};
projects.vision={title:'Staff Detection & Tracking',kind:'COMPUTER VISION / PERSON TRACKING',image:'staff-tracking.svg',artwork:true,summary:'A computer vision pipeline for detecting and tracking people in overhead video, with badge matching to identify staff.',details:['Uses YOLO11 for person detection and ByteTrack to follow people across frames.','Matches staff badges against supplied reference images.','Exports annotated video, frame-level CSV results, a presence timeline, and position trajectories.'],tech:'Python · OpenCV · YOLO11 · ByteTrack',links:[['View on GitHub','https://github.com/nathanielkong/Footfallcam-staff-detection']],caption:'Animated project illustration of a person being tracked.'};
projects.matchlens.gallery=[
 {label:'Homepage',image:'matchlens-home.jpg',caption:'Actual MatchLens homepage captured from the local project.'},
 {label:'Match room',image:'matchlens.jpg',caption:'Actual interface captured from the project’s local sample preview. Match data shown is synthetic.'}
];
projects.chainguard.gallery=[
 {label:'Homepage',image:'chainguard-home-clean.png',clean:true,caption:'Homepage screenshot supplied by Nathaniel, with the session warning removed.'},
 {label:'Investigation demo',image:'chainguard.jpg',caption:'Actual frame from the project’s recorded interface demo.'}
];
const ticker=document.querySelector('.ticker');
const tickerTrack=ticker.querySelector('.ticker-track');
const tickerPhrase='<span>IDEAS INTO REALITY</span><b>✳</b><span>CODE WITH CURIOSITY</span><b>✳</b><span>BUILD. LEARN. REPEAT.</span><b>✳</b>';
let tickerWidth=0;
function buildTicker(force=false){
 const width=ticker.clientWidth;if(width===tickerWidth&&!force)return;tickerWidth=width;
 const group=document.createElement('div');group.className='ticker-group';group.innerHTML=tickerPhrase;tickerTrack.replaceChildren(group);
 for(let count=0;group.getBoundingClientRect().width<width+120&&count<12;count++)group.insertAdjacentHTML('beforeend',tickerPhrase);
 const distance=group.getBoundingClientRect().width;tickerTrack.append(group.cloneNode(true));tickerTrack.style.setProperty('--ticker-duration',(distance/45)+'s');
}
buildTicker();
if('ResizeObserver' in window)new ResizeObserver(()=>buildTicker()).observe(ticker);else addEventListener('resize',()=>buildTicker());
document.fonts?.ready.then(()=>buildTicker(true));
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTweens=new Map();
// Wait for scrolling to finish before recalculating animation positions.
function refreshMotion(){window.ScrollTrigger?.refresh(true)}

// Keep smooth scrolling local to a link click. Global CSS smooth scrolling also
// animates ScrollTrigger's temporary scroll resets while the page is loading.
document.addEventListener('click',event=>{
 if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 const link=event.target.closest('a[href^="#"]');
 if(!link||link.matches('.skip')||link.hasAttribute('download')||link.target==='_blank')return;
 const hash=link.getAttribute('href');
 const target=document.getElementById(hash.slice(1));if(!target)return;
 event.preventDefault();
 if(location.hash!==hash)history.pushState(null,'',hash);
 target.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});
});
function revealFilteredProjects(){
 if(!window.gsap||reducedMotion.matches)return;
 const cards=[...document.querySelectorAll('.project')];
 cards.forEach(card=>{const tween=revealTweens.get(card);tween?.scrollTrigger?.kill();tween?.kill();revealTweens.delete(card);card.dataset.motionRevealed='true'});
 const targets=cards.flatMap(card=>[card,...card.querySelectorAll('.project-visual,.project-meta,.tags span')]);
 window.gsap.killTweensOf(targets);window.gsap.set(targets,{clearProps:'opacity,visibility,transform,clipPath'});
 window.gsap.fromTo(cards.filter(card=>!card.hidden),{opacity:0,y:18},{opacity:1,y:0,duration:.5,stagger:.055,ease:'power2.out',clearProps:'opacity,visibility,transform'});
}
reducedMotion.addEventListener('change',event=>{
 if(event.matches&&window.gsap){
  const targets=[...document.querySelectorAll('.project,.project-visual,.project-meta,.project .tags span')];
  window.gsap.killTweensOf(targets);window.gsap.set(targets,{clearProps:'opacity,visibility,transform,clipPath'});
 }
});
if(window.gsap&&window.ScrollTrigger){
 const {gsap,ScrollTrigger}=window;
 gsap.registerPlugin(ScrollTrigger);
 ScrollTrigger.config({ignoreMobileResize:true});
 const media=gsap.matchMedia();
 media.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.from('.hero-copy>h1,.hero-copy>p,.hero-actions>.button',{y:22,opacity:0,stagger:.1,duration:.8,ease:'power3.out',clearProps:'opacity,visibility,transform'});
  document.querySelectorAll('.reveal').forEach((el,index)=>{
   if(el.dataset.motionRevealed==='true')return;
   if(el.matches('.about-intro,.section-heading,.contact-title,.about-copy,.about-notes,.skills,.contact-bottom,.cert-section'))return;
   let tween;
   if(el.classList.contains('project')){
    tween=gsap.timeline({scrollTrigger:{trigger:el,start:'top 92%',once:true},onComplete:()=>{el.dataset.motionRevealed='true'}});
    tween.from(el,{y:38,opacity:0,duration:.85,ease:'power3.out',clearProps:'opacity,transform'},(index%2)*.08);
    const visual=el.querySelector('.project-visual');
    if(visual)tween.fromTo(visual,{clipPath:'inset(9% 0% 0% 0% round 14px)',scale:.98},{clipPath:'inset(0% 0% 0% 0% round 14px)',scale:1,duration:1,ease:'power3.out',clearProps:'clipPath,transform'},.1);
    const meta=el.querySelector('.project-meta');
    if(meta)tween.from(meta,{y:15,opacity:0,duration:.6,ease:'power2.out',clearProps:'opacity,transform'},.25);
    tween.from(el.querySelectorAll('.tags span'),{y:10,opacity:0,stagger:.045,duration:.45,ease:'power2.out',clearProps:'opacity,transform'},.4);
   }else tween=gsap.from(el,{y:24,opacity:0,duration:.8,ease:'power3.out',clearProps:'opacity,transform',scrollTrigger:{trigger:el,start:'top 91%',once:true},onComplete:()=>{el.dataset.motionRevealed='true'}});
   revealTweens.set(el,tween);
  });
  document.querySelectorAll('.about-intro h2,.section-heading h2,.skills h3,.contact-title').forEach(heading=>{
   gsap.from(heading.querySelectorAll('.line-inner'),{yPercent:112,stagger:.12,duration:1.05,ease:'power3.out',clearProps:'transform',scrollTrigger:{trigger:heading,start:'top 91%',once:true}});
  });
  document.querySelectorAll('.about-intro>.eyebrow,.section-heading .eyebrow,.contact-top>.eyebrow').forEach(label=>gsap.from(label,{opacity:0,y:10,duration:.65,ease:'power2.out',clearProps:'opacity,transform',scrollTrigger:{trigger:label,start:'top 90%',once:true}}));
  document.querySelectorAll('.about-copy>p').forEach(paragraph=>{
   gsap.from(paragraph,{y:12,opacity:.6,ease:'none',clearProps:'opacity,transform',scrollTrigger:{trigger:paragraph,start:'top 92%',end:'top 67%',scrub:.4}});
  });
  gsap.from('.note-card',{y:45,opacity:0,duration:.85,ease:'power3.out',clearProps:'opacity,transform',scrollTrigger:{trigger:'.about-notes',start:'top 88%',once:true}});
  gsap.from('.hobby-card',{y:38,opacity:0,stagger:.15,duration:.8,ease:'power3.out',clearProps:'opacity,transform',scrollTrigger:{trigger:'.hobby-grid',start:'top 90%',once:true}});
  gsap.from('.skill-groups>div',{y:22,opacity:0,stagger:.12,duration:.7,ease:'power2.out',clearProps:'opacity,transform',scrollTrigger:{trigger:'.skills',start:'top 82%',once:true}});
  gsap.fromTo('.skills',{'--rule-scale':0},{'--rule-scale':1,ease:'none',scrollTrigger:{trigger:'.skills',start:'top 90%',end:'top 60%',scrub:.6}});
  gsap.fromTo('.human-word',{color:'#8e9d7d'},{color:'#d5ef91',ease:'none',scrollTrigger:{trigger:'.about-intro',start:'top 90%',end:'top 40%',scrub:.7}});
  gsap.fromTo('.about-spark',{rotation:-25},{rotation:60,ease:'none',scrollTrigger:{trigger:'.about',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.from('.cert-section>div:not(.cert-symbol),.cert-badge',{y:18,opacity:0,stagger:.1,duration:.7,ease:'power2.out',clearProps:'opacity,transform',scrollTrigger:{trigger:'.cert-section',start:'top 88%',once:true}});
  gsap.to('.cert-symbol',{rotation:100,ease:'none',scrollTrigger:{trigger:'.cert-section',start:'top bottom',end:'bottom top',scrub:.8}});
  gsap.from('.contact-title>b',{y:35,opacity:0,duration:.8,ease:'power3.out',clearProps:'opacity,transform',scrollTrigger:{trigger:'.contact-title',start:'top 83%',once:true}});
  gsap.from('.contact-bottom>*',{y:16,opacity:0,stagger:.1,duration:.7,ease:'power2.out',clearProps:'opacity,transform',scrollTrigger:{trigger:'.contact-bottom',start:'top 94%',once:true}});
  gsap.fromTo('.contact',{'--contact-turn':'-18deg','--contact-rise':'70px'},{'--contact-turn':'14deg','--contact-rise':'0px',ease:'none',scrollTrigger:{trigger:'.contact',start:'top bottom',end:'bottom bottom',scrub:1}});
  const underline=document.querySelector('.contact-title svg path');
  if(underline){const length=underline.getTotalLength();gsap.fromTo(underline,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.contact-title',start:'top 88%',end:'top 48%',scrub:.6}})}
  return()=>revealTweens.clear();
 });
 media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)',()=>{
  gsap.to('.about-notes',{y:-24,ease:'none',scrollTrigger:{trigger:'.about',start:'top 75%',end:'bottom 30%',scrub:1}});
 });
 document.fonts?.ready.then(refreshMotion);
 // Project frames reserve their size in CSS, so images do not change trigger
 // positions. Refreshing on each lazy image load needlessly resets scrolling.
}
if('IntersectionObserver' in window){
 const sectionObserver=new IntersectionObserver(entries=>{
  for(const entry of entries)if(entry.isIntersecting){
   document.querySelectorAll('.header nav a').forEach(link=>{if(link.getAttribute('href')==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});
  }
 },{rootMargin:'-20% 0px -60% 0px'});
 document.querySelectorAll('main>section[id]').forEach(section=>sectionObserver.observe(section));
}
let scrollQueued=false;
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-progress').style.width=(max>0?scrollY/max*100:0)+'%';scrollQueued=false}
addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateScroll)}},{passive:true});addEventListener('resize',updateScroll);updateScroll();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;
 document.querySelectorAll('.project').forEach(card=>{const show=button.dataset.filter==='all'||card.dataset.category.split(' ').includes(button.dataset.filter);card.hidden=!show;if(show){card.classList.add('visible');count++}});
 document.getElementById('filter-status').textContent=`Showing ${count} projects`;revealFilteredProjects();refreshMotion();updateScroll();
}));
const dialog=document.querySelector('.project-dialog');let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const p=projects[button.dataset.project];lastTrigger=button;
 document.getElementById('dialog-title').textContent=p.title;document.getElementById('dialog-kind').textContent=p.kind;document.getElementById('dialog-summary').textContent=p.summary;
 const media=document.querySelector('.dialog-media');media.replaceChildren();media.classList.remove('portrait-preview','artwork-media','clean-home');if(p.artwork)media.classList.add('artwork-media');
 if(p.video){const video=document.createElement('video');video.controls=true;video.playsInline=true;video.loop=true;video.muted=true;video.poster='assets/'+p.image;video.src='assets/'+p.video;media.append(video);if(!reducedMotion.matches)video.autoplay=true}
 else if(p.image){const img=document.createElement('img');img.src='assets/'+p.image;img.alt=p.title+' project preview';media.append(img)}
 else{const art=document.createElement('div');art.className='event-dialog-art';art.textContent='eventhub ✳';media.append(art)}
 const details=document.getElementById('dialog-details');details.replaceChildren();const heading=document.createElement('h3');heading.textContent='About the build';details.append(heading);const ul=document.createElement('ul');for(const line of p.details){const li=document.createElement('li');li.textContent=line;ul.append(li)}details.append(ul);const tech=document.createElement('p');tech.className='dialog-tech';tech.textContent=p.tech;details.append(tech);const caption=document.createElement('p');caption.className='media-caption';caption.textContent=p.caption;details.append(caption);
 const previewTools=document.querySelector('.dialog-preview-tools');
 const previewOptions=document.querySelector('.preview-options');previewOptions.replaceChildren();previewTools.hidden=!p.gallery;
 if(p.gallery){
  const fullImage=document.querySelector('.full-preview-link');
  const showPreview=(item,index)=>{
   const img=document.createElement('img');img.src='assets/'+item.image;img.alt=p.title+' — '+item.label;media.replaceChildren(img);media.classList.toggle('portrait-preview',!!item.portrait);media.classList.toggle('clean-home',!!item.clean);fullImage.href=img.src;fullImage.setAttribute('aria-label','View '+p.title+' '+item.label+' full image');caption.textContent=item.caption;
   previewOptions.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
  };
  p.gallery.forEach((item,index)=>{const option=document.createElement('button');option.type='button';option.textContent=item.label;option.setAttribute('aria-pressed',String(index===0));option.addEventListener('click',()=>showPreview(item,index));previewOptions.append(option)});
  showPreview(p.gallery[0],0);
 }
 const links=document.querySelector('.dialog-links');links.replaceChildren();p.links.forEach(([label,url],i)=>{const a=document.createElement('a');a.className='button '+(i===0?'dark':'outline');a.href=url;a.textContent=label+' ↗';if(url.startsWith('http')){a.target='_blank';a.rel='noopener'}else a.download='obstacle-overdrive-preview.mp4';links.append(a)});
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
}));
function closeDialog(){dialog.close()}
document.querySelector('.dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog()}});
dialog.addEventListener('close',()=>{dialog.querySelector('video')?.pause();document.body.classList.remove('modal-open');lastTrigger?.focus({preventScroll:true})});
document.querySelector('.copy-email').addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{if(!navigator.clipboard)throw new Error('unavailable');await navigator.clipboard.writeText('nathanielkong1@gmail.com');status.textContent='Email copied. Say hello!'}catch{status.textContent='nathanielkong1@gmail.com — select the address above to copy, or open your email app.'}});
