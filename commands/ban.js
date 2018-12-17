const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can not use that command!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be baned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#f44242")
    .addField("Ban User", `${bUser} with ID ${bUser.id}`)
    .addField("Baned By", `<@${message.author.id}> with ID ${message.author.is}`)
    .addField("Baned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reson", bReason);

    let logschannel = message.guild.channels.find(`name`, "logs");
    if(!logschannel) return message.channel.send("Can't find logs channel.");

  message.guild.member(bUser).ban(bReason);
  logschannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
