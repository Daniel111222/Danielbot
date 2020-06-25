client.on("guildMemberAdd", member => {

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