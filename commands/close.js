const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "723177277189259344";

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Jij kan deze ticket niet sluiten!");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();

        var closeTicketEmbed = new discord.MessageEmbed()
            .setTitle("Ticket | " + message.channel.name)
            .setDescription("De ticket is afgesloten, bedankt voor je hulp!")
            .setColor("#249643")
            .setTimestamp();

        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
        if (!ticketChannel) return message.reply(`Het kanaal ${ticketChannel} is niet gevonden!`);

        ticketChannel.send(closeTicketEmbed);

    } else {

        message.reply("Je kunt deze command niet buiten een ticket gebruiken!");

    }
}

module.exports.help = {
    name: "close"
}