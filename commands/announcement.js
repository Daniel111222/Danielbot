const discord = require("discord.js");  

module.exports.run = async(bot, message, args) => {

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

}

module.exports.help = {
    name: "announcement"
}