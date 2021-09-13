//dm command
module.exports = {
    name: "dm",
    description: "dm urself",
    usage: "!dm <text>",
    example: "!dm ugly",
    aliases: ["DirectMessage"],
    dm_support: true,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck){
        msg.author.send(msg.content.slice(prefix.length + command.length + 1));
}}