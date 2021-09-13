//ping command
module.exports = {
    name: "ping",
    description: "Retreive boot response time",
    usage: "!ping",
    example: "!ping",
    aliases: null,
    dm_support: true,
    subcmds: null,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck){
        msg.channel.send(`***Pong! ${(msg.guild || {shard: {ping: "?"}}).shard.ping}ms***`);
}}