const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

bot.login(process.env.token);

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.lenth <= 0) {
        console.log("Kon de files niet vinden!");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online.`);
    bot.user.setActivity("Testing", { type: "PLAYING" });

});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.split(" ");

    var command = args[0];

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, args);

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('721118805107146762');
    if (!role) return;
    member.roles.add(role);

    var channel = member.guild.channels.cache.get('718763245246349315');
    if (!channel) return;

    channel.send({
        embed: {
            title: `WELKOM`,
            description: `Welkom **${member.user.username}**!\nWe hebben nu **${member.guild.memberCount}** leden!`,
            color: "GREEN",
            timestamp: new Date(),
            thumbnail: {
                url: member.user.avatarURL({ dynamic: true }) ? member.user.avatarURL({ dynamic: true }) : null
            },
            footer: {
                text: "WELKOM"
            }
        }
    });

});

bot.on("guildMemberRemove", member => {

    var channel = member.guild.channels.cache.get('718763245246349315');
    if (!channel) return;

    channel.send({
        embed: {
            title: `TOT ZIENS`,
            description: `Jammer dat je weggaat **${member.user.username}**!\nWe hebben nu nog **${member.guild.memberCount}** leden!`,
            color: "RED",
            timestamp: new Date(),
            thumbnail: {
                url: member.user.avatarURL({ dynamic: true }) ? member.user.avatarURL({ dynamic: true }) : null
            },
            footer: {
                text: "TOT ZIENS"
            }
        }
    });

});

    // async function promptMessage(message, author, time, reactions) {

    //     time *= 1000;

    //     for (const reaction of reactions) {
    //         await message.react(reaction)
    //     }

    //     var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    //     return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

    // }