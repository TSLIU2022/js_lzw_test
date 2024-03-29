// testGioCompress.js

const LZString = require('./node_modules/lz-string');
const GioCompress = require('./gioCompress').GioCompress;
// 创建一个GioCompress实例
const gio = new GioCompress();

// 测试_compress方法（这里假设bitsPerChar和getCharFromInt的实现）
testString = {"eventType":"CUSTOM","eventName":"pageview","pageShowTimestamp":1704632830677,"attributes":{"WT_cid":"SDAZr+/CJUU5o8jp3do8PDvWH5QFwgdWa1t2LmP7WcrB2RKLPxbi/VpCpz6v/b3c1TzVG9jdPIa9ViByGF4UDfMoOHqXIh7Aqem3Q6itbaI=","WT_clientID":"SDAZr+/CJUU5o8jp3do8PDvWH5QFwgdWa1t2LmP7WcrB2RKLPxbi/VpCpz6v/b3c1TzVG9jdPIa9ViByGF4UDfMoOHqXIh7Aqem3Q6itbaI=","WT_sr":"1440x3040","WT_userBrand":"03","WT_loginProvince":"791","WT_loginCity":"0795","WT_prov":"791","WT_city":"0795","WT_event":"H5PageShow","WT_et":"pageview"},"appVersion":"1.0.0","dataSourceId":"9a238b92b6612604","deviceId":"4961aa1c-65de-4f7c-94bd-1f4e902c8b34","domain":"wap.jx.10086.cn","gioId":"FRVzsclYwDZvoCDWEz9l/w==","language":"zh-CN","path":"/hui/orderResult/result","platform":"web","query":"orderId=22024010709070736141478094707958","referralPage":"https://wap.jx.10086.cn/hui/goods/chbn/confirm","screenHeight":915,"screenWidth":412,"sdkVersion":"3.8.3","sessionId":"0950273c-fe46-4775-9af9-45bb2c34b826","timestamp":1704632830759,"title":"业务办理","userId":"FRVzsclYwDZvoCDWEz9l/w==","globalSequenceId":26,"eventSequenceId":15}
requestData = JSON.stringify([testString]);

console.log('*************')
console.log('JSON.stringify字符串:', requestData);

const compressed_1 = gio.compress(requestData);
console.log('compressed_1:\n', compressed_1);

const compressed_5 = "㚆੠渐瘂ɸǂ怗᠌⁕ƕသ䁙、ꒆЃ逐쁛ඵ庁춠ዂǝ⬆펁ǭ稢㎼⚨뀄怎쀁耋6Ìpꕊꫵӥ쀑聗砐敧儀紀왜憀က蠂ࠁ歘͐ϐ䧡놈᠁媠ꐀ⢅䎸Hꐂ⠁諳돻믑⯁쨱룻堁২Ĩ͉㗤y�쐁ꪠŹ楂엘⨢챌Έɰ柹䯓汍煷≬呩ƚ醋ጔȸhᲈꦇ㱂ラ镨룰㬽àנቹ簀ᬞȀઅ∱碒售鋈蔒륊ꍓ꠵骭皧䞠㈚跆匙병沵宬뚻綑쓦点屮话﫽ﺀ∕䊄즬䄥ڃ䚦ᬘᖐ虁۫姨끀똍䎥啹ꅢ瘗ᘇ隱袠ଌʦ�账덬܄แӔ躔醵ժ脅᷎쥷迏˷䛨ᰞЕ⧤㠐億阰鵠ꙭ簰싊蕀䴵㈮ᢖନǑꡫɿ▞聃္걶莞갍랡ػ㛏䝢텨鑺⴦麽읮瘴�ﴞꏠˑ桒︈㋣䭱傯똚㬿饴ꖸ栠�ẇ쿙큩䘽᳔ᗣ텐喌냊뒣冨ౚ⫇쒬꠳䱀ગꂙ昙߆萀䵞Р袠ㄇĉ�ᑖ曙ꅘ鞃Х〚ᇕ�Բ०ᄙ燁栁ඇ聄ₖℐᱱ豆뀷欗ꅰᱨ帅覬帿辢䣸ᛠែΰѧ臄풣〃諢㬰佃턯Շ⽵Ձ텇എ児వί펶ᒀ쀐蓛鍖햡擓興䐫ᔁ鄰墟୼㼯쟳ﰀꀥ譣扶ృᇼᤖ⇰䐻ᘁ訫宋蚰꒪ᘊዠ抂ˡ�⬂瑒璳ꂀ$抰振䝋ﰀ᫄뚰쬊젡킫̊됵튗᦭臀﵊첼ಕ�킷㌅♝뭛魢�㬎슽漻Çᰄ砚䅱ᅄ셔䴗䐱谕Ԧ�඾څ଎倄⩔ò销〗ĝ哕練ሎ荠萩ू킌㬍쏰술䝠䴐娐†礮Ɯ끱쪃谐⡦ᶀꔣ찀崠 "
console.log('compressed_5:\n', compressed_5);
const compressed_6 = LZString.decompress(compressed_5);
console.log('compressed_6:\n', compressed_6);

console.log('compressed_7:\n', LZString.decompress(gio.compress(requestData)));

const compressed = gio.compressToUint8Array(requestData);
// console.log('gio compressToUint8Array 字符串:', compressed);
const compressedString2 = LZString.compressToUint8Array(requestData);
// console.log('lz compressedSting to Uint8Array :',compressedString2)
const decompressedString1 = LZString.decompressFromUint8Array(compressedString2);
// console.log('after decompressedSting from Uint8Array  :',decompressedString1)
const decompressedString2 = LZString.decompressFromUint8Array(compressed);

// if (requestData===decompressedString1){  console.log("LZ 压缩和反压缩   true"); } 
//     else { console.log(" err"); }

// if (requestData===decompressedString2){ console.log("gio 压缩和反压缩  true");  }
//     else { console.log(" err"); }

console.log('*************')

const str = "6\x86\xF0D\x0A`n\x10v\x02\xE0\x15\x02x\x01\xC2`\x17\x18\x0C U\x01\x95\x10\x1E@Y0\x01\xA4\x86\x04\x03\x90\x10\xC0[\x0D\xB5^\x81\xCD\xA0\x12\xC2\x01\xDD+\x06\xD3\x81\x00\x16\x01\xEDz\x22\xEC\xC03\xBC&\xA8\xB0\x04`\x0E\xC0\x01\x80\x0B\x006\x00\xCC\x00\x98\x00p\xEBU\xA5J\xAA\xF5\xE3\xC0\x04\xE5\xC0\x11\x80Wx\x10eg\x00\x1DQ\x00}\x00\xC6\x5C\x00\x99a\x80\x10\x00\x88\x02\x08\x01kX\x03P\x03\xD0\xE0\x01I\xE1\xE0\x02\xB1\x88\x18\x01Z\xA0\xEB\xFB\xA4\x00(\x85C\xB8\x00H\xA4\x02(\x01\x8A\xF3\xB3\xFB\xBB\xD1+\xC1\xE8\x00\xCA1\xE4\xAB\xB8\xFBX\x01\x09\xE8\x01(\x03I5\xE4\x00y\xD9r\xC4\x01\xAA\xA0\xE2\xA0\x01yiB\xC5\xD8\xE8\xF9*\x22\xCCL\x03\x88\x02pg\xF9\xE4\x02K\xD3lMqw\x22lTi\xE0\x84\x01\x9A\x91\x8B\x13\x14\x028\x00h\x1C\x88\xA9\x87<B0\xE9\x95h\xB8\xF0;=\x00\xE0\x05\xE0\x12y|\x00\x1B\x1E\x02\x00\xE2\x12\x0A\x85\x221x\x92U.\x92\xC8\xE5\xF2\x85\x12\xB9J\xA3S\xA85\x9A\xADv\xA7G\xA02\x1A\x8D\xC6S\x19\xBC\xD1l\xB5[\xAC\xB6\xBB}\x91\xC4\xE6p\xB9\x5Cn\xF7G\x8B\xDD\xE9\xF6\xFA\xFD\xFE\x80\xE0h\x22\x15B\x84\xC9\xACA%\x06\x83F\xA6\x1B\x18\x15\x90\xEF\x03\x86A\x06\xEBY\xE8\xB0@\xB6\x0DC\xA5Uy\xA1bv\x17\x16\x07\x96\xB1\x88\xA0\xE6\x9F\x0B\x0C\x02\xA6\xD9(\x8D&\xB3l\x07\x04\x0EA\x04\xD4\x8E\x94\x91\xB5\x05j\x81\x05\x1D\xCE\xC9w\x8F\xCF\x02\xF7\xEB}F\xE8\x1C\x1E\x04\x15)\xE48\x10Q\x04\x960\x9D`\xA6m|0\x00\x17\xC2\xCA\x85@M52.\x18\x96\x0B(\x01\xD1\xA8k\x02\x7F%\x9E\x80C\x109\xACv\x83\x9E\xAC\x0D\xB7\xA1\xE8t\x06;6\xCFGb\xD1h\x94z-&\x9E\xBD\xC7nv4\xDBQ\xFD\x1E\xA3\xE0\x02\xD1hR\xFE\x082\xE3KqP\xAF\xB6\x1A;?\x99t\xA5\xB8h \xDB5\x1E\x87\xCF\xD9\xD0i\xEBbF=\x1C\xD4\x15\xE3\xD1PU\x8C\xB0\xCA\xB4\xA3Q\xA8\x0CZ*\xC7\xC4\xAC\xA83L@\xEC\x82\x0A\x97\xA0\x99f\x19\x07\xC6\x84\x00M^\x04 \x88\xA01\x07\x01\x09\xDC\x00\x14Vf\xD9\xA1X\x97\x83\x04%0\x1A\x11\xD5\xD8\x07\x052\x09f\x11\x19q\xC1h\x01\x0D\x87\x80D \x96!\x10\x1Cq\x8CF\xB07k\x17\xA1p\x1Ch^\x05\x89\xAC^?\x8F\xA2H\xF8\x16\xE0\xE3\x18\x17\xC2\x03\xB0\x04g\x81\xC4\xD4\xA30\x03\x8A\xE2;0OC\xD1/\x05G\xF7P/u\x05A\xD1G\x0D\x0EQP\x0C5\x1Fw\xD3\xB6\x14\x80\xC0\x10\x84\xDB\x93V\xD5\xA1d\xD3\x82\x08D+\x15\x01\x910X\x9F\x0B|?/\xC7\xF3\xFC\x00\xA0%\x8Bcbv\x0CC\x11\xFC\x19\x16!\xF0D;\x16\x01\x8A+[\x8B\x86\xB0\xA4\xAA\x16\x0A\x12\xE0b\x82\x02\xE1\xD87+\x02tRt\xB3\xA0\x80\xE0w\x00$b\xB0c/GK\xFC\x00\x1A\xC4\xB6\xB0\xCB\x0A\xC8!\xD0\xAB\x03\x0A\xB45\xD2\x97\x19\xAD\x81\xC0\xFDJ\xCC\xBC\x0C\x95\xDE\xCE\xD0\xB73\x05&]\xBB[\x9Bb\xDCR;\x0E\xC2\xBDo;\x00\xC7\x1C\x04x\x1AAq\xE4F\x11D\xC1TM\x17D1\x8C\x15\x05&\xD8\xA8\x0D\xBE\x06\x85\xED@\x0B\x0EP\x04*T\x00\xF2\x95\x000\x17\x01\x1DT\xD5\xFA\xB0\x12\x0E\x83`\x84)\x09B\xD0\x8C;\x0D\xC3\xF0\xC2 G`M\x10Z\x10  y.\x01\x9C\xB0q\xCA\x83\x8C\x10(f\x1D\x80\xE1\xBD\xA5#\xCC\x00] \x00\x00"; // 将您给定的字符串替换为这里的字符串
const uint8Array = new Uint8Array(str.length);

// for (let i = 0; i < str.length; i++) {
//   uint8Array[i] = str.charCodeAt(i);
//   // console.log(str.charCodeAt(i)+" "+i )
// }
// console.log("uint8Array:\n",uint8Array.join(""));

// const decompressedString3 = LZString.decompressFromUint8Array(uint8Array);

// // console.log("from U8A",decompressedString3);

// const buf = new Array(compressed.length / 2);
// console.log("TotalLen:\n",buf.length);
// for (let i = 0, TotalLen = buf.length; i < TotalLen; i++) {
//   buf[i] = uint8Array[i * 2] * 256 + uint8Array[i * 2 + 1];
// }
// console.log("buf:\n",buf.join(""));
// const result = [];
// buf.forEach(function (c) {
//   result.push(String.fromCharCode(c));
// });
// console.log("result:\n",result.join(""));


// for (let i = 0; i < 65534; i++) {
//   console.log(" String.fromCharCode():" ,i, String.fromCharCode(i)) 
// }
