const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**OOPS!** you cannot change the prefix!");
  
  let announceChannel = JSON.parse(fs.readFileSync("./setannouncementchannel.json", "utf8" ));
  
  announceChannel[message.guild.id] = {
      announceChannel: message.channel.id
  };
  
  fs.writeFile("./setannouncementchannel.json", JSON.stringify(announceChannel), (err) => {
      if (err) console.log(err)
  });
  
  let sEmbed = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTitle("announcechannem set!")
  .setDescription(`successfully channeled to receive announcements`);
  
  message.channel.send(sEmbed);
  

}

module.exports.help = {
    name: "setannouncechannel"
}