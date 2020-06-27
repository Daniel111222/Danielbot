const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !ban @spelerNaam redenen hier

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("geen perms");
    if (!args[1]) return message.reply("geen gebruiker opgegeven");
    if (!args[2]) return message.reply("geen redenen opgegeven");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    var reason = args.slice(2).join(" ");

    if (!banUser) return message.reply("gebruiker niet gevonden");
    var embedPrompt = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Gelieve binnen 30 sec te reageren")
        .setDescription(`Wil je ${banUser} bannen?`);

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**verbannen: ** ${banUser} (${banUser.id})
        **Geband door:** ${message.author}
        **Redenen: ** ${reason}`);

    message.channel.send(embedPrompt).then(async msg => {

        // var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        // if (emoji === "✅") {

        //     msg.delete();

        //     banUser.ban(reason).catch(err => {
        //         if (err) return message.reply("Er is iets foutgelopen");
        //     });

        //     message.channel.send(embed);

        // }else if(emoji === "❌"){

        //     msg.delete();

        //     message.reply("ban geannuleerd").then(m => m.delete(5000));

        // }

        message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(collected => {
            if (collected.first().content.toLowerCase() == 'ja') {
                banUser.ban(reason).catch(err => {
                    if (err) return message.reply("Er is iets foutgelopen");
                });
            } else {
                message.reply("Geannuleerd");
            }
        });
    })
}

module.exports.help = {
    name: "ban"
}