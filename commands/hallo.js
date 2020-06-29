const discord = require("discord.js");  

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Daniël, komt goed! Over paar minuten ben je over!");
}

module.exports.help = {
    name: "hallo"
}