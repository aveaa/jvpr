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


function bump() {
	client.channels.get('427795113562079232').send('!bump');
}

client.on('message', (message) => {

	let msg_text = message.content.split('\n')[0];
	if (message.author.id !== '315926021457051650') return;

	let match1 = msg_text.match(/Please Enter Security Bump Code\: \*\*(\d+) (.) (\d+) = \?\*\*/i);
	let match2 = msg_text.match(/Next bump point will be available in (\d+) hours (\d+) minutes (\d+) seconds/i);
	if (match1 !== null) {
		if (match1[2] == '+') {
			message.channel.send('!'+(parseInt(match1[1])+parseInt(match1[3])))
		}
		if (match1[2] == '-') {
			message.channel.send('!'+(parseInt(match1[1])-parseInt(match1[3])))
		}
		setTimeout(bump, 5000);
	}
	if (match2 !== null) {
		let ms = parseInt(match2[1]) * 3600000 + parseInt(match2[2]) * 60000 + parseInt(match2[3]) * 1000 + 5000;
		console.log(ms);
		setTimeout(bump, ms);
	}
})

client.on('ready', () => {
	console.log('Bot loaded');
    /** @namespace process.env.PREFIX */
    client.user.setPresence({game: {name: null}}).catch(o_O=>{});
    bump();
});



client.login(process.env.TOKEN);
