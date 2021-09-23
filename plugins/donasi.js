let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'BOT KINGDOM')).buffer(), `
┌〔https://chat.whatsapp.com/E3mdgudd61Y0vxLLJxbX9c
`.trim(), '© join', '😊', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
