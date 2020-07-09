const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  // Vang het suggestie op.
  var suggestie = args.join(" ");

  // Kijk na als er een suggestie is meegegeven.
  if (!suggestie) return message.channel.send("Geen suggestie meegegeven gelieve een suggestie mee te geven.");

  // Maak het embed aan.
  var suggestieEmbed = new discord.MessageEmbed()
    .setTitle("Nieuwe suggestie")
    .setColor("#00ff00")
    .addFields(
      { name: "suggestie:", value: suggestie },
      { name: "Ingezonden door:", value: `${message.author}` }
    )

  // Vind het kanaal.
  var suggestieChannel = message.member.guild.channels.cache.get("718765875104055377")
  if (!suggestieChannel) return message.guild.send("Kan het kanaal niet vinden");

  // Verzend het bericht en voeg er reacties aan toe.
  suggestieChannel.send(suggestieEmbed).then(embedMessage => {
    embedMessage.react('👍');
    embedMessage.react('👎');
  });

  // Einde.

}

module.exports.help = {
  name: "suggestie",
  description: "Heb je een suggestie. Zet het dan hier en misschien passen we het toe."
}