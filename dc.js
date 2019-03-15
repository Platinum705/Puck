const Discord = require("discord.js");
const robot = new Discord.Client();
const fs =require("fs")
var p = "*"

robot.on('ready', () => {
    robot.user.setActivity('login..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 10000)
    console.log('Bot login')
});


function status1() {
    robot.user.setActivity('Minecraft',{ type: "PLAYING" })
    robot.user.setStatus('online')
	
}




robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
	    message.delete()
	    if(!message.member.roles.some(r=>["Просто Маша)"].includes(r.name)) )
				if(message.author.id !== '405258156063850497')
      return message.reply("Прости, но ты не можешь использовать это!")
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
	     console.log(`${message.author.displayName} сказал` + say)
    }
});


robot.on('message', message => {
    if(message.content.startsWith(p + 'clear')) {
                   if(!message.member.roles.some(r=>["Просто Маша)"].includes(r.name)) )
		   if(message.author.id !== '405258156063850497')
      return message.reply("Прости, но ты не можешь использовать это!")
        message.delete()
        let delmes = message.content.slice((p + 'clear').length);
        var result = 'Успешно удалено' + delmes + ' сообщений'
        message.channel.bulkDelete(delmes)
        message.channel.send(result).then((res) => {
        setTimeout(()=>{res.delete()},5000)
        console.log('Кто-то удалил сообщения!')
        })
    }
});

robot.on('guildMemberAdd', (member) => {
	member.addRole('460811004834480149')
	
});

robot.on("guildMemberRemove", member => {
    console.log(`${member.displayName} покинул ${member.guild.name}.`)
if(member.guild.id === "387279534380023808"){
robot.channels.get('479867075712647168').send(`${member.displayName} покинул нашу семью :(`);
	}
});

robot.on('guildMemberAdd', (member) => {
    console.log(`${member.displayName} вступил в ${member.guild.name}.`)
if(member.guild.id === "387279534380023808"){
robot.channels.get('461148205665746954').send(`Приветствуем нового члена нашей огромной и дружной семьи - ${member.displayName}`);
	}
});

robot.on('message', msg => {
    if (msg.content === (p + 'монетка')) {
        var coin = Math.floor(Math.random() * 2) + 1  
	msg.delete()
    if(coin == 1){
        msg.reply('Тебе выпала ***Решка!***')
    }
    if(coin == 2){
        msg.reply('Тебе выпал ***Орел!*** 🦅')
	    }

    }
});
robot.on('message', message => {
    if(message.content.startsWith(p + 'join')) {
	    message.delete()
    voiceChannel.join()
  .then(connection => {

  });
	     console.log(`Успешно вошел на канал`)
    }
});

robot.login(process.env.BOT_TOKEN);
