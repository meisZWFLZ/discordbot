module.exports = (Discord, bot, event_name, vs, vs1) => {
    try {
        if (vs.id == vs.client.user.id) return;
        const properties = ["channel", "serverDeaf", "serverrMute", "selfDeaf", "selfMute", "selfVideo", "streaming", "sessionId"];
        var dif = properties.find(x => vs[x] != vs1[x]);
        console.log({
            "Voice": "Updated",
            "Update": `${dif}: ${(vs[dif] || {name: null}).name || vs[dif]} > ${(vs1[dif] || {name: null}).name || vs1[dif]}`,
            "member": vs.member.user.username,
            "guild": vs.guild.name,
            "channel": `${(vs.channel || {name: null}).name} > ${(vs1.channel || {name: null}).name}`,
            "ids": {
                "member": vs.id,
                "channel": `${vs.channelId} > ${vs1.channelId}`,
                "guild": vs.guild.id
            },
            "more": {
                updated: vs1,
                intial: vs
            }
        });
    } catch (err) {
        console.error(err);
    }
}