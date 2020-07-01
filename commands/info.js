const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Info")
    .setColor("#32a852")
    .addFields(
        { name: "Dit is De officiële support server van de bot: Daniël bot", value: "[Klik Hier!](https://discord.gg/2E5fhn3)" },
        { name: "Dit is de link van de officiële Daniël bot", value: "_De link van de bot zal hier staan, wanneer de bot uit is._"},
    )
    //.setThumbnail("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
    //.setImage("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
    .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.") //, "https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
    .setTimestamp();

return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}