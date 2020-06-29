const discord = require("discord.js");
const fs = require("fs");
 
module.exports.run = async (bot, message, args) => {
    
     // Kanaal waar reviews inkomen opzoeken.
     let announceChannel = JSON.parse(fs.readFileSync("./setannouncementchannel.json", "utf-8"));

     if(!announceChannel[message.guild.id]) {
     return;
     }
     let announceChannelSend = announceChannel[message.guild.id].announceChannel;

     let announceChannelSenda = message.guild.channels.cache.find(c => c.id === announceChannelSend);

     // als kanaal niet is gevonden geef een bericht.
     if (!announceChannelSend) return message.channel.send("Kanaal niet gevonden");
 
    // Vang het aankondiging op.
    var announcement = args.join(" ");
    // Kijk na als er een suggestion is meegegeven.
    if (!announcement) return message.channel.send("no announcement given. please use !announce <announcement>")
 
    // Maak het embed aan.
    var icon = message.author.displayAvatarURL();
    var announceEmbed = new discord.MessageEmbed()
        .setTitle("🎈 New announcement 🎈")
        .setColor("#ff0000")
        .addField("announcement:", announcement)
        .setFooter("are you sure you want to send this?");
        
        message.delete();
        
    // Maak het embed aan.
    var icon = message.author.displayAvatarURL();
    var announceEmbed2 = new discord.MessageEmbed()
        .setTitle("🎈 New announcement 🎈")
        .setColor("#ff0000")
        .addField("announcement:", announcement)
        .setFooter("bot made by 2Snow#3693", "https://cdn.discordapp.com/attachments/707613063250968599/710504622904836136/2Snow.png");
        
    
    message.channel.send(announceEmbed).then(async msg => {
    var emoji = await announceMessage(msg, message.author, 30, ["👍", "👎"]);

    if (emoji === "👍") {

    // Verzend het bericht en voeg er reacties aan toe.
    announceChannelSenda.send(announceEmbed2)
    message.channel.send(`your announcecement is in ${announceChannelSenda}`)

                

            } else if (emoji === "👎") {

                message.delete();
                message.channel.send("your request has been canceled!");

            }

        })
    
   
 
    
    
    //Emoties aan tekst koppelen 
async function announceMessage(message, author, time, reactions) {
    // we gaan eerst tijd 1000 doen

   time *= 1000;

for (const reaction of reactions){
    await message.react(reaction);
}

const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

return message.awaitReactions(filter, {max: 1, time: time}).then(collected => collected.first().emoji.name);


}
 
}
 
module.exports.help = {
    name: "announce",
    description: "announcements toevoegen."
}