//flip command
module.exports = {
    name: "flip",
    description: "flip coin",
    usage: "!flip",
    example: "!flip",
    aliases: ["f"],
    dm_support: true,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck){
        if(Math.random() < 0.5) {
            msg.channel.send('<:head:834584112081666108>');
        } else msg.channel.send('<:tail:834582803420545025>');
}}