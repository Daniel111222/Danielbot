const discord = require("discord.js");

const botConfig = require("../botconfig.json");

var prefix = botConfig.prefix

module.exports.run = async (client, message, args) => {

    // !kick @spelerNaam redenen hier

    var args = message.content.slice(prefix.length).split(/ +/);

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("geen perms");

    if (!args[1]) return message.reply("geen gebruiker opgegeven");

    if (!args[2]) return message.reply("geen redenen opgegeven");

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    if (!kickUser) return message.reply("gebruiker niet gevonden");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Gelieve binnen 30 sec te reageren")
        .setDescription(`Wil je ${kickUser} kicken?`);

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Gekickt: ** ${kickUser} (${kickUser.id})
        **Gekickt door:** ${message.author}
        **Redenen: ** ${reason}`);

    message.channel.send(embedPrompt).then(async msg => {

        // var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        // if (emoji === "✅") {

        //     msg.delete();

        //     kickUser.kick(reason).catch(err => {
        //         if (err) return message.reply("Er is iets foutgelopen");
        //     });

        //     message.channel.send(embed);

        // }else if(emoji === "❌"){

        //     msg.delete();

        //     message.reply("Kick geannuleerd").then(m => m.delete(5000));

        // }

        message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(collected => {

            if (collected.first().content.toLowerCase() == 'ja') {

                kickUser.kick(reason).catch(err => {
                    if (err) return message.reply("Er is iets foutgelopen");
                });

                var botEmbed = new discord.MessageEmbed()
                    .setDescription(`**${kickUser} (${kickUser.id})** is succesvol gekickd door **${message.author}.**`)
                    .setColor("#32a852")

                return message.channel.send(botEmbed);

            } else {
                message.reply("Geannuleerd");

            }

        });

    })

}

module.exports.help = {
    name: "kick"
}