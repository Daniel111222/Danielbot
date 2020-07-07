const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!giveaway tijd (s/m/h/d) #ChannelTag/channelID prize

   if (!args[0]) return err(`You did not specify your time!`);
        if (!args[0].endsWith("s") && !args[0].endsWith("m") && !args[0].endsWith("h") && !args[0].endsWith("d")) return err(`You did not use the correct formatting for the time!\nUse:\n-\`s\` For seconds\n-\`m\` For minutes\n-\`h\` For hours\n-\`d\` For days`);
        if (isNaN(args[0][0])) return err(`You must give a valid number!`);
        if (!args[1]) return err(`You did not specify a channel!`);

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if (!channel) return err(`I could not find that channel in this server!`);

        let prize = args.slice(2).join(" ");
        if (!prize) return err(`You did not specify a prize!`);

        let dateEnded = Date.now() + ms(args[0]);

        msg(`Giveaway created in ${channel}`);
        let Embed = new Discord.MessageEmbed()
            .setTitle(`🎉 GIVEAWAY 🎉`)
            .setDescription(`**${prize}**`)
            .setFooter('Ends')
            .setTimestamp(dateEnded)
            .setColor(`#0000ff`);
        let m = await channel.send(Embed);
        m.react("🎉");
        setTimeout(() => {
            if (m.reactions.cache.get("🎉").count <= 1) {
                err(`There were no participators`);
                m.delete();
                return;
            }

            let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();

            channel.send(`Congratulations, **${winner}**. You won:\n**${prize}**\n\nYou probably need to contact ${message.author}, since this member hosted the giveaway!`);

            m.edit({
                embed: {
                    title: '🎉 GIVEAWAY ENDED 🎉',
                    description: `**${winner} won this giveaway!**`,
                    timestamp: dateEnded,
                    footer: {
                        text: 'Ended'
                    },
                    color: '#0000ff'
                }
            });

        }, ms(args[0]));
}

module.exports.help = {
    name: "giveaway",
    description: "Geeft alle verschillende commands",
    category: "Informatie"
}