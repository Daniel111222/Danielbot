const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        var text = "**kooien**, Als je mute wilt, moet je nu de server promoten \n **_Laat me niet wacht..._**";

        message.author.send(text);

        message.reply("Alle commands kan je vinden in je privé berichten 📬");

    } catch (error) {
        message.reply("Er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}