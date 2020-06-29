const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Info bot")
        .setDescription("Een paar vragen:")
        .setColor("#0099ff")
        .addFields(
            { name: "Wanneer is de bot af?", value: "De bot is binnnen twee weken af." },
            { name: "Wat kan de bot allemaal?", value: "Als je !help doet, krijg je in je een privé bericht van de bot." },
            { name: "Hoe invite ik de bot?", value: "Wanneer de bot af is, zal heel duidelijk aangegeven worden, waar de link zult staan." }
        )
        .addField("Bot naam", client.user.username)
        .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.", "")
        .setTimestamp();


    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}