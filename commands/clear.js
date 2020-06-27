const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
  
    // if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Jij kunt deze actie niet uitvoeren");
  
    var noArgsEmbed = new discord.RichEmbed()
        .setTitle("Geen geldig aantal gevonden")
        .setDescription("Geef een aantal tussen de 1-99")
        .addField("Usage:", "dh/clear {aantal}")
        .setTimestamp();
    
    var noAmountEmbed = new discord.RichEmbed()
        .setTitle("Geen getal gevonden")
        .setDescription("Geef een getal tussen de 1-99")
        .setTimestamp();
  
    var deleteEmbed = new discord.RichEmbed()
        .setTitle("Gelukt!")
        .setDescription(`Ik heb met succes ${parseInt(args[0])} berichten verwijderd!`)
        .setTimestamp();
  
    if(!args[0]|| args[0] < 1 || args[0] >= 100) return message.channel.send(noArgsEmbed);
  
    if(Number.isInteger(parseInt(args[0]))){
      
        var amount = parseInt(args[0]) + 1;
      
        message.channel.bulkDelete(amount).then(() => { 
        
          message.channel.send(deleteEmbed).then(msg => msg.delete(3000));
        
        });

      
    } else {
        return message.channel.send(noArgsEmbed);
    }
  
}

module.exports.help = {
   name: "clear",
}