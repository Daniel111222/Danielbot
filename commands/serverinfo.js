const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("serverinfo")
        .setDescription("Info:")
        .setColor("#ba56b2")
        .addFields(
            { name: "Bot naam", value: client.user.username },
            { name: "Je bent de server gejoined op", value: message.member.joinedAt },
            { name: "Totaal members", value: message.guild.memberCount },
            { name: "Aantal servers", value: client.guilds.cache.size }
        )
        .setThumbnail("https://cdn.discordapp.com/attachments/719562600282849324/728585483118051368/BOT_NU_g_OE_d.jpg")
        //.setImage("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.") //, "https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        .setTimestamp();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"
}