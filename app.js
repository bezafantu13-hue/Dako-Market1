(function(){
var LG='logo.webp';
var CFG=window.DAKO_CONFIG||{},PROD=!!(CFG.supabaseUrl&&CFG.supabaseKey);
var PL=['Facebook','TikTok','Instagram','Telegram','YouTube'];
var BR={
Facebook:['#1877F2','<path fill="#fff" d="M14 8h2V5h-2.500C11 5 10 6.500 10 8.500V10H8v3h2v6h3v-6h2l.500-3H13V8.700c0-.500.300-.700 1-.700z"/>'],
TikTok:['#010101','<path fill="#25f4ee" transform="translate(-.8 -.8)" d="M13 4h2.500c.3 1.800 1.400 3 3.500 3.200v2.600c-1.300 0-2.500-.4-3.500-1.100V15a4.500 4.500 0 1 1-4.500-4.500c.3 0 .7 0 1 .1v2.700a1.900 1.900 0 1 0 1 1.700z"/><path fill="#fe2c55" transform="translate(.8 .8)" d="M13 4h2.500c.3 1.800 1.400 3 3.500 3.200v2.600c-1.300 0-2.500-.4-3.500-1.100V15a4.500 4.500 0 1 1-4.500-4.500c.3 0 .7 0 1 .1v2.700a1.900 1.900 0 1 0 1 1.700z"/><path fill="#fff" d="M13 4h2.500c.3 1.800 1.400 3 3.500 3.200v2.600c-1.300 0-2.500-.4-3.500-1.100V15a4.500 4.500 0 1 1-4.500-4.500c.3 0 .7 0 1 .1v2.700a1.900 1.900 0 1 0 1 1.700z"/>'],
Instagram:['linear-gradient(45deg,#fdc468,#f7792d 30%,#d6249f 60%,#5b51d8)','<g fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.800"/></g><circle cx="17" cy="7" r="1.200" fill="#fff"/>'],
Telegram:['#27A7E7','<path fill="#fff" d="M3 11.500 20.500 5 17.500 19 12 15.500 9.500 18 9 13.500z"/>'],
YouTube:['#FF0000','<path fill="#fff" d="M10 8.500v7l6-3.500z"/>']};
function bt(p,l){var b=BR[p]||['#444',''];return '<span class="bt'+(l?' '+(l===1?'l':l):'')+'" style="background:'+b[0]+'"><svg viewBox="0 0 24 24">'+b[1]+'</svg></span>'}
var STEPS=['Awaiting payment','Verifying payment','Awaiting handover','Awaiting buyer confirmation','Awaiting admin release','Funds released'];
var SORTS=[['new','Newest'],['lo','Cheapest'],['hi','Most expensive'],['fa','Followers: low to high'],['fd','Followers: high to low']];
var FEE=.05,COM=.10,$=function(i){return document.getElementById(i)};
function E(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function N(x){return Number(x).toLocaleString('en-US')}
var DEFPA=[{m:'Telebirr',nm:'Balemlay Dereje',no:'0961990973'},{m:'CBE Birr',nm:'Addisu',no:'0912122880'},{m:'CBE (Commercial Bank of Ethiopia)',nm:'Balemlay Dereje',no:'1000766192247'}];
function dpa(){return JSON.parse(JSON.stringify(DEFPA))}
var seedL=[
{id:1,s:'s0',p:'YouTube',m:1,t:'Ethiopian food channel',f:48200,a:3.5,i:21000,r:185000,d:'AdSense connected, 3 videos per week.',x:'ok'},
{id:2,s:'s0',p:'TikTok',m:0,t:'Comedy page, high engagement',f:126000,a:1.5,i:0,r:38000,d:'Audience mostly from Addis Ababa, 8% engagement.',x:'ok'},
{id:3,s:'s0',p:'Facebook',m:1,t:'Business news page',f:92000,a:5,i:9500,r:72000,d:'In-stream ads enabled.',x:'ok'},
{id:4,s:'s0',p:'Telegram',m:0,t:'Job listings channel',f:31500,a:2.5,i:0,r:24000,d:'Over 12k daily views.',x:'ok'},
{id:5,s:'s0',p:'Instagram',m:0,t:'Fashion and beauty page',f:18700,a:2,i:0,r:15000,d:'Organic growth.',x:'ok'}];
var S={u:[{id:'a0',n:'Admin (demo)',e:'admin@dako.demo',h:'',role:'admin',v:1},{id:'s0',n:'Dawit (demo seller)',e:'seller@dako.demo',h:'',role:'seller',v:1,pay:{m:'Telebirr',nm:'Dawit',no:'0911000000'}}],l:seedL,o:[],po:[],dp:[],nf:[],sup:'',pa:dpa(),me:null,tab:'market',pl:'All',mon:'all',sort:'new',q:'',as:'list',mode:'in',f:{}};
if(PROD){S.u=[];S.l=[]}
var SH=[],RC=null,KI={};
var KL={none:'Not verified',pe:'Under review',ok:'Verified',no:'Rejected'},KC={none:'',pe:'m',ok:'ok',no:'bd'};
function kst(u){return u.k?u.k.st:(u.v?'ok':'none')}
function sv(){if(PROD)return true;try{localStorage.setItem('dako4',JSON.stringify(S));return true}catch(e){return false}}
try{var d=PROD?null:JSON.parse(localStorage.getItem('dako4')||'null');if(d&&d.u&&d.l){S=d;S.f=S.f||{};S.po=S.po||[];S.pa=S.pa||dpa();S.dp=S.dp||[];S.nf=S.nf||[];S.sup=S.sup||''}}catch(e){}
function me(){return S.u.filter(function(x){return x.id===S.me})[0]||null}
function prc(o){return o.pr!=null?o.pr:Math.round(o.amt/(1+FEE))}
function netOf(o){return o.net!=null?o.net:prc(o)-Math.round(prc(o)*COM)}
function wal(uid){if(DB&&DB_USER&&uid===DB_USER.id&&S.wal)return S.wal;var rel=0,lk=0,dep=0,sp=0,all=0,pd=0,rq=0;
 S.o.forEach(function(o){if(o.s===uid&&!o.rf){if(o.st>=1&&o.st<=4)lk+=netOf(o);else if(o.st===5)rel+=netOf(o)}if(o.b===uid&&o.wp&&!o.rf)sp+=o.amt});
 S.dp.forEach(function(d){if(d.u===uid&&d.st==='ok')dep+=d.amt});
 S.po.forEach(function(p){if(p.s!==uid)return;all+=p.amt;if(p.st==='pd')pd+=p.amt;else rq+=p.amt});
 return {lk:lk,av:rel+dep-sp-all,pd:pd,rq:rq,rel:rel,dep:dep}}
function nfy(uid,tx){S.nf.unshift({id:Date.now()+Math.random(),u:uid,tx:tx,t:Date.now(),rd:0});if(S.nf.length>200)S.nf.length=200}
function nfyA(tx){S.u.forEach(function(x){if(x.role==='admin')nfy(x.id,tx)})}
function ago(t){var m=Math.round((Date.now()-t)/60000);return m<1?'just now':m<60?m+' min ago':m<1440?Math.round(m/60)+' h ago':Math.round(m/1440)+' d ago'}
function heart(id){var on=(me().fv||[]).indexOf(id)>-1;return '<button class="hrt" data-a="fav" data-v="'+id+'" aria-pressed="'+on+'" aria-label="Favorite">'+(on?'♥':'♡')+'</button>'}
function accts(){return S.pa.map(function(x){return '<div class="card" style="margin:8px 0"><div class="ct"><b>'+E(x.m)+'</b><button class="btn sx" data-a="cp" data-v="'+E(x.no)+'">Copy number</button></div><div style="font-size:19px;font-weight:800;letter-spacing:.5px">'+E(x.no)+'</div><div class="sm">Account name: '+E(x.nm)+'</div></div>'}).join('')}
function walBlock(o){var w=wal(me().id);return w.av>=o.amt?'<div class="card" style="margin:8px 0"><div class="ct"><b>Wallet balance</b><span class="pr" style="font-size:17px">'+N(w.av)+' ETB</span></div><button class="btn" style="margin-top:8px" data-a="walpay" data-v="'+o.id+'">Pay with wallet balance</button></div><div class="sm" style="text-align:center">or pay by transfer</div>':'<div class="sm">Wallet balance: <b>'+N(Math.max(0,w.av))+' ETB</b>. <button class="lnk" data-a="dpopen">Deposit funds</button> to pay instantly next time.</div>'}
function dpSheet(){RC=null;
 sheet('<h2>Deposit funds</h2><p class="sm">Send ETB to one of the accounts below, then upload your receipt. The admin verifies it and adds the amount to your wallet.</p>'+accts()+'<h2>Submit your deposit</h2><div class="f"><label for="da">Amount (ETB)</label><input id="da" type="number" min="100" inputmode="numeric" placeholder="Minimum 100"></div><div class="f"><label for="pmth">I paid with</label><select id="pmth">'+S.pa.map(function(x){return '<option>'+E(x.m)+'</option>'}).join('')+'</select></div><div class="f"><label>Payment receipt (screenshot or photo)</label><div id="rcp"></div><input id="rcf" type="file" accept="image/*" hidden><button class="btn dk" data-a="pickRc">＋ Upload receipt</button></div><div class="f"><label for="rcr">Transaction reference (optional)</label><input id="rcr" autocomplete="off"></div><button class="btn" data-a="dpsubmit">Submit deposit</button><button class="btn dk" data-a="shut">Cancel</button>');
}
function pdSheet(){var u=me();sheet('<h2>Personal details</h2><div class="f"><label for="pdn">Full name</label><input id="pdn" value="'+E(u.n)+'"></div><div class="f"><label for="pdp">Phone</label><input id="pdp" type="tel" value="'+E(u.ph||'')+'"></div><div class="f"><label>Email</label><input value="'+E(u.e)+'" disabled></div><button class="btn" data-a="savePd">Save</button><button class="btn dk" data-a="shut">Cancel</button>')}
function secSheet(){sheet('<h2>Security and devices</h2><div class="card" style="margin:8px 0"><div class="ct"><b>This device</b><span class="tag ok">Active now</span></div><div class="sm">You are signed in on this device only (demo).</div></div><h2>Change password</h2><div class="f"><label for="cp0">Current password</label><input id="cp0" type="password" autocomplete="current-password"></div><div class="f"><label for="cp1">New password</label><input id="cp1" type="password" autocomplete="new-password" placeholder="At least 6 characters"></div><div class="f"><label for="cp2">Confirm new password</label><input id="cp2" type="password" autocomplete="new-password"></div><button class="btn" data-a="chpw">Update password</button><button class="btn dk" data-a="shut">Close</button>')}
async function chPw(){var u=me(),a=$('cp0').value,b=$('cp1').value,c=$('cp2').value;if(!u.h){tt('Demo accounts cannot change the password');return}if(b.length<6){tt('New password needs 6+ characters');return}if(b!==c){tt('Passwords do not match');return}if(await sha(a)!==u.h){tt('Current password is incorrect');return}u.h=await sha(b);sv();shut();tt('Password updated')}
function paySett(){var u=me(),p=u.pay||{m:'Telebirr',nm:'',no:''};sheet('<h2>Payout account</h2><p class="sm">Where your withdrawals are sent. Double-check the details.</p><div class="f"><label for="pm">Method</label><select id="pm">'+['Telebirr','CBE','Awash Bank','Dashen Bank','Abyssinia Bank','CBE Birr'].map(function(x){return '<option'+(x===p.m?' selected':'')+'>'+x+'</option>'}).join('')+'</select></div><div class="f"><label for="pn">Account holder name</label><input id="pn" value="'+E(p.nm)+'"></div><div class="f"><label for="po">Phone / account number</label><input id="po" inputmode="numeric" value="'+E(p.no)+'"></div><button class="btn" data-a="savePay">Save</button><button class="btn dk" data-a="shut">Cancel</button>')}
function mychSheet(){var u=me(),a=S.l.filter(function(l){return l.s===u.id&&l.x!=='rm'}),lb={ok:'Live',pe:'Pending review',rj:'Rejected',rs:'Reserved',sd:'Sold'};
 sheet('<h2>My channels</h2>'+(a.length?a.map(function(x){return '<div class="card" style="margin:8px 0"><div class="ct"><span class="pl">'+bt(x.p)+E(x.p)+'</span><span class="tag '+(x.x==='ok'||x.x==='sd'?'ok':'m')+'">'+lb[x.x]+'</span></div><div>'+E(x.t)+'</div><div class="sm">Listed '+N(x.r)+' ETB · You receive '+N(x.r-Math.round(x.r*COM))+' ETB</div>'+(x.x==='rj'&&x.note?'<div class="sm">Reason: '+E(x.note)+'</div>':'')+(x.x==='ok'||x.x==='pe'||x.x==='rj'?'<button class="btn sx rd" style="margin-top:8px" data-a="mylrm" data-v="'+x.id+'">Remove listing</button>':'')+'</div>'}).join(''):'<div class="em">You have no channels yet.</div>')+'<button class="btn dk" data-a="shut">Close</button>')}
function favSheet(){var f=me().fv||[],a=S.l.filter(function(l){return f.indexOf(l.id)>-1&&l.x==='ok'});sheet('<h2>Favorites</h2>'+(a.length?lst(a):'<div class="em">No favorites yet. Tap the heart on any account.</div>')+'<button class="btn dk" data-a="shut">Close</button>')}
function bellSheet(){var u=me(),a=S.nf.filter(function(n){return n.u===u.id}).slice(0,40);
 sheet('<h2>Notifications</h2>'+(a.length?a.map(function(n){return '<div class="card" style="margin:8px 0;padding:11px 14px"><div>'+E(n.tx)+'</div><div class="sm">'+ago(n.t)+'</div></div>'}).join(''):'<div class="em">No notifications yet.</div>')+'<button class="btn dk" data-a="shut">Close</button>');
 a.forEach(function(n){n.rd=1});sv();var d=document.querySelector('.ib .dot');if(d)d.remove()}
function netTxt(v){return v>0?'Buyers will see <b>'+N(v)+' ETB</b>. After the 10% platform commission, you receive <b>'+N(v-Math.round(v*COM))+' ETB</b>.':'Enter a price to see what you will receive after the 10% platform commission.'}
function tt(t){var e=$('tt');e.textContent=t;e.classList.remove('hidden');clearTimeout(tt.h);tt.h=setTimeout(function(){e.classList.add('hidden')},2600)}
async function sha(s){try{var b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')}catch(e){return 'x'+s.length+s}}
function sheet(h){$('panel').innerHTML=h;$('sheet').classList.remove('hidden')}function shut(){$('sheet').classList.add('hidden')}

function authView(){
 var up=S.mode==='up',connected=!!DB;
 $('app').innerHTML='<div class="auth"><div class="ab"><div class="hero"><img src="'+LG+'" alt="Dako Market"></div><div class="ac"><div class="seg"><button data-a="mode" data-v="in" aria-pressed="'+!up+'">Log in</button><button data-a="mode" data-v="up" aria-pressed="'+up+'">Sign up</button></div>'+
 (up?'<div class="f"><label for="an">Full name</label><input id="an" autocomplete="name"></div>':'')+
 '<div class="f"><label for="ae">Email</label><input id="ae" type="email" autocomplete="email"></div><div class="f"><label for="ap">Password</label><input id="ap" type="password" autocomplete="'+(up?'new-password':'current-password')+'" placeholder="At least 6 characters"></div>'+
 (up?'<div class="f"><label for="ar">I am a</label><select id="ar"><option value="buyer">Buyer</option><option value="seller">Seller</option></select></div>':'')+
 '<button class="btn" data-a="auth">'+(up?'Create account':'Log in')+'</button>'+(up?'':'<button class="lnk" style="display:block;margin:12px auto 0" data-a="forgot">Forgot password?</button>')+
 (PROD?'':'<button class="btn dk" data-a="demo" '+(connected?'style="display:none"':'')+'>View admin demo</button>')+
 (PROD?'':'<div class="nt" style="margin-top:12px">'+(connected?'Supabase connected · Auth and listings use backend mode.':'Demo mode · Local data only. Connect Supabase to enable backend accounts and listings.')+'</div>')+
 (PROD?'':'<button class="btn dk" data-a="sbconfig">⚙ Supabase settings</button>'+
 '<div id="sbsettings" class="'+(connected?'':'hidden')+'" style="margin-top:12px">'+
 '<div class="f"><label for="sburl">Project URL</label><input id="sburl" type="url" placeholder="https://your-project.supabase.co" value="'+E(DB_URL)+'"></div>'+
 '<div class="f"><label for="sbkey">Anon / Publishable key</label><input id="sbkey" placeholder="sb_publishable_… or anon key" value="'+E(DB_KEY)+'"></div>'+
 '<button class="btn" data-a="sbsave">Save & connect</button><button class="btn rd" data-a="sbclear">Disconnect Supabase</button>'+
 '<p class="sm">Use anon / publishable key only. Never enter a service_role key.</p></div>')+
 '<p class="sm" style="text-align:center;margin:10px 0 0">DAKO MARKET · 10% platform commission</p></div></div></div>';
 if(connected&&!PROD){$('sburl').value=DB_URL;$('sbkey').value=DB_KEY}
}
async function doAuth(){
 var e=($('ae').value||'').trim().toLowerCase(),p=$('ap').value||'';
 if(!e||p.length<6){tt('Enter a valid email and a password of 6+ characters');return}
 if(PROD&&!DB){tt('Cannot reach the server. Check your connection and reload.');return}
 if(DB){
  try{
   if(S.mode==='up'){
    var nm=($('an').value||'').trim();if(!nm){tt('Enter your name');return}
    var role=$('ar').value;
    var {data,error}=await DB.auth.signUp({email:e,password:p,options:{data:{full_name:nm,role:role}}});
    if(error)throw error;
    if(data.session){await backendLogin(data.user);tt('Account created and signed in')}
    else tt('Signup submitted. Check email if confirmation is enabled.');
   }else{
    var {data,error}=await DB.auth.signInWithPassword({email:e,password:p});if(error)throw error;
    await backendLogin(data.user);tt('Logged in');
   }
  }catch(err){tt('Supabase auth error: '+(err.message||err))}
  return;
 }
 var h=await sha(p),u=S.u.filter(function(x){return x.e===e})[0];
 if(S.mode==='up'){
  if(u){tt('This email is already registered');return}
  var nm=($('an').value||'').trim();if(!nm){tt('Enter your name');return}
  u={id:'u'+Date.now(),n:nm,e:e,h:h,role:$('ar').value,v:0};S.u.push(u);
 }else if(!u||!u.h||u.h!==h){tt('Incorrect email or password');return}
 if(u.b){tt('Your account is suspended. Contact the admin');return}
 S.me=u.id;S.tab=u.role==='admin'?'admin':'dash';sv();render();
}
function nav(){var CT=S.tab==='lv'?(S.back==='chan'?'acct':(S.back||'market')):S.tab==='chan'?'acct':S.tab,u=me(),ad=u.role==='admin',t=[[ad?'admin':'dash','▦',ad?'Admin':'Dashboard'],['market','🏪','Market'],['sell','＋','Sell'],['orders','🧾','Orders'],['acct','👤','Account']];
 return '<nav class="tb"><div>'+t.map(function(x){var cur=CT===x[0]?' aria-current="page"':'';if(x[0]==='sell')return '<button class="sellb" data-a="tab" data-v="sell"'+cur+'><b>＋</b><span>Sell</span></button>';return '<button data-a="tab" data-v="'+x[0]+'"'+cur+'><span>'+x[1]+'</span>'+x[2]+'</button>'}).join('')+'</div></nav>';
}
function top(){var u=me(),w=wal(u.id),un=S.nf.filter(function(n){return n.u===u.id&&!n.rd}).length,tg='<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#fff" d="M3 11.500 20.500 5 17.500 19 12 15.500 9.500 18 9 13.500z"/></svg>',
 sp=/^https:\/\/(t\.me|telegram\.me)\//.test(S.sup)?'<a class="ib tgb" href="'+E(S.sup)+'" target="_blank" rel="noopener noreferrer" aria-label="Telegram support">'+tg+'</a>':'<button class="ib tgb" data-a="support" aria-label="Telegram support">'+tg+'</button>';
 return '<header class="top"><div class="w"><div class="bar"><img class="lg" src="'+LG+'" alt="Dako Market"><div class="hb">'+sp+'<button class="ib" data-a="bell" aria-label="Notifications">🔔'+(un?'<i class="dot"></i>':'')+'</button><button class="chipw" data-a="tab" data-v="dash" aria-label="Wallet balance">🪙 '+N(Math.max(0,w.av))+' ETB</button></div></div>'+(S.tab==='market'?'<input id="q" class="q" type="search" placeholder="🔎 Search accounts…" value="'+E(S.q)+'" aria-label="Search">':'')+'</div></header>'}

function nf(){var f=S.f,c=0;['pmin','pmax','fmin','fmax'].forEach(function(k){if(f[k]!==undefined&&f[k]!==''&&f[k]!==null)c++});return c}
function flt(){
 var q=S.q.toLowerCase(),f=S.f;
 var a=S.l.filter(function(x){
  return x.x==='ok'&&(S.pl==='All'||x.p===S.pl)&&(S.mon==='all'||String(x.m)===S.mon)&&(x.p+x.t+x.d).toLowerCase().indexOf(q)>-1
   &&(f.pmin==null||x.r>=f.pmin)&&(f.pmax==null||x.r<=f.pmax)&&(f.fmin==null||x.f>=f.fmin)&&(f.fmax==null||x.f<=f.fmax)});
 a.sort(function(x,y){return S.sort==='lo'?x.r-y.r:S.sort==='hi'?y.r-x.r:S.sort==='fa'?x.f-y.f:S.sort==='fd'?y.f-x.f:y.id-x.id});
 return a;
}
function vMarket(){
 var n=nf();
 return '<div class="row"><button class="chip t" data-a="pl" data-v="All" aria-pressed="'+(S.pl==='All')+'">All</button>'+PL.map(function(p){return '<button class="chip" data-a="pl" data-v="'+p+'" aria-pressed="'+(S.pl===p)+'">'+bt(p)+p+'</button>'}).join('')+'</div>'+
 '<div class="seg">'+[['all','All'],['1','Monetized'],['0','Non-monetized']].map(function(x){return '<button data-a="mon" data-v="'+x[0]+'" aria-pressed="'+(S.mon===x[0])+'">'+x[1]+'</button>'}).join('')+'</div>'+
 '<div class="row" style="padding-top:2px"><button class="chip t" data-a="fopen">⚙ Filters'+(n?' <span class="fb">'+n+'</span>':'')+'</button>'+SORTS.map(function(x){return '<button class="chip t" data-a="sort" data-v="'+x[0]+'" aria-pressed="'+(S.sort===x[0])+'">'+x[1]+'</button>'}).join('')+'</div><div id="lst">'+lst(flt())+'</div>';
}
function fsheet(){
 var f=S.f,v=function(k){return f[k]==null?'':f[k]};
 sheet('<h2>Filters</h2><p class="sm">Narrow the results by price and follower count.</p><div class="f"><label>Price (ETB)</label><div class="two"><input id="fp1" type="number" min="0" inputmode="numeric" placeholder="Min" value="'+v('pmin')+'" aria-label="Minimum price"><input id="fp2" type="number" min="0" inputmode="numeric" placeholder="Max" value="'+v('pmax')+'" aria-label="Maximum price"></div></div><div class="f"><label>Followers</label><div class="two"><input id="ff1" type="number" min="0" inputmode="numeric" placeholder="Min" value="'+v('fmin')+'" aria-label="Minimum followers"><input id="ff2" type="number" min="0" inputmode="numeric" placeholder="Max" value="'+v('fmax')+'" aria-label="Maximum followers"></div></div><div class="f"><label for="fs">Sort by</label><select id="fs">'+SORTS.map(function(x){return '<option value="'+x[0]+'"'+(S.sort===x[0]?' selected':'')+'>'+x[1]+'</option>'}).join('')+'</select></div><button class="btn" data-a="fapply">Show results</button><button class="btn dk" data-a="freset">Reset filters</button>');
}
function lst(a){return a.length?a.map(function(x){var s=S.u.filter(function(u){return u.id===x.s})[0];return '<div class="card" role="button" tabindex="0" data-a="lview" data-v="'+x.id+'"><div class="ct"><span class="pl">'+bt(x.p,1)+x.p+'</span><span style="display:flex;gap:8px;align-items:center"><span class="tag'+(x.m?' m':'')+'">'+(x.m?'Monetized':'Non-monetized')+'</span>'+heart(x.id)+'</span></div>'+(x.im&&x.im[0]?'<img class="th" src="'+x.im[0]+'" alt="Account screenshot">'+(x.im.length>1?'<div class="sm" style="margin-top:4px">📷 '+x.im.length+' photos</div>':''):'<div class="ph">No screenshot added (demo)</div>')+'<h3>'+E(x.t)+'</h3><div class="st"><span><b>'+N(x.f)+'</b> followers</span><span><b>'+x.a+'</b> yr old</span>'+(x.m?'<span><b>'+N(x.i)+'</b> ETB/mo</span>':'')+'</div><div class="cb"><div><div class="sm">Price</div><div class="pr">'+N(x.r)+' ETB</div></div><span class="vr">'+(s&&s.v?'✔ Verified seller':'')+'</span></div></div>'}).join(''):'<div class="em">No accounts match. Try changing the filters.</div>'}
function det(id){
 var x=S.l.filter(function(y){return y.id===id})[0];if(!x)return;var fee=Math.round(x.r*FEE);
 sheet('<div class="ct"><span class="pl">'+bt(x.p,1)+x.p+'</span><span style="display:flex;gap:8px;align-items:center"><span class="tag'+(x.m?' m':'')+'">'+(x.m?'Monetized':'Non-monetized')+'</span>'+heart(x.id)+'</span></div><h2>'+E(x.t)+'</h2>'+(x.im&&x.im.length?'<div class="gal">'+x.im.map(function(g,i){return '<img src="'+g+'" alt="Screenshot '+(i+1)+'">'}).join('')+'</div>':'')+(x.k&&/^https?:\/\//.test(x.k)?'<a class="lk" href="'+E(x.k)+'" target="_blank" rel="noopener noreferrer">🔗 '+E(x.k)+'</a>':'')+'<p>'+E(x.d)+'</p><div class="kv"><div><span class="sm">Followers</span><b>'+N(x.f)+'</b></div><div><span class="sm">Account age</span><b>'+x.a+' years</b></div><div><span class="sm">Monthly income</span><b>'+(x.m?N(x.i)+' ETB':'None')+'</b></div><div><span class="sm">Service fee (5%)</span><b>'+N(fee)+' ETB</b></div></div><div class="card" style="margin:8px 0"><div class="ct"><b>Total</b><span class="pr">'+N(x.r+fee)+' ETB</span></div></div><div class="nt">Your money is held in escrow. It is released to the seller only after you receive the account and confirm. Never pay outside the platform.</div><button class="btn" data-a="buy" data-v="'+x.id+'">Buy now</button><button class="btn dk" data-a="shut">Close</button>');
}
function kycCard(u){var st=kst(u),k=u.k||{},t={none:'Verify your identity to list accounts and receive payouts.',pe:'Your documents were submitted. The admin will review them soon.',ok:'Your identity is verified. Buyers see a verified seller badge.',no:'Rejected: '+(k.note||'Please resubmit clear documents.')};
 return '<div class="card"><div class="ct"><b>Identity verification (KYC)</b><span class="tag '+KC[st]+'">'+KL[st]+'</span></div><p class="sm" style="margin:6px 0 10px">'+E(t[st])+'</p>'+(st==='ok'||st==='pe'?'':'<button class="btn" data-a="kycopen">'+(st==='no'?'Resubmit KYC':'Start KYC')+'</button>')+'</div>'}
function slot(k,l){return '<div class="f"><label>'+l+'</label><div id="kp-'+k+'"></div><input id="ki-'+k+'" type="file" accept="image/*" hidden><button class="btn dk" data-a="pickKi" data-v="'+k+'">＋ Upload photo</button></div>'}
function kycSheet(){KI={};
 sheet('<h2>Identity verification</h2><p class="sm">Used only to confirm you are a real person. Only DAKO admins can see these documents.</p><div class="f"><label for="kn">Full legal name (as on your ID)</label><input id="kn" autocomplete="name"></div><div class="two"><div class="f"><label for="kt">ID type</label><select id="kt"><option>Fayda / National ID</option><option>Kebele ID</option><option>Passport</option><option>Driver’s license</option></select></div><div class="f"><label for="ki">ID number</label><input id="ki" autocomplete="off"></div></div><div class="two"><div class="f"><label for="kd">Date of birth</label><input id="kd" type="date"></div><div class="f"><label for="kp">Phone</label><input id="kp" type="tel" inputmode="tel"></div></div>'+slot('f','ID photo (front)')+slot('b','ID photo (back, not needed for passport)')+slot('s','Selfie holding your ID')+'<label style="display:flex;gap:10px;align-items:flex-start;margin:12px 0;font-size:12px"><input id="kc" type="checkbox" style="margin-top:3px"> I confirm this information is true and I agree to DAKO using it to verify my identity.</label><button class="btn" data-a="kycsubmit">Submit for review</button><button class="btn dk" data-a="shut">Cancel</button>');
}
function kycReview(id){var u=S.u.filter(function(x){return x.id===id})[0],k=u&&u.k;if(!u)return;
 var rv=u.v?'<button class="btn rd" data-a="krev" data-v="'+u.id+'">Revoke verification</button>':'';
 if(!k){sheet('<h2>'+E(u.n)+'</h2><div class="nt">Demo account: no KYC documents on file.</div>'+rv+'<button class="btn dk" data-a="shut">Close</button>');return}
 var im=function(g,l){return g?'<div class="sm" style="margin-top:8px">'+l+'</div><img class="th" style="height:200px;object-fit:contain;background:var(--bg)" src="'+g+'" alt="'+l+'">':''};
 sheet('<h2>'+E(u.n)+'</h2><span class="tag '+KC[k.st]+'">'+KL[k.st]+'</span>'+(k.st==='no'&&k.note?'<div class="sm">Reason: '+E(k.note)+'</div>':'')+'<div class="kv"><div><span class="sm">Legal name</span><b>'+E(k.nm)+'</b></div><div><span class="sm">ID type</span><b>'+E(k.it)+'</b></div><div><span class="sm">ID number</span><b>'+E(k.idn)+'</b></div><div><span class="sm">Date of birth</span><b>'+E(k.dob)+'</b></div><div><span class="sm">Phone</span><b>'+E(k.ph)+'</b></div><div><span class="sm">Email</span><b style="font-size:12px">'+E(u.e)+'</b></div></div>'+im(k.f,'ID front')+im(k.b,'ID back')+im(k.s,'Selfie with ID')+(k.st==='pe'?'<div class="f"><label for="krs">Rejection reason (only if rejecting)</label><input id="krs"></div><button class="btn" data-a="kok" data-v="'+u.id+'">Approve and verify</button><button class="btn rd" data-a="kno" data-v="'+u.id+'">Reject</button>':rv)+'<button class="btn dk" data-a="shut">Close</button>');
}
function paySheet(oid){
 var o=ord(oid);if(!o)return;RC=null;
 sheet('<h2>Pay now</h2><div class="card" style="margin:8px 0"><div class="sm">'+E(o.p)+' · '+E(o.t)+'</div><div class="ct"><b>Amount to pay</b><span class="pr">'+N(o.amt)+' ETB</span></div><div class="sm">Includes the 5% service fee. Send exactly this amount.</div></div>'+walBlock(o)+'<p class="sm">Choose one account, send the money, then upload your receipt below.</p>'+
 S.pa.map(function(x){return '<div class="card" style="margin:8px 0"><div class="ct"><b>'+E(x.m)+'</b><button class="btn sx" data-a="cp" data-v="'+E(x.no)+'">Copy number</button></div><div style="font-size:19px;font-weight:800;letter-spacing:.5px">'+E(x.no)+'</div><div class="sm">Account name: '+E(x.nm)+'</div></div>'}).join('')+
 '<h2>Submit your receipt</h2><div class="f"><label for="pmth">I paid with</label><select id="pmth">'+S.pa.map(function(x){return '<option>'+E(x.m)+'</option>'}).join('')+'</select></div><div class="f"><label>Payment receipt (screenshot or photo)</label><div id="rcp"></div><input id="rcf" type="file" accept="image/*" hidden><button class="btn dk" data-a="pickRc">＋ Upload receipt</button></div><div class="f"><label for="rcr">Transaction reference (optional)</label><input id="rcr" autocomplete="off"></div><button class="btn" data-a="submitPay" data-v="'+o.id+'">Submit payment</button><button class="btn dk" data-a="shut">Pay later</button>');
}
function buy(id){
 var u=me(),x=S.l.filter(function(y){return y.id===id})[0];if(!x)return;
 if(x.s===u.id){tt('You cannot buy your own account');return}if(x.x!=='ok'){tt('This account is no longer available');return}if(x.backend){tt('Live checkout is the next step. Orders work on demo listings only');return}
 S.o.unshift({id:Date.now(),l:x.id,t:x.t,p:x.p,b:u.id,s:x.s,amt:x.r+Math.round(x.r*FEE),pr:x.r,net:x.r-Math.round(x.r*COM),st:0,ref:'',dp:0});var oid=S.o[0].id;x.x='rs';nfy(x.s,'New order for "'+x.t+'". The buyer is completing payment.');sv();shut();S.tab='orders';render();paySheet(oid);
}
function vSell(){
 var u=me();
 if(u.role==='buyer')return '<h2>Sell an account</h2><div class="nt">You are signed in as a buyer. Switch to a seller account to list accounts.</div><button class="btn" data-a="beSeller">Become a seller</button>';
 if(!u.v)return '<h2>Sell an account</h2><div class="nt">Identity verification (KYC) is required before you can list accounts.</div>'+kycCard(u);
 return '<h2>Sell an account</h2><p class="sm">Your listing appears after admin approval. Never enter passwords or login codes here.</p><div class="f"><label>Platform</label><div class="row" id="sp">'+PL.map(function(p,i){return '<button class="chip" data-a="sp" data-v="'+p+'" aria-pressed="'+(i===0)+'">'+bt(p)+p+'</button>'}).join('')+'</div></div><div class="f"><label for="sm">Monetization</label><select id="sm"><option value="1">Monetized</option><option value="0">Non-monetized</option></select></div><div class="f"><label for="scat">Category</label><select id="scat">'+CATS.map(function(c){return '<option>'+c+'</option>'}).join('')+'</select></div><div class="f"><label for="sl">Account link / Telegram username</label><input id="sl" type="url" inputmode="url" autocomplete="off" placeholder="https://www.tiktok.com/@name"></div><div class="f"><label for="st">Title (optional)</label><input id="st" placeholder="Left blank, it is taken from the link"></div><div class="f"><label>Account screenshots (1–4)</label><div class="shots" id="sh">'+shots()+'</div><input id="sfile" type="file" accept="image/*" multiple hidden><button class="btn dk" data-a="pickShot">＋ Add screenshot</button><p class="sm">Show followers, analytics and income. Do not include any password or code in the photo.</p></div><div class="two"><div class="f"><label for="sf">Followers</label><input id="sf" type="number" min="0" inputmode="numeric"></div><div class="f"><label for="sa">Account age (years)</label><input id="sa" type="number" min="0" step="0.5" inputmode="decimal"></div></div><div class="two"><div class="f"><label for="si">Monthly income (ETB)</label><input id="si" type="number" min="0" inputmode="numeric"></div><div class="f"><label for="sr">Price (ETB)</label><input id="sr" type="number" min="1" inputmode="numeric"></div></div><div class="nt" id="net">'+netTxt(0)+'</div><div class="f"><label for="sd">Description</label><textarea id="sd"></textarea></div><button class="btn" data-a="pub">Submit for review</button>'+(DB?'<h2>My submitted listings</h2>'+S.l.filter(function(x){return x.s===u.id}).map(function(x){var status=x.status||'pending';var badge=status==='active'||status==='approved'||status==='ok'||status==='published'?'ok':'m';return '<div class="card"><div class="ct"><b>'+E(x.t)+'</b><span class="tag '+badge+'">'+E(status)+'</span></div><div class="sm">'+E(x.p)+' · '+N(x.r)+' ETB</div></div>'}).join('')||'<div class="em">No submitted listings yet.</div>':'');
}
var HOST={Facebook:/(^|\.)(facebook\.com|fb\.com|fb\.watch)$/,TikTok:/(^|\.)tiktok\.com$/,Instagram:/(^|\.)instagram\.com$/,Telegram:/(^|\.)(t\.me|telegram\.me)$/,YouTube:/(^|\.)(youtube\.com|youtu\.be)$/};
function shots(){return SH.map(function(g,i){return '<div><img src="'+g+'" alt="Screenshot '+(i+1)+'"><button data-a="rmShot" data-v="'+i+'" aria-label="Remove">×</button></div>'}).join('')}
function comp(f){return new Promise(function(ok){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var k=Math.min(1,900/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);ok(c.toDataURL('image/jpeg',.72))};im.onerror=function(){ok(null)};im.src=r.result};r.onerror=function(){ok(null)};r.readAsDataURL(f)})}
async function pub(){
 var u=me();if(!u.v){tt('Complete KYC verification first');return}if(!(DB&&DB_USER&&u.id===DB_USER.id)&&(!u.pay||!u.pay.no)){tt('Add your payout account first');S.tab='acct';render();return}
 var lk=$('sl').value.trim(),t=$('st').value.trim(),r=Number($('sr').value),m=$('sm').value==='1',p=(document.querySelector('#sp [aria-pressed="true"]')||{dataset:{v:'Facebook'}}).dataset.v;
 var url;try{url=new URL(lk)}catch(e){url=null}
 if(!url||!/^https?:$/.test(url.protocol)){tt('Enter a valid account link (https://…)');return}
 if(!HOST[p].test(url.hostname)){tt('The link does not match the selected platform ('+p+')');return}
 if(!SH.length){tt('Add at least one screenshot');return}
 if(!(r>0)){tt('Enter a price');return}
 if(!t)t=p+' – '+(url.pathname.replace(/\/$/,'').split('/').pop()||url.hostname);
 if(DB){
  try{
   var lid=crypto.randomUUID(),urls=await uploadShots(lid);
   var payload={id:lid,seller_id:DB_USER.id,platform:p,title:t,description:$('sd').value.trim()||'No description',follower_count:Number($('sf').value)||0,price_etb:r,status:'pending',account_url:url.href,is_monetized:m,account_age_years:Number($('sa').value)||0,monthly_income_etb:m?(Number($('si').value)||0):0,screenshots:urls};
   payload.category=$('scat')?$('scat').value:null;
   var ins=await DB.from('listings').insert(payload);
   if(ins.error&&/category/i.test(ins.error.message||'')){delete payload.category;ins=await DB.from('listings').insert(payload)}
   if(ins.error)throw ins.error;
   SH=[];await refreshBackendListings();tt('Listing sent to admin for review');S.tab='market';render();
  }catch(err){tt('Listing backend error: '+(err.message||err))}
  return;
 }
 S.l.unshift({id:Date.now(),s:u.id,p:p,m:m?1:0,t:t,f:Number($('sf').value)||0,a:Number($('sa').value)||0,i:m?(Number($('si').value)||0):0,r:r,d:$('sd').value.trim()||'No description',x:'pe',k:url.href,im:SH.slice(),cat:($('scat')||{}).value||'',t0:Date.now()});
 if(!sv()){S.l.shift();tt('Storage is full. Remove some photos');return}
 SH=[];nfyA('New listing awaiting review: '+t);sv();S.tab='market';render();tt('Sent to admin for review');
}
var CATS=['Entertainment','News','Education','Music','Sports','Business','Gaming','Lifestyle','Religion','Other'];
var OST=['Awaiting payment','Verifying','Handover','Confirming','Releasing','Success'];
function kfmt(n){n=Number(n)||0;return n>=1e6?(n/1e6).toFixed(1).replace(/\.0$/,'')+'M':n>=1e3?(n/1e3).toFixed(1).replace(/\.0$/,'')+'K':String(n)}
function ago2(t){if(!t)return '';var m=Math.round((Date.now()-t)/60000);return m<1?'now':m<60?m+'m':m<1440?Math.round(m/60)+'h':Math.round(m/1440)+'d'}
function fdate(t){if(!t)return '';var d=new Date(t);return d.getDate()+' '+['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]+' '+d.getFullYear()}
function ct0(x){return x.t0||(x.id>1e11?x.id:0)}
function brandBg(p){return BR[p]?BR[p][0]:'#444'}
function tier(x){var a=S.l.filter(function(l){return l.p===x.p&&l.x==='ok'&&l.r>0}).map(function(l){return l.r}).sort(function(p,q){return p-q});if(a.length<3)return {n:2,l:'Medium Price'};var md=a[Math.floor(a.length/2)];return x.r<md*.7?{n:1,l:'Low Price'}:x.r>md*1.4?{n:3,l:'High Price'}:{n:2,l:'Medium Price'}}
function oCard(o,role){
 var st=o.st,steps=STEPS.map(function(s,i){return '<li class="'+(i<st?'d':i===st?'n':'')+'"><i>'+(i<st?'✓':i+1)+'</i><span>'+s+'</span></li>'}).join(''),a='',bd='';
 var A=function(k,l,c){return '<button class="btn '+(c||'')+'" data-a="'+k+'" data-v="'+o.id+'">'+l+'</button>'};
 var pr=prc(o),net=netOf(o);
 if(role==='seller')bd='<div class="sm">Price <b>'+N(pr)+'</b> · 10% commission −<b>'+N(pr-net)+'</b> · You receive <b>'+N(net)+' ETB</b></div>';
 else if(role==='admin')bd='<div class="sm">Buyer paid <b>'+N(o.amt)+'</b> · Seller share <b>'+N(net)+'</b> · Platform earns <b>'+N(o.amt-net)+' ETB</b></div>';
 if(o.rf)a='<span class="tag bd">Refunded</span>';else if(o.cx)a='<span class="tag bd">Cancelled</span>';
 else if(role==='buyer'&&st===0)a='<div class="nt">Amount to pay: <b>'+N(o.amt)+' ETB</b>. Send the money, then upload your receipt.</div>'+A('payopen','Pay now')+A('cxl','Cancel order','dk');
 else if(role==='seller'&&st===1)a='<div class="nt">The buyer has paid. Your share is locked while the admin verifies the payment.</div>';
 else if(role==='seller'&&st===2)a=A('hand','I have handed over the account');
 else if(role==='seller'&&st===4)a='<div class="nt">The sale succeeded. The admin will release your funds to Available.</div>';
 else if(role==='seller'&&st===5)a='<span class="tag ok">Funds released to your wallet</span>';
 else if(role==='buyer'&&st===3)a=A('ok','I received it, confirm')+A('dis','Report a problem','rd');
 else if(role==='admin'&&st===1)a='<div class="sm">Paid with <b>'+E(o.pm||'—')+'</b> · Reference <b>'+E(o.ref||'—')+'</b> · Expected <b>'+N(o.amt)+' ETB</b></div>'+(o.rc?'<img class="th" style="height:220px;object-fit:contain;background:var(--bg)" src="'+o.rc+'" alt="Payment receipt">':'')+A('ver','Payment received, verify');
 else if(role==='admin'&&st===4)a=A('rel','Transaction verified, release funds');
 if(role==='admin'&&o.dp&&!o.rf)a+=A('ref','Refund buyer','rd');
 var led=role==='seller'&&st>=1&&st<=4&&!o.rf?'<div><span class="led">Outgoing · funds locked</span></div>':'';
 return '<div class="card"><div class="ct"><span class="pl">'+bt(o.p,1)+E(o.p)+'</span><span class="tag m">'+N(role==='seller'?net:o.amt)+' ETB</span></div><div style="margin-top:4px">'+E(o.t)+'</div>'+(o.dp?'<span class="tag bd">Dispute</span>':'')+led+bd+'<ul class="sp">'+steps+'</ul>'+a+'</div>';
}
function stat(ic,cl,l,v){return '<div class="stc"><div class="ct"><span class="ico '+cl+'">'+ic+'</span><span class="live">Live</span></div><div class="sl">'+l+'</div><div class="sv">'+v+'</div></div>'}
function ana(cl,l,n,a){return '<div class="ana '+cl+'"><div class="ct"><span>'+l+'</span><b>'+n+'</b></div><div class="av2">'+N(a)+' ETB</div></div>'}
function vDash(){
 var u=me(),w=wal(u.id),mine=S.o.filter(function(o){return o.s===u.id}),mls=S.l.filter(function(l){return l.s===u.id&&l.x!=='rm'}),
 sold=mine.filter(function(o){return o.st===5&&!o.rf}).length,avl=mls.filter(function(l){return l.x==='ok'}).length,
 act=mine.filter(function(o){return o.st>=1&&o.st<=4&&!o.rf}).length,buys=S.o.filter(function(o){return o.b===u.id&&!o.rf}).length,
 dps=S.dp.filter(function(d){return d.u===u.id}),pos=S.po.filter(function(p){return p.s===u.id}),
 sm=function(a,st){return a.filter(function(d){return d.st===st}).reduce(function(s,d){return s+d.amt},0)},
 cn=function(a,st){return a.filter(function(d){return d.st===st}).length},
 tot=dps.length,ap=tot?Math.round(cn(dps,'ok')/tot*100):0,pp=tot?Math.round(cn(dps,'pe')/tot*100):0,
 rec=dps.filter(function(d){return Date.now()-d.t<2592000000}).slice(0,5),
 cards=u.role==='buyer'?stat('$','g','Total balance',N(w.av)+' ETB')+stat('⬆','y','Deposited',N(w.dep)+' ETB')+stat('🛒','b','Purchases',buys)+stat('♥','t','Favorites',(u.fv||[]).length):stat('$','g','Total balance',N(w.av)+' ETB')+stat('📈','y','Income',N(w.rel)+' ETB')+stat('🛍','b','Sold channels',sold)+stat('📊','c','Total channels',mls.length)+stat('☰','t','Pending for sale',avl),
 lab={pe:'Processing',ok:'Approved',no:'Rejected'},tc={pe:'m',ok:'ok',no:'bd'};
 return '<h1 class="wb">Welcome back, <em>'+E(u.n)+'</em></h1><p class="sm">Real-time account, activity and financial analytics</p>'+(act?'<span class="led">Outgoing · '+act+' sale'+(act>1?'s':'')+' in progress · '+N(w.lk)+' ETB locked</span>':'')+'<div class="sg">'+cards+'</div>'+
 '<div class="card"><div class="ct"><b>Deposit analytics</b><span class="live">Live</span></div><p class="sm">Funds added to your wallet</p>'+ana('ok','Approved',cn(dps,'ok'),sm(dps,'ok'))+ana('pe','Processing (Pending)',cn(dps,'pe'),sm(dps,'pe'))+ana('no','Rejected',cn(dps,'no'),sm(dps,'no'))+
 '<div class="ana"><div class="ct"><span>Deposit completion and processing status</span></div><b>'+ap+'% Approved · '+pp+'% Processing</b><div class="pg"><i style="width:'+ap+'%"></i><b style="width:'+pp+'%"></b></div></div>'+
 (rec.length?rec.map(function(d){return '<div class="ur"><div><b>'+N(d.amt)+' ETB</b> <span class="tag '+tc[d.st]+'">'+lab[d.st]+'</span><div class="sm">'+E(d.pm)+' · '+ago(d.t)+(d.st==='no'&&d.note?' · '+E(d.note):'')+'</div></div></div>'}).join(''):'<div class="em">No deposit activity in the last 30 days.</div>')+
 '<button class="btn" data-a="dpopen">Deposit funds</button></div>'+
 '<div class="card"><div class="ct"><b>Withdrawal analytics</b><span class="live">Live</span></div><p class="sm">Withdrawn and processing payout requests</p>'+ana('ok','Approved withdrawals',cn(pos,'pd'),sm(pos,'pd'))+ana('pe','Processing',cn(pos,'pe'),sm(pos,'pe'))+
 (u.pay&&u.pay.no?'<div class="sm">Payout to: <b>'+E(u.pay.m)+' '+E(u.pay.no)+'</b></div>':'<div class="nt">Add a payout account in Account first.</div>')+
 pos.slice(0,5).map(function(p){return '<div class="ur"><div><b>'+N(p.amt)+' ETB</b> <span class="tag '+(p.st==='pd'?'ok':'m')+'">'+(p.st==='pd'?'Paid':'Processing')+'</span><div class="sm">'+E(p.to)+(p.ref?' · Ref '+E(p.ref):'')+'</div></div></div>'}).join('')+
 '<button class="btn" style="margin-top:10px" data-a="reqpay"'+(w.av>0?'':' disabled')+'>Request withdrawal'+(w.av>0?' · '+N(w.av)+' ETB':'')+'</button></div>'+
 '<div class="nt">Your sale share is locked when a buyer pays. After the admin confirms the sale, it moves to your available balance. Platform commission is 10% of the listing price.</div>';
}
function ordList(){
 var u=me(),all=S.o.filter(function(o){return o.b===u.id||o.s===u.id}),q=(S.oq||'').toLowerCase(),tb=S.ot||'pr';
 var f={pr:function(o){return !o.rf&&!o.cx&&o.st<5},ok:function(o){return !o.rf&&!o.cx&&o.st===5},cn:function(o){return o.rf||o.cx}}[tb];
 var a=all.filter(f).filter(function(o){return (o.p+' '+o.t).toLowerCase().indexOf(q)>-1});
 return a.length?a.map(function(o){var role=o.b===u.id?'buyer':'seller',lab=o.rf?'Refunded':o.cx?'Cancelled':OST[o.st],cls=o.rf||o.cx?'bd':o.st===5?'ok':'';
  return '<div class="oc'+(tb==='pr'?' proc':'')+'" role="button" tabindex="0" data-a="oopen" data-v="'+o.id+'"><div class="ocav">'+bt(o.p,'xl')+'<span class="sellt '+(role==='seller'?'sl':'by')+'">'+(role==='seller'?'SELL':'BUY')+'</span></div><div class="ocm"><div class="ct"><b class="oct">'+E(o.t)+'</b><span class="sm">'+ago2(ct0(o))+'</span></div><div class="ocr"><span class="pchip" style="background:'+brandBg(o.p)+'">'+E(o.p)+'</span><span class="ocp">'+N(role==='seller'?netOf(o):o.amt)+' ETB</span><span class="st2 '+cls+'">'+lab+'</span></div>'+(o.dp?'<div class="sm" style="color:var(--bdt)">⚠ Dispute reported</div>':'')+'</div></div>'}).join(''):'<div class="em">No orders here.</div>'}
function vOrders(){
 var u=me(),all=S.o.filter(function(o){return o.b===u.id||o.s===u.id}),tb=S.ot||'pr',
 pr=all.filter(function(o){return !o.rf&&!o.cx&&o.st<5}).length,okc=all.filter(function(o){return !o.rf&&!o.cx&&o.st===5}).length,cnc=all.filter(function(o){return o.rf||o.cx}).length,
 un=S.nf.filter(function(n){return n.u===u.id&&!n.rd}).length,sp=/^https:\/\/(t\.me|telegram\.me)\//.test(S.sup),
 inner='<span class="ava2"><img src="'+LG+'" alt=""></span><span class="cam"><b>Chat with Admin ✦</b><span class="sm">Tap to message support anytime</span></span><span class="pinn">📌 Pinned</span>',
 chat=sp?'<a class="chatadm" href="'+E(S.sup)+'" target="_blank" rel="noopener noreferrer">'+inner+'</a>':'<button class="chatadm" data-a="support">'+inner+'</button>';
 return '<div class="inh"><span class="inico">📥</span><div><h1 class="wb" style="margin:0">Inbox</h1><div class="sm">'+pr+' processing · tap an order to manage</div></div>'+(un?'<button class="newb" data-a="bell">💬 '+un+' new</button>':'')+'</div><input id="oq" class="q2" type="search" placeholder="Search orders, platforms…" value="'+E(S.oq||'')+'" aria-label="Search orders">'+chat+'<h2>P2P Orders</h2><div class="seg">'+[['pr','Processing',pr],['ok','Success',okc],['cn','Cancelled',cnc]].map(function(x){return '<button data-a="otab" data-v="'+x[0]+'" aria-pressed="'+(tb===x[0])+'">'+x[1]+' <span class="cnt">'+x[2]+'</span></button>'}).join('')+'</div><div id="olist">'+ordList()+'</div>';
}
function vListing(){
 var x=S.l.filter(function(l){return l.id===S.lv})[0];
 if(!x)return '<div class="lvh"><button class="ib2" data-a="lback" aria-label="Back">‹</button></div><div class="em">This listing is no longer available.</div>';
 var u=me(),own=x.s===u.id,fee=Math.round(x.r*FEE),t=tier(x),sl=S.u.filter(function(y){return y.id===x.s})[0],
 stt={ok:['Live','ok'],pe:['Pending','m'],rs:['Reserved','m'],sd:['Sold','ok'],rj:['Rejected','bd'],rm:['Removed','bd']}[x.x]||['Live','ok'],
 isNew=ct0(x)&&Date.now()-ct0(x)<6048e5,
 bars=[1,2,3].map(function(i){return '<i class="'+(i<=t.n?'on t'+t.n:'')+'" style="height:'+(8+i*6)+'px"></i>'}).join('');
 return '<div class="lvh"><button class="ib2" data-a="lback" aria-label="Back">‹</button>'+heart(x.id)+'</div>'+
 '<div class="lvav">'+bt(x.p,'xxl')+'</div><div class="lvch"><span class="pchip" style="background:'+brandBg(x.p)+'">'+E(x.p).toUpperCase()+'</span><span class="tag '+stt[1]+'">● '+stt[0]+'</span></div>'+
 '<h1 class="lvt">'+(isNew?'<span class="newt">NEW</span> ':'')+E(x.t)+'</h1>'+
 (x.k&&/^https?:\/\//.test(x.k)?'<a class="lk" style="text-align:center;font-size:15px" href="'+E(x.k)+'" target="_blank" rel="noopener noreferrer">View on '+E(x.p)+' ↗</a>':'')+
 (x.cat?'<div style="text-align:center"><span class="chipc">'+E(x.cat)+'</span></div>':'')+
 '<div class="lvs"><div><b>'+kfmt(x.f)+'</b><span>Followers</span></div><div><b>'+(x.a||0)+'y</b><span>Account age</span></div><div><b>'+(x.m?kfmt(x.i):'0')+'</b><span>ETB per month</span></div></div>'+
 '<div class="card lvp"><div class="ct"><span style="display:flex;align-items:center"><span class="bars">'+bars+'</span><span class="tier t'+t.n+'">'+t.l+'</span></span><span class="tag'+(x.m?' m':'')+'">'+(x.m?'Monetized':'Non-monetized')+'</span></div><div class="lvpr">'+N(x.r)+' ETB</div>'+
 (own?'<div class="sm" style="text-align:center">This is your listing.</div>':'<div class="sm" style="text-align:center">Service fee (5%): '+N(fee)+' ETB · Total '+N(x.r+fee)+' ETB</div><div class="nt">Your money is held in escrow. It is released to the seller only after you receive the account and confirm. Never pay outside the platform.</div>'+(x.x==='ok'?'<button class="btn" data-a="buy" data-v="'+x.id+'">Buy now</button>':'<div class="nt">This account is not available right now.</div>'))+'</div>'+
 '<div class="card"><b>🖼 Dashboard screenshot</b><p class="sm">Analytics screenshot submitted by the seller for verification.</p>'+(x.im&&x.im.length?'<div class="gal">'+x.im.map(function(g,i){return '<img src="'+g+'" alt="Screenshot '+(i+1)+'">'}).join('')+'</div>':'<div class="ph">No screenshot added (demo)</div>')+'</div>'+
 (x.d?'<div class="card"><b>About this account</b><p>'+E(x.d)+'</p></div>':'')+(sl&&sl.v?'<div class="vr" style="text-align:center;margin:8px 0">✔ Verified seller</div>':'');
}
function chanCard(x){
 var st={ok:['LIVE','ok'],pe:['PENDING','m'],rs:['PROCESSING','prc'],sd:['SOLD','ok'],rj:['REJECTED','bd'],rm:['REJECTED','bd']}[x.x]||['LIVE','ok'],isNew=ct0(x)&&Date.now()-ct0(x)<6048e5,
 th=x.im&&x.im[0]?'<img src="'+x.im[0]+'" alt="">':bt(x.p,'xl');
 return '<div class="cc" role="button" tabindex="0" data-a="lview" data-v="'+x.id+'"><div class="ccs" style="background:'+brandBg(x.p)+'"><svg viewBox="0 0 24 24" width="24" height="24">'+(BR[x.p]?BR[x.p][1]:'')+'</svg></div><div class="ccb"><div class="ccr"><div class="ccth">'+th+'</div><div class="ccm"><div class="ct"><b>'+(isNew?'<span class="newt">NEW</span> ':'')+E(x.t)+'</b><span class="tag '+st[1]+'">'+st[0]+'</span></div><div class="cci">'+(x.cat?'<span class="chipc" style="margin:0">'+E(x.cat)+'</span>':'')+'<span class="sm">👥 '+kfmt(x.f)+'</span><span class="sm">'+fdate(ct0(x))+'</span></div></div></div>'+((x.x==='rj'||x.x==='rm')&&x.note?'<div class="sm" style="color:var(--bdt);margin-top:6px">Reason: '+E(x.note)+'</div>':'')+'<div class="ct ccf"><span class="pr">'+N(x.r)+' ETB</span><span class="cca"><button class="ib3" data-a="lview" data-v="'+x.id+'" aria-label="View">👁</button>'+(x.x==='ok'||x.x==='pe'||x.x==='rj'?'<button class="ib3 dl" data-a="mylrm" data-v="'+x.id+'" aria-label="Delete">🗑</button>':'')+'</span></div></div></div>';
}
function vChan(){
 var u=me(),mine=S.l.filter(function(l){return l.s===u.id}),tb=S.ct||'ac',
 A=function(l){return l.x==='ok'||l.x==='pe'||l.x==='rs'},SD=function(l){return l.x==='sd'},RJ=function(l){return l.x==='rj'||l.x==='rm'},
 live=mine.filter(function(l){return l.x==='ok'}).length,sold=mine.filter(SD).length,rej=mine.filter(RJ).length,act=mine.filter(A).length,
 list=mine.filter({ac:A,sd:SD,rj:RJ}[tb]).sort(function(a,b){return ct0(b)-ct0(a)});
 return '<div class="lvh"><button class="ib2" data-a="tab" data-v="acct" aria-label="Back">‹</button></div><div class="inh"><span class="inico">🗂</span><div><h1 class="wb" style="margin:0">My Channels</h1><div class="sm">'+mine.length+' total · '+live+' live · '+sold+' sold · '+rej+' rejected</div></div></div>'+
 '<button class="btn newch" data-a="tab" data-v="sell">＋ NEW CHANNEL</button><div class="sg3"><div class="stc3"><span class="ico g">✓</span><small>ACTIVE</small><b>'+live+'</b></div><div class="stc3"><span class="ico b">▣</span><small>SOLD OUT</small><b>'+sold+'</b></div><div class="stc3"><span class="ico y">✕</span><small>REJECTED</small><b>'+rej+'</b></div></div>'+
 '<div class="seg">'+[['ac','Active',act],['sd','Sold Out',sold],['rj','Rejected',rej]].map(function(x){return '<button data-a="ctab" data-v="'+x[0]+'" aria-pressed="'+(tb===x[0])+'">'+x[1]+' <span class="cnt">'+x[2]+'</span></button>'}).join('')+'</div>'+(list.length?list.map(chanCard).join(''):'<div class="em">Nothing here yet.</div>');
}
function bkCard(u){if(!u.auth||PROD)return '';
 return '<div class="card"><div class="ct"><b>Backend account</b><span class="tag '+(u.role==='admin'?'ok':'')+'">Role: '+E(u.role)+'</span></div><div class="sm" style="word-break:break-all">User ID: <b>'+E(u.id)+'</b></div>'+(u.roleErr?'<div class="sm" style="color:var(--bdt)">Profile check: '+E(u.roleErr)+'</div>':'')+(u.role!=='admin'?'<div class="nt">This account is not an admin in the database, so the Admin tab is hidden. In the Supabase SQL Editor run:<br><code style="word-break:break-all">insert into public.profiles(id, full_name, role) values (&#39;'+E(u.id)+'&#39;, &#39;Admin&#39;, &#39;admin&#39;) on conflict (id) do update set role = &#39;admin&#39;;</code></div>':'')+'<button class="btn dk" style="margin-top:8px" data-a="rolecheck">Check admin access again</button></div>'}
function sec(l,c){return '<div class="sec"><i style="background:'+c+'"></i>'+l+'</div>'}
function row(i,l,a,p){return '<button class="mr" data-a="mn" data-v="'+a+'"><span class="mi">'+i+'</span><span class="ml">'+l+'</span>'+(p?'<span class="pill">'+p+'</span>':'')+'<span class="chev">›</span></button>'}
function vAcct(){
 var u=me(),w=wal(u.id),ini=u.n.split(' ').filter(Boolean).slice(0,2).map(function(x){return x[0]}).join('').toUpperCase();
 return '<div class="card prof"><div class="ava">'+E(ini)+(u.v?'<i class="ck">✓</i>':'')+'</div><b class="pn">'+E(u.n)+'</b><span class="em2">'+E(u.e)+'</span><div class="two"><div class="mini"><span>Available</span><b style="color:var(--okt)">'+N(Math.max(0,w.av))+' ETB</b></div><div class="mini"><span>Locked (pending)</span><b style="color:var(--wi)">'+N(w.lk)+' ETB</b></div></div></div>'+
 bkCard(u)+sec('Personalize','#38bdf8')+'<div class="card mw">'+row('👤','Personal details','pd')+row('🌐','Language','lang','English')+'</div>'+
 sec('Account','#2dd4bf')+'<div class="card mw">'+row('🛡️','Security and devices','sec')+row('▦','Account dashboard','dash')+(window.__dakoInstall?row('📲','Install app','inst'):'')+row('📺','My channels','mych')+row('♥','Favorites','favs')+(u.role==='seller'?row('🪪','Identity verification (KYC)','kyc',KL[kst(u)]):'')+row('💳','Payout account','pay')+'</div>'+
 '<button class="btn dk" data-a="out">Log out</button>';
}
function vAdmin(){
 var pe=S.l.filter(function(x){return x.x==='pe'}).length,po=S.o.filter(function(o){return o.st===1||o.st===4||o.dp}).length+S.po.filter(function(p){return p.st==='pe'}).length+S.u.filter(function(x){return x.k&&x.k.st==='pe'}).length+S.dp.filter(function(d){return d.st==='pe'}).length,earn=0,held=0;S.o.forEach(function(o){if(o.rf)return;if(o.st===5)earn+=o.amt-netOf(o);if(o.st>=1&&o.st<=4)held+=o.amt});
 var h='<h2>Admin center</h2><div class="kv"><div><span class="sm">Users</span><b>'+S.u.length+'</b></div><div><span class="sm">Pending review</span><b>'+pe+'</b></div><div><span class="sm">Orders</span><b>'+S.o.length+'</b></div><div><span class="sm">Need action</span><b>'+po+'</b></div><div><span class="sm">Platform earnings</span><b>'+N(earn)+' ETB</b></div><div><span class="sm">Held in escrow</span><b>'+N(held)+' ETB</b></div></div><div class="seg sc">'+[['list','Listings'],['ord','Orders'],['dep','Deposits'],['pay','Payouts'],['kyc','KYC'],['usr','Users'],['cfg','Settings']].map(function(x){return '<button data-a="as" data-v="'+x[0]+'" aria-pressed="'+(S.as===x[0])+'">'+x[1]+'</button>'}).join('')+'</div>';
 var lk=function(x){return x.k&&/^https?:\/\//.test(x.k)?'<a class="lk" href="'+E(x.k)+'" target="_blank" rel="noopener noreferrer">🔗 '+E(x.k)+'</a>':''};
 if(S.as==='list')h+=S.l.map(function(x){return '<div class="card"><div class="ct"><span class="pl">'+bt(x.p)+E(x.p)+'</span><span class="tag '+(x.x==='ok'||x.x==='sd'?'ok':x.x==='rm'||x.x==='rj'?'bd':'m')+'">'+{ok:'Approved',pe:'Pending',rm:'Removed',rj:'Rejected',rs:'Reserved',sd:'Sold'}[x.x]+'</span></div><div>'+E(x.t)+' · '+N(x.r)+' ETB</div>'+lk(x)+(x.im&&x.im[0]?'<img class="th" style="height:120px" src="'+x.im[0]+'" alt="">':'')+(x.backend&&x.x==='pe'?'<div class="f"><input id="lr'+x.id+'" placeholder="Rejection reason (optional)" aria-label="Rejection reason"></div>':'')+'<div style="display:flex;gap:8px;margin-top:8px">'+(x.x==='pe'||x.x==='rm'||x.x==='rj'?'<button class="btn sx" data-a="lok" data-v="'+x.id+'">Approve</button>':'')+(x.x==='ok'||x.x==='pe'?'<button class="btn sx rd" data-a="lrm" data-v="'+x.id+'">Remove</button>':'')+'</div></div>'}).join('');
 else if(S.as==='ord')h+=S.o.length?S.o.map(function(o){return oCard(o,'admin')}).join(''):'<div class="em">No orders.</div>';
 else if(S.as==='dep'){var dl=S.dp.slice().sort(function(a,b){return (b.st==='pe')-(a.st==='pe')||b.t-a.t});h+=dl.length?dl.map(function(d){var du=S.u.filter(function(x){return x.id===d.u})[0];return '<div class="card"><div class="ct"><b>'+N(d.amt)+' ETB</b><span class="tag '+(d.st==='ok'?'ok':d.st==='no'?'bd':'m')+'">'+{pe:'Pending',ok:'Approved',no:'Rejected'}[d.st]+'</span></div><div>'+E(du?du.n:'User')+'</div><div class="sm">Paid with <b>'+E(d.pm)+'</b> · Ref <b>'+E(d.ref||'—')+'</b> · '+ago(d.t)+'</div>'+(d.st==='no'&&d.note?'<div class="sm">Reason: '+E(d.note)+'</div>':'')+(d.rc?'<img class="th" style="height:200px;object-fit:contain;background:var(--bg)" src="'+d.rc+'" alt="Deposit receipt">':'')+(d.st==='pe'?'<div class="f"><input id="dr'+d.id+'" placeholder="Rejection reason (only if rejecting)" aria-label="Rejection reason"></div><div style="display:flex;gap:8px"><button class="btn sx" data-a="dok" data-v="'+d.id+'">Approve</button><button class="btn sx rd" data-a="dno" data-v="'+d.id+'">Reject</button></div>':'')+'</div>'}).join(''):'<div class="em">No deposits yet.</div>'}
 else if(S.as==='pay')h+=S.po.length?S.po.map(function(p){var sl=S.u.filter(function(x){return x.id===p.s})[0];return '<div class="card"><div class="ct"><b>'+N(p.amt)+' ETB</b><span class="tag '+(p.st==='pd'?'ok':'m')+'">'+(p.st==='pd'?'Paid':'Pending')+'</span></div><div>'+E(sl?sl.n:'Seller')+'</div><div class="sm">Send to: <b>'+E(p.to)+'</b>'+(p.ref?' · Ref '+E(p.ref):'')+'</div>'+(p.st==='pe'?'<div class="f"><input id="pf'+p.id+'" placeholder="Transfer reference" aria-label="Transfer reference"></div><button class="btn sx" data-a="paid" data-v="'+p.id+'">Mark as paid</button>':'')+'</div>'}).join(''):'<div class="em">No payout requests.</div>';
 else if(S.as==='kyc'){var ks=S.u.filter(function(x){return x.k});ks.sort(function(a,b){return (b.k.st==='pe')-(a.k.st==='pe')});h+=ks.length?ks.map(function(x){return '<div class="card"><div class="ct"><b>'+E(x.n)+'</b><span class="tag '+KC[x.k.st]+'">'+KL[x.k.st]+'</span></div><div class="sm">'+E(x.e)+'</div><button class="btn sx" style="margin-top:8px" data-a="kview" data-v="'+x.id+'">Review</button></div>'}).join(''):'<div class="em">No KYC submissions yet.</div>'}
 else if(S.as==='usr')h+='<div class="card">'+S.u.map(function(x){return '<div class="ur"><div><b>'+E(x.n)+'</b> <span class="tag">'+x.role+'</span>'+(x.v?' <span class="tag ok">✔</span>':'')+(x.b?' <span class="tag bd">Suspended</span>':'')+'<div class="sm">'+E(x.e)+'</div></div>'+(x.role==='admin'?'':'<div style="display:flex;gap:6px">'+(x.role==='seller'?'<button class="btn sx" data-a="kview" data-v="'+x.id+'">KYC</button>':'')+'<button class="btn sx '+(x.b?'':'rd')+'" data-a="ub" data-v="'+x.id+'">'+(x.b?'Restore':'Suspend')+'</button></div>')+'</div>'}).join('')+'</div>';
 else h+='<p class="sm">Payment accounts shown to buyers at checkout.</p>'+S.pa.map(function(x,i){return '<div class="card"><b>'+E(x.m)+'</b><div class="f"><label for="cn'+i+'">Account holder name</label><input id="cn'+i+'" value="'+E(x.nm)+'"></div><div class="f"><label for="co'+i+'">Number</label><input id="co'+i+'" inputmode="numeric" value="'+E(x.no)+'"></div></div>'}).join('')+'<div class="card"><b>Support</b><div class="f"><label for="csup">Telegram support link</label><input id="csup" type="url" placeholder="https://t.me/yourname" value="'+E(S.sup)+'"></div></div><button class="btn" data-a="saveCfg">Save</button>';
 return h;
}
function render(){
 var u=me();shut();if(!u){authView();return}
 if(u.role!=='admin'&&S.tab==='admin')S.tab='dash';if(u.role==='admin'&&(S.tab==='dash'||S.tab==='wallet'))S.tab='admin';
 var v={dash:vDash,wallet:vDash,market:vMarket,sell:vSell,orders:vOrders,acct:vAcct,admin:vAdmin,lv:vListing,chan:vChan}[S.tab]||vDash;
 $('app').innerHTML=top()+'<main class="w">'+v()+'</main>'+nav()+(u.role==='admin'?'':'<button class="fab" data-a="dpopen" aria-label="Deposit ETB"><span>⚡</span><small>ETB</small></button>');window.scrollTo(0,0);
}
function ord(id){return S.o.filter(function(o){return o.id===id})[0]}
function num(id){var v=$(id).value.trim();return v===''?null:Math.max(0,Number(v))}
document.addEventListener('click',function(ev){
 if(ev.target===$('sheet')){shut();return}
 var el=ev.target.closest('[data-a]');if(!el)return;var a=el.dataset.a,v=el.dataset.v,o;
 if(a==='mode'){S.mode=v;authView()}else if(a==='auth')doAuth();
 else if(a==='demo'){S.me='a0';S.tab='admin';sv();render()}
 else if(a==='tab'){S.tab=v;render()}
 else if(a==='pl'){S.pl=v;render()}else if(a==='mon'){S.mon=v;render()}else if(a==='sort'){S.sort=v;render()}
 else if(a==='fopen')fsheet();
 else if(a==='fapply'){S.f={pmin:num('fp1'),pmax:num('fp2'),fmin:num('ff1'),fmax:num('ff2')};if(S.f.pmin!=null&&S.f.pmax!=null&&S.f.pmin>S.f.pmax){tt('Minimum price is higher than maximum');return}if(S.f.fmin!=null&&S.f.fmax!=null&&S.f.fmin>S.f.fmax){tt('Minimum followers is higher than maximum');return}S.sort=$('fs').value;sv();shut();render()}
 else if(a==='freset'){S.f={};S.sort='new';sv();shut();render()}
 else if(a==='det'||a==='lview'){if(S.tab!=='lv')S.back=S.tab;S.lv=Number(v);S.tab='lv';render()}
 else if(a==='lback'){S.tab=S.back||'market';render()}
 else if(a==='otab'){S.ot=v;render()}
 else if(a==='ctab'){S.ct=v;render()}
 else if(a==='oopen'){var oo2=ord(Number(v)),ur2=me();if(oo2)sheet(oCard(oo2,oo2.b===ur2.id?'buyer':'seller')+'<button class="btn dk" data-a="shut">Close</button>')}
 else if(a==='buy')buy(Number(v));else if(a==='shut')shut();
 else if(a==='sp'){document.querySelectorAll('#sp button').forEach(function(b){b.setAttribute('aria-pressed',String(b===el))});if(v==='Telegram'){$('sl').value='https://t.me/Addisehd';$('sl').placeholder='https://t.me/Addisehd'}else if($('sl').value==='https://t.me/Addisehd'){$('sl').value='';$('sl').placeholder='https://www.'+({Facebook:'facebook.com/@name',TikTok:'tiktok.com/@name',Instagram:'instagram.com/@name',YouTube:'youtube.com/@channel'}[v]||'example.com')}}
 else if(a==='pickShot'){$('sfile').click()}else if(a==='rmShot'){SH.splice(Number(v),1);$('sh').innerHTML=shots()}
 else if(a==='beSeller'){me().role='seller';sv();render()}else if(a==='pub')pub();
 else if(a==='payopen')paySheet(Number(v));
 else if(a==='cxl'){var co=ord(Number(v));S.l.forEach(function(l){if(co&&l.id===co.l&&l.x==='rs')l.x='ok'});if(co)co.cx=1;sv();render();tt('Order cancelled')}
 else if(a==='cp'){try{navigator.clipboard.writeText(v).then(function(){tt('Number copied')},function(){tt('Could not copy. Select the number manually')})}catch(e){tt('Could not copy. Select the number manually')}}
 else if(a==='pickRc'){$('rcf').click()}
 else if(a==='submitPay'){o=ord(Number(v));if(!RC){tt('Upload your payment receipt first');return}var old=[o.rc,o.pm,o.ref,o.st];o.rc=RC;o.pm=$('pmth').value;o.ref=($('rcr').value||'').trim();o.st=1;if(!sv()){o.rc=old[0];o.pm=old[1];o.ref=old[2];o.st=old[3];tt('Storage is full. Try a smaller image');return}RC=null;nfyA('Payment receipt submitted for "'+o.t+'" ('+N(o.amt)+' ETB). Please verify.');nfy(o.s,'The buyer paid for "'+o.t+'". The payment is being verified.');sv();shut();S.tab='orders';render();tt('Payment submitted. The admin will verify it')}
 else if(a==='hand'){var ho=ord(Number(v));ho.st=3;nfy(ho.b,'The seller handed over "'+ho.t+'". Please confirm you received it.');sv();render()}else if(a==='ok'){var oo=ord(Number(v));oo.st=4;nfyA('Buyer confirmed "'+oo.t+'". Release the funds.');nfy(oo.s,'The buyer confirmed "'+oo.t+'". The admin will release your funds.');sv();render()}
 else if(a==='dis'){var dso=ord(Number(v));dso.dp=1;nfyA('Dispute reported on "'+dso.t+'".');nfy(dso.s,'The buyer reported a problem with "'+dso.t+'".');sv();render();tt('Your report was sent to the admin')}
 else if(a==='ver'){var vo=ord(Number(v));vo.st=2;nfy(vo.s,'Payment verified for "'+vo.t+'". Hand over the account to the buyer.');nfy(vo.b,'Your payment for "'+vo.t+'" was verified.');sv();render()}else if(a==='rel'){var ro=ord(Number(v));ro.st=5;S.l.forEach(function(l){if(l.id===ro.l)l.x='sd'});nfy(ro.s,'Funds released: +'+N(netOf(ro))+' ETB added to your wallet.');nfy(ro.b,'Your order "'+ro.t+'" is complete.');sv();render()}
 else if(a==='ref'){o=ord(Number(v));o.rf=1;o.dp=0;S.l.forEach(function(l){if(l.id===o.l)l.x='ok'});nfy(o.b,'Your order "'+o.t+'" was refunded.');nfy(o.s,'The order "'+o.t+'" was refunded to the buyer. Your listing is live again.');sv();render()}
 else if(a==='as'){S.as=v;render()}
 else if(a==='support'){tt('Support link is not set yet')}
 else if(a==='bell')bellSheet();
 else if(a==='dpopen')dpSheet();
 else if(a==='fav'){var fu=me();fu.fv=fu.fv||[];var fi=fu.fv.indexOf(Number(v));if(fi>-1)fu.fv.splice(fi,1);else fu.fv.push(Number(v));sv();el.textContent=fi>-1?'♡':'♥';el.setAttribute('aria-pressed',String(fi<0))}
 else if(a==='mn'){var mu=me();if(v==='pd')pdSheet();else if(v==='lang')tt('English is the only language for now');else if(v==='sec')secSheet();else if(v==='dash'){S.tab=mu.role==='admin'?'admin':'dash';render()}else if(v==='mych'){S.tab='chan';render()}else if(v==='favs')favSheet();else if(v==='kyc')sheet(kycCard(mu)+'<button class="btn dk" data-a="shut">Close</button>');else if(v==='pay')paySett();else if(v==='inst'){var ip=window.__dakoInstall;if(ip){ip.prompt();window.__dakoInstall=null;render()}}}
 else if(a==='savePd'){var pn=$('pdn').value.trim();if(pn.length<3){tt('Enter your name');return}var pu=me();pu.n=pn;pu.ph=$('pdp').value.trim();sv();shut();render();tt('Saved')}
 else if(a==='chpw')chPw();
 else if(a==='mylrm'){var ml=S.l.filter(function(l){return l.id===Number(v)})[0];if(ml&&ml.s===me().id&&(ml.x==='ok'||ml.x==='pe')){ml.x='rm';sv();render();tt('Listing removed')}}
 else if(a==='walpay'){o=ord(Number(v));var wu=me();if(wal(wu.id).av<o.amt){tt('Not enough wallet balance');return}o.wp=1;o.pm='Wallet';o.ref='WALLET';o.st=2;nfy(o.s,'The buyer paid for \"'+o.t+'\" from their wallet. Hand over the account.');sv();shut();S.tab='orders';render();tt('Paid from your wallet')}
 else if(a==='dpsubmit'){var du=me(),am=Number($('da').value);if(!(am>=100)){tt('Minimum deposit is 100 ETB');return}if(!RC){tt('Upload your payment receipt first');return}S.dp.unshift({id:Date.now(),u:du.id,amt:Math.round(am),pm:$('pmth').value,ref:($('rcr').value||'').trim(),rc:RC,st:'pe',t:Date.now()});if(!sv()){S.dp.shift();tt('Storage is full. Try a smaller image');return}RC=null;nfyA('New deposit of '+N(Math.round(am))+' ETB from '+du.n+'. Please verify.');sv();shut();render();tt('Deposit submitted. The admin will verify it')}
 else if(a==='dok'){var d1=S.dp.filter(function(x){return x.id===Number(v)})[0];d1.st='ok';nfy(d1.u,'Your deposit of '+N(d1.amt)+' ETB was approved and added to your wallet.');sv();render()}
 else if(a==='dno'){var d2=S.dp.filter(function(x){return x.id===Number(v)})[0],rs=($('dr'+d2.id).value||'').trim();if(rs.length<3){tt('Enter a rejection reason');return}d2.st='no';d2.note=rs;nfy(d2.u,'Your deposit of '+N(d2.amt)+' ETB was rejected: '+rs);sv();render()}
 else if(a==='kycopen')kycSheet();else if(a==='pickKi'){$('ki-'+v).click()}
 else if(a==='kview')kycReview(v);
 else if(a==='kok'){var ku=S.u.filter(function(x){return x.id===v})[0];ku.k.st='ok';ku.k.note='';ku.v=1;nfy(ku.id,'Your identity is verified. You can now list accounts.');sv();shut();render();tt('Seller verified')}
 else if(a==='kno'){var kr=($('krs').value||'').trim();if(kr.length<3){tt('Enter a rejection reason');return}var kn=S.u.filter(function(x){return x.id===v})[0];kn.k.st='no';kn.k.note=kr;kn.v=0;nfy(kn.id,'KYC rejected: '+kr);sv();shut();render();tt('KYC rejected')}
 else if(a==='krev'){var kx=S.u.filter(function(x){return x.id===v})[0];kx.v=0;if(kx.k){kx.k.st='no';kx.k.note='Verification revoked by admin'}sv();shut();render();tt('Verification revoked')}
 else if(a==='kycsubmit'){var ku2=me(),nm=$('kn').value.trim(),idn=$('ki').value.trim(),ph=$('kp').value.trim(),dob=$('kd').value,pp=$('kt').value==='Passport',age=dob?Math.floor((Date.now()-new Date(dob))/31557600000):0;
  if(nm.length<5||nm.indexOf(' ')<0){tt('Enter your full legal name');return}
  if(idn.length<6){tt('Enter a valid ID number');return}
  if(!dob||age<18){tt('You must be 18 or older');return}
  if(ph.replace(/\D/g,'').length<9){tt('Enter a valid phone number');return}
  if(!KI.f||!KI.s||(!pp&&!KI.b)){tt('Upload all required photos');return}
  if(!$('kc').checked){tt('Please confirm the declaration');return}
  var prev=ku2.k;ku2.k={st:'pe',nm:nm,it:$('kt').value,idn:idn,dob:dob,ph:ph,f:KI.f,b:KI.b||'',s:KI.s,t:Date.now()};
  if(!sv()){ku2.k=prev;tt('Storage is full. Try smaller photos');return}
  KI={};nfyA('New KYC submission from '+ku2.n);sv();shut();render();tt('KYC submitted for review')}
 else if(a==='reqpay'){var u=me(),w=wal(u.id);if(u.role==='seller'&&!u.v){tt('Complete KYC verification first');return}if(!u.pay||!u.pay.no){tt('Add your payout account first');return}if(w.av<=0){tt('No available balance');return}S.po.unshift({id:Date.now(),s:u.id,amt:w.av,st:'pe',to:u.pay.m+' '+u.pay.no+' ('+u.pay.nm+')',ref:''});nfyA('Withdrawal requested: '+N(w.av)+' ETB by '+u.n);sv();render();tt('Withdrawal requested')}
 else if(a==='paid'){var p=S.po.filter(function(x){return x.id===Number(v)})[0],r=($('pf'+p.id).value||'').trim();if(r.length<4){tt('Enter the transfer reference');return}p.st='pd';p.ref=r;nfy(p.s,'Your withdrawal of '+N(p.amt)+' ETB was paid. Ref '+r);sv();render()}
 else if(a==='lok'){S.l.forEach(function(x){if(x.id===Number(v)){x.x='ok';nfy(x.s,'Your listing "'+x.t+'" was approved.')}});sv();render()}
 else if(a==='lrm'){S.l.forEach(function(x){if(x.id===Number(v))x.x='rm'});sv();render()}
 else if(a==='uv'){S.u.forEach(function(x){if(x.id===v)x.v=x.v?0:1});sv();render()}
 else if(a==='ub'){S.u.forEach(function(x){if(x.id===v)x.b=x.b?0:1});sv();render()}
 else if(a==='savePay'){var no=$('po').value.trim();if(no.length<6){tt('Enter the number correctly');return}me().pay={m:$('pm').value,nm:$('pn').value.trim(),no:no};sv();shut();tt('Saved')}
 else if(a==='saveCfg'){var sl2=$('csup').value.trim();if(sl2&&!/^https:\/\/(t\.me|telegram\.me)\//.test(sl2)){tt('Support link must start with https://t.me/');return}S.sup=sl2;S.pa.forEach(function(x,i){x.nm=$('cn'+i).value.trim();x.no=$('co'+i).value.trim()});sv();tt('Saved')}
 else if(a==='out'){S.me=null;S.mode='in';sv();render()}
});
document.addEventListener('input',function(e){if(e.target.id==='oq'){S.oq=e.target.value;$('olist').innerHTML=ordList()}if(e.target.id==='sr'){$('net').innerHTML=netTxt(Number(e.target.value))}if(e.target.id==='q'){S.q=e.target.value.trim();$('lst').innerHTML=lst(flt())}});
document.addEventListener('change',async function(e){if(e.target.id.indexOf('ki-')===0){var kf=(e.target.files||[])[0],ks2=e.target.id.slice(3);if(kf){var kg=await comp(kf);if(kg){KI[ks2]=kg;$('kp-'+ks2).innerHTML='<img class="th" style="height:110px;width:auto" src="'+kg+'" alt="Selected photo">'}else tt('Could not read that image')}e.target.value='';return}if(e.target.id==='rcf'){var f0=(e.target.files||[])[0];if(f0){var g0=await comp(f0);if(g0){RC=g0;$('rcp').innerHTML='<img class="th" src="'+g0+'" alt="Receipt preview">'}else tt('Could not read that image')}e.target.value='';return}if(e.target.id!=='sfile')return;var fs=Array.from(e.target.files||[]);for(var i=0;i<fs.length&&SH.length<4;i++){var g=await comp(fs[i]);if(g)SH.push(g)}e.target.value='';$('sh').innerHTML=shots();if(fs.length&&SH.length>=4)tt('Up to 4 photos only')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')shut();if((e.key==='Enter'||e.key===' ')&&e.target.getAttribute&&e.target.getAttribute('role')==='button'){e.preventDefault();e.target.click()}});
// Supabase Auth + Listings bridge, preserving the existing gold/black UI.
var DB=null,DB_URL=PROD?CFG.supabaseUrl:(localStorage.getItem('dako_supabase_url')||''),DB_KEY=PROD?CFG.supabaseKey:(localStorage.getItem('dako_supabase_key')||''),DB_USER=null;
async function connectBackend(url,key){
 if(!window.supabase||!url||!key)throw new Error('Project URL and publishable key are required');
 DB=window.supabase.createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
 if(DB.auth.onAuthStateChange)DB.auth.onAuthStateChange(function(ev){if(ev==='PASSWORD_RECOVERY')setTimeout(recoverySheet,0)});
 DB_URL=url;DB_KEY=key;localStorage.setItem('dako_supabase_url',url);localStorage.setItem('dako_supabase_key',key);
 var {data,error}=await DB.auth.getSession();if(error)throw error;
}
function authUserMap(user){
 var meta=user.user_metadata||{};
 return {id:user.id,n:meta.full_name||user.email||'User',e:user.email||'',role:meta.role==='seller'?'seller':'buyer',v:0,auth:true};
}
var UIDMAP={},UIDN=1000000;
function nid(u){return UIDMAP[u]||(UIDMAP[u]=++UIDN)}
function d2b(d){var p=d.split(','),m=/:(.*?);/.exec(p[0])[1],b=atob(p[1]),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return new Blob([a],{type:m})}
async function uploadShots(lid){
 var urls=[];
 for(var i=0;i<SH.length;i++){
  var path=DB_USER.id+'/'+lid+'/'+(i+1)+'.jpg',up=await DB.storage.from('listing-screenshots').upload(path,d2b(SH[i]),{contentType:'image/jpeg',upsert:true});
  if(up.error)throw up.error;
  urls.push(DB.storage.from('listing-screenshots').getPublicUrl(path).data.publicUrl);
 }
 return urls;
}
async function backendLogin(user){
 DB_USER=user;var u=authUserMap(user);
 try{var pr=await DB.from('profiles').select('role,full_name').eq('id',user.id).maybeSingle();if(pr.error)u.roleErr=pr.error.message;else if(!pr.data)u.roleErr='No profile row exists for this user';else{if(pr.data.role==='admin')u.role='admin';if(pr.data.full_name)u.n=pr.data.full_name}}catch(e){u.roleErr=String(e.message||e)}
 S.u=S.u.filter(function(x){return !x.auth;});S.u.push(u);S.me=u.id;S.tab=u.role==='admin'?'admin':'dash';S.o=[];S.po=[];S.dp=[];
 await refreshAll();render();if(S.beErr)tt('Orders and payments are not ready: '+S.beErr);
}
async function refreshBackendListings(){
 if(!DB)return;
 var cols='id,seller_id,platform,title,description,follower_count,price_etb,status,created_at',ext=cols+',account_url,is_monetized,account_age_years,monthly_income_etb,screenshots,reject_reason';
 var q=await DB.from('listings').select(ext+',category').order('created_at',{ascending:false});
 if(q.error)q=await DB.from('listings').select(ext).order('created_at',{ascending:false});
 if(q.error)q=await DB.from('listings').select(cols).order('created_at',{ascending:false});
 if(q.error)throw q.error;
 var me0=DB_USER&&S.u.filter(function(x){return x.id===DB_USER.id})[0],adm=!!me0&&me0.role==='admin';
 var MAP={approved:'ok',available:'ok',active:'ok',ok:'ok',published:'ok',pending:'pe',rejected:'rj',reserved:'rs',sold:'sd',paused:'rm'};
 S.l=(q.data||[]).map(function(x){var st=String(x.status||'pending').toLowerCase();return {id:nid(x.id),uid:x.id,t0:Date.parse(x.created_at)||0,cat:x.category||'',s:x.seller_id,p:x.platform||'Other',m:x.is_monetized?1:0,t:x.title||'Untitled listing',f:Number(x.follower_count||0),a:Number(x.account_age_years||0),i:Number(x.monthly_income_etb||0),r:Number(x.price_etb||0),d:x.description||'',x:MAP[st]||'pe',k:x.account_url||'',im:Array.isArray(x.screenshots)?x.screenshots:[],backend:true,status:st,note:x.reject_reason||''}}).filter(function(x){return adm||x.x==='ok'||(DB_USER&&x.s===DB_USER.id)});
}
function recoverySheet(){sheet('<h2>Set a new password</h2><div class="f"><label for="rp1">New password</label><input id="rp1" type="password" autocomplete="new-password" placeholder="At least 6 characters"></div><div class="f"><label for="rp2">Confirm new password</label><input id="rp2" type="password" autocomplete="new-password"></div><button class="btn" data-a="newpw">Update password</button>')}
var BEACT=['buy','walpay','submitPay','cxl','hand','ok','dis','ver','rel','ref','dpsubmit','dok','dno','reqpay','paid','saveCfg','savePay','bell','kycsubmit','kview','kok','kno','krev'];
async function rpc(fn,args){var r=await DB.rpc(fn,args||{});if(r.error)throw r.error;return r.data}
async function upReceipt(){if(!RC)throw new Error('Upload your payment receipt first');var p=DB_USER.id+'/'+crypto.randomUUID()+'.jpg',u=await DB.storage.from('receipts').upload(p,d2b(RC),{contentType:'image/jpeg'});if(u.error)throw u.error;return p}
async function upKyc(d,name){var p=DB_USER.id+'/'+crypto.randomUUID()+'-'+name+'.jpg',u=await DB.storage.from('kyc-documents').upload(p,d2b(d),{contentType:'image/jpeg'});if(u.error)throw u.error;return p}
async function refreshAll(){await refreshBackendListings();await refreshBackendData()}
async function refreshBackendData(){
 if(!DB||!DB_USER)return;
 var me0=S.u.filter(function(x){return x.id===DB_USER.id})[0],adm=!!me0&&me0.role==='admin',T=function(t){return Date.parse(t)||Date.now()};
 try{
  var r=await Promise.all([DB.from('market_orders').select('*').order('created_at',{ascending:false}),DB.from('wallet_deposits').select('*').order('created_at',{ascending:false}),DB.from('wallet_withdrawals').select('*').order('created_at',{ascending:false}),DB.from('app_notifications').select('*').order('created_at',{ascending:false}).limit(100),DB.from('app_settings').select('key,value'),DB.from('payout_accounts').select('*').eq('user_id',DB_USER.id).maybeSingle(),DB.rpc('wallet_summary'),DB.from('kyc_submissions').select('*').order('created_at',{ascending:false})]);
  for(var k=0;k<4;k++)if(r[k].error)throw r[k].error;
  var ST={awaiting_payment:0,verifying:1,awaiting_handover:2,awaiting_confirmation:3,awaiting_release:4,released:5,refunded:0,cancelled:0},DM={pending:'pe',approved:'ok',rejected:'no'};
  S.o=(r[0].data||[]).map(function(x){return {id:nid(x.id),uid:x.id,t0:Date.parse(x.created_at)||0,cx:x.status==='cancelled'?1:0,l:x.listing_id,t:x.title,p:x.platform,b:x.buyer_id,s:x.seller_id,amt:Number(x.amount_etb),pr:Number(x.price_etb),net:Number(x.seller_net_etb),st:ST[x.status]||0,ref:x.payment_ref||'',pm:x.payment_method||'',dp:x.disputed?1:0,rf:x.status==='refunded'?1:0,wp:x.paid_with_wallet?1:0,rcp:x.receipt_path||'',rc:'',backend:true}});
  S.dp=(r[1].data||[]).map(function(x){return {id:nid(x.id),uid:x.id,u:x.user_id,amt:Number(x.amount_etb),pm:x.method,ref:x.reference||'',rcp:x.receipt_path||'',rc:'',st:DM[x.status]||'pe',note:x.note||'',t:T(x.created_at)}});
  S.po=(r[2].data||[]).map(function(x){return {id:nid(x.id),uid:x.id,s:x.user_id,amt:Number(x.amount_etb),st:x.status==='paid'?'pd':'pe',to:x.destination,ref:x.reference||'',t:T(x.created_at)}});
  S.nf=(r[3].data||[]).map(function(x){return {id:nid(x.id),u:x.user_id,tx:x.body,t:T(x.created_at),rd:x.read?1:0}});
  if(!r[4].error)(r[4].data||[]).forEach(function(x){if(x.key==='payment_accounts'&&Array.isArray(x.value)&&x.value.length)S.pa=x.value;if(x.key==='support_link'&&x.value&&typeof x.value.url==='string')S.sup=x.value.url});
  if(!r[5].error&&r[5].data&&me0)me0.pay={m:r[5].data.method,nm:r[5].data.holder_name,no:r[5].data.account_no};
  if(!r[6].error&&r[6].data){var w=r[6].data;S.wal={lk:Number(w.locked),av:Number(w.available),pd:Number(w.withdrawn),rq:Number(w.withdraw_pending),rel:Number(w.income),dep:Number(w.deposited)}}
  if(adm){
   var pf=await DB.from('profiles').select('id,full_name,role');
   if(!pf.error)(pf.data||[]).forEach(function(p){if(!S.u.some(function(x){return x.id===p.id}))S.u.push({id:p.id,n:p.full_name||'User',e:'',role:p.role||'buyer',v:0,auth:true})});
   var paths=[];S.o.forEach(function(x){if(x.st===1&&x.rcp)paths.push(x.rcp)});S.dp.forEach(function(x){if(x.st==='pe'&&x.rcp)paths.push(x.rcp)});
   if(paths.length){var sg=await DB.storage.from('receipts').createSignedUrls(paths,3600);if(!sg.error){var M={};(sg.data||[]).forEach(function(z){if(z.signedUrl)M[z.path]=z.signedUrl});S.o.forEach(function(x){if(M[x.rcp])x.rc=M[x.rcp]});S.dp.forEach(function(x){if(M[x.rcp])x.rc=M[x.rcp]})}}
  }
  if(!r[7].error){var seen={},KS={pending:'pe',approved:'ok',rejected:'no',revoked:'no'};
   (r[7].data||[]).forEach(function(x){if(seen[x.user_id])return;seen[x.user_id]=1;var tu=S.u.filter(function(y){return y.id===x.user_id})[0];if(tu){tu.k={st:KS[x.status]||'pe',sid:x.id,nm:x.full_name,it:x.id_type,idn:x.id_number,dob:x.date_of_birth,ph:x.phone,pf:x.id_front_path,pb:x.id_back_path||'',ps:x.selfie_path,f:'',b:'',s:'',note:x.note||'',t:T(x.created_at)}}});
   S.u.forEach(function(y){if(!y.auth)return;if(y.role==='admin')y.v=1;else{y.v=y.k&&y.k.st==='ok'?1:0;if(y.v===0&&!seen[y.id])delete y.k}})}
  S.beErr='';
 }catch(e){S.beErr=(e&&e.message)||String(e)}
}
async function beAct(a,v){
 var id=Number(v),o=null,RP={hand:['seller_handover','Marked as handed over'],ok:['buyer_confirm','Thanks. The admin will release the funds'],dis:['report_dispute','Your report was sent to the admin'],ver:['admin_verify_payment','Payment verified'],rel:['admin_release','Funds released to the seller'],ref:['admin_refund','Order refunded']};
 var ou=function(){o=ord(id);if(!o||!o.uid)throw new Error('Order not found');return o.uid};
 if(a==='buy'){var L=S.l.filter(function(x){return x.id===id})[0];if(!L||!L.uid)return;var nu=await rpc('create_order',{p_listing:L.uid});await refreshAll();shut();S.tab='orders';render();var no=S.o.filter(function(x){return x.uid===nu})[0];if(no)paySheet(no.id)}
 else if(a==='walpay'){await rpc('pay_with_wallet',{p_order:ou()});await refreshAll();shut();S.tab='orders';render();tt('Paid from your wallet')}
 else if(a==='submitPay'){var ou1=ou(),pth=await upReceipt();await rpc('submit_payment',{p_order:ou1,p_method:$('pmth').value,p_ref:($('rcr').value||'').trim(),p_receipt:pth});RC=null;await refreshAll();shut();S.tab='orders';render();tt('Payment submitted. The admin will verify it')}
 else if(a==='cxl'){await rpc('cancel_order',{p_order:ou()});await refreshAll();render();tt('Order cancelled')}
 else if(RP[a]){await rpc(RP[a][0],{p_order:ou()});await refreshAll();render();tt(RP[a][1])}
 else if(a==='dpsubmit'){var am=Number($('da').value);if(!(am>=100)){tt('Minimum deposit is 100 ETB');return}var p2=await upReceipt();await rpc('submit_deposit',{p_amount:Math.round(am),p_method:$('pmth').value,p_ref:($('rcr').value||'').trim(),p_receipt:p2});RC=null;await refreshAll();shut();render();tt('Deposit submitted. The admin will verify it')}
 else if(a==='dok'||a==='dno'){var d=S.dp.filter(function(x){return x.id===id})[0];if(!d||!d.uid)throw new Error('Deposit not found');var rs=a==='dno'?(($('dr'+d.id)||{}).value||'').trim():'';if(a==='dno'&&rs.length<3){tt('Enter a rejection reason');return}await rpc('admin_review_deposit',{p_id:d.uid,p_approve:a==='dok',p_note:rs||null});await refreshAll();render();tt(a==='dok'?'Deposit approved':'Deposit rejected')}
 else if(a==='reqpay'){await rpc('request_withdrawal');await refreshAll();render();tt('Withdrawal requested')}
 else if(a==='paid'){var p=S.po.filter(function(x){return x.id===id})[0];if(!p||!p.uid)throw new Error('Withdrawal not found');var rf=(($('pf'+p.id)||{}).value||'').trim();if(rf.length<4){tt('Enter the transfer reference');return}await rpc('admin_mark_withdrawal_paid',{p_id:p.uid,p_ref:rf});await refreshAll();render();tt('Marked as paid')}
 else if(a==='savePay'){var no2=$('po').value.trim();if(no2.length<6){tt('Enter the number correctly');return}var pay={m:$('pm').value,nm:$('pn').value.trim()||'-',no:no2},up=await DB.from('payout_accounts').upsert({user_id:DB_USER.id,method:pay.m,holder_name:pay.nm,account_no:pay.no,updated_at:new Date().toISOString()});if(up.error)throw up.error;me().pay=pay;shut();tt('Saved')}
 else if(a==='saveCfg'){var sl=$('csup').value.trim();if(sl&&!/^https:\/\/(t\.me|telegram\.me)\//.test(sl)){tt('Support link must start with https://t.me/');return}var acc=S.pa.map(function(x,i){return {m:x.m,nm:$('cn'+i).value.trim(),no:$('co'+i).value.trim()}}),now=new Date().toISOString(),up2=await DB.from('app_settings').upsert([{key:'payment_accounts',value:acc,updated_at:now},{key:'support_link',value:{url:sl},updated_at:now}]);if(up2.error)throw up2.error;S.pa=acc;S.sup=sl;tt('Saved')}
 else if(a==='bell'){bellSheet();rpc('mark_notifications_read').catch(function(){})}
 else if(a==='kycsubmit'){
  var nm=$('kn').value.trim(),idn=$('ki').value.trim(),ph=$('kp').value.trim(),dob=$('kd').value,pp=$('kt').value==='Passport',age=dob?Math.floor((Date.now()-new Date(dob))/31557600000):0;
  if(nm.length<5||nm.indexOf(' ')<0){tt('Enter your full legal name');return}
  if(idn.length<6){tt('Enter a valid ID number');return}
  if(!dob||age<18){tt('You must be 18 or older');return}
  if(ph.replace(/\D/g,'').length<9){tt('Enter a valid phone number');return}
  if(!KI.f||!KI.s||(!pp&&!KI.b)){tt('Upload all required photos');return}
  if(!$('kc').checked){tt('Please confirm the declaration');return}
  var fp=await upKyc(KI.f,'front'),bp=KI.b&&!pp?await upKyc(KI.b,'back'):null,sp=await upKyc(KI.s,'selfie');
  await rpc('submit_kyc',{p_name:nm,p_id_type:$('kt').value,p_id_number:idn,p_dob:dob,p_phone:ph,p_front:fp,p_back:bp,p_selfie:sp});
  KI={};await refreshAll();shut();render();tt('KYC submitted for review')}
 else if(a==='kview'){var ku=S.u.filter(function(x){return x.id===v})[0];if(!ku)return;
  if(ku.k&&ku.k.pf){var ps=[ku.k.pf,ku.k.pb,ku.k.ps].filter(Boolean),sg=await DB.storage.from('kyc-documents').createSignedUrls(ps,900);if(sg.error)throw sg.error;var M={};(sg.data||[]).forEach(function(z){if(z.signedUrl)M[z.path]=z.signedUrl});ku.k.f=M[ku.k.pf]||'';ku.k.b=ku.k.pb?(M[ku.k.pb]||''):'';ku.k.s=M[ku.k.ps]||''}
  kycReview(v)}
 else if(a==='kok'||a==='kno'){var kx=S.u.filter(function(x){return x.id===v})[0];if(!kx||!kx.k||!kx.k.sid)throw new Error('KYC submission not found');var kr=a==='kno'?(($('krs')||{}).value||'').trim():'';if(a==='kno'&&kr.length<3){tt('Enter a rejection reason');return}await rpc('admin_review_kyc',{p_id:kx.k.sid,p_approve:a==='kok',p_note:kr||null});await refreshAll();shut();render();tt(a==='kok'?'Seller verified':'KYC rejected')}
 else if(a==='krev'){await rpc('admin_revoke_kyc',{p_user:v,p_note:'Verification revoked by admin'});await refreshAll();shut();render();tt('Verification revoked')}
}
async function restoreBackendSession(){
 if(!DB)return;
 try{var {data,error}=await DB.auth.getSession();if(error)throw error;if(data.session&&data.session.user)await backendLogin(data.session.user)}
 catch(err){tt('Session restore failed: '+err.message)}
}
// Supabase settings actions in capture phase, ahead of the demo click handler.
document.addEventListener('click',async function(ev){
 var el=ev.target.closest('[data-a]');if(!el)return;var a=el.dataset.a;
 if(a==='out'&&DB){ev.stopPropagation();try{await DB.auth.signOut()}catch(e){}DB_USER=null;S.me=null;S.mode='in';S.tab='dash';S.u=S.u.filter(function(x){return !x.auth});S.l=[];S.o=[];S.po=[];S.dp=[];S.nf=[];S.wal=null;sv();render();return}
 if(a==='forgot'){ev.stopPropagation();var em=($('ae').value||'').trim();if(!DB){tt('Cannot reach the server');return}if(!em){tt('Enter your email first');return}try{var rr=await DB.auth.resetPasswordForEmail(em,{redirectTo:location.origin+location.pathname});if(rr.error)throw rr.error;tt('If this email is registered, a reset link was sent')}catch(err){tt('Could not send the reset email: '+(err.message||err))}return}
 if(a==='newpw'){ev.stopPropagation();var p1=$('rp1').value,p2=$('rp2').value;if(p1.length<6){tt('Password needs 6+ characters');return}if(p1!==p2){tt('Passwords do not match');return}try{var ur=await DB.auth.updateUser({password:p1});if(ur.error)throw ur.error;shut();tt('Password updated');var sn=await DB.auth.getSession();if(sn.data&&sn.data.session&&!S.me)await backendLogin(sn.data.session.user)}catch(err){tt('Could not update the password: '+(err.message||err))}return}
 if(DB&&DB_USER&&BEACT.indexOf(a)>-1){ev.stopPropagation();try{await beAct(a,el.dataset.v)}catch(err){tt('Backend error: '+(err.message||err))}return}
 if(a==='rolecheck'&&DB&&DB_USER){ev.stopPropagation();await backendLogin(DB_USER);var m2=S.u.filter(function(x){return x.id===DB_USER.id})[0];if(!m2||m2.role!=='admin'){S.tab='acct';render()}tt(m2&&m2.role==='admin'?'Admin access confirmed':'Still not an admin in the database');return}
 if(DB&&DB_USER&&(a==='lok'||a==='lrm'||a==='mylrm')){
  var L=S.l.filter(function(x){return String(x.id)===el.dataset.v})[0];
  if(L&&L.backend){ev.stopPropagation();
   try{
    if(a==='mylrm'){if(L.s!==DB_USER.id)return;var d=await DB.from('listings').delete().eq('id',L.uid).select('id');if(d.error)throw d.error;if(!d.data||!d.data.length){tt('Could not remove this listing');return}await refreshBackendListings();render();tt('Listing removed');return}
    var patch=a==='lok'?{status:'approved',reject_reason:null}:{status:'rejected',reject_reason:(($('lr'+L.id)||{}).value||'').trim()||null};
    var r=await DB.from('listings').update(patch).eq('id',L.uid).select('id');if(r.error)throw r.error;
    if(!r.data||!r.data.length){tt('Not allowed. Is this account an admin?');return}
    await refreshBackendListings();render();tt(a==='lok'?'Listing approved and live':'Listing rejected');
   }catch(err){tt('Backend error: '+(err.message||err))}
   return}}
 if(a==='sbconfig'){var panel=$('sbsettings');if(panel)panel.classList.toggle('hidden');return}
 if(a==='sbsave'){var url=$('sburl').value.trim(),key=$('sbkey').value.trim();
  try{await connectBackend(url,key);await restoreBackendSession();tt('Supabase connected');if(!S.me)authView()}catch(err){tt('Connect failed: '+err.message)}return}
 if(a==='sbclear'){if(DB)await DB.auth.signOut();DB=null;DB_USER=null;DB_URL='';DB_KEY='';
  localStorage.removeItem('dako_supabase_url');localStorage.removeItem('dako_supabase_key');S.me=null;S.mode='in';render();tt('Backend disconnected');return}
},true);
if(DB_URL&&DB_KEY&&window.supabase){connectBackend(DB_URL,DB_KEY).then(restoreBackendSession).then(function(){if(!S.me)authView()}).catch(function(e){console.warn('Supabase startup:',e.message);authView()})}
var LASTSIG='';
async function autoRefresh(){if(!DB||!DB_USER)return;try{await refreshAll();var sg=JSON.stringify([S.l.map(function(x){return [x.uid,x.status]}),S.o.map(function(x){return [x.uid,x.st,x.rf,x.dp]}),S.dp.map(function(x){return [x.uid,x.st]}),S.po.map(function(x){return [x.uid,x.st]}),S.nf.length,S.wal]);if(sg!==LASTSIG){LASTSIG=sg;if($('sheet').classList.contains('hidden')&&S.tab!=='sell'&&!(document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))){var y=window.scrollY;render();window.scrollTo(0,y)}}}catch(e){}}
setInterval(autoRefresh,30000);document.addEventListener('visibilitychange',function(){if(!document.hidden)autoRefresh()});
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__dakoInstall=e;if(S.me&&S.tab==='acct')render()});
window.addEventListener('appinstalled',function(){window.__dakoInstall=null});
if(typeof navigator!=='undefined'&&navigator.serviceWorker&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(function(){});
render();
})();
