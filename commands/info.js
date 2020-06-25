const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Info bot")
        .setDescription("Een paar vragen:")
        .setColor("#0099ff")
        .addFields(
            { name: "Wanneer is de bot af?", value: "De bot is binnnen twee weken af." },
            { name: "Wat kan de bot allemaal?", value: "Ik streef ernaar met hulp van de helpers, dat de bot alles kan." },
            { name: "Hoe maak ik een ticket aan?", value: "Door in #cmds !ticket of !new te schrijven." }
        )
        .addField("Bot naam", client.user.username);

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}