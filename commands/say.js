const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("You can't do that!")
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
