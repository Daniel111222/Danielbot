const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        var text = "**Daniël bot** \n\n **_Commands_** \n !hallo - Stuurt hallo terug. \n !info - Geeft info.";

        message.author.send(text);

        message.reply("Alle commands kan je vinden in je privé berichten");

    } catch (error) {
        message.reply("Er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}