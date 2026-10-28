/* A small, dependency-free rope simulation. The lanyard stays attached during dragging and swinging. */
(()=>{
 const stage=document.querySelector('.badge-stage');if(!stage)return;
 const badge=stage.querySelector('.hanging-badge');
 const rope=stage.querySelector('.badge-rope');
 const paths=[...rope.querySelectorAll('.rope-path')];
 const anchorDot=rope.querySelector('.badge-anchor');
 const ground=stage.querySelector('.badge-ground');
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const count=7,step=1/120;
 let width=0,height=0,cardWidth=238,cardHeight=326,length=140,segment=20;
 let anchor={x:0,y:8},points=[],angle=0,angularVelocity=0;
 let dragging=null,suppressClick=false,frame=0,lastTime=0,accumulator=0,quietFrames=0,visible=true;
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
 function stop(){if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;accumulator=0}
 function wake(){quietFrames=0;if(!frame&&visible&&!document.hidden&&!preference.matches){lastTime=0;frame=requestAnimationFrame(tick)}}
 function reset(animate=true){
  stop();dragging=null;badge.classList.remove('is-dragging');stage.classList.remove('is-dragging');
  const swing=animate&&!preference.matches?Math.min(26,width*.05):0;
  points=Array.from({length:count+1},(_,i)=>{const x=anchor.x+swing*Math.sin(i/count*Math.PI/2),y=anchor.y+length*i/count;return{x,y,oldX:x,oldY:y}});
  segment=length/count;angle=swing?-.07:0;angularVelocity=0;render();if(animate)wake();
 }
 function resize(){
  const nextWidth=stage.clientWidth,nextHeight=stage.clientHeight;if(!nextWidth||!nextHeight)return;
  const nextAnchorY=matchMedia('(min-width: 761px)').matches?-(stage.getBoundingClientRect().top+window.scrollY)-12:0;
  if(Math.abs(nextWidth-width)<.5&&Math.abs(nextHeight-height)<.5&&Math.abs(nextAnchorY-anchor.y)<.5)return;
  width=nextWidth;height=nextHeight;cardWidth=clamp(width*.43,194,238);cardHeight=cardWidth*1.37;
  stage.style.setProperty('--badge-width',cardWidth+'px');stage.style.setProperty('--badge-height',cardHeight+'px');
  badge.style.left='0px';badge.style.top='0px';
  anchor={x:width*.53,y:nextAnchorY};length=Math.max(120,height-cardHeight-65)-anchor.y;
  rope.setAttribute('viewBox',`0 0 ${width} ${height}`);anchorDot.setAttribute('cx',anchor.x);anchorDot.setAttribute('cy',anchor.y);
  reset(true);
 }
 function pointInStage(event){const r=stage.getBoundingClientRect();return{x:event.clientX-r.left,y:event.clientY-r.top}}
 function dragPosition(pointer){
  const margin=cardWidth*.54;
  let x=clamp(pointer.x-dragging.offsetX,margin,width-margin);
  let y=clamp(pointer.y-dragging.offsetY,38,height-cardHeight-55);
  const dx=x-anchor.x,dy=y-anchor.y,d=Math.hypot(dx,dy),max=length*1.42;
  if(d>max){x=anchor.x+dx*max/d;y=anchor.y+dy*max/d}
  return{x,y};
 }
 function simulate(){
  const end=points[count];
  for(let i=1;i<=count;i++){
   const p=points[i];if(dragging&&i===count)continue;
   const vx=(p.x-p.oldX)*.994,vy=(p.y-p.oldY)*.994;p.oldX=p.x;p.oldY=p.y;p.x+=vx;p.y+=vy+1450*step*step;
  }
  let targetSegment=length/count;
  if(dragging)targetSegment*=Math.max(1,Math.hypot(dragging.target.x-anchor.x,dragging.target.y-anchor.y)/length);
  segment+=(targetSegment-segment)*.18;
  for(let iteration=0;iteration<20;iteration++){
   points[0].x=anchor.x;points[0].y=anchor.y;
   if(dragging){end.x=dragging.target.x;end.y=dragging.target.y}
   for(let i=0;i<count;i++){
    const a=points[i],b=points[i+1],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;
    const wa=i===0?0:1,wb=(i+1===count)?(dragging?0:.22):1,total=wa+wb;if(!total)continue;
    const correction=(d-segment)/d;
    a.x+=dx*correction*wa/total;a.y+=dy*correction*wa/total;b.x-=dx*correction*wb/total;b.y-=dy*correction*wb/total;
   }
  }
  points[0].x=anchor.x;points[0].y=anchor.y;
  if(dragging){end.x=dragging.target.x;end.y=dragging.target.y}
  const previous=points[count-1],tangent=Math.atan2(end.x-previous.x,end.y-previous.y);
  const velocity=(end.x-end.oldX)/step;
  const target=clamp(-tangent*.32+velocity*.0014,-.38,.38);
  angularVelocity+=(target-angle)*33*step;angularVelocity*=Math.exp(-5.5*step);angle=clamp(angle+angularVelocity*step,-.52,.52);
 }
 function render(){
  if(!points.length)return;
  const end=points[count];let d=`M${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for(let i=1;i<points.length-1;i++){const p=points[i],next=points[i+1];d+=` Q${p.x.toFixed(2)} ${p.y.toFixed(2)} ${((p.x+next.x)/2).toFixed(2)} ${((p.y+next.y)/2).toFixed(2)}`}
  d+=` L${end.x.toFixed(2)} ${end.y.toFixed(2)}`;paths.forEach(path=>path.setAttribute('d',d));
  const roll=angle*180/Math.PI,yaw=clamp(-roll*.36,-10,10),pitch=dragging?-3:0;
  badge.style.transform=`translate3d(${(end.x-cardWidth/2).toFixed(2)}px,${(end.y+18).toFixed(2)}px,0) rotateZ(${roll.toFixed(3)}deg) rotateY(${yaw.toFixed(3)}deg) rotateX(${pitch}deg)`;
  ground.style.left=end.x+'px';ground.style.opacity=String(clamp(1-Math.abs(end.x-anchor.x)/width,.45,1));
 }
 function tick(time){
  frame=0;if(!visible||document.hidden||preference.matches)return;
  const elapsed=lastTime?Math.min((time-lastTime)/1000,.04):step;lastTime=time;accumulator+=elapsed;
  const before=points[count]?{x:points[count].x,y:points[count].y}:{x:0,y:0};
  while(accumulator>=step){simulate();accumulator-=step}render();
  const end=points[count],speed=Math.hypot(end.x-before.x,end.y-before.y);
  if(!dragging&&speed<.025&&Math.abs(angularVelocity)<.006)quietFrames++;else quietFrames=0;
  if(dragging||quietFrames<80)frame=requestAnimationFrame(tick);else{lastTime=0;accumulator=0}
 }
 function settleDirectly(){
  if(!dragging)return;
  points.forEach((p,i)=>{const t=i/count;p.x=anchor.x+(dragging.target.x-anchor.x)*t;p.y=anchor.y+(dragging.target.y-anchor.y)*t;p.oldX=p.x;p.oldY=p.y});angle=0;render();
 }
 badge.addEventListener('pointerdown',event=>{
  if(dragging||event.button!==0)return;
  const p=pointInStage(event),end=points[count];
  dragging={id:event.pointerId,offsetX:p.x-end.x,offsetY:p.y-end.y,startX:p.x,startY:p.y,lastX:p.x,lastY:p.y,lastAt:performance.now(),vx:0,vy:0,moved:false,target:{x:end.x,y:end.y}};
  suppressClick=false;badge.setPointerCapture(event.pointerId);badge.classList.add('is-dragging');stage.classList.add('is-dragging');wake();
 });
 badge.addEventListener('pointermove',event=>{
  if(!dragging||event.pointerId!==dragging.id)return;
  const p=pointInStage(event),now=performance.now(),dt=Math.max((now-dragging.lastAt)/1000,.008);
  dragging.vx=dragging.vx*.5+clamp((p.x-dragging.lastX)/dt,-650,650)*.5;dragging.vy=dragging.vy*.5+clamp((p.y-dragging.lastY)/dt,-650,650)*.5;
  dragging.lastX=p.x;dragging.lastY=p.y;dragging.lastAt=now;dragging.target=dragPosition(p);
  if(Math.hypot(p.x-dragging.startX,p.y-dragging.startY)>5)dragging.moved=true;
  if(preference.matches)settleDirectly();else wake();
 });
 function release(event,cancelled=false){
  if(!dragging||event.pointerId!==dragging.id)return;
  suppressClick=dragging.moved||cancelled;
  const end=points[count],stale=performance.now()-dragging.lastAt>120;
  end.oldX=end.x-(stale?0:dragging.vx)*step;end.oldY=end.y-(stale?0:dragging.vy)*step;
  angularVelocity+=clamp(dragging.vx*.002,-1.1,1.1);dragging=null;badge.classList.remove('is-dragging');stage.classList.remove('is-dragging');
  if(badge.hasPointerCapture(event.pointerId))badge.releasePointerCapture(event.pointerId);
  if(preference.matches)reset(false);else wake();
 }
 badge.addEventListener('pointerup',event=>release(event));badge.addEventListener('pointercancel',event=>release(event,true));
 badge.addEventListener('lostpointercapture',event=>{if(dragging)release(event,true)});
 badge.addEventListener('click',event=>{
  if(suppressClick&&event.detail!==0){suppressClick=false;event.preventDefault();return}
  const flipped=badge.classList.toggle('is-flipped');badge.setAttribute('aria-pressed',String(flipped));
  badge.setAttribute('aria-label',flipped?'Back of Nathaniel Kong’s name badge. Click to show the portrait, or drag to move.':'Nathaniel Kong’s portrait name badge. Click to view the back, or drag to move.');
  if(!preference.matches){angularVelocity+=flipped ? .2 : -.2;wake()}
 });
 badge.addEventListener('keydown',event=>{
  if(event.key==='Escape'||event.key==='Home'){event.preventDefault();reset(!preference.matches);return}
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
  event.preventDefault();if(preference.matches)return;
  const end=points[count];if(event.key==='ArrowLeft')end.oldX+=1.2;if(event.key==='ArrowRight')end.oldX-=1.2;if(event.key==='ArrowUp')end.oldY+=.8;if(event.key==='ArrowDown')end.oldY-=.8;wake();
 });
 preference.addEventListener('change',()=>reset(!preference.matches));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else wake()});
 if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)wake();else stop()},{rootMargin:'100px'}).observe(stage);
 if('ResizeObserver'in window)new ResizeObserver(resize).observe(stage);
 addEventListener('resize',resize);
 document.fonts?.ready.then(resize);
 resize();
})();
