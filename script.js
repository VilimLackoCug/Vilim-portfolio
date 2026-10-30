/* =====================================================================
   1) IMAGES  (all files live in the images/ folder)
   To add a new image: drop the file into images/, then add a line here:
       myfilm:"images/myfilm.jpg",
   and use "myfilm" as the  i:  value of the game/film below.
   ===================================================================== */
const I={
  floppy:"images/floppy.png",
  polaroid:"images/polaroid.png",
  jazz:"images/jazz.jpg",
  fali:"images/fali.jpg",
  hermes:"images/hermes.jpg",
  frag:"images/frag.jpg",
 saara:"images/saara.jpg",
structure:"images/structure.jpg",
  mm:"images/mm.jpg",
  dla:"images/dla.jpg",
  wish:"images/wish.jpg",
  sober:"images/sober.jpg",
  smile:"images/smile.jpg",
  huoj:"images/huoj.jpg",
  bottle:"images/bottles.jpg",
  myhome:"images/myhome.jpg",
  inher:"images/inher.jpg",
  thirsty:"images/thirsty.jpg",
  trapped:"images/trapped.jpg",
  jewelry:"images/jewelry.jpg",
  come:"images/come.jpg",
  insomn:"images/insomn.jpg",
vivex:"images/vivex.jpg",
  love:"images/love.jpg",
 mara:"images/mara.jpg",
  rel:"images/rel.jpg",
   kodust:"images/kodust.jpg",
};
/* =====================================================================
   2) GAMES  -  list G
   One { ... } per game. Games are shown in this order (first = leftmost).
     t   title                      r   his role
     y   year (optional)            i   image key from the list above (leave out = pixel title card)
     u   link (optional, shows a button)
     tg  small tags, e.g. ["2D platformer","Steam"]
     d   description text (optional)
   Example to add:
     {t:"New Game",r:"Game designer",y:2027,i:"newgame",u:"https://...",tg:["Puzzle"],d:"Short description."},
   ===================================================================== */
const SF="Student film",MV="Music video",ANIM="Animation";
const G=[
{t:"JazzWitch",r:"Game designer & producer",y:2026,i:"jazz",u:"https://store.steampowered.com/app/4952960/JazzWitch/",tg:["2D platformer","Steam"],d:"A fast-paced 2D platformer about building speed through movement combos: chain jumps, dashes and saxophone blasts. Outrun hazards across hand-drawn dimensions to an original jazz score."},
{t:"You're Missing a Document",r:"2D art, game design & narrative",y:2026,i:"fali",u:"https://eighthart.itch.io/fali-vam-jedan-papir",tg:["itch.io"],d:"A government office, endless queues and one dreaded sentence: \"You are missing one document.\" Can you get your paperwork in order before closing time without losing your mind?"},
{t:"Frag/Mente",r:"Game designer & narrative writer",y:2026,i:"frag",u:"https://luke-slj.itch.io/fragmente",tg:["Top-down","Empathy game"],d:"A 2D top-down story game about fear, disorientation and dementia, told through an elderly person's eyes. Made for players 18 to 33 interested in empathy games."},
{t:"Void of Hermes",r:"Narrative writer & additional sounds",y:2024,i:"hermes",u:"https://verontsik.itch.io/voidofhermes",tg:["Rhythm","Typing"],d:"Type out DNA code in rhythm to progress the data analysis, while worms try to break down your ship. Balance your time wisely."},
{t:"Nine Lives of Fear",r:"Design team lead & narrative writer",y:2026,tg:["2D", "Narrative"],d:"A narrative-driven 2D adventure about a stray cat learning to survive, face his fears, and trust again."}];
/* =====================================================================
   3) FILMS  -  list F   (same idea as games, plus:)
     c    category for the filter buttons:  "d" Design | "p" Production | "e" Directing & editing
     pos  optional crop focus for the picture, e.g. "30% 50%" (left/right, up/down)
   Tip: put films with poster + description first, they look best at the front.
   ===================================================================== */
const F=[
{t:"Postponed ascension",r:"Author",y:2026,i:"ivan",c:"e",tg:[ANIM],d:"A satirical reimagining of what goes on inside the 4 walls of \"mama's boy.\" Is spiritual ascension really more important than lunch?"},
{t:"The Structure",r:"Production designer",y:2026,i:"structure",c:"d",tg:[SF,"Sci-fi","Short", "Horror"],d:"In a slightly altered Tallinn, a giant stone monolith begins to affect the city and its laws of physics. When physicist Hugo Vayas investigates the anomaly, his friend Rein Varjumäe is drawn into a struggle to conceal the truth."},
{t:"Saara",r:"Art director",y:2026,i:"saara",c:"d",tg:[SF,"Drama","Short"],d:"Saara has packed her bags yet again, searching for a place where she can finally belong. But, just as she's about to leave, she is enticed by bysterious visions and an unexpected yearning for intimacy."},
{t:"Memory Merchant",r:"Production designer",y:2026,i:"mm",c:"d",tg:[SF,"Sci-fi","Short"],d:"In the near future memories can be extracted and sold. Ill and in need of money, Magnus enters the underground memory trade."},
{t:"Don't Look Away",r:"SFX props master & set dresser",y:2026,i:"dla",c:"d",tg:[SF,"Drama","Short"],d:"Two streamers on a 24-hour challenge, one bad mushroom trip, and a night that ends with hopefully a bang."},
{t:"Wishful Thinking",r:"Production assistant",y:2026,i:"wish",c:"p",tg:[SF,"Comedy","Short"],d:"After a breakup, Lola casts a spell for the perfect boyfriend. Her mother falls for him too, and a surprising rival joins in."},
{t:"Bottlehunters",r:"Production designer",y:2026,i:"bottle",pos:"30% 50%",c:"d",tg:[SF,"Short"],d:"An elderly alcoholic, Mihhail, lives off collecting bottles, until environmental activists start collecting every bottle in the city."},
{t:"The Most Beautiful Smile in the World",r:"Costume designer",y:2025,i:"smile",c:"d",tg:[SF,"Drama","Short"],d:"Through the advice of an old man and against all odds, he finds ways to communicate with Alma. Being in love makes him forget about all the horror and deteriorating conditions in the wagon for the duration of the journey. It's about how love can give you a sense of purpose in the darkest moments of life, providing hope and strength for what lies ahead, even if only for a brief time."},
{t:"In Her Shoes",r:"Production designer",y:2024,i:"inher",c:"d",tg:[SF,"Drama","Short"],d:"A hotel maid's obsession with a foreign musician crosses every boundary, leaving her to ask: did I want to be with her, or become her?"},
{t:"Trapped",r:"Production designer",y:2024,i:"trapped",pos:"20% 50%",c:"d",tg:[SF,"Thriller","Short"],d:"A chambermaid discovers a guest is hiding his identity from the police, and must choose: execute or pardon?"},
{t:"Love Deception in Suite 21",r:"Production designer",y:2024,i:"love",c:"d",tg:[SF,"Melodrama","Short"],d:"An episode of the TV series explores the complexities of violence and the masks we wear to conceal our pain. Larissa and Antoni, a seemingly happy married couple on a getaway, find themselves in a heated argument that escalates to violence. Agnieszka, the maid, who has heard it all, decides to make a compassionate gesture towards Larissa, revealing a shared humanity despite language barriers. Their brief connection offers solace, but it's fleeting, disrupted by Antoni's return. Larissa, forced back into her facade, rejects Agnieszka completely, when their second engagement takes place. Larissa's subsequent actions reveal a profound internal conflict, ultimately culminating in a poignant moment of self-reflection."},
{t:"Insomniac",r:"Director, editor & producer",y:2023,i:"insomn",c:"e",tg:[SF,"Documentary"],d:"A student tackles his problem with long running sleep issues."},
{t:"Relentless",r:"Assistant director",y:2023,i:"rel",c:"p",tg:[SF,"Documentary"],d:"A determined young Estonian has dedicated his life to mastering the art of Muay Thai fighting while also teaching his craft to young beginners in a passionate way. His confidence and ambition have led him on the path to becoming the best of the best. Pushed to the limits by his own challenges, he has to remain a role model and inspiration to the children he teaches."},
{t:"Kodust kaugel",r:"Production designer",y:2025,i:"kodust",pos:"45% 30%",c:"d",tg:[SF,MV],d:"The latest single from margiiela’s album *HALL ALA*."},
{t:"Huojuva Torni",r:"Production assistant",y:2025,i:"huoj",c:"p",tg:[SF,MV],d:"A group of individuals with inner struggles compete in a bingo game. The tension is followed with a big fight."},
{t:"Again",r:"Production designer",y:2025,i:"mara",c:"d",tg:[SF,MV],d:"When your heart is bleeding, not even the person you love the most can help you. Inner journeys might not always be comfortable, but are definitely the way - to go through and transform."},
{t:"My Home",r:"First assistant director",y:2025,i:"myhome",pos:"45% 30%",c:"p",tg:[SF,"Musical",MV], d:"A cheerful girl Reti goes on a road trip with her friends, but having encountered two polar sides of friendship, she is now forced to understand which side is the real one for her."},
{t:"Sober Party",r:"Assistant director",y:2024,i:"sober",c:"p",tg:[SF,MV],d:"A chaotic house party and a mysterious woman force a man to dissociate into strange worlds and face his loneliness."},
{t:"Janune Delfiin",r:"Editor",y:2024,i:"thirsty",pos:"70% 50%",c:"e",tg:[SF,MV],d:"The music video follows a series of bizarre events in a store aisle, where ordinary shoppers transform into animal-like creatures, revealing their hidden desires and chaotic nature. As the chaos unfolds, a group of divine beings intervenes, locking the wild desires up."},
{t:"Rotas",r:"Producer",y:2024,i:"jewelry",c:"p",tg:[SF,MV],d:"Klawdy wakes up on a beach, setting the stage for absurdity. Through the video he experiences real life glitches, absurd creatures following him to several different locations. Finally, Klawdy accepts the new, absurd reality and sits in a drak room with the followers."},
{t:"Come Across Me",r:"Continuity",y:2024,i:"come",c:"p",tg:[SF,MV],d:"Two young people chase each other through sequences of comfort, memories and the unknown, until their bond finally breaks them free."},
{t:"Vivex",r:"Author",y:2021,i:"vivex",c:"e",tg:[ANIM],d:"Do you feel zombie-like in the morning? And do you feel tired right after waking up? Vivex is the right thing for you, then! A short animated parody advertisement for a remedy against fatigue, burnout and today's \"zombie era.\"
   }];
/* =====================================================================
   4) OTHER CREDITS - films with no picture/info yet. Format: ["Title","Role, year"],
   When a film gets a poster, remove it from here and add it to list F above.
   ===================================================================== */
const O=[["Facade","Director & editor, 2020"],["Modern Crookshow","Director & editor, 2019"]];
ot.innerHTML=O.map(o=>`<li>${o[0]}<small>${o[1]}</small></li>`).join('');
/* =====================================================================
   5) ENGINE - builds the cards, info panels, tilt, drag and filters.
   You normally don't need to edit below this line, except:
     - CH   (filter buttons)
     - the animated backgrounds at the very bottom
   ===================================================================== */
const card=(x,g,n)=>`<div class="card" tabindex="0" data-n="${n}"><div class="frame ${g?'floppy':'pol'}"><div class="art">${x.i?`<img src="${I[x.i]}" alt="${x.t}" style="object-position:${x.pos||'50% 50%'}">`:`<div class="ph">${x.t}</div>`}</div><img class="fr" alt="" src="${I[g?'floppy':'polaroid']}"></div><div class="cap">${x.t}</div></div>`;
function setup(tr,det,data,g){
 const show=x=>{det.style.animation='none';det.offsetHeight;det.style.animation='';
  det.innerHTML=(g?`<div class="bar"><i></i><i></i><i></i>&nbsp;${x.t.toUpperCase()}.EXE</div>`:`<div class="tk"><span>${x.y}</span></div>`)+
  `<div class="dg"><div class="dl"><h3>${x.t}</h3><p class="role">${x.r}${x.y?', '+x.y:''}</p></div><div class="dr">${x.tg&&x.tg.length?`<div class="tags">${x.tg.map(t=>`<span>${t}</span>`).join('')}</div>`:''}${x.d?`<p>${x.d}</p>`:`<p class="none">Synopsis coming soon.</p>`}${x.u?`<a class="btn ${g?'pk':''}" href="${x.u}" target="_blank" rel="noopener">${g?'Play or wishlist':'Watch'} ↗</a>`:''}</div></div>`};
 const sel=c=>{if(!c)return;tr.querySelectorAll('.card.on').forEach(n=>n.classList.remove('on'));c.classList.add('on');show(data[c.dataset.n])};
 const draw=f=>{tr.innerHTML=data.map((x,n)=>f(x)?card(x,g,n):'').join('');sel(tr.querySelector('.card'))};
 draw(()=>1);
 const hov=matchMedia('(hover:hover)').matches;
 tr.addEventListener('click',e=>{if(moved>6)return;sel(e.target.closest('.card'))});
 tr.addEventListener('focusin',e=>sel(e.target.closest('.card')));
 if(hov)tr.addEventListener('mouseover',e=>{const c=e.target.closest('.card');if(c&&!c.classList.contains('on'))sel(c)});
 tr.addEventListener('mousemove',e=>{const c=e.target.closest('.card');if(!c||!hov)return;const r=c.getBoundingClientRect(),f=c.firstChild;f.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*14+'deg');f.style.setProperty('--rx',(.5-(e.clientY-r.top)/r.height)*12+'deg')});
 tr.addEventListener('mouseout',e=>{const c=e.target.closest('.card');if(c){c.firstChild.style.setProperty('--rx','0deg');c.firstChild.style.setProperty('--ry','0deg')}});
 tr.addEventListener('keydown',e=>{const c=e.target.closest('.card');if(!c)return;const k=e.key=='ArrowRight'?'nextElementSibling':e.key=='ArrowLeft'?'previousElementSibling':0;if(k&&c[k]){c[k].focus();c[k].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});e.preventDefault()}});
 return draw}
let moved=0;
function drag(t){let d=0,sx,sl;t.addEventListener('pointerdown',e=>{if(e.pointerType!='mouse')return;d=1;moved=0;sx=e.clientX;sl=t.scrollLeft});
 addEventListener('pointermove',e=>{if(!d)return;const dx=e.clientX-sx;moved=Math.max(moved,Math.abs(dx));if(moved>6){t.style.scrollSnapType='none';t.style.cursor='grabbing';t.scrollLeft=sl-dx}});
 addEventListener('pointerup',()=>{if(!d)return;d=0;t.style.scrollSnapType='';t.style.cursor='';setTimeout(()=>moved=0,0)})}
setup(gt,gd,G,true);const drawF=setup(ft,fd,F,false);
document.querySelectorAll('.car').forEach(c=>{const t=c.querySelector('.track');drag(t);c.querySelector('.l').onclick=()=>t.scrollBy({left:-300,behavior:'smooth'});c.querySelector('.r').onclick=()=>t.scrollBy({left:300,behavior:'smooth'});
 // Show arrows only when the row is wider than the screen; hide the left one at the start and the right one at the end.
 const L=c.querySelector('.l'),Rr=c.querySelector('.r'),up=()=>{const o=t.scrollWidth>t.clientWidth+2;L.classList.toggle('off',!o||t.scrollLeft<=2);Rr.classList.toggle('off',!o||t.scrollLeft+t.clientWidth>=t.scrollWidth-2)};
 t.addEventListener('scroll',up,{passive:true});new ResizeObserver(up).observe(t);new MutationObserver(up).observe(t,{childList:true});up()});
/* Filter buttons for films: ["category letter","Label"]. Letters must match the  c:  values in list F. */
const CH=[["all","All"],["d","Design"],["p","Production"],["e","Directing & editing"]];
ch.innerHTML=CH.map((c,i)=>`<button class="chip ${i?'':'on'}" data-c="${c[0]}">${c[1]}</button>`).join('');
ch.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;ch.querySelectorAll('.on').forEach(n=>n.classList.remove('on'));b.classList.add('on');drawF(x=>b.dataset.c=='all'||x.c==b.dataset.c);ft.scrollTo({left:0,behavior:'smooth'})};
const fl=document.getElementById('fl');
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;fl.querySelectorAll('.fl').forEach(n=>{const d=+n.dataset.d;n.style.transform=`translate(${x*d*2}px,${y*d*2}px) rotate(${x*d/3}deg)`})});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section').forEach(s=>io.observe(s));

/* =====================================================================
   6) ANIMATED BACKGROUNDS
   hero()  = Balkan cross-stitch embroidery bands (colors in COL: red, ochre, cream as "r,g,b")
   bg(...,"g") = games: drifting pixels + scanline   bg(...,"f") = films: dust, light leak, scratches
   Density/speed numbers are inside each function. To remove one, delete its call on the last lines.
   ===================================================================== */
function bg(sec,k){const c=document.createElement('canvas');c.className='bgc';sec.prepend(c);const x=c.getContext('2d'),R=Math.random;let W,H,P,on=0,t=0,sc=0;
 const mk=()=>k=='g'?{x:R()*W,y:R()*H,s:[3,4,6][R()*3|0],v:.15+R()*.45,c:['111,140,255','255,92,147','241,236,255'][R()*3|0],p:R()*6}:{x:R()*W,y:R()*H,r:.5+R()*1.8,vx:(R()-.5)*.3,vy:-.1-R()*.25,p:R()*6,c:R()<.7?'255,240,215':'240,195,106'};
 const rs=()=>{W=c.width=sec.clientWidth;H=c.height=sec.clientHeight;P=Array.from({length:Math.round(W*H/(k=='g'?15000:8000))},mk)};
 const f=()=>{if(!on)return;t++;x.clearRect(0,0,W,H);
  if(k=='g'){P.forEach(p=>{p.y-=p.v;if(p.y<-8){p.y=H+8;p.x=R()*W}x.fillStyle=`rgba(${p.c},${.12+.28*Math.abs(Math.sin(t/50+p.p))})`;x.fillRect(p.x-p.x%p.s,p.y-p.y%p.s,p.s,p.s)});
   sc=(sc+1.2)%(H+120);const g=x.createLinearGradient(0,sc-120,0,sc);g.addColorStop(0,'rgba(111,140,255,0)');g.addColorStop(1,'rgba(111,140,255,.07)');x.fillStyle=g;x.fillRect(0,sc-120,W,120)}
  else{const lx=W*(.5+.4*Math.sin(t/400)),g=x.createRadialGradient(lx,H*.3,0,lx,H*.3,W*.45);g.addColorStop(0,'rgba(240,150,70,.12)');g.addColorStop(1,'rgba(240,150,70,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
   P.forEach(p=>{p.x+=p.vx+Math.sin(t/60+p.p)*.15;p.y+=p.vy;if(p.y<-5){p.y=H+5;p.x=R()*W}if(p.x<-5)p.x=W+5;if(p.x>W+5)p.x=-5;x.fillStyle=`rgba(${p.c},${.15+.35*Math.abs(Math.sin(t/40+p.p))})`;x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fill()});
   if(R()<.05){x.fillStyle='rgba(255,240,215,'+(.06+R()*.1)+')';x.fillRect(R()*W,0,1,H)}
   if(R()<.1){x.fillStyle='rgba(255,215,150,.025)';x.fillRect(0,0,W,H)}}
  requestAnimationFrame(f)};
 rs();new ResizeObserver(rs).observe(sec);
 new IntersectionObserver(e=>{const v=e[0].isIntersecting;if(v&&!on){on=1;f()}else if(!v)on=0}).observe(sec)}

function hero(h){const c=document.createElement('canvas');c.className='bgc';h.prepend(c);const x=c.getContext('2d');let W,H,t=0,on=0;
 const CS=9,N=9,GAP=2,TW=N+GAP,COL=['200,50,60','240,195,106','241,236,255'];
 const rs=()=>{W=c.width=h.clientWidth;H=c.height=h.clientHeight};rs();new ResizeObserver(rs).observe(h);
 const cell=(i,j)=>{const m=((i%TW)+TW)%TW;if(m>=N)return -1;const d=Math.abs(m-4)+Math.abs(j-4);return d>4?-1:d==0?1:d==4?1:d%2?0:2};
 function band(y0,dir){const off=t*.22*dir;
  for(let k=-1;k<W/CS+2;k++){const px=k*CS-(off%(TW*CS)),i=Math.round((px+off)/CS),rv=Math.min(1,Math.max(0,(t*9-px)/90));if(rv<=0)continue;
   for(let j=-2;j<=N+1;j++){let q=-1;if(j==-2||j==N+1)q=(i%2==0)?1:-1;else if(j>=0&&j<N)q=cell(i,j);if(q<0)continue;
    const a=rv*(.18+.17*Math.sin(t/35-px/90+j/3));x.strokeStyle=`rgba(${COL[q]},${a})`;const X=px,Y=y0+(j+2)*CS;x.beginPath();x.moveTo(X+1,Y+1);x.lineTo(X+CS-1,Y+CS-1);x.moveTo(X+CS-1,Y+1);x.lineTo(X+1,Y+CS-1);x.stroke()}}}
 const f=()=>{if(!on)return;t++;x.clearRect(0,0,W,H);x.lineWidth=1.6;x.lineCap='round';band(H*.03,1);band(H-(N+4)*CS-H*.03,-1);requestAnimationFrame(f)};
 new IntersectionObserver(e=>{const v=e[0].isIntersecting;if(v&&!on){on=1;f()}else if(!v)on=0}).observe(h)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){hero(document.querySelector('.hero'));bg(document.getElementById('games'),'g');bg(document.getElementById('films'),'f')}
