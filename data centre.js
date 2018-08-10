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



robot.on("messageDelete", (msg) => {
  if (typeof msg.content !== 'undefined'){
    var date = new Date(msg.timestamp);
    if (typeof msg.attachments[0] !== 'undefined'){
	console.log('Кинул в лс удаленное сообщение')
      robot.users.get("405258156063850497").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}". К сообщению было что-то прикреплено.`);
    } else {
      robot.users.get("405258156063850497").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}".`);
    };
  } else {
    robot.users.get("405258156063850497").send("Удалено сообщение.");
  };
});


robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
	    if(!message.member.roles.some(r=>["Основатель", "Тех.Админ-Поддержка", "строитель 3-го ранга"].includes(r.name)) )
				if(message.author.id !== '405258156063850497')
      return message.reply("Только элита может играться с этой командой")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log(`${message.author.displayName} сказал` + say)
    }
});


robot.login(process.env.SECRET)
