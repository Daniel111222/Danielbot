const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("info")
    .setColor("#0099ff")
    .addFields(
        { name: "Dit is De Officiële support server van Daniël bot", value: "[Klik Hier!](https://discord.gg/2E5fhn3)" },
        // { name: "Dit is De Officiële Youtube Platform", 
        // value: "[Klik Hier!](https://www.youtube.com/channel/UCZkEU_dw4Bj82yVAkYj_fZg)%22) },

    )
    //.setThumbnail("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
    //.setImage("https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
    .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.") //, "https://zeroserenity.com/wp-content/uploads/2019/07/Discord-Logo-Red.png")
    .setTimestamp();

return message.channel.send(botEmbed);
}

    //     var botEmbed = new discord.MessageEmbed()
    //         .setTitle("Uden Roleplay Informatie")
    //         .setColor("#0099ff")
    //         .addField("Dit is De Officiële Burgers Van Deze Discord", Er zijn momenteel ${message.guild.memberCount} leden in de Discord!)
    //         .addField("Dit is De Officiële Youtube Platform", "[Klik Hier!](https://www.youtube.com/channel/UCZkEU_dw4Bj82yVAkYj_fZg)%22)
    //         .addField("Dit is De Officiële InstaGram Platform", "[Klik Hier!](https://www.instagram.com/diegovisser7002/)%22)
    //         .addField("Dit is De Officiële Discord Platform", "[Klik Hier!](https://discord.gg/WmbyWCN)%22)
    //         .addField("Dit is De Officiële Twitch Platform", "[Klik Hier!](https://www.twitch.tv/diegovisser3)%22)
    //         .addField("Dit is De Officiële Bot invite Linkje", "[Klik Hier!](https://discord.com/oauth2/authorize?client_id=725301850206633984&scope=bot&permissions=2146958847)%22)
    //         .addField("Dit is De Officiële Roblox Group Platform", "[Klik Hier!](https://www.roblox.com/groups/6815576/Uden-Roleplay#!/affiliates)%22)

    //         return message.channel.send(botEmbed);
    // }

module.exports.help = {
    name: "info"
}