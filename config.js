const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SALEEM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENhMHhSb0VWaFU4Y1hURHA0OXNHOGh2bjcyU2RlRTh2QjhqaDUxMnYyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWluNGtNOHhtK2FlMkNOVnRmRlVLVlFVTWRHS05nVStCTHhmOGxzRlRUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpT05LbFB1ZEtDMlo1bmJMeFg2clA1N0JpVWhVNUkwaHNVbllNZmcrYkdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFampFclBSWVJ0dWNqSTBqWU03T2dQcC9oZ1pPQjlvTkZmYjM3bHB2S0Q0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFTVhveEZkeGpaRTJnc0N4a0g2d0VtV2ZaSUVCRno3cnRJRmIxeWhtbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdNdjZDU0QrWTZRSmJzdjhjOUhPRWdZblI5MTlhbUdCakIvTHJtNWNJakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURQQjZUM2NGY3ZNcURLRk5mSHBiNVFORS81NCs0UDVuangwUUhlU0FWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHZBQ1d6VmdOa0g2bWhkZENvRXR4WEdsYjRJcHN0MGtodTRuQ1ZvREZ6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncveE9BQy9tL3o3eGZjcmNtU0RTM0RmME85dVlwZVEyTUVydm54cFZ4R1BnbzFrRG9QdmsvMXFxMk14R3hVcUEyWHJRS1lzL0VDL2V4aVdObktUa0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiIwMnRSL3FaTG9JNjFBRkxJdTd5UlVZUWYyVzFCeVVISzdtcjEzUmxXM1VnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQxMTg4MzY3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0RFODlFRkQyQzAwRDRCMjM3NjcxQkFGMjQwODcxRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5MzQ2MTU2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBVjZLWTVGMyIsIm1lIjp7ImlkIjoiOTIzNDExODgzNjc2OjIwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU0NTUwNjU2ODYwMjA2OjIwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmpMOHFrQ0VPVDc5Y1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieWhPMGxEWW1hMmhMSkd2YzllWi9XQ3hZMStkZWIxTE5JemRSa3MzM05oaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNjk5R2JUWVFweXRDQ01NNHZPbGR6bU1JU1l1anB1ckhYYjBnVlcwMkVmcTdrNWEvTUZ2blZLQlo1V1VJdFl5NllscWREOFM4REYvRDZodkJsNEZYQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImszMEsrSnpwdWZ4cUV0alhUY2NYamUyZUdYVFNLMVZoblI3WjF1aWtZRE5nd0RXQ3lZbVFKZXJCL2U3dzdMQ2FRT1h6aGVFRDAvUzArNWpqdThHVkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDExODgzNjc2OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNvVHRKUTJKbXRvU3lScjNQWG1mMWdzV05mblhtOVN6U00zVVpMTjl6WVoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTM0NjE1MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJaXAifQ==udFNpZ25hdHVyZSI6IlMwNzZQZGV4L0tBMVhBakplVFBzRWZVSElHdEp3M3JtU2puekxPNFFDSE5EeTJqOW94Z3Q1L3FPTzZhZ0JtczB0ZmxoUFBKQTNNT2UzRS9vdmkwWENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNVmJUY2dDRm9xOVlEQlc0TUhCZGVlSThPQnNMZ2FrdXJtZmNZS1V3cmJSbFFqaW91LzExVUtpK3NmQ1BRclA0Z3ZoQnQrbkM5enZON25JK1ZJYWFBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5MTIyMTg0NToyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXVnBSOEE5aHpsdUlPOVJuMXUrQlRLQkovQithODhZbi9XdWYraWV6MGdCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg3ODQzNTMsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
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
