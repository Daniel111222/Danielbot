const discord = require("discord.js");

module.export.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Commands Bot")
        .setColor("#0099ff")
        .addFields(
            { name: "**!help**", value: "Je krijgt dit bericht." },
            { name: "**!new**", value: "Je maakt een ticket aan." },
            { name: "**!ticket**", value: "je maakt een ticket aan." }
        )

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "help"
}