const _0x2431=['account','https://unitedmasters.com/account/login','filter','//label[contains(.,\x20\x22Explicit\x20Content\x22)]/div/div[contains(@class,\x22Select-control\x22)]','readFileSync','handle\x20release\x20date','remove','usedProxy','toUpperCase','input[placeholder=Password]','length','--disable-accelerated-2d-canvas','puppeteer-extra','no\x20connect\x20lost','//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20song\x20is\x20clean\x20and\x20always\x20has\x20been.\x22)]','genres/','status','//button[contains(.,\x20\x27Submit\x27)]','waitFor','Ghost','faker','./reports/errorData.json','genre','log','\x20time:\x20','flat','round','-----HANDLE\x20FRESH\x20DATA\x20START-----','black','//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20track\x20contains\x20no\x20explicit\x20language\x20or\x20themes.\x22)]','textSync','push','waitForXPath','./reports/usedData.json','--no-first-run'];(function(_0x13b72f,_0x243147){const _0x5ec043=function(_0x2e9e3f){while(--_0x2e9e3f){_0x13b72f['push'](_0x13b72f['shift']());}};_0x5ec043(++_0x243147);}(_0x2431,0xb6));const _0x5ec0=function(_0x13b72f,_0x243147){_0x13b72f=_0x13b72f-0x0;let _0x5ec043=_0x2431[_0x13b72f];return _0x5ec043;};const puppeteer=require(_0x5ec0('0x5')),StealthPlugin=require('puppeteer-extra-plugin-stealth'),AdblockerPlugin=require('puppeteer-extra-plugin-adblocker'),puppeteerCloak=require('puppeteer-cloak'),faker=require(_0x5ec0('0xd')),figlet=require('figlet'),chalk=require('chalk');puppeteer['use'](StealthPlugin()),puppeteer['use'](AdblockerPlugin({'blockTrackers':!![]}));const fs=require('fs-extra'),{headless,minTracks,maxTracks,trackNames,releaseNames,forcedGenre,supportedGenres}=require('./settings.json'),rawAccounts=fs['readFileSync']('./accounts.txt')['toString']()['split']('\x0d\x0a'),accounts=rawAccounts['map'](_0x2e9e3f=>{const [_0x309dbc,_0xfc6db,_0x38709b,_0x11f821]=_0x2e9e3f['split'](':');return{'email':_0x309dbc,'password':_0xfc6db,'genre':_0x38709b,'songWriterName':_0x11f821};})['filter'](_0x3d325a=>_0x3d325a['email']!==''),songWriterNames=fs['readFileSync']('./songWriterNames.txt')['toString']()['split']('\x0d\x0a')['filter'](_0x4a5f6e=>_0x4a5f6e!=''),proxies=fs[_0x5ec0('0x20')]('./proxies.txt')['toString']()['split']('\x0d\x0a')['filter'](_0x249b65=>_0x249b65!==''),defaultErrorData=require('./reports/errorData.json'),defaultUsedData=require(_0x5ec0('0x1a'));let usedData=[...defaultUsedData],errorData=[...defaultErrorData];function checkForDuplicates(_0x33afec){return new Set(_0x33afec)['size']!==_0x33afec['length'];}const checkSettings=async()=>{if(checkForDuplicates(accounts['map'](_0x13250f=>_0x13250f['email']))){console['log']('***SETTINGS\x20ERROR:\x20DUPLICATE\x20EMAIL***');return;}const _0x410c9a=await fs['readdir']('./genres');if(supportedGenres['some'](_0x125213=>!_0x410c9a['includes'](_0x125213))){console['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20FOLDER\x20EXIST***');return;}if(supportedGenres['some'](_0x5bc080=>!trackNames['hasOwnProperty'](_0x5bc080))){console[_0x5ec0('0x10')]('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20IN\x20SETTINGS\x20TRACKNAMES***');return;}if(supportedGenres['some'](_0x39e666=>!releaseNames['hasOwnProperty'](_0x39e666))){console['log']('***SETTINGS\x20ERROR:\x20ENSURE\x20SUPPORTED\x20GENRES\x20IN\x20SETTINGS\x20RELEASENAMES***');return;}},capitalize=_0x30000f=>{if(typeof _0x30000f!=='string')return'';return _0x30000f['charAt'](0x0)['toUpperCase']()+_0x30000f['slice'](0x1);},getRandomName=(_0x201bd9,_0x11612c)=>{let _0x14ae58=_0x11612c;snippet=_0x201bd9['replace'](/[^a-zA-Z]/g,'')['toLowerCase']();const _0x42929b=Math['floor'](Math['random']()*(snippet['length']-0x1-_0x14ae58)),_0x299cc7=_0x42929b+0x1+_0x14ae58>snippet[_0x5ec0('0x3')]?snippet['length']-_0x42929b:_0x42929b+_0x14ae58;return capitalize(snippet['substring'](_0x42929b,_0x299cc7));};function getRandomFromArr(_0x3cf33b,_0x4011cb){var _0x579e4a=new Array(_0x4011cb),_0x4ac083=_0x3cf33b['length'],_0x283b2b=new Array(_0x4ac083);if(_0x4011cb>_0x4ac083)throw new RangeError('getRandom:\x20more\x20elements\x20taken\x20than\x20available');while(_0x4011cb--){var _0xf9ed7f=Math['floor'](Math['random']()*_0x4ac083);_0x579e4a[_0x4011cb]=_0x3cf33b[_0xf9ed7f in _0x283b2b?_0x283b2b[_0xf9ed7f]:_0xf9ed7f],_0x283b2b[_0xf9ed7f]=--_0x4ac083 in _0x283b2b?_0x283b2b[_0x4ac083]:_0x4ac083;}return _0x579e4a;}const getRandom=(_0x3230e4,_0x4fd68a)=>{let _0x23a052=_0x3230e4>_0x4fd68a?_0x3230e4:_0x4fd68a,_0x523c8d=_0x3230e4<_0x4fd68a?_0x3230e4:_0x4fd68a;return Math[_0x5ec0('0x13')](Math['random']()*(_0x23a052-_0x523c8d))+_0x523c8d;},startNoti=()=>{console[_0x5ec0('0x10')](chalk['green'](figlet[_0x5ec0('0x17')]('enne',{'font':_0x5ec0('0xc'),'horizontalLayout':'default','verticalLayout':'default','whitespaceBreak':!![]}))),console['log']('start\x20tool\x20...');},endNoti=()=>{console['log']('done...');};function sleep(_0x503c97){return new Promise(_0x466c06=>setTimeout(_0x466c06,_0x503c97));}const enhance=(_0x2dcda3,_0x1bce8c)=>{return async(..._0x228a3e)=>{let _0x456eed=0x0;const _0x2c101=setInterval(()=>{_0x456eed=_0x456eed+0x64;},0x64);try{console[_0x5ec0('0x10')](('---'+_0x2dcda3+'\x20start---')['toUpperCase']()),await _0x1bce8c(..._0x228a3e),await sleep(0x3e8),console['log'](('---'+_0x2dcda3+'\x20end---')[_0x5ec0('0x1')]());}catch(_0x421829){console['log'](_0x2dcda3+'\x20error:',_0x421829);throw'500\x20Internal\x20Service\x20Error';}finally{console['log'](_0x2dcda3+_0x5ec0('0x11'),chalk[_0x5ec0('0x15')]['bgGreen']('\x20'+(_0x456eed/0x3e8)['toFixed'](0x1)+'s\x20')),clearTimeout(_0x2c101);}};},getUnusedTracks=async(_0x3a8b6b,_0x39c00c)=>{const _0x3198cd=await fs['readdir']('./genres/'+_0x3a8b6b),_0x696024=[...usedData,...errorData]['filter'](_0x70ba0a=>_0x70ba0a['genre']===_0x3a8b6b)['map'](_0x34186c=>_0x34186c['tracks'])['flat'](),_0x168306=_0x3198cd[_0x5ec0('0x1e')](_0x244072=>!_0x696024['some'](_0x2ea7e2=>_0x2ea7e2['includes'](_0x244072))),_0x59a3d6=getRandomFromArr(_0x168306,_0x39c00c)['map'](_0x49df77=>_0x5ec0('0x8')+_0x3a8b6b+'/'+_0x49df77);return _0x59a3d6;},getUnusedArt=async()=>{const _0xf075a5=await fs['readdir']('./arts'),_0x49f132=[...usedData,...errorData]['map'](_0x70f900=>_0x70f900['art']),_0x1a5147=_0xf075a5['filter'](_0x2a5049=>!_0x49f132['some'](_0x43843a=>_0x43843a['includes'](_0x2a5049))),_0x3d42d6=getRandomFromArr(_0x1a5147,0x1),_0x2b2c7a=_0x3d42d6['map'](_0x238b3f=>'arts/'+_0x238b3f)[0x0];return _0x2b2c7a;},getUnunsedReleaseName=_0x5836a3=>{const _0x478344=releaseNames[_0x5836a3],_0x5cb9d7=[...usedData,...errorData][_0x5ec0('0x1e')](_0x5e64b1=>_0x5e64b1['genre']===_0x5836a3)['map'](_0x37770c=>_0x37770c['releaseName']),_0x41bbc9=_0x478344['filter'](_0x520dbb=>!_0x5cb9d7['some'](_0x208d4e=>_0x208d4e['includes'](_0x520dbb)));let _0x3aadc3='';_0x41bbc9['length']<0x1?_0x3aadc3=faker['address']['streetName']()+'\x20'+getRandomName(faker['address']['streetName'](),getRandom(0x3,0x6)):_0x3aadc3=getRandomFromArr(_0x41bbc9,0x1)[0x0];let _0x3add7e=_0x3aadc3;return _0x3add7e;},getUnusedSongWriter=()=>{const _0x258f9c=[...songWriterNames],_0x34f839=[...usedData,...errorData]['map'](_0x3fb66c=>_0x3fb66c['songWriterName']),_0x28704d=_0x258f9c['filter'](_0x4c90fc=>!_0x34f839['some'](_0x5f1282=>_0x5f1282['includes'](songWriterNames)));let _0x292cbf='';return _0x28704d['length']<0x1?_0x292cbf=faker['name']['firstName']()+'\x20'+faker['name']['lastName']()+'\x20'+getRandomName(faker['name']['findName'](),getRandom(0x3,0x6)):_0x292cbf=getRandomFromArr(_0x28704d,0x1)[0x0],_0x292cbf;},getUnusedTrackNames=(_0x3d5668,_0x4191f2)=>{const _0x55269e=trackNames[_0x3d5668],_0x58d7ab=[...usedData,...errorData]['filter'](_0x5e2035=>_0x5e2035['genre']===_0x3d5668)['map'](_0x210766=>_0x210766['trackNames'])[_0x5ec0('0x12')](),_0x50ce7b=_0x55269e['filter'](_0x5de41e=>!_0x58d7ab['some'](_0x10a671=>_0x10a671['includes'](_0x5de41e)));let _0x3d8729=[];if(_0x50ce7b['length']<_0x4191f2){_0x3d8729=[..._0x50ce7b];while(_0x3d8729['length']<_0x4191f2){_0x3d8729['push'](faker['address']['streetName']()+'\x20'+getRandomName(faker['address']['streetName'](),getRandom(0x3,0x6)));}}else _0x3d8729=getRandomFromArr(_0x50ce7b,_0x4191f2);let _0x2db3b3=_0x3d8729;return _0x2db3b3;},generateData=async _0x69e8f2=>{const _0x58b8d6=getRandom(minTracks,maxTracks);let _0x479259;_0x69e8f2[_0x5ec0('0xf')]?_0x479259=_0x69e8f2['genre']:_0x479259=supportedGenres['includes'](forcedGenre)?forcedGenre:supportedGenres[getRandom(0x0,supportedGenres['length']-0x1)];const _0x6f181=await getUnusedTracks(_0x479259,_0x58b8d6),_0xf9742f=await getUnusedArt(),_0x5568c5=getUnunsedReleaseName(_0x479259);let _0x411e56;_0x69e8f2['songWriterName']?_0x411e56=_0x69e8f2['songWriterName']:_0x411e56=getUnusedSongWriter();const _0x4748c1=getUnusedTrackNames(_0x479259,_0x58b8d6),_0x5b4015={'account':_0x69e8f2,'genre':_0x479259,'tracks':_0x6f181,'trackNames':_0x4748c1,'songWriterName':_0x411e56,'releaseName':_0x5568c5,'art':_0xf9742f};return _0x5b4015;},optimize=async _0x26c5b0=>{await _0x26c5b0['setRequestInterception'](!![]),_0x26c5b0['on']('request',_0x720992=>{_0x720992['resourceType']()=='image'||_0x720992['resourceType']()=='font'?_0x720992['abort']():_0x720992['continue']();}),_0x26c5b0['on']('dialog',async _0x143ae7=>{await _0x143ae7['dismiss']();});},createRelease=async _0x37c0d5=>{try{await _0x37c0d5['goto']('https://unitedmasters.com/uploads',{'waitUntil':'domcontentloaded'}),await _0x37c0d5['waitForXPath']('//p[contains(.,\x20\x27Spotify\x27)]',{'visible':!![]});const _0x16b88f=await _0x37c0d5['$x']('//p[contains(.,\x20\x27Spotify\x27)]'),_0x19d47c=_0x16b88f[0x0];await Promise['all']([_0x37c0d5['waitForNavigation'](),_0x19d47c['click']({'delay':0xc8})]);}catch(_0x127c21){console['log']('create\x20release\x20error',_0x127c21);}},uploadFiles=async(_0x4d67d9,_0x1dd7eb,_0x495b1a,_0x28063c=0x124f80,_0x5f4ea2='//a[contains(.,\x20\x27browse\x20your\x27)]',_0x4d0b08=0x1)=>{try{await _0x4d67d9['waitForXPath'](_0x5f4ea2,{'visible':!![]});const _0x3a6a7b=await _0x4d67d9['$x'](_0x5f4ea2),_0x2cc51d=_0x3a6a7b[0x0],[_0x536a12]=await Promise['all']([_0x4d67d9['waitForFileChooser'](),_0x2cc51d['click']({'delay':0xc8})]);console['log']('uploading\x20files'),await _0x536a12['accept'](_0x1dd7eb),await _0x4d67d9[_0x5ec0('0xb')](0x7d0);let _0x31a263;if(_0x4d0b08>0x1){let _0x39727b=0x0;_0x31a263=await _0x4d67d9['waitForResponse'](_0x1c18d2=>{return _0x1c18d2['url']()===_0x495b1a&&_0x39727b++,_0x39727b===_0x4d0b08;},{'timeout':_0x28063c});}else _0x31a263=await _0x4d67d9['waitForResponse'](_0xd3a6be=>{return _0xd3a6be['url']()===_0x495b1a;},{'timeout':_0x28063c});console[_0x5ec0('0x10')]('upload\x20files\x20succeed:',_0x31a263['ok']());}catch(_0x416dcc){console[_0x5ec0('0x10')]('upload\x20files\x20error',_0x416dcc);throw'upload\x20files\x20error';}},handleLowQualitySongs=async _0x20bed2=>{try{await _0x20bed2['waitForXPath']('//button[contains(.,\x20\x27I\x20understand\x27)]',{'visible':!![],'timeout':0x1388});const _0xd3734a=await _0x20bed2['$x']('//button[contains(.,\x20\x27I\x20understand\x27)]'),_0xb338a7=_0xd3734a[0x0];_0xb338a7&&(console['log']('handle\x20low\x20quality\x20songs'),await Promise['all']([_0xb338a7['click']({'delay':0xc8})]));}catch(_0x4951c4){console['log']('no\x20low\x20quality');}},handleConnectionLost=async(_0x2add4f,_0x190e5a)=>{await _0x2add4f['waitFor'](0xbb8);try{await _0x2add4f['waitForXPath']('//div[contains(.,\x20\x27Okay,\x20got\x20it\x27)]',{'visible':!![],'timeout':0x2710});const _0x11f2e8=await _0x2add4f['$x']('//div[contains(.,\x20\x27Okay,\x20got\x20it\x27)]'),_0xa500e2=_0x11f2e8[0x0];if(_0xa500e2){console['log']('handle\x20connect\x20lost');throw'connection\x20lost';}}catch(_0x3b9b50){if(_0x3b9b50==='connection\x20lost')throw'connection\x20lost';else console['log'](_0x5ec0('0x6'));}},handleNext=async(_0x5b637b,_0x59daeb)=>{await _0x5b637b['waitFor'](0xbb8);try{await _0x5b637b[_0x5ec0('0x19')]('//button[contains(.,\x20\x27Next\x27)]');const _0x28c26f=await _0x5b637b['$x']('//button[contains(.,\x20\x27Next\x27)]'),_0xc93cc0=_0x28c26f[_0x59daeb];await Promise['all']([_0x5b637b['waitForNavigation'](),_0xc93cc0['click']({'delay':0xc8})]);}catch(_0x33e437){console['log']('handle\x20next\x201\x20error',_0x33e437);throw'500\x20Internal\x20Service\x20Error';}},handleSaveReportAndRemove=async()=>{try{await fs['outputJson'](_0x5ec0('0xe'),errorData),await fs['outputJson']('./reports/usedData.json',usedData);for(const _0x114f43 of usedData){await fs[_0x5ec0('0x22')](_0x114f43['art']);for(const _0x530f86 of _0x114f43['tracks']){await fs['remove'](_0x530f86);}}const _0x1d50f5=accounts['filter'](_0x2cc343=>usedData['every'](_0x1ebf89=>_0x1ebf89[_0x5ec0('0x1c')]['email']!==_0x2cc343['email']))['map'](({email:_0x554294,password:_0x195e28,genre:_0x3afbdf,songWriterName:_0x5d593f})=>{let _0x45837e=_0x554294+':'+_0x195e28;return _0x3afbdf&&(_0x45837e+=':'+_0x3afbdf),_0x5d593f&&(_0x45837e+=':'+_0x5d593f),_0x45837e;})['join']('\x0d\x0a');await fs['writeFile']('accounts.txt',_0x1d50f5,'utf8');const _0x23c1af=songWriterNames['filter'](_0xc718db=>usedData['every'](_0x28bf0a=>_0x28bf0a['songWriterName']!==_0xc718db))['join']('\x0d\x0a');await fs['writeFile']('songWriterNames.txt',_0x23c1af,'utf8'),console['log']('save\x20report\x20and\x20remove\x20usedData');}catch(_0x55de91){console['error']('save\x20report\x20error',error);}},handleLogin=async(_0x643b7f,_0x1079d2,_0x40c1f2)=>{await _0x643b7f['goto'](_0x5ec0('0x1d'),{'waitUntil':'domcontentloaded'}),await _0x643b7f['waitForSelector']('input[placeholder=Email'),await _0x643b7f['type']('input[placeholder=Email]',_0x1079d2,{'delay':0x64}),await _0x643b7f['waitForSelector']('input[placeholder=Password]'),await _0x643b7f['type'](_0x5ec0('0x2'),_0x40c1f2,{'delay':0x64});const [_0x487b64]=await Promise['all']([_0x643b7f['waitForNavigation']({'timeout':0x4e20}),_0x643b7f['click']('button[type=submit]',{'delay':0x1f4}),_0x643b7f['waitForResponse'](_0x9f4753=>_0x9f4753['url']()['includes']('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPasswor')&&_0x9f4753[_0x5ec0('0x9')]()===0xc8)]);},handleAddTracks=async(_0x2d0026,_0x5c8869)=>{await createRelease(_0x2d0026),await uploadFiles(_0x2d0026,_0x5c8869,'https://unitedmasters.com/studio/create-track',0x124f80,'//a[contains(.,\x20\x27browse\x20your\x27)]',_0x5c8869[_0x5ec0('0x3')]),await handleLowQualitySongs(_0x2d0026),await handleConnectionLost(_0x2d0026,_0x5c8869),await handleNext(_0x2d0026,0x1);},handleArtwork=async(_0x22bcb7,_0xf1a745)=>{await _0x22bcb7['reload'](),await _0x22bcb7['waitForXPath']('//h2[contains(.,\x20\x27Add\x20Album\x20Art\x27)]',{'timeout':0xea60}),await uploadFiles(_0x22bcb7,[_0xf1a745],'https://unitedmasters.com/studio/create-asset',0x493e0),await handleNext(_0x22bcb7,0x1);},handleDetails=async(_0x458f70,_0x1ef41b,_0x1b4fb2,_0x4d97d0,_0x48863f)=>{await _0x458f70['waitForSelector']('input[placeholder*=\x22Enter\x20release\x20title\x22]');const _0x4f436c=await _0x458f70['$']('input[placeholder*=\x22Enter\x20release\x20title\x22]');await _0x4f436c['type'](_0x1ef41b,{'delay':0x64}),await _0x458f70['waitForXPath']('//label[contains(.,\x20\x22Genre\x22)]/select');let _0x57fa5e=await _0x458f70['$x']('//label[contains(.,\x20\x22Genre\x22)]/select');await _0x57fa5e[0x0]['select'](_0x1b4fb2),await _0x458f70['waitForSelector']('input[placeholder*=\x22Add\x20title\x20for\x22]');const _0x256840=await _0x458f70['$$']('input[placeholder*=\x22Add\x20title\x20for\x22]');for(let _0x278b38=0x0;_0x278b38<_0x256840['length'];_0x278b38++){await _0x256840[_0x278b38]['type'](_0x48863f[_0x278b38],{'delay':0x64});}await _0x458f70['waitForSelector']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]');let _0x3104da=await _0x458f70['$$']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]'),_0x4d7e99=_0x3104da['length'];for(let _0x341780=0x0;_0x341780<_0x4d7e99;_0x341780++){await _0x458f70['waitForSelector']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]');let _0x3ee5e3=await _0x458f70['$$']('input[placeholder*=\x22Enter\x20Legal\x20Nam\x22]');await _0x3ee5e3[_0x341780]['type'](_0x4d97d0,{'delay':0x64});}await _0x458f70['waitForXPath']('//label[contains(.,\x20\x22Explicit\x20Content\x22)]/div/div[contains(@class,\x22Select-control\x22)]',{'visible':!![]});let _0x1aae7c=await _0x458f70['$x'](_0x5ec0('0x1f'));for(const _0x5c528b of _0x1aae7c){await _0x5c528b['click']({'delay':0xc8}),await _0x458f70['waitForXPath'](_0x5ec0('0x16'),{'visible':!![]});let _0x33b199=await _0x458f70['$x']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20track\x20contains\x20no\x20explicit\x20language\x20or\x20themes.\x22)]');await _0x33b199[0x0]['click']({'delay':0xc8});}await _0x458f70['waitForXPath']('//label[contains(.,\x20\x22Is\x20this\x20a\x20radio\x20edit?\x22)]/div/div[contains(@class,\x22Select-control\x22)]',{'visible':!![]});let _0x37c9b8=await _0x458f70['$x']('//label[contains(.,\x20\x22Is\x20this\x20a\x20radio\x20edit?\x22)]/div/div[contains(@class,\x22Select-control\x22)]');for(const _0x48ac84 of _0x37c9b8){await _0x48ac84['click']({'delay':0xc8}),await _0x458f70['waitForXPath'](_0x5ec0('0x7'),{'visible':!![]});let _0x56a7ab=await _0x458f70['$x']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22This\x20song\x20is\x20clean\x20and\x20always\x20has\x20been.\x22)]');await _0x56a7ab[0x0]['click']({'delay':0xc8});}await _0x458f70['waitForXPath']('//label[contains(.,\x20\x22Instrumental\x22)]/div/div[contains(@class,\x22Select-control\x22)]',{'visible':!![]});let _0x1c32ef=await _0x458f70['$x']('//label[contains(.,\x20\x22Instrumental\x22)]/div/div[contains(@class,\x22Select-control\x22)]');for(const _0x166a9c of _0x1c32ef){await _0x166a9c['click']({'delay':0xc8}),await _0x458f70['waitForXPath']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22Yes,\x20this\x20track\x20is\x20an\x20instrumental\x22)]',{'visible':!![]});let _0x101307=await _0x458f70['$x']('//div[contains(@class,\x20\x22Select-menu-outer\x22)]/div/div/div[contains(.,\x22Yes,\x20this\x20track\x20is\x20an\x20instrumental\x22)]');await _0x101307[0x0]['click']({'delay':0xc8});}await handleNext(_0x458f70,0x0);},handleReleaseDate=async _0x41b527=>{await handleNext(_0x41b527,0x0);},handleSubmit=async _0x1fe4a2=>{await _0x1fe4a2['click']('#original',{'delay':0xc8}),await _0x1fe4a2['click']('#toc',{'delay':0xc8}),await _0x1fe4a2['waitFor'](0xbb8),await _0x1fe4a2['waitForXPath'](_0x5ec0('0xa'));const _0x756e2e=await _0x1fe4a2['$x']('//button[contains(.,\x20\x27Submit\x27)]'),_0x3a369b=_0x756e2e[0x0];await Promise['all']([_0x1fe4a2['waitForNavigation'](),_0x3a369b['click']({'delay':0xc8})]);},enhancedLogin=enhance('handle\x20login',handleLogin),enhancedHandleAddTracks=enhance('handle\x20add\x20tracks',handleAddTracks),enhancedHandleArtwork=enhance('handle\x20artwork',handleArtwork),enhancedHandleDetails=enhance('handle\x20details',handleDetails),enhancedHandleReleaseDate=enhance(_0x5ec0('0x21'),handleReleaseDate),enhancedHandleSubmit=enhance('handle\x20submit',handleSubmit),handleAutoProcesses=async(_0x1019f5,_0x598bb1)=>{try{await enhancedLogin(_0x1019f5,_0x598bb1['account']['email'],_0x598bb1['account']['password']),await enhancedHandleAddTracks(_0x1019f5,_0x598bb1['tracks']),await enhancedHandleArtwork(_0x1019f5,_0x598bb1['art']),await enhancedHandleDetails(_0x1019f5,_0x598bb1['releaseName'],_0x598bb1['genre'],_0x598bb1['songWriterName'],_0x598bb1['trackNames']),await enhancedHandleReleaseDate(_0x1019f5),await enhancedHandleSubmit(_0x1019f5),usedData['push'](_0x598bb1),errorData=errorData['filter'](_0x3267c7=>_0x3267c7['account']['email']!==_0x598bb1['account']['email']);}catch(_0xfc2ca0){console['log']('***\x20ERROR\x20FOUND\x20***'),errorData['every'](_0x4d973a=>_0x4d973a['account']['email']!==_0x598bb1['account']['email'])&&errorData['push'](_0x598bb1);}},enhancedHandleAutoProcesses=enhance('handle\x20one\x20auto\x20process',handleAutoProcesses);(async()=>{startNoti(),checkSettings(),console['log'](_0x5ec0('0x14'));for(const _0x134099 of accounts){const _0x51a796=[...usedData,...errorData]['some'](_0xd9422f=>_0xd9422f['account']['email']===_0x134099['email']);if(!_0x51a796){const _0x810a74=['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-accelerated-2d-canvas',_0x5ec0('0x1b'),'--no-zygote','--disable-gpu','--incognito'],_0x597f06=await generateData(_0x134099);if(proxies['length']>0x0){const _0x572595=getRandomFromArr(proxies,0x1)[0x0];_0x810a74[_0x5ec0('0x18')]('--proxy-server='+_0x572595),_0x597f06['usedProxy']=_0x572595;}const _0x4f83fc=await puppeteer['launch']({'headless':headless,'args':_0x810a74}),_0x360957=(await _0x4f83fc['pages']())[0x0],_0x179cac=puppeteerCloak(_0x360957);await optimize(_0x360957),await _0x360957['setViewport']({'width':0x320,'height':0x258,'deviceScaleFactor':0x1}),await enhancedHandleAutoProcesses(_0x360957,_0x597f06),await handleSaveReportAndRemove(),await _0x4f83fc['close'](),await sleep(0x5dc);}}console['log']('-----HANDLE\x20FRESH\x20DATA\x20END-----'),console['log']('-----HANDLE\x20ERROR\x20DATA\x20START-----');while(errorData[_0x5ec0('0x3')]>0x0){const _0x467b4b=['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage',_0x5ec0('0x4'),'--no-first-run','--no-zygote','--disable-gpu','--incognito'],_0x350a0d=getRandomFromArr(errorData,0x1)[0x0];if(_0x350a0d[_0x5ec0('0x0')])_0x467b4b['push']('--proxy-server='+_0x350a0d['usedProxy']);else{if(proxies['length']>0x0){const _0x3c9020=getRandomFromArr(proxies,0x1)[0x0];_0x467b4b['push']('--proxy-server='+_0x3c9020),_0x350a0d['usedProxy']=_0x3c9020;}}const _0x589170=await puppeteer['launch']({'headless':headless,'args':_0x467b4b}),_0x3a4f0c=(await _0x589170['pages']())[0x0],_0x2560a2=puppeteerCloak(_0x3a4f0c);await optimize(_0x3a4f0c),await _0x3a4f0c['setViewport']({'width':0x320,'height':0x258,'deviceScaleFactor':0x1}),await enhancedHandleAutoProcesses(_0x3a4f0c,_0x350a0d),await handleSaveReportAndRemove(),await _0x589170['close'](),await sleep(0x5dc);}console['log']('-----HANDLE\x20ERROR\x20DATA\x20END-----'),endNoti();})();