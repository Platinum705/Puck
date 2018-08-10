const Discord = require("discord.js");
const robot = new Discord.Client();
const fs =require("fs")
var p = "*"

robot.on('ready', () => {
    robot.user.setActivity('login..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 12000)
    console.log('Bot login')
});


function status1() {
    robot.user.setActivity('На закат',{ type: "WATCHING" })
    robot.user.setStatus('online')
	
}
