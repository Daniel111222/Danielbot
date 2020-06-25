const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


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
            createdChannel.setParent(categoryId).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        READ_MESSAGE_HISTORY: true,
                        VIEW_CHANNEL: true,
                        ADD_REACTIONS: true
                    });
                    settedParent.updateOverwrite(message.guild.roles.cache.find(y => y.name === "support team"), {
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        READ_MESSAGE_HISTORY: true,
                        VIEW_CHANNEL: true,
                        ADD_REACTIONS: true,
                        MANAGE_CHANNELS: true
                    });
                    settedParent.send({
                        embed: {
                            title: `Hallo ${message.author.username}`,
                            description: "We helpen je zo snel mogelijk!",
                            color: "BLUE"
                        }
                    });
                    message.channel.send({
                        embed: {
                            title: `Hallo ${message.author.username}!`,
                            description: `Je ticket is aangemaakt! \n\n Ticket: ${settedParent}`,
                            color: "GREEN"
                        }
                    });
                });
        }).catch(err => {
            message.reply("Er is iets foutgelopen");
        });
}

module.exports.help = {
    name: "new"
}