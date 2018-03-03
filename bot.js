const Discord = require('discord.js');
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

function mydump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;

    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";

    if(typeof(arr) == 'object') {  
        for(var item in arr) {
            var value = arr[item];

            if(typeof(value) == 'object') { 
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += mydump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { 
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
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
		function hmm(arr, embed) {
			if (arr !== [])
			setTimeout(function () {
				let user = arr.shift();
				console.log(mydump(user));
				hmm(arr, embed);
			}, 1000);
		}
		console.log('===START SENDING MESSAGES===');
	   	// hmm(membersArray, embed);
	   	mydump(membersArray);
	   	console.log('===END SENDING MESSAGES===');
	   	console.log('%cMessage sent done. ' + i + ' messages sent totally.');

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
