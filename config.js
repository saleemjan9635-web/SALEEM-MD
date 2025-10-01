const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SALEEM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENwRGVQYUtuQmsrNHkzdTJvU0FkNEoxOC8yMDc1b01OQlNWcWFpR2kxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzdMa3p0WjNxd0JsS2YyWi8reHpGV1lqMlp0UW1UT3I4eXBaQ2RBREduWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRFhUZUNjTlY5R3FDbjZRN3Z0anVkalJiaHkyQWh6dE1ZRzJZN2QwcUVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTk5hMkxGdklhcWM4SXNrY0lRUnV5STVKSnRBK1A5Ymx5dW91V1EzbnhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQVVF5amJrV0dpRENSdjIwMjRyMHhKWXFUWXNsaEdQQkZjVjJ6TStwM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1hTXh1WmVFb1ZnTUg3L2NFK3krdzBtaXBldDZLbjVZc2I0WmJubG5Ta3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZodTl1bmNoNmNKMVlpeCtuZjZsbjlDc3JTbmM0UWx5YWNsVFpBYjZXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXR1TE9PM01TWUErWFY1a1NyOVhnNW9pK1RIdE55dHBiVzRuOHBZZFAwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlEcUxDd0tHVjR2VWxvKzVmU2NQa1ZNMXQ1QU44cVVFQUdsd001ZmJTNXRDcDlZZzJPSFZxbHdUV1loQkdiZ2xvRzFoUkhyWWlqZExyTHRnM0NjMGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJVT1kwTTdFVTErMHlpc29pOC9ldDJUVFFiS1NoUE43SDRLbE5hR1orSjFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwODAxODY2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzAwNTk4OUFGQkVDQjBDOTRERjQwNDNDQ0YyMDJGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5MzQ0NjY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTQ0MDgwMTg2NjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM4QjYxQkQ2MDkyRDQyRjNDMzVFREZEQUE0MzE0RUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTM0NDY2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRE00NENGUEwiLCJtZSI6eyJpZCI6Ijk5NDQwODAxODY2NDozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA2MjQ1MDUwOTkwNjgwOjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdWxvRmtRbC9EMXhnWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEdzFJZERSRlMrWUJtNFAybWtiWk1TTmt4NzFnVHljVTY1Ni9LNU1SSFM4PSIsImFjY291bnRTaWduYXR1cmUiOiJIWDBxanZ0aWJwVVlKcVlGRU1VeUp6MjZkK1k4RFBRZUhWaUh1SzlpQWcrYm1BRGhuRFJJSWs0OUZSa1lKNGcvb3A1TkErMGNKcU5oV1VVM09QenFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUi9aN0VDOC9uTWxmSURzUzlWRGUxU1hVSWxCVmF5b3Z3MTJNcmFmQ3ZVVUdIeHR6UzlkL1dieGNNeVZ0OWlFb0dJelZPYWdCSzJrRk43TGhsbWhlaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5OTQ0MDgwMTg2NjQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJROE5TSFEwUlV2bUFadUQ5cHBHMlRFalpNZTlZRThuRk91ZXZ5dVRFUjB2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTkzNDQ2NjYsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJaXcifQ==DhZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpXbEh3RDJIT1c0ZzcxR2ZXNzRGTW9FbjhINXJ6eGlmOWE1LzZKN1BTQUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlMwNzZQZGV4L0tBMVhBakplVFBzRWZVSElHdEp3M3JtU2puekxPNFFDSE5EeTJqOW94Z3Q1L3FPTzZhZ0JtczB0ZmxoUFBKQTNNT2UzRS9vdmkwWENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNVmJUY2dDRm9xOVlEQlc0TUhCZGVlSThPQnNMZ2FrdXJtZmNZS1V3cmJSbFFqaW91LzExVUtpK3NmQ1BRclA0Z3ZoQnQrbkM5enZON25JK1ZJYWFBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5MTIyMTg0NToyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXVnBSOEE5aHpsdUlPOVJuMXUrQlRLQkovQithODhZbi9XdWYraWV6MGdCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg3ODQzNTMsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Saleem_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/FRKFsZ8j/IMG-20250925-WA0002.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Saleem_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Saleem_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923022147740",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "SaleemMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Saleem_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/FRKFsZ8j/IMG-20250925-WA0002.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Saleem_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923022147740",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
