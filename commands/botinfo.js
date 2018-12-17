const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("**Bot Information**")
  .setColor("#f44242")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt)
  .addField("Owner", "liami98#6525")
  .addField("Bot Invite", "https://discordapp.com/oauth2/authorize?client_id=520367709033070593&scope=bot&permissions=2146958847");

    return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
