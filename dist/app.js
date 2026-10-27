const projects={
 matchlens:{title:'MatchLens',kind:'AI & FOOTBALL / HACKATHON PROJECT',image:'matchlens-home.jpg',summary:'An explainable football analysis platform built for the Microsoft Inside the Game Developer Hackathon.',details:['Interactive pitch replay, match statistics, and probability charts make match events easier to explore.','Evidence-backed summaries, conversational Q&A, and presenter recaps use Microsoft Foundry.','Built and evaluated using synthetic matches, with separate training, validation, and evaluation splits. Results do not establish performance on real football.'],tech:'React · TypeScript · Node.js · Express · PostgreSQL · Microsoft Foundry · Azure · Docker',links:[['View on GitHub','https://github.com/nathanielkong/MatchLens']],caption:'Actual MatchLens homepage captured from the local project.'},
 analyq:{title:'Analyq',kind:'FULL-STACK AI / INDEPENDENT PROJECT',image:'analyq.jpg',summary:'A stock research platform that turns natural-language questions into charts, comparisons, and explanations grounded in market data.',details:['Built the React and TypeScript frontend, Python/FastAPI API, and PostgreSQL storage.','Integrated market and news APIs with AI summaries, persistent conversations, and shared research caching.','Developed logistic regression models with gap-aware walk-forward validation and baseline comparisons; shipped automated backend tests and a Docker-based CI/CD pipeline.'],tech:'React · TypeScript · Python · FastAPI · PostgreSQL · scikit-learn · Docker · GitHub Actions',links:[['Visit live site','https://analyq.vercel.app'],['View on GitHub','https://github.com/nathanielkong/Analyq']],caption:'Actual screenshot from the deployed application.'},
 racing:{title:'Obstacle Overdrive',kind:'MIXED REALITY / GAME DEVELOPMENT',video:'obstacle-overdrive-preview.mp4',image:'obstacle-overdrive-poster.jpg',summary:'A mixed reality racing game built in Unity, bringing a playful racing experience beyond a traditional screen.',details:['Built with Unity and C#, with a kart controller, racing UI, and lap-counting logic.','The repository includes track selection, track saving and loading, and obstacle behaviours.','An experiment in spatial interaction and translating game ideas into a mixed reality experience.'],tech:'Unity · C# · Mixed reality · XR Interaction Toolkit',links:[['View on GitHub','https://github.com/mkbirb/obstacleoverdrive'],['Download concept video','assets/obstacle-overdrive-preview.mp4']],caption:'Generated concept animation, not gameplay footage. The illustration presents the racing idea; it does not reproduce the game’s exact visuals or demonstrate headset behaviour.'},
 vows:{title:'The House of Vows',kind:'CLIENT WEBSITE / FULL-STACK DEVELOPMENT',image:'vows.jpg',summary:'A responsive website for a wedding planning and styling business, delivered from client brief to launch.',details:['Developed with Next.js, React, and TypeScript, translating client feedback into responsive pages and clear enquiry pathways.','Implemented metadata, structured data, and an XML sitemap.','Deployed and maintained on Netlify as part of contract work with 1Oak Marketing and Agency Company.'],tech:'Next.js · React · TypeScript · Responsive design · SEO · Netlify',links:[['Visit live site','https://thehouseofvows.netlify.app'],['View on GitHub','https://github.com/nat-0401/house-of-vow-website']],caption:'Actual screenshot from the deployed client website.'},
 eventhub:{title:'EventHub',kind:'FULL-STACK WEB / UNIVERSITY TEAM PROJECT',summary:'A campus event management platform that helps students discover events and organisers manage them.',details:['A team project at RMIT, built with Next.js and a Spring Boot backend.','Includes event discovery, RSVP flows, event galleries, authentication, and administration features.','Worked as part of a five-person team using shared project planning, reviews, and a Docker-based development setup.'],tech:'Next.js · React · Java · Spring Boot · Docker',links:[['View team repository','https://github.com/cosc2299-2025/team-project-group-p07-04'],['View portfolio repository','https://github.com/nat-0401/eventhub-fullstack-platform']],caption:'The project card uses an original graphic illustration rather than an application screenshot.'},
 chainguard:{title:'ChainGuard',kind:'AI & BLOCKCHAIN / FINAL-YEAR TEAM PROJECT',image:'chainguard-home.png',summary:'An AI investigation assistant that helps users ask blockchain questions and understand the evidence behind an Ethereum address.',details:['Implemented chat and CLI workflows with OpenAI, Gemini, and Claude provider options.','Normalised contract, transaction, token, and liquidity evidence into validated structures with source provenance.','Integrated an external detector through a typed HTTP API, with frontend, backend, and detector services separated in Docker Compose. Missing evidence remains explicit; findings are not guarantees of safety.'],tech:'React · Python · FastAPI · Pydantic · LiteLLM · Blockchain APIs · Docker Compose',links:[['View on GitHub','https://github.com/print-livelongflame/ChainGuard']],caption:'ChainGuard homepage screenshot supplied by Nathaniel.'}
};
projects.matchlens.gallery=[
 {label:'Homepage',image:'matchlens-home.jpg',caption:'Actual MatchLens homepage captured from the local project.'},
 {label:'Match room',image:'matchlens.jpg',caption:'Actual interface captured from the project’s local sample preview. Match data shown is synthetic.'}
];
projects.chainguard.gallery=[
 {label:'Homepage',image:'chainguard-home.png',portrait:true,caption:'ChainGuard homepage screenshot supplied by Nathaniel. Open the full image to see it at its original size.'},
 {label:'Investigation demo',image:'chainguard.jpg',caption:'Actual frame from the project’s recorded interface demo.'}
];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTweens=new Map();
function refreshMotion(){window.ScrollTrigger?.refresh()}
function revealFilteredProjects(){
 if(!window.gsap||reducedMotion.matches)return;
 const cards=[...document.querySelectorAll('.project')];
 cards.forEach(card=>{const tween=revealTweens.get(card);tween?.scrollTrigger?.kill();tween?.kill();revealTweens.delete(card);window.gsap.killTweensOf(card);card.dataset.motionRevealed='true'});
 window.gsap.set(cards,{clearProps:'opacity,visibility,transform'});
 window.gsap.fromTo(cards.filter(card=>!card.hidden),{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.5,stagger:.055,ease:'power2.out',clearProps:'opacity,visibility,transform'});
}
if(window.gsap&&window.ScrollTrigger){
 const {gsap,ScrollTrigger}=window;
 gsap.registerPlugin(ScrollTrigger);
 const media=gsap.matchMedia();
 media.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.from('.hero-copy>h1,.hero-copy>p,.hero-copy>.button',{y:22,autoAlpha:0,stagger:.1,duration:.8,ease:'power3.out',clearProps:'opacity,visibility,transform'});
  document.querySelectorAll('.reveal').forEach((el,index)=>{
   if(el.dataset.motionRevealed==='true')return;
   const tween=gsap.from(el,{y:el.classList.contains('project')?32:24,autoAlpha:0,duration:.8,delay:el.classList.contains('project')?(index%2)*.07:0,ease:'power3.out',clearProps:'opacity,visibility,transform',scrollTrigger:{trigger:el,start:'top 91%',once:true},onComplete:()=>{el.dataset.motionRevealed='true'}});
   revealTweens.set(el,tween);
  });
  gsap.from('.skill-groups>div',{y:16,autoAlpha:0,stagger:.1,duration:.65,ease:'power2.out',clearProps:'opacity,visibility,transform',scrollTrigger:{trigger:'.skills',start:'top 82%',once:true}});
  gsap.fromTo('.about-intro h2>span',{color:'#8e9d7d'},{color:'#d5ef91',ease:'none',scrollTrigger:{trigger:'.about-intro',start:'top 90%',end:'top 40%',scrub:.7}});
  const underline=document.querySelector('.contact-title svg path');
  if(underline){const length=underline.getTotalLength();gsap.fromTo(underline,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.contact-title',start:'top 88%',end:'top 48%',scrub:.6}})}
  return()=>revealTweens.clear();
 });
 media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)',()=>{
  gsap.to('.hero-art',{y:-42,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
 });
 document.fonts?.ready.then(refreshMotion);
 addEventListener('load',refreshMotion,{once:true});
 document.querySelectorAll('.project-window img').forEach(img=>{if(!img.complete)img.addEventListener('load',refreshMotion,{once:true})});
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
 const media=document.querySelector('.dialog-media');media.replaceChildren();media.classList.remove('portrait-preview');
 if(p.video){const video=document.createElement('video');video.controls=true;video.playsInline=true;video.loop=true;video.muted=true;video.poster='assets/'+p.image;video.src='assets/'+p.video;media.append(video);if(!reducedMotion.matches)video.autoplay=true}
 else if(p.image){const img=document.createElement('img');img.src='assets/'+p.image;img.alt=p.title+' project preview';media.append(img)}
 else{const art=document.createElement('div');art.className='event-dialog-art';art.textContent='eventhub ✳';media.append(art)}
 const details=document.getElementById('dialog-details');details.replaceChildren();const heading=document.createElement('h3');heading.textContent='About the build';details.append(heading);const ul=document.createElement('ul');for(const line of p.details){const li=document.createElement('li');li.textContent=line;ul.append(li)}details.append(ul);const tech=document.createElement('p');tech.className='dialog-tech';tech.textContent=p.tech;details.append(tech);const caption=document.createElement('p');caption.className='media-caption';caption.textContent=p.caption;details.append(caption);
 const previewTools=document.querySelector('.dialog-preview-tools');
 const previewOptions=document.querySelector('.preview-options');previewOptions.replaceChildren();previewTools.hidden=!p.gallery;
 if(p.gallery){
  const fullImage=document.querySelector('.full-preview-link');
  const showPreview=(item,index)=>{
   const img=document.createElement('img');img.src='assets/'+item.image;img.alt=p.title+' — '+item.label;media.replaceChildren(img);media.classList.toggle('portrait-preview',!!item.portrait);fullImage.href=img.src;fullImage.setAttribute('aria-label','View '+p.title+' '+item.label+' full image');caption.textContent=item.caption;
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
const racingCard=document.querySelector('.racing');const racingVideo=racingCard.querySelector('video');
racingCard.addEventListener('pointerenter',()=>{if(!reducedMotion.matches)racingVideo.play().catch(()=>{})});racingCard.addEventListener('pointerleave',()=>racingVideo.pause());
document.querySelector('.copy-email').addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{if(!navigator.clipboard)throw new Error('unavailable');await navigator.clipboard.writeText('nathanielkong1@gmail.com');status.textContent='Email copied. Say hello!'}catch{status.textContent='nathanielkong1@gmail.com — select the address above to copy, or open your email app.'}});
