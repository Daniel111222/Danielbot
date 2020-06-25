client.on("guildMemberRemove", member => {

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