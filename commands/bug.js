const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Vang het bug op.
    var bug = args.join(" ");

    // Kijk na als er een bug is meegegeven.
    if (!bug) return message.channel.send("Geen bug opgegeven, gelieve de bug achter !bug te schrijven.");

    // Maak het embed aan.
    var bugEmbed = new discord.MessageEmbed()
        .setTitle("Nieuwe bug:")
        .setColor("#00ff00")
        .addFields(
            { name: "bug:", value: bug },
            { name: "Ingezonden door:", value: `${message.author}` }
        )

    // Vind het kanaal.
    var bugChannel = message.member.guild.channels.cache.get("718765810625282058")
    if (!bugChannel) return message.guild.send("Kan het kanaal niet vinden");

    bugChannel.send(bugEmbed)

    var botEmbed = new discord.MessageEmbed()
        .setTitle(`${message.author}, Je but is succesvol naar het bug kanaal gestuurd`)
        .setColor("#1ac91a")

    return message.channel.send(botEmbed);

    // Einde.

}

module.exports.help = {
    name: "bug",
    description: "Heb je een bug gevonden?. Zet het dan hier en we lossen het zo snel mogelijk op."
}