const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("De standaard regels zijn: ")
        .setDescription("\n\n\n **_NIET SPAMMEN_** \n\n\n **_NIET SCHELDEN_** \n\n\n **_NIET ONNODIG MENSEN TAGGEN_** \n\n\n **_IN DE JUISTE KANALEN PRATEN_** \n\n\n **_NIET ADVERTEREN ZONDER TOESTEMMING_** \n\n\n\n _Houd u zich niet aan de regels, zullen er consequenties voor u komen._ \n\n")
        .setColor("#eb4034")
        //.setThumbnail("https://cdn.discordapp.com/attachments/726380441266815038/727930984997060608/regels.jpg")
        .setImage("https://cdn.discordapp.com/attachments/726380441266815038/727930984997060608/regels.jpg")
        .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.")//, "https://cdn.discordapp.com/attachments/726380441266815038/727930984997060608/regels.jpg")
        .setTimestamp();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "regels"
}