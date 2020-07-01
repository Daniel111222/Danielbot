const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        var text = "**Daniël bot** \n\n **_Commands_** \n !hallo - Stuurt hallo terug. \n !info - Geeft info. \n !serverinfo - Geeft info over de server. \n !regels - Geeft de standaard regels in een discord server. \n !new - Voor ticket aanmaken. \n !ticket - Voor ticket aanmaken. \n\n **_staff_** \n !ban (mention id) (reden) - Als je iemand wilt ban geven. \n !kick (mention id) (reden) - Als je iemand kick wilt geven. \n !tempmute (mention id) (tijd) - als je iemand wilt muten voor een bepaalde tijd. \n !warn (mention id) (reden) - Als je iemand een warn wilt geven \n !close - Als je een ticket wilt afsluiten.";

        message.author.send(text);

        message.reply("Alle commands kan je vinden in je privé berichten 📬");

    } catch (error) {
        message.reply("Er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}