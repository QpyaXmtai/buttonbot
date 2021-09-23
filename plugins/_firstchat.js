let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'WELCOME BRO'}
`.trim(), '© supun', user.banned ? 'owner' : 'Menu', user.banned ? ',owner' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Colombo').format('HH')
    res = "WELCOME"
    if (time >= 4) {
        res = "ගුඩ් මෝනිං බොම්ක ☕"
    }
    if (time > 10) {
        res = "සුබ දහවලක්  SATY HOME 😷"
    }
    if (time >= 15) {
        res = "තේකක් බොමුතෙ හවස් වෙලා ☕"
    }
    if (time >= 18) {
        res = "ගුඩ් නයිට් 🥱"
    }
    return res
}
