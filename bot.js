const Discord = require('discord.js');
const util = require('util')
const client = new Discord.Client();
const bot_id = '419429288291598346';
//415524508091416576
//415526023543914507


function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function print_r(theObj){ 
       if(theObj.constructor == Array || theObj.constructor == Object){ 
          document.write("<ul>") 
          for(var p in theObj){ 
             if(theObj[p].constructor == Array || theObj[p].constructor == Object){ 
                document.write("<li>["+p+"] => "+typeof(theObj)+"</li>"); 
                document.write("<ul>") 
                print_r(theObj[p]); 
                document.write("</ul>") 
             } else { 
                document.write("<li>["+p+"] => "+theObj[p]+"</li>"); 
             } 
          } 
          document.write("</ul>") 
       } 
    }




client.on('ready', () => {
	console.log('Bot loaded');
    /** @namespace process.env.PREFIX */
    client.user.setPresence({ game: { name: `твои крики`, type: 2 } }).catch(o_O=>{});

});


client.on("message", message => {

	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();


	if (command === "pr" && args[0]) {
		if (!client.guilds.get(args[0])) return;
		let guild = client.guilds.get(args[0]);
		let i = 0;
		var membersArray = guild.members.array();
		const embed = new Discord.RichEmbed()
			.setDescription('***Приветствую тебя, игрок!***\n`Присоединяйся на наш сервер #Joned🌎Voice`\n- Наш сервер по тематике является социальным, т.е игры фактически не влияют.\n- Есть экономика, подробно о ней можете узнать в #information!\n- Огромное кол-во цветов.\n- Хорошая система лвлов.\n- Собственный бот.\n***Всё остальное ты сможешь узнать, когда придёшь на сервер! Жми на кнопку ниже!***\n\n[Присоединиться!](https://discord.gg/YVh8QXJ)\n\n[А так же, вы можете поддержать нас, поставив лайк!](https://discord-server.com/servers/370998450285707275)')
			.setThumbnail('https://pp.userapi.com/c824501/v824501832/a95f0/01j1gbmROcE.jpg');
		// function hmm(arr, embed) {
		// 	if (arr !== [])
		// 	setTimeout(function () {
		// 		let user = arr.shift();
		// 		console.log(mydump(user));
		// 		hmm(arr, embed);
		// 	}, 1000);
		// }
		// console.log('===START SENDING MESSAGES===');
	   	// hmm(membersArray, embed);
	   	console.log(util.inspect(membersArray, false, null))
	   	// console.log('===END SENDING MESSAGES===');
	   	// console.log('%cMessage sent done. ' + i + ' messages sent totally.');

	} else {
		message.reply({embed: {
			color: 16711680,
			title: "Ошибка",
			description: `ЭЭЭЭ! Команды \`${command}\` нету! Алло, ты шо, ебобо?`,
			footer: {
			  	text: "JonedVoice",
		  	},
		}})
	}
});

client.login(process.env.TOKEN);
