const discord = require("discord.js");  

module.exports.run = async(bot, message, args) => {

    //!suggestie {args[0]}
  
    var suggestion = args.slice(0).join(" ");
  
    // var suggestEmbed = new discord.MessageEmbed()
    //   .setTitle("Nieuw Idee")
    //   .setColor("#249643")
    //   .addField("Door", `${message.author.username}`)
    //   .addField("Suggestie", suggestion)
    //   .setTimestamp();

      var suggestEmbed = new discord.MessageEmbed()
      .setColor("#ff0000")
      .setFooter("Gemaakt door @Daniël#2939 en veel dank aan de helpers.")
      .setTimestamp()
      .setDescription(suggestion)

    var channel = message.member.guild.channels.cache.get("718765875104055377")

    message.channel.send(embedPrompt).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
  
}
  
  module.exports.help = {
      name: "suggestie"
  }