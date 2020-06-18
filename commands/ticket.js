const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "723177277189259344";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaan = false;

    message.guild.channels.cahche.forEach(channel => {
        
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaan = true;

            message.reply("Je hebt al een ticket aangemaakt");

            return;
        }

    });

    if(ticketBestaat) return;

    var embed = new discord.MessageEmbed
        .setTitle("Hoi " + message.author.username)
        .setFooter("Support kanaal wordt aangemaakt");
    
    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message,guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNELS: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: false,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true                        
                    });                              

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hoi ${message.author.username}`)
                        .setDescription("Zet hier je bericht / vraag");

                    settedParent.send(embedParent);
                       
                }
            ).catch(err => {
                message.channel.send("Er is iets misgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
    });

}


// var userName = message.author.username;

//     var ticketExcists = false;
//     message.guild.channels.cache.forEach(channel => {
//         if (channel.name == "ticket-" + userName.toLowerCase()) {
//             ticketExcists = true;
//             message.channel.send("You already have an open ticket.");
//             return;
//         }
//     });

//     if (ticketExcists) return;

//     message.guild.channels.create("ticket-" + userName.toLowerCase(), { type: 'text' }).then(
//         (createdChannel) => {
//             createdChannel.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
//                 SEND_MESSAGES: false,
//                 VIEW_CHANNEL: false
//             });

//             createdChannel.updateOverwrite(message.author.id, {
//                 CREATE_INSTANT_INVITE: false,
//                 SEND_MESSAGES: true,
//                 ATTACH_FILES: true,
//                 CONNECT: true,
//                 READ_MESSAGE_HISTORY: true,
//                 VIEW_CHANNEL: false,
//                 ADD_REACTIONS: true
//             });

//             createdChannel.send({
//                 embed: {
//                     title: `Hello ${message.author.username}`,
//                     description: "Staff is on it's way, wait patiently.",
//                     color: "BLUE"
//                 }
//             });

//             message.channel.send({
//                 embed: {
//                     title: `Hello ${message.author.username}!`,
//                     description: `Your ticket has been created! \n\n Ticket: ${createdChannel}`,
//                     color: "GREEN"
//                 }
//             });

//         }
//     ).catch(err => {
//         message.channel.send('\`\`\`🔴 An error has occurred.\`\`\`');
//     });

// }

    module.exports.help = {
    name: "ticket"
}       