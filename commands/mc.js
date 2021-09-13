//mc command
module.exports = {
    name: "mc",
    description: "hypixel skyblock bazaar and stuff",
    usage: "!mc <i_duno,_me_stealing_code_from_friend_hehe>",
    example: "!mc help",
    dm_support: true,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck){
const subcmd = args.shift().toLowerCase();
cmdhs("./commands/mc_subcmds/", [subcmd, msg, args]);
}}
