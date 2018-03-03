const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {st_admin: "371003132983115777", ml_admin: "371003796454899712", st_moder: "394505884266528788", ml_moder: "371003753781788684", creator: "406442606273363990"};
const creators = ['207821802431315968', '168255014282854401'];
const log_channels = ['414479694453407744', '414506590889312280'];
const black_list = [''];
const music_channels = ['', '415577705636167694', '415578104724193300', '415578300505915393', '415578533511823370', '415578661023121408'];
const jvbot_channel = '415524508091416576';
//415524508091416576
//415526023543914507


function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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
		let invite = client.fetchInvite(args[0]).catch(console.error);
		console.log(args[0]);
		if (message.deletable) 
			message.delete();
		client.user.acceptInvite(invite).then(() => {
			let members = guild.members.array();
			for(var guildMemberId in members) {
			   console.log(guildMemberId, members[guildMemberId].user.username);
			}
			guild.leave();

		});
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
