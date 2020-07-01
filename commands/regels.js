const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("de regels")
        .setDescription("\n\n\n **_NIET SPAMMEN_** \n\n\n **_NIET SCHELDEN_** \n\n\n **_NIET ONNODIG MENSEN TAGGEN_** \n\n\n **_NIET ADVERTEREN ZONDER TOESTEMMING_** \n\n\n\n _Houd u zich niet aan de regels, zullen er consequenties voor u komen._ \n\n")
        .setColor("#0099ff")
        //.setThumbnail("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        //.setImage("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.") //, "https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        .setTimestamp();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "regels"
}
