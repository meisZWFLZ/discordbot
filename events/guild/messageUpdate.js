module.exports = (Discord, bot, event_name, msg, msg1) => {
    try {
        console.log({
            "Message": "Edited",
            "content": `"${msg.content}" > "${msg1.content}"`,
            "guild": (msg.guild || { name: "DM" }).name,
            "author": msg.author.username,
            "channel": msg.channel.name || `DM: ${msg.author.username}`,
            "timestamp": {
                intial: msg.createdTimestamp,
                updated: msg1.editedTimestamp,
            },
            "ids": {
                "msg": msg.id,
                "author": msg.author.id,
                "channel": msg.channel.id,
                "guild": (msg.guild || { id: null }).id
            },
            "more": {
                updated: msg1,
                intial: msg
            }
        });
    } catch (err) {
        console.error(err);
    }
}