const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("regels")
        .setDescription("De regels zijn:")
        .setColor("#0099ff")
        .addFields(
            { name: "_NIET SPAMMEN_" },
            { name: "_NIET SCHELDEN_" },
            { name: "_NIET ONNODIG TAGGEN_"},
            { name: "_NIET ADVERTEREN ZONDER TOESTEMMING_"}
        )
        //.setThumbnail("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        //.setImage("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.") //, "https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
        .setTimestamp();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "regels"
}
