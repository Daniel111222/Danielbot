const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !clear aantal

    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply("Je hebt geen toestemming om dit te doen.");

    if (!args[0]) return message.reply("Geef een getal op.");

    if (!isNaN(args[0])) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Je kan geen 0 berichten verwijderen.").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Er is 1 bericht verwijdert.").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Er zijn ${args[0]} berichten verwijderd`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        return message.reply("Geef een getal op.");
    }

}

module.exports.help = {
    name: "clear"
}