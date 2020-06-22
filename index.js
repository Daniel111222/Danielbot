const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Testing", { type: "PLAYING" });

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var commands = command.slice(prefix.length);


    if (commands === 'hallo') {
        return message.channel.send("hallo!");
    }

    if (commands === 'info') {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Info bot")
            .setDescription("Een paar vragen:")
            .setColor("#0099ff")
            .addFields(
                { name: "Wanneer is de bot af?", value: "De bot is binnnen twee weken af." },
                { name: "Wat kan de bot allemaal?", value: "Ik streef ernaar met hulp van de helpers, dat de bot alles kan." },
                { name: "Hoe maak ik een ticket aan?", value: "Door in #cmds !ticket te schrijven." }
            )
            .addField("Bot naam", client.user.username);

        return message.channel.send(botEmbed);
    }

    if (commands === 'serverinfo') {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("serverinfo")
            .setDescription("Info")
            .setColor("#0099ff")
            .addFields(
                { name: "Bot naam", value: client.user.username },
                { name: "Je bent de server gejoined op", value: message.member.joinedAt },
                { name: "Totaal members", value: message.guild.memberCount },
                { name: "Aantal servers", value: bot.guilds.cache.size }
            )
            .addField("Bot naam", client.user.username);

        return message.channel.send(botEmbed);
    }

    if (commands === 'kick') {

        // !kick @spelerNaam redenen hier

        var args = message.content.slice(prefix.length).split(/ +/);

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("geen perms");

        if (!args[1]) return message.reply("geen gebruiker opgegeven");

        if (!args[2]) return message.reply("geen redenen opgegeven");

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        var reason = args.slice(2).join(" ");

        if (!kickUser) return message.reply("gebruiker niet gevonden");

        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Gelieve binnen 30 sec te reageren")
            .setDescription(`Wil je ${kickUser} kicken?`);

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName)
            .setTimestamp()
            .setDescription(`**Gekickt: ** ${kickUser} (${kickUser.id})
            **Gekickt door:** ${message.author}
            **Redenen: ** ${reason}`);

        message.channel.send(embedPrompt).then(async msg => {

            // var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // if (emoji === "✅") {

            //     msg.delete();

            //     kickUser.kick(reason).catch(err => {
            //         if (err) return message.reply("Er is iets foutgelopen");
            //     });

            //     message.channel.send(embed);

            // }else if(emoji === "❌"){

            //     msg.delete();

            //     message.reply("Kick geannuleerd").then(m => m.delete(5000));

            // }

            message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(collected => {

                if (collected.first().content.toLowerCase() == 'ja') {

                    kickUser.kick(reason).catch(err => {
                        if (err) return message.reply("Er is iets foutgelopen");
                    });

                } else {
                    message.reply("Geannuleerd");
                }

            });

        })

    }



    if (commands === 'ban') {

        // !ban @spelerNaam redenen hier

        var args = message.content.slice(prefix.length).split(/ +/);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("geen perms");
        if (!args[1]) return message.reply("geen gebruiker opgegeven");
        if (!args[2]) return message.reply("geen redenen opgegeven");

        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        var reason = args.slice(2).join(" ");

        if (!banUser) return message.reply("gebruiker niet gevonden");
        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Gelieve binnen 30 sec te reageren")
            .setDescription(`Wil je ${banUser} bannen?`);

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName)
            .setTimestamp()
            .setDescription(`**verbannen: ** ${banUser} (${banUser.id})
            **Geband door:** ${message.author}
            **Redenen: ** ${reason}`);

        message.channel.send(embedPrompt).then(async msg => {

            // var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // if (emoji === "✅") {

            //     msg.delete();

            //     banUser.ban(reason).catch(err => {
            //         if (err) return message.reply("Er is iets foutgelopen");
            //     });

            //     message.channel.send(embed);

            // }else if(emoji === "❌"){

            //     msg.delete();

            //     message.reply("ban geannuleerd").then(m => m.delete(5000));

            // }

            message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000 }).then(collected => {
                if (collected.first().content.toLowerCase() == 'ja') {
                    banUser.ban(reason).catch(err => {
                        if (err) return message.reply("Er is iets foutgelopen");
                    });
                } else {
                    message.reply("Geannuleerd");
                }
            });
        })
    }

    if (commands === 'ticket') {

        const categoryId = "723177277189259344";
    
        var userName = message.author.username;

        var ticketExcists = false;
        message.guild.channels.cache.forEach(channel => {
            if (channel.name == "ticket-" + userName.toLowerCase()) {
                ticketExcists = true;
                message.channel.send("Je hebt al een ticket openstaan.");
                return;
            }
        });
        if (ticketExcists) return;
        message.guild.channels.create("ticket-" + userName.toLowerCase(), { type: 'text' }).then(
            (createdChannel) => {
                createdChannel.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });
                createdChannel.updateOverwrite(message.author.id, {
                    CREATE_INSTANT_INVITE: false,
                    SEND_MESSAGES: true,
                    ATTACH_FILES: true,
                    CONNECT: true,
                    READ_MESSAGE_HISTORY: true,
                    VIEW_CHANNEL: true,
                    ADD_REACTIONS: true
                });
                createdChannel.updateOverwrite(message.guild.roles.cache.find(y => y.name === "support team"), {     
                    SEND_MESSAGES: true,                  
                    ATTACH_FILES: true,
                    CONNECT: true,
                    READ_MESSAGE_HISTORY: true,
                    VIEW_CHANNEL: true,
                    ADD_REACTIONS: true,
                    MANAGE_CHANNELS: true
                });
                createdChannel.send({
                    embed: {
                        title: `Hallo ${message.author.username}`,
                        description: "We helpen je zo snel mogelijk!",
                        color: "BLUE"
                    }
                });
                message.channel.send({
                    embed: {
                        title: `Hallo ${message.author.username}!`,
                        description: `Je ticket is aangemaakt! \n\n Ticket: ${createdChannel}`,
                        color: "GREEN"
                    }
                });
                setTimeout(function(){ 
                    message.guild.channels.cache.find(c => c.name == `ticket-${userName.toLowerCase()}`).setParent(categoryId)
                    }, 1500);
            }
        ).catch(err => {
            message.channel.send('\`\`\`🔴 An error has occurred.\`\`\`');
        });
    }

    if (commands === 'close') {

        const categoryID = "723177277189259344";
        
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Jij kan deze ticket niet sluiten!");
        
            if (message.channel.parentID == categoryID) {
                message.channel.delete();
        
                var closeTicketEmbed = new discord.MessageEmbed()
                    .setTitle("Ticket | " + message.channel.name)
                    .setDescription("De ticket is afgesloten, bedankt voor je hulp!")
                    .setColor("#8eff4d")
                    .setTimestamp();
        
                var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
                if (!ticketChannel) return message.reply(`Het kanaal ${ticketChannel} is niet gevonden!`);
        
                ticketChannel.send(closeTicketEmbed);
        
            } else {
        
                message.reply("Je kunt deze command niet buiten een ticket gebruiken!");
        
            }
    }
    
});

   
    

// async function promptMessage(message, author, time, reactions) {

//     time *= 1000;

//     for (const reaction of reactions) {
//         await message.react(reaction)
//     }

//     var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

//     return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

// }

client.on("guildMemberAdd", member => {
    var role = member.guild.roles.cache.get('721118805107146762');

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('718765797048320041');

    if (!channel) return;

    channel.send(`welkom bij de server ${member}`);

});