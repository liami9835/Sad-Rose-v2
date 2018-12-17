const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

if(err) console.log(err);
let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
  console.log("Couldn't find commands.");
  return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);

  bot.commands.set(props.help.name, props);

  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("!!help|Owner:liami98#6525", {type: "playing"});
  bot.user.setStatus("dnd");
});

bot.on("message", async message => {
  if(message.author.bot) return; //Abort if this bot authored this message
  if(message.channel.type === "dm") return; //Abort if this was a DM

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = (messageArray[0]).toLowerCase();
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd === `${prefix}thisisonlyfornewservers`){
    return message.channel.send("@here\n***Hello everyone. I am Sad Rose. I am a java script built bot. I am made by liami98#6525. If you have any questions or suggestions for me please let him know. Other then that thank you for having me in this sever with you guys:)***\n ```My prefix is !! If you want commands please do !!help for more commands:D. Have a nice day!```")
  }
if(cmd === `${prefix}help`){
  // message.delete();
  message.author.sendMessage("```#1: !!8Ball, !!8ball (message) ***(Kinda broken atm)*** \n#2: !!ban, !!ban (@user) \n#3: !!botinfo, !!botinfo (Gives info on the bot.) \n#4: !!cat, !!cat (Shows random cat pics.) \n#5: !!clear, !!clear (#1-100) (Clears messages.) \n#6: !!dog, !!dog (Shows random dog pics.) \n#6: !!gay, !!gay (Rates you on gay scale 1-100%)\n#7: !!help, !!help (Shows this menu.) \n#8: !!kick, !!kick (@user)\n#9: !!pp, !!pp (Rates how big your penis is on a scale 1-100%) \n#10: !!say, !!say (message) (Bot will say what you want) \n#11: !!serverinfo, !!serverinfo (Gives info on the server your in.) \n#12: !!roll, !!roll (Rolls numbers from 1 to 100.) \n#13: !!invite, !!invite (Gives you the invite to the bot.)```\n***If you have any questions or suggestions please dm liami98#6525 the owner and let him know!***")
  message.reply("**Please check your DMs for all help commands!**")
}
if(cmd === `${prefix}hi`){
  message.channel.send("hi")
}

if (cmd === `${prefix}setgame`) {
  if (message.author.id == "409150982430392340") {
  var argresult = args.join(' ');
  if (!argresult) argresult = null;
  bot.user.setGame(argresult);
  message.reply("It has been set.");
  } else {
    message.reply("You do not have permission to do that. :/");
  }
}

if (cmd === `${prefix}roll`) {
 message.channel.sendMessage(Math.floor(Math.random() * 100));
}

if(cmd ===`${prefix}invite`){
  message.reply('Thank you for picking **Sad Rose**! Here is the invite link!: https://discordapp.com/oauth2/authorize?client_id=520367709033070593&scope=bot&permissions=8')
}

if(cmd === `${prefix}liam`){
let facts = [":fire:**Liam is one awesome person.**:fire:", ":eggplant:**Liam can be a dick some times.**:eggplant:", ":heart:**Liam hopes he can get a girl friend cause he is lonly.**:heart:", "**Liam has one close friend named ken.**", ":cry:**Liam needs help on life.:cry:**"];
let fact = Math.floor(Math.random() * facts.length);
message.channel.send(facts[fact]);
}


if (cmd === `${prefix}setstatus`) {
  if (message.author.id == "409150982430392340") {
  var argresult = args.join(' ');
  bot.user.setStatus(argresult);
  message.reply("It has been set..");
  } else {
    message.reply("Cant do it");
  }
}



});

bot.login(botconfig.token);
