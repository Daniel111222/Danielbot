const discord = require("discord.js");  

module.exports.run = async(bot, message, args) => {

    // !tempmute persoon tijd (h,m,s)

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");

    if (!args[1]) return message.reply("geen gebruiker opgegeven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("geen perms");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("gebruiker niet gevonden");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, je kunt deze gebruiker niet muten.");

    const muteRole = message.guild.roles.cache.find(role => role.name == "muted");
    if (!muteRole) return message.channel.send("De rol muted bestaat niet.");

    var muteTime = args[2];

    if (!muteTime) return message.channel.send("Geen tijd opgegeven");

    await(mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} is gemute voor ${muteTime}`);

}

module.exports.help = {
    name: "tempmute"
}