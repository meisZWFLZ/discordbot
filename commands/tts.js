//ping command
module.exports = {
    name: "tts",
    description: "Retreive boot response time",
    usage: "!ping",
    example: "!ping",
    aliases: null,
    dm_support: true,
    subcmds: null,
    async execute(command, msg, _args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        try {
            const args = msg.content.split('"').filter((e, i) => i % 2 == 1);
            debug(args);
            if (!args[0] || !args[1]) return msg.channel.send("get gud lol");
            const nick = msg.guild.me.nickname;
            await msg.guild.me.setNickname(args[0], "tts message, funy lol");
            const msg1 = await msg.channel.send(args[1], { tts: true });
            msg.guild.me.setNickname(null, "tts message, funy lol");
            msg1.delete({ reason: "tts message, funy lol", timeout: args[1].length * 400 });
            msg.delete({ reason: "tts message, funy lol", timeout: args[0].length * 700 });
        } catch (err) {
            msg.channel.send("BOT BREAKER")
            console.error(err)
        }
    }
}