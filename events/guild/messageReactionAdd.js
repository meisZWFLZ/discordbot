module.exports = async (Discord, bot, event_name, re, user) => {
    if (re.message.partial) await re.message.fetch();
    if (re.partial) await re.fetch();
    const msg = re.message;
    console.log({
        "Reaction": "Added",
        "reaciton": re.emoji.name,
        "re_author": user.username,
        "msg_content": msg.content,
        "msg_guild": (msg.guild || { name: "DM" }).name,
        "msg_author": msg.author.username,
        "channel": msg.channel.name || `DM: ${msg.author.username}`,
        "timestamp": msg.createdTimestamp,
        "ids": {
            "emoji": re.emoji.name,
            "msg": msg.id,
            "re_author": user.id,
            "msg_author": msg.author.id,
            "channel": msg.channel.id,
            "msg_guild": (msg.guild || { id: null }).id,
        },
        "more": { user: user, reaction: re },
    });
}