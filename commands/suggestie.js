const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    
    // Vang het idee op.
    var suggestie = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!suggestie) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Nieuw Idee")
        .setColor("#00FF00")
        .addField("suggestie: ", suggestie)
        .addField("Ingezonden door: ", message.author);
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find("id", "729242817045594181");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
    // Einde.
 
}
 
module.exports.help = {
    name: "suggestie",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}