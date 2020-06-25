const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("serverinfo")
        .setDescription("Info")
        .setColor("#0099ff")
        .addFields(
            { name: "Bot naam", value: client.user.username },
            { name: "Je bent de server gejoined op", value: message.member.joinedAt },
            { name: "Totaal members", value: message.guild.memberCount },
            { name: "Aantal servers", value: client.guilds.cache.size }
        )
        .addField("Bot naam", client.user.username);

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"
}
