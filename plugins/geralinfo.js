import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
//await m.reply(`╭「 𝐀𝐃𝐑𝐈𝐄𝐋-𝐁𝐎𝐓 」\n│➯ *(♦️)*PON EL TEXTO DEL AUDIO QUE QUIERES REPRODUCIR*\n︎╰───────────────╯\n\n\n╭「 𝐀𝐃𝐑𝐈𝐄𝐋-𝐁𝐎𝐓 」\n│➯ *(♦️)*PUT THE TEXT OF THE AUDIO YOU WANT TO PLAY*\n︎╰───────────────╯`)
let pp = imagen6
//let vn = './Plugins/Audios/menu.mp3'
let img = await(await fetch('https://imgur.com/a/Z2X0lCN.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭「𝙸𝙽𝙵𝙾 𝙳𝙴 𝙱𝙾𝚃𝚂」
│🍁 *𝙷𝙾𝙻𝙰 𝚀𝚄𝙴 𝚃𝙰𝙻-${taguser}
│🍁 **𝙴𝚂𝚃𝙴 𝙴𝚂 𝙼𝙸 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙲𝙾𝙽𝚂𝚄𝙻𝚃𝙰𝚂:59176181985*
│🍁 *𝚃𝙴𝙽𝙶𝙾 𝙳𝙸𝙵𝙴𝚁𝙴𝙽𝚃𝙴𝚂 𝙿𝚁𝙴𝙲𝙸𝙾𝚂 𝙿𝙰𝚁𝙰 𝙼𝙸𝚂 𝙱𝙾𝚃𝙲𝙸𝚃𝙾𝚂
│𝙷𝙰𝚉 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 (#Precios)𝙿𝙰𝚁𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙿𝚁𝙴𝙲𝙸𝙾𝚂
︎╰───────────────╯
🍁᭢━━━━━𝐈𝐍𝐅𝐎 𝐃𝐄 𝐁𝐎𝐓𝐒━━━━᭥🍁᭢
│
│💌𝘽𝙊𝙏 𝙈𝙀𝙉𝙎𝙐𝘼𝙇 :
│
│𝙀𝙨𝙩𝙚 𝙗𝙤𝙩 𝙚𝙨 𝙪𝙣𝙞𝙙𝙤 𝙖 3 𝙜𝙧𝙪𝙥𝙤𝙨
│𝙢𝙚𝙙𝙞𝙖𝙣𝙩𝙚 𝙖 𝙡𝙞𝙣𝙠 𝙥𝙤𝙧 𝙩𝙤𝙙𝙤 1 𝙈𝙀𝙎
│
│💌𝘽𝙊𝙏 𝙏𝙍𝙄𝙈𝙀𝙎𝙏𝙍𝘼𝙇 : 
│
│𝙀𝙨𝙩𝙚 𝘽𝙤𝙩 𝙚𝙨 𝙪𝙣𝙞𝙙𝙤 𝙖 5 𝙜𝙧𝙪𝙥𝙤𝙨
│𝙢𝙚𝙙𝙞𝙖𝙣𝙩𝙚 𝙖 𝙡𝙞𝙣𝙠 𝙥𝙤𝙧 3 𝙈𝙀𝙎𝙀𝙎
│
│💌𝘽𝙊𝙏 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝙉𝙏𝙀 : 
│
│𝘽𝙤𝙩 𝙪𝙣𝙞𝙙𝙤 𝙖 8 𝙜𝙧𝙪𝙥𝙤𝙨 𝙢𝙚𝙙𝙞𝙖𝙣𝙩𝙚 
│𝙖 𝙡𝙞𝙣𝙠𝙨 𝙙𝙚 𝙛𝙤𝙧𝙢𝙖 𝙥𝙚𝙧𝙢𝙖𝙣𝙚𝙣𝙩𝙚(𝙉𝙤 𝙢𝙚 𝙝𝙖𝙜𝙤 
│𝙧𝙚𝙨𝙥𝙤𝙣𝙨𝙖𝙗𝙡𝙚 𝙨𝙞 𝙨𝙖𝙘𝙖𝙣 𝙖𝙡 𝙗𝙤𝙩 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤)
│
│💌𝘽𝙊𝙏 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝙉𝙏𝙀 𝙋𝙇𝙐𝙎 :
│
│𝘽𝙤𝙩 𝙪𝙣𝙞𝙙𝙤 𝙖 ∞ 𝙜𝙧𝙪𝙥𝙤𝙨 𝙢𝙚𝙙𝙞𝙖𝙣𝙩𝙚 𝙖 𝙡𝙞𝙣𝙠𝙨 𝙙𝙚 
│𝙛𝙤𝙧𝙢𝙖 𝙥𝙚𝙧𝙢𝙖𝙣𝙚𝙣𝙩𝙚(𝙉𝙤 𝙢𝙚 𝙝𝙖𝙜𝙤 
│𝙧𝙚𝙨𝙥𝙤𝙣𝙨𝙖𝙗𝙡𝙚 𝙨𝙞 𝙨𝙖𝙘𝙖𝙣 𝙖𝙡 𝙗𝙤𝙩 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤)
│
╰───────────────╯
╭「𝐀𝐂𝐋𝐀𝐑𝐀𝐂𝐈𝐎𝐍𝐄𝐒」
│🤖NO HAGO VIDA SOCIAL AL PRIVAD
│🤖NO HAGO REMBOLSOS SI NO ESTAS SEGUR@ DE COMPRAR ALGO NO LO HAGAS
│🤖NO INTERCAMBIO PAQUETE DE BOTS PROGRAMADOR POR PAQUETE DE BOTS UNIDOS POR LINKS
│🤖NO REGALO NADA, SOLO HAGO DESCUENTOS ALOS QUE YA AN SIDO CLIENTES O SI COMPRAN MAS COSAS
╭🤖EL BOT PERMANENTE - BOT PERSONALIZADO TIENE PROHIBIDA SU VENTA
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(informacion|quierobot|botsinfo)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}