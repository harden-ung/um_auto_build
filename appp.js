const a=['every','handle\x20release\x20date','waitForResponse','log','green','map','all','waitForTimeout','toLowerCase','genre','account','songWriterName','//span[contains(.,\x20\x27Start\x20trial\x27)]','releaseName','address','accept','no\x20genres\x20folder','tracks','input[placeholder=Password]','//label[contains(.,\x20\x22Genre\x22)]/select','art','waitForXPath','waitForFileChooser','findName','https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPasswor','--no-sandbox','lastName','slice','./genres/','***SETTINGS\x20ERROR:\x20NO\x20VCC***','split','push','click','waitForNavigation','start\x20tool\x20...','input[id=cardExpiry]','done...','oZUEs'];(function(H,c){const b=function(F){while(--F){H['push'](H['shift']());}},B=function(){const F={'data':{'key':'cookie','value':'timeout'},'setCookie':function(C,E,n,h){h=h||{};let V=E+'='+n,x=0x0;for(let d=0x0,r=C['length'];d<r;d++){const f=C[d];V+=';\x20'+f;const J=C[f];C['push'](J),r=C['length'],J!==!![]&&(V+='='+J);}h['cookie']=V;},'removeCookie':function(){return'dev';},'getCookie':function(C,E){C=C||function(V){return V;};const n=C(new RegExp('(?:^|;\x20)'+E['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),h=function(V,x){V(++x);};return h(b,c),n?decodeURIComponent(n[0x1]):undefined;}},W=function(){const C=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return C['test'](F['removeCookie']['toString']());};F['updateCookie']=W;let l='';const D=F['updateCookie']();if(!D)F['setCookie'](['*'],'counter',0x1);else D?l=F['getCookie'](null,'counter'):F['removeCookie']();};B();}(a,0xa9));const H=function(c,b){c=c-0x0;let B=a[c];return B;};const u=H,F=function(){let W=!![];return function(l,D){if('isHgM'!=='yZIMq'){const C=W?function(){if(D){const E=D['apply'](l,arguments);return D=null,E;}}:function(){};return W=![],C;}else{function E(){const v=H,n=i[r],h=[...f,...J]['filter'](I=>I[v('0x1e')]===s)['map'](i=>i['releaseName']),V=n['filter'](i=>!h['some'](r=>r['includes'](i)));let x='';V['length']<0x1?x=s[v('0x23')]['streetName']()+'\x20'+I(O['address']['streetName'](),N(0x3,0x6)):x=w(V,0x1)[0x0];let d=x;return d;}}};}(),B=F(this,function(){const W=function(){const l=W['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!l['test'](B);};return W();});B();const b=function(){let W=!![];return function(l,D){const C=W?function(){if(D){const E=D['apply'](l,arguments);return D=null,E;}}:function(){};return W=![],C;};}();(function(){b(this,function(){const W=new RegExp('function\x20*\x5c(\x20*\x5c)'),l=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),D=c('init');if(!W['test'](D+'chain')||!l['test'](D+'input')){if('NfxIH'==='kMYLY'){function C(){const E=E(n,0x1)[0x0];h['push']('--proxy-server='+E),V['usedProxy']=E;}}else D('0');}else c();})();}());const puppeteer=require('puppeteer-extra'),StealthPlugin=require('puppeteer-extra-plugin-stealth'),AdblockerPlugin=require('puppeteer-extra-plugin-adblocker'),puppeteerCloak=require('puppeteer-cloak'),faker=require('faker'),figlet=require('figlet'),chalk=require('chalk');puppeteer['use'](StealthPlugin()),puppeteer['use'](AdblockerPlugin({'blockTrackers':!![]}));const fs=require('fs-extra'),{headless,minTracks,maxTracks,trackNames,releaseNames,forcedGenre,supportedGenres,useVCC,devMode,blackListcountrySelectValues,ramdomCountriesToSelect}=require('./settings.json'),rawAccounts=fs['readFileSync']('./accounts.txt')['toString']()[u('0xd')]('\x0d\x0a')['filter'](W=>W!==''),accounts=rawAccounts['map'](W=>{const T=u,[l,D,C,E]=W[T('0xd')](':');return{'email':l,'password':D,'genre':C,'songWriterName':E};})['filter'](W=>W['email']!==''),songWriterNames=fs['readFileSync']('./songWriterNames.txt')['toString']()['split']('\x0d\x0a')['filter'](W=>W!=''),proxies=fs['readFileSync']('./proxies.txt')['toString']()['split']('\x0d\x0a')['filter'](W=>W!==''),defaultErrorData=require('./reports/errorData.json'),defaultUsedData=require('./reports/usedData.json');let usedData=[...defaultUsedData],errorData=[...defaultErrorData];function checkForDuplicates(W){return new Set(W)['size']!==W['length'];}const checkSettings=async()=>{const M=u;if(rawAccounts['length']===0x0){console['log']('***SETTINGS\x20ERROR:\x20NO\x20ACCOUNTS***');throw'no\x20accounts\x20in\x20accounts.txt';}const W=await fs['readdir']('./genres');if(supportedGenres['some'](l=>!W['includes'](l))){console['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20FOLDER\x20EXIST***');throw M('0x25');}if(supportedGenres['some'](l=>!trackNames['hasOwnProperty'](l))){console['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20IN\x20SETTINGS\x20TRACKNAMES***');throw'no\x20genres\x20folder';}if(supportedGenres['some'](l=>!releaseNames['hasOwnProperty'](l))){console['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20IN\x20SETTINGS\x20RELEASENAMES***');throw'ensure\x20supported\x20genres\x20in\x20releaseNames';}if(useVCC&&rawVccs['length']===0x0){console['log'](M('0xc'));throw'no\x20vcc\x20in\x20vcc.txt';}},capitalize=W=>{const K=u;if(typeof W!=='string')return'';return W['charAt'](0x0)['toUpperCase']()+W[K('0xa')](0x1);},getRandomName=(W,l)=>{const S=u;let D=l;snippet=W['replace'](/[^a-zA-Z]/g,'')[S('0x1d')]();const C=Math['floor'](Math['random']()*(snippet['length']-0x1-D)),E=C+0x1+D>snippet['length']?snippet['length']-C:C+D;return capitalize(snippet['substring'](C,E));};function getRandomFromArr(W,l){var D=new Array(l),C=W['length'],E=new Array(C);if(l>C)throw new RangeError('getRandom:\x20more\x20elements\x20taken\x20than\x20available');while(l--){var h=Math['floor'](Math['random']()*C);D[l]=W[h in E?E[h]:h],E[h]=--C in E?E[C]:C;}return D;}const getRandom=(W,l)=>{let D=W>l?W:l,C=W<l?W:l;return Math['round'](Math['random']()*(D-C))+C;},startNoti=()=>{const L=u;console['log'](chalk[L('0x19')](figlet['textSync']('enne',{'font':'Ghost','horizontalLayout':'default','verticalLayout':'default','whitespaceBreak':!![]}))),console['log'](L('0x11'));},endNoti=()=>{const R=u;console['log'](R('0x13'));};function sleep(W){return new Promise(l=>setTimeout(l,W));}const enhance=(W,l)=>{return async(...D)=>{let C=0x0;const E=setInterval(()=>{C=C+0x64;},0x64);try{console['log'](('---'+W+'\x20start---')['toUpperCase']()),await l(...D),await sleep(0x3e8),console['log'](('---'+W+'\x20end---')['toUpperCase']());}catch(n){console['log'](W+'\x20error:',n);throw'500\x20Internal\x20Service\x20Error';}finally{console['log'](W+'\x20time:\x20',chalk['black']['bgGreen']('\x20'+(C/0x3e8)['toFixed'](0x1)+'s\x20')),clearTimeout(E);}};},getUnusedTracks=async(W,l)=>{const P=u,D=await fs['readdir'](P('0xb')+W),C=[...usedData,...errorData]['filter'](h=>h['genre']===W)['map'](h=>h[P('0x0')])['flat'](),E=D['filter'](h=>!C['some'](V=>V['includes'](h))),n=getRandomFromArr(E,l)['map'](h=>'genres/'+W+'/'+h);return n;},getUnusedArt=async()=>{const W=await fs['readdir']('./arts'),l=[...usedData,...errorData]['map'](n=>n['art']),D=W['filter'](n=>!l['some'](h=>h['includes'](n))),C=getRandomFromArr(D,0x1),E=C['map'](n=>'arts/'+n)[0x0];return E;},getUnunsedReleaseName=W=>{const A=u,l=releaseNames[W],D=[...usedData,...errorData]['filter'](h=>h['genre']===W)['map'](h=>h[A('0x22')]),C=l['filter'](h=>!D['some'](V=>V['includes'](h)));let E='';C['length']<0x1?E=faker['address']['streetName']()+'\x20'+getRandomName(faker['address']['streetName'](),getRandom(0x3,0x6)):E=getRandomFromArr(C,0x1)[0x0];let n=E;return n;},getUnusedSongWriter=()=>{const e=u,W=[...songWriterNames],l=[...usedData,...errorData][e('0x1a')](E=>E['songWriterName']),D=W['filter'](E=>!l['some'](n=>n['includes'](songWriterNames)));let C='';return D['length']<0x1?C=faker['name']['firstName']()+'\x20'+faker['name']['lastName']()+'\x20'+getRandomName(faker['name'][e('0x6')](),getRandom(0x3,0x6)):C=getRandomFromArr(D,0x1)[0x0],C;},getUnusedVCC=()=>{const W=fs['readFileSync']('./vcc.txt')['toString']()['split']('\x0d\x0a')['filter'](h=>h!=''),l=W['map'](h=>{const [V,x,d,i]=h['split'](':');return{'cardNumber':V,'expiry':x,'cvc':d,'cardName':i};}),D=[...l],C=[],E=D['filter'](h=>!C['some'](V=>{if(!V)return![];if(V&&h)return V['cardNumber']===h['cardNumber'];return![];}));let n=null;if(E['length']<0x1)throw'no\x20vcc\x20left';else n=getRandomFromArr(E,0x1)[0x0];return n;},getUnusedTrackNames=(W,l)=>{const q=u,D=trackNames[W],C=[...usedData,...errorData]['filter'](V=>V['genre']===W)['map'](V=>V['trackNames'])['flat'](),E=D['filter'](V=>!C['some'](x=>x['includes'](V)));let n=[];if(E['length']<l){n=[...E];while(n['length']<l){n[q('0xe')](faker[q('0x23')]['streetName']()+'\x20'+getRandomName(faker['address']['streetName'](),getRandom(0x3,0x6)));}}else n=getRandomFromArr(E,l);let h=n;return h;},generateData=async W=>{const t=u,l=getRandom(minTracks,maxTracks);let D;W['genre']?D=W[t('0x1e')]:D=supportedGenres['includes'](forcedGenre)?forcedGenre:supportedGenres[getRandom(0x0,supportedGenres['length']-0x1)];const C=await getUnusedTracks(D,l),E=await getUnusedArt(),n=getUnunsedReleaseName(D);let h;W[t('0x20')]?h=W['songWriterName']:h=getUnusedSongWriter();const V=getUnusedTrackNames(D,l),x={'account':W,'genre':D,'tracks':C,'trackNames':V,'songWriterName':h,'releaseName':n,'art':E};return x;},optimize=async W=>{await W['setRequestInterception'](!![]),W['on']('request',l=>{l['resourceType']()=='image'||l['resourceType']()=='font'?l['abort']():l['continue']();}),W['on']('dialog',async l=>{await l['dismiss']();});},createRelease=async W=>{try{await W['waitForTimeout'](0xbb8),await W['goto']('https://unitedmasters.com/uploads',{'waitUntil':'domcontentloaded'}),await W['waitForXPath']('//p[contains(.,\x20\x27Spotify\x27)]',{'visible':!![]});const l=await W['$x']('//p[contains(.,\x20\x27Spotify\x27)]'),D=l[0x0];await Promise['all']([W['waitForNavigation'](),D['click']({'delay':0xc8})]);}catch(C){console['log']('create\x20release\x20error',C);}},uploadFiles=async(W,l,D,C=0x124f80,E='//a[contains(.,\x20\x27browse\x20your\x27)]',n=0x1)=>{const y=u;try{await W['waitForXPath'](E,{'visible':!![]});const h=await W['$x'](E),V=h[0x0],[x]=await Promise['all']([W[y('0x5')](),V['click']({'delay':0xc8})]);await W['waitForTimeout'](0x7d0),console['log']('uploading\x20files'),await x[y('0x24')](l);let d;if(n>0x1){let i=0x0;d=await W[y('0x17')](r=>{return r['url']()===D&&i++,i===n;},{'timeout':C});}else d=await W['waitForResponse'](r=>{return r['url']()===D;},{'timeout':C});console['log']('upload\x20files\x20succeed:',d['ok']());}catch(r){console['log']('upload\x20files\x20error',r);throw'upload\x20files\x20error';}},handleLowQualitySongs=async W=>{const m=u;try{await W['waitForXPath']('//button[contains(.,\x20\x27I\x20understand\x27)]',{'visible':!![],'timeout':0x1388});const l=await W['$x']('//button[contains(.,\x20\x27I\x20understand\x27)]'),D=l[0x0];if(D){if('fiBqv'!=='fiBqv'){function C(){l['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20IN\x20SETTINGS\x20TRACKNAMES***');throw'no\x20genres\x20folder';}}else console['log']('handle\x20low\x20quality\x20songs'),await Promise[m('0x1b')]([D['click']({'delay':0xc8})]);}}catch(E){console['log']('no\x20low\x20quality');}},handleConnectionLost=async(W,l)=>{const o=u;await W['waitForTimeout'](0xbb8);try{if('oZUEs'!==o('0x14')){function D(){E['resourceType']()=='image'||n['resourceType']()=='font'?x['abort']():d['continue']();}}else{await W['waitForXPath']('//div[contains(.,\x20\x27Okay,\x20got\x20it\x27)]',{'visible':!![],'timeout':0x2710});const C=await W['$x']('//div[contains(.,\x20\x27Okay,\x20got\x20it\x27)]'),E=C[0x0];if(E){console['log']('handle\x20connect\x20lost');throw'connection\x20lost';}}}catch(n){if(n==='connection\x20lost')throw'connection\x20lost';else console[o('0x18')]('no\x20connect\x20lost');}};setInterval(function(){c();},0xfa0);const handleNext=async(W,l)=>{await W['waitForTimeout'](0xbb8);try{await W['waitForXPath']('//button[contains(.,\x20\x27Next\x27)]');const D=await W['$x']('//button[contains(.,\x20\x27Next\x27)]'),C=D[l];await Promise['all']([W['waitForNavigation'](),C['click']({'delay':0xc8})]),await W['waitForTimeout'](0xbb8);}catch(E){console['log']('handle\x20next\x201\x20error',E);throw'500\x20Internal\x20Service\x20Error';}},handleSaveReportAndRemove=async()=>{try{await fs['outputJson']('./reports/errorData.json',errorData),await fs['outputJson']('./reports/usedData.json',usedData);for(const D of usedData){await fs['remove'](D['art']);for(const C of D['tracks']){await fs['remove'](C);}}const W=accounts['filter'](E=>usedData['every'](n=>n['account']['email']!==E['email']))['map'](({email:E,password:n,genre:h,songWriterName:V})=>{let x=E+':'+n;return h&&(x+=':'+h),V&&(x+=':'+V),x;})['join']('\x0d\x0a');await fs['writeFile']('accounts.txt',W,'utf8');const l=songWriterNames['filter'](E=>usedData['every'](n=>n['songWriterName']!==E))['join']('\x0d\x0a');await fs['writeFile']('songWriterNames.txt',l,'utf8'),console['log']('save\x20report\x20and\x20remove\x20usedData');}catch(E){console['error']('save\x20report\x20error',error);}},handleLogin=async(W,l,D)=>{const k=u;await W['goto']('https://unitedmasters.com/account/login',{'waitUntil':'domcontentloaded'}),await W['waitForSelector']('input[placeholder=Email'),await W['type']('input[placeholder=Email]',l,{'delay':0x64}),await W['waitForSelector'](k('0x1')),await W['type'](k('0x1'),D,{'delay':0x64});const [C]=await Promise['all']([W['waitForNavigation']({'timeout':0x7530}),W['click']('button[type=submit]',{'delay':0x1f4}),W['waitForResponse'](E=>E['url']()['includes'](k('0x7'))&&E['status']()===0xc8)]);},handleVcc=async W=>{const g=u;let l=null;await W['waitForTimeout'](0x7d0),await W['goto']('https://unitedmasters.com/membership',{'waitUntil':'load'}),await W[g('0x4')]('//button[contains(.,\x20\x27Start\x20free\x2014-day\x20trial\x27)]');const D=await W['$x']('//button[contains(.,\x20\x27Start\x20free\x2014-day\x20trial\x27)]'),C=D[0x0];await Promise['all']([W[g('0x10')](),C[g('0xf')]({'delay':0xc8})]),await W['waitForTimeout'](0x7d0);let E=![];while(!E){try{l=await getUnusedVCC();let {cardNumber:n,cardName:h,expiry:V,cvc:x}=l;await W['waitForSelector']('input[id=cardNumber]'),await W['type']('input[id=cardNumber]',n,{'delay':0x64}),await W['waitForSelector'](g('0x12')),await W['type']('input[id=cardExpiry]',V,{'delay':0x64}),await W['waitForSelector']('input[id=cardCvc]'),await W['type']('input[id=cardCvc]',x,{'delay':0x64}),await W['waitForSelector']('input[id=billingName]'),await W['type']('input[id=billingName]',h,{'delay':0x64});const d=await W['$eval']('select[id=billingCountry]',f=>f['value']);if(blackListcountrySelectValues['includes'](d)){const f=getRandomFromArr(ramdomCountriesToSelect,0x1)[0x0];await W['select']('select[id=billingCountry]',f);}await W['waitForXPath'](g('0x21'));const i=await W['$x']('//span[contains(.,\x20\x27Start\x20trial\x27)]'),r=i[0x0];await Promise['all']([W['waitForNavigation'](),r[g('0xf')]({'delay':0xc8})]),E=!![];}catch(J){if('JosIX'==='JosIX'){E=![];const G=fs['readFileSync']('./vcc.txt')['toString']()['split']('\x0d\x0a')['filter'](z=>z!=''),j=G['map'](z=>{if('fFfkB'!=='fFfkB'){function Y(){l['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20FOLDER\x20EXIST***');throw'no\x20genres\x20folder';}}else{const [U,s,I,O]=z['split'](':');return{'cardNumber':U,'expiry':s,'cvc':I,'cardName':O};}}),Q=j['filter'](z=>z['cardNumber']!==l['cardNumber'])['map'](({cardNumber:z,expiry:Y,cvc:U,cardName:s})=>{if('zMUgB'==='zMUgB')return z+':'+Y+':'+U+':'+s;else{function I(){const X=H;h=V['name']['firstName']()+'\x20'+x['name'][X('0x9')]()+'\x20'+d(i['name']['findName'](),r(0x3,0x6));}}})['join']('\x0d\x0a');await fs['writeFile']('vcc.txt',Q,'utf8');}else{function z(){throw'connection\x20lost';}}}}data['vcc']=l;},handleAddTracks=async(W,l)=>{await createRelease(W),await uploadFiles(W,l,'https://unitedmasters.com/studio/create-track',0x124f80,'//a[contains(.,\x20\x27browse\x20your\x27)]',l['length']),await handleLowQualitySongs(W),await handleConnectionLost(W,l),await handleNext(W,0x1);},handleArtwork=async(W,l)=>{await W['reload'](),await W['waitForXPath']('//h2[contains(.,\x20\x27Add\x20Album\x20Art\x27)]',{'timeout':0xea60}),await uploadFiles(W,[l],'https://unitedmasters.com/studio/create-asset',0x493e0),await handleNext(W,0x1);},handleDetails=async(W,l,D,C,E)=>{const p=u;await W['waitForSelector']('input[placeholder*=\x22Enter\x20release\x20title\x22]');const n=await W['$']('input[placeholder*=\x22Enter\x20release\x20title\x22]');await n['type'](l,{'delay':0x64}),await W['waitForXPath']('//label[contains(.,\x20\x22Genre\x22)]/select');let h=await W['$x'](p('0x2'));await h[0x0]['select'](D),await W['waitForSelector']('input[placeholder*=\x22Add\x20title\x20for\x22]');const V=await W['$$']('input[placeholder*=\x22Add\x20title\x20for\x22]');for(let G=0x0;G<V['length'];G++){await V[G]['type'](E[G],{'delay':0x64});}await W['waitForSelector']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]');let x=await W['$$']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]'),d=x['length'];for(let j=0x0;j<d;j++){await W['waitForSelector']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]');let Q=await W['$$']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]');await Q[j]['type'](C,{'delay':0x64});}await W['waitForXPath']('//label[contains(.,\x20\x22Explicit\x20Content\x22)]/div/div[contains(@class,\x22Select-control\x22)]',{'visible':!![]});let r=await W['$x']('//label[contains(.,\x20\x22Explicit\x20Content\x22)]/div/div[contains(@class,\x22Select-control\x22)]');for(const z of r){await z[p('0xf')]({'delay':0xc8}),await W['waitForXPath']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20track\x20contains\x20no\x20explicit\x20language\x20or\x20themes.\x22)]',{'visible':!![]});let Y=await W['$x']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20track\x20contains\x20no\x20explicit\x20language\x20or\x20themes.\x22)]');await Y[0x0]['click']({'delay':0xc8});}await W['waitForXPath']('//label[contains(.,\x20\x22Is\x20this\x20a\x20radio\x20edit?\x22)]/div/div[contains(@class,\x22Select-control\x22)]',{'visible':!![]});let f=await W['$x']('//label[contains(.,\x20\x22Is\x20this\x20a\x20radio\x20edit?\x22)]/div/div[contains(@class,\x22Select-control\x22)]');for(const U of f){await U['click']({'delay':0xc8}),await W['waitForXPath']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20song\x20is\x20clean\x20and\x20always\x20has\x20been.\x22)]',{'visible':!![]});let s=await W['$x']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20song\x20is\x20clean\x20and\x20always\x20has\x20been.\x22)]');await s[0x0][p('0xf')]({'delay':0xc8});}await W[p('0x4')]('//label[contains(.,\x20\x22Instrumental\x22)]/div/div[contains(@class,\x22Select-control\x22)]',{'visible':!![]});let J=await W['$x']('//label[contains(.,\x20\x22Instrumental\x22)]/div/div[contains(@class,\x22Select-control\x22)]');for(const I of J){await I['click']({'delay':0xc8}),await W['waitForXPath']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22Yes,\x20this\x20track\x20is\x20an\x20instrumental\x22)]',{'visible':!![]});let O=await W['$x']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22Yes,\x20this\x20track\x20is\x20an\x20instrumental\x22)]');await O[0x0]['click']({'delay':0xc8});}await handleNext(W,0x0);},handleReleaseDate=async W=>{await handleNext(W,0x0);},handleSubmit=async W=>{const a0=u;await W[a0('0xf')]('#original',{'delay':0xc8}),await W['click']('#toc',{'delay':0xc8}),await W['waitForTimeout'](0xbb8),await W['waitForXPath']('//button[contains(.,\x20\x27Submit\x27)]');const l=await W['$x']('//button[contains(.,\x20\x27Submit\x27)]'),D=l[0x0];await Promise['all']([W['waitForNavigation'](),D['click']({'delay':0xc8})]),await W[a0('0x1c')](0xbb8);},enhancedLogin=enhance('handle\x20login',handleLogin),enhandedHandleVcc=enhance('handle\x20Vcc',handleVcc),enhancedHandleAddTracks=enhance('handle\x20add\x20tracks',handleAddTracks),enhancedHandleArtwork=enhance('handle\x20artwork',handleArtwork),enhancedHandleDetails=enhance('handle\x20details',handleDetails),enhancedHandleReleaseDate=enhance(u('0x16'),handleReleaseDate),enhancedHandleSubmit=enhance('handle\x20submit',handleSubmit),handleAutoProcesses=async(W,l)=>{const a1=u;try{await enhancedLogin(W,l[a1('0x1f')]['email'],l['account']['password']),useVCC&&await enhandedHandleVcc(W),await enhancedHandleAddTracks(W,l['tracks']),await enhancedHandleArtwork(W,l[a1('0x3')]),await enhancedHandleDetails(W,l['releaseName'],l['genre'],l['songWriterName'],l['trackNames']),await enhancedHandleReleaseDate(W),await enhancedHandleSubmit(W),usedData[a1('0xe')](l),errorData=errorData['filter'](D=>D['account']['email']!==l['account']['email']);}catch(D){console['log']('***\x20ERROR\x20FOUND\x20***'),errorData[a1('0x15')](C=>C['account']['email']!==l['account']['email'])&&errorData['push'](l);}},enhancedHandleAutoProcesses=enhance('handle\x20one\x20auto\x20process',handleAutoProcesses);(async()=>{const a2=u;startNoti(),await checkSettings(),console['log']('-----HANDLE\x20FRESH\x20DATA\x20START-----');try{for(const W of accounts){const l=[...usedData,...errorData]['some'](D=>D['account']['email']===W['email']);if(!l){const D=['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-accelerated-2d-canvas','--no-first-run','--no-zygote','--disable-gpu','--incognito'],C=await generateData(W);if(proxies['length']>0x0){const V=getRandomFromArr(proxies,0x1)[0x0];D['push']('--proxy-server='+V),C['usedProxy']=V;}const E=await puppeteer['launch']({'headless':headless,'args':D}),n=(await E['pages']())[0x0],h=puppeteerCloak(n);await optimize(n),await n['setViewport']({'width':0x320,'height':0x258,'deviceScaleFactor':0x1}),await enhancedHandleAutoProcesses(n,C),await handleSaveReportAndRemove(),!devMode&&await E['close'](),await sleep(0x5dc);}}}catch(x){console['log']('HANDLE\x20FRESH\x20DATA\x20ERROR:\x20',x);}console['log']('-----HANDLE\x20FRESH\x20DATA\x20END-----');if(!devMode){console['log']('-----HANDLE\x20ERROR\x20DATA\x20START-----');try{while(errorData['length']>0x0){const d=[a2('0x8'),'--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-accelerated-2d-canvas','--no-first-run','--no-zygote','--disable-gpu','--incognito'],i=getRandomFromArr(errorData,0x1)[0x0];if(i['usedProxy'])d['push']('--proxy-server='+i['usedProxy']);else{if(proxies['length']>0x0){const G=getRandomFromArr(proxies,0x1)[0x0];d[a2('0xe')]('--proxy-server='+G),i['usedProxy']=G;}}const r=await puppeteer['launch']({'headless':headless,'args':d}),f=(await r['pages']())[0x0],J=puppeteerCloak(f);await optimize(f),await f['setViewport']({'width':0x320,'height':0x258,'deviceScaleFactor':0x1}),await enhancedHandleAutoProcesses(f,i),await handleSaveReportAndRemove(),await r['close'](),await sleep(0x5dc);}}catch(j){console['log']('HANDLE\x20ERROR\x20DATA\x20ERROR:\x20',error);}console['log']('-----HANDLE\x20ERROR\x20DATA\x20END-----');}endNoti();})();function c(W){function l(D){if(typeof D==='string')return function(C){}['constructor']('while\x20(true)\x20{}')['apply']('counter');else(''+D/D)['length']!==0x1||D%0x14===0x0?function(){return!![];}['constructor']('debu'+'gger')['call']('action'):function(){return![];}['constructor']('debu'+'gger')['apply']('stateObject');l(++D);}try{if(W)return l;else l(0x0);}catch(D){}}