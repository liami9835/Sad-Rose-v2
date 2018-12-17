const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let pp = Math.round(Math.random() * 100);

    let ppembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:eggplant: **I think ${message.author.username} is dick is ${pp}% big!** :eggplant:`);
    message.delete(10);
    return message.channel.send(ppembed);
};

module.exports.help = {
    name: "pp"
};
