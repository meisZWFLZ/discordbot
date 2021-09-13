module.exports = (Discord, bot, event_name, msg) => {
    try {
        console.log({
            "Message": "Deleted",
            "content": msg.content,
            "guild": (msg.guild || { name: "DM" }).name,
            "author": msg.author.username,
            "channel": msg.channel.name || `DM: ${msg.author.username}`,
            "timestamp": msg.createdTimestamp,
            "ids": {
                "msg": msg.id,
                "author": msg.author.id,
                "channel": msg.channel.id,
                "guild": (msg.guild || { id: null }).id
            },
            "more": msg
        });
    } catch (err) {
        console.error(err);
    }
}