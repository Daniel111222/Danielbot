const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        var text = "**kooien**, zorg ervoor dat 3 vrienden in de server komen en dan geef ik je mute! \n _ik wacht..._";

        message.author.send(text);

        message.reply("Alle commands kan je vinden in je privé berichten 📬");

    } catch (error) {
        message.reply("Er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}