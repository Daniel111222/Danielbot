const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("invites")
    .setColor("#32a852")
    .addFields(
        { name: "Dit is de link van de officiële Daniël bot", value: "_De link van de bot zal hier staan, wanneer de bot uit is._"},
        { name: "Dit is De officiële support server van de bot: Daniël bot", value: "[Klik Hier!](https://discord.gg/2E5fhn3)" },
        { name: "Dit is De officiële website van de Daniël bots", value: "[Klik Hier!](https://danielbot.webnode.nl/)" },
    )
    .setThumbnail("https://cdn.discordapp.com/attachments/719562600282849324/728585483118051368/BOT_NU_g_OE_d.jpg")
    .setImage("https://cdn.discordapp.com/attachments/719562600282849324/728585483118051368/BOT_NU_g_OE_d.jpg")
    .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.") //, "https://cdn.discordapp.com/attachments/719562600282849324/728585483118051368/BOT_NU_g_OE_d.jpg")
    .setTimestamp();

return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "invite"
}