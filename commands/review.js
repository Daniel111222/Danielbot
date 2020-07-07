const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!review aantalSterren tekst tekst tekst

    const amountStars = args[0];

    if (!amountStars || amountStars < 1 || amountStars > 5) return message.reply("Geef een aantal op tussen 1 en 5 sterren");

    var text = args.splice(1, args.length).join(" ") || `**Geen tekst opgegeven**`;

    var channel = message.member.guild.channels.cache.get("730000256569180210");

    if (!channel) return message.channel.send("Kanaal bestaat niet");

    var stars = "";
    for (let i = 0; i < amountStars; i++) {

        stars += ":star: ";

    }

    message.delete();

    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een review geschreven`)
        .setColor("#00ff00")
        .addField("Sterren: ", stars)
        .addField("Review: ", text);

    message.channel.send("✅ Je hebt een review succesvol geschreven");

    return channel.send(embed);

}

module.exports.help = {
    name: "review"
}