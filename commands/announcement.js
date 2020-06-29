const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#00ee00")
            .setDescription(`Maak een annoucement aan door gebruik te maken van: \n !announcement title ${seperator} bericht ${seperator} kleur ${seperator} kanaal ${seperator}`);

        return message.channel.send(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "#chat";

    var options = {

        title: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Announcement")
        .setColor(options.kleur)
        .setDescription(`Bericht van ${message.author} \n\n ${options.title} \n ${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal is bestaat niet");

    channel.send(announceEmbed);

}

module.exports.help = {
    name: "announcement"
}