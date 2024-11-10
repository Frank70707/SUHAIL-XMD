const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256765050916";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_36_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmMjM1NkIxajlsa1ZDODR3U0xtSnZIaWYzTGl2TzZYNFdBaEg5Q00zckxVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiamhtM0h5WFJFcVhZb1VZckx0QjNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczNjZlMjI2LWVkN2QtNGRjOC05MmM1LTNiNDZjYjlhNTUxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTYsXG4gICAgICAyMzgsXG4gICAgICAxMjQsXG4gICAgICAxNDEsXG4gICAgICA0MixcbiAgICAgIDIxMyxcbiAgICAgIDk4LFxuICAgICAgMjA5LFxuICAgICAgMjA1LFxuICAgICAgMjYsXG4gICAgICAxOTcsXG4gICAgICAxMjYsXG4gICAgICA4MCxcbiAgICAgIDE5OSxcbiAgICAgIDg1LFxuICAgICAgMjI4LFxuICAgICAgMTEsXG4gICAgICAyMDksXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyNyxcbiAgICAgIDE5MSxcbiAgICAgIDI1MSxcbiAgICAgIDMxLFxuICAgICAgMTM0LFxuICAgICAgMTI3LFxuICAgICAgMjAzLFxuICAgICAgODMsXG4gICAgICAyNDMsXG4gICAgICA1OSxcbiAgICAgIDk3LFxuICAgICAgMjM3LFxuICAgICAgOTIsXG4gICAgICA2MSxcbiAgICAgIDExNixcbiAgICAgIDQzLFxuICAgICAgMTIxLFxuICAgICAgMTIzLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhNU05HUVZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NjUwNTA5MTY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjExNTQwNjExNDkzOTAxOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pis8J2XmfCdl5zwnZel8J2XmOKXifCdl6rwnZeU8J2Xn/Cdl5/il4nwnZeZ8J2XpfCdl5TwnZer8J2XrfCdl6zil4kyNTbimKxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQ0RqTzRHRU5XbHc3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJBdkNoOG9IdjFIK05TM1Y4K2dCbGdaYnY3T0N0UHVuMkVDL0U0R0VTekE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnI2TjZwVWFLdFk2QnZjNWVYY2h0UmE5N2RTa01lbjNvckUrSTRmdXRKV2pWcG5keW1RVnBtWjFhZkNFSnduOHBuQ0lLQ0djc1lEOEFUTmVuYStnQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVhnejEzaUR4UWdYcnBGTzRyblRGdDY3cEJoV3pHZUVIOWVvR0Z2QVBOTHp1aTBRa3NwN3Bmb3ZwOVdRaE9YYURnMDJlRkgwMDFhdy9ZbkxzdUlpaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzY1MDUwOTE2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNTI5NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBMElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEwSS5qc29uIjogIntcImtleURhdGFcIjpcIkhBb0FQQ21sVldPdDJZT0hMTjd0OVdDSTd1MEdTRTVwYnBCOXM4QjYwNDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0MTQ5NjQ0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMjUyOTU2ODkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "FRANK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
