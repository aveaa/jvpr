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
    let bump_channel = client.channels.get('427795113562079232');
    bump_channel.send('!bump');
    let collector = new Discord.MessageCollector(bump_channel, m => m.author.id === '315926021457051650', { time: 60000 });
    collector.on('collect', msg => {
        var re1='(Please)';	// Word 1
        var re2='( )';	// White Space 1
        var re3='(Enter)';	// Word 2
        var re4='( )';	// White Space 2
        var re5='(Security)';	// Word 3
        var re6='( )';	// White Space 3
        var re7='(Bump)';	// Word 4
        var re8='( )';	// White Space 4
        var re9='(Code)';	// Word 5
        var re10='(:)';	// Any Single Character 1
        var re11='( )';	// White Space 5
        var re12='(\\d+)';	// Integer Number 1
        var re13='( )';	// White Space 6
        var re14='(.)';	// Any Single Character 2
        var re15='( )';	// White Space 7
        var re16='(\\d+)';	// Integer Number 2
        var re17='( )';	// White Space 8
        var re18='(=)';	// Any Single Character 3
        var re19='( )';	// White Space 9
        var re20='(\\?)';	// Any Single Character 4

        var p = new RegExp(re1+re2+re3+re4+re5+re6+re7+re8+re9+re10+re11+re12+re13+re14+re15+re16+re17+re18+re19+re20,["i"]);
        var m = p.exec(msg.content.split('\n')[0]);
        if (m != null)
        {
            var int1=m[12];
            var c2=m[14];
            var int2=m[16];
            msg.channel.send('!'+eval(int1.replace(/</,"&lt;")+c2.replace(/</,"&lt;")+int2.replace(/</,"&lt;")));
            setTimeout(bump, 5000);
        } else {
            var rre1='(Next)';	// Word 1
            var rre2='( )';	// White Space 1
            var rre3='(bump)';	// Word 2
            var rre4='( )';	// White Space 2
            var rre5='(point)';	// Word 3
            var rre6='( )';	// White Space 3
            var rre7='(will)';	// Word 4
            var rre8='( )';	// White Space 4
            var rre9='(be)';	// Word 5
            var rre10='( )';	// White Space 5
            var rre11='(available)';	// Word 6
            var rre12='( )';	// White Space 6
            var rre13='(in)';	// US State 1
            var rre14='( )';	// White Space 7
            var rre15='(\\d+)';	// Integer Number 1
            var rre16='( )';	// White Space 8
            var rre17='(hours)';	// Word 7
            var rre18='( )';	// White Space 9
            var rre19='(\\d+)';	// Integer Number 2
            var rre20='( )';	// White Space 10
            var rre21='(minutes)';	// Word 8
            var rre22='( )';	// White Space 11
            var rre23='(\\d+)';	// Integer Number 3
            var rre24='( )';	// White Space 12
            var rre25='(seconds)';	// Word 9

            var p = new RegExp(rre1+rre2+rre3+rre4+rre5+rre6+rre7+rre8+rre9+rre10+rre11+rre12+rre13+rre14+rre15+rre16+rre17+rre18+rre19+rre20+rre21+rre22+rre23+rre24+rre25,["i"]);
            var m = p.exec(msg.content);
            if (m != null)
            {
                var int1=m[15];
                var int2=m[19];
                var int3=m[23];
                setTimeout(bump, (int1*3600000)+(int2*60000)+(int3*1000)+5000);
            }
        }
        collector.stop();
    });

    console.log(collector);
    collector.stop();
}

client.on('ready', () => {
	console.log('Bot loaded');
    /** @namespace process.env.PREFIX */
    client.user.setPresence({ game: { name: `твои крики`, type: 2 } }).catch(o_O=>{});
    bump();

});


client.login(process.env.TOKEN);
