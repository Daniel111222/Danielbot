const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var noPermissionEmbed = new discord.MessageEmbed()
            .setTitle("❌ Je hebt hier geen permissies voor!")
            .setColor("#ff0006")
            .setTimestamp()
            .setFooter(`Antwoord op: ${message.author.tag}`);

        return message.channel.send(noPermissionEmbed);

    }

    winnerCount = args[1];
    time = args[2];
    item = args.splice(3, args.length).join(" ");

    if (!winnerCount) return message.channel.send("❌ Geen aantal spelers opgegeven!");
    if (!time) return message.channel.send("❌ Geen tijd opgegeven!");
    if (!item) return message.channel.send("❌ Geen prijs opgegeven!");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 Giveaway 🎉")
        .setFooter(`Vervalt: ${dateEnd}`)
        .setDescription(item);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }

        }

        if (peopleReacted == 0) {
            return message.channel.send("Niemand heeft gewonnen, dus ben ik de winnaar! 🎉");
        }

        if (peopleReacted < winnerCount) {
            return message.channel.send("Er zijn niet genoeg mensen die mee deden, dus ben ik de winnaar! 🎉");
        }

        for (let y = 0; y < winnerCount.length; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if (winners[o] == peopleReacted[random]) {
                    inList = true;
                    y--;
                }

            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }

        }

        for (let y = 0; y < winners.length; y++) {

            message.channel.send("Gefeliciteerd: " + `**${winners[y].tag}**` + ` Je hebt gewonnen: **${item}**`);

        }

    }, time * 1000)

}

module.exports.help = {
    name: "giveaway"
}