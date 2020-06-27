const discord = require("discord.js");  
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    // !warn spelernaam redenen hier.

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");
    
    if (!args[0]) return message.reply("geen gebruiker opgegeven");
    
    if (!args[1]) return message.reply("geen redenen opgegeven");
    
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("gebruiker niet gevonden");

    if(warnUser.hasPermission("MANAGE_MESSAGE")) return message.reply("Sorry, je kunt deze gebruiker niet warnen.");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd: ** ${warnUser} (${warnUser.id})
        **warning door:** ${message.author}
        **Redenen: ** ${reason}`);
        addField("Aantal warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("718769530050183198")

    if(!channel) return;

    channel.send(embed);

}

module.exports.help = {
    name: "warn"
}