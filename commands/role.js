const { MessageMentions } = require("discord.js");

//role command
module.exports = {
    name: "role",
    description: "Manage roles",
    usage: "!role <subcmd: create | delete | edit | add | remove> <role: mention | name> [member mention | editcmd: <name | color | hoist | mentionable | permissions>] [reason | name | hexstring | Discord_Color_Resolvable | permission] [reason]",
    aliases: ["r"],
    example:
        `!role create stinky,
         !role add @penguinotux`,
    dm_support: false,
    subcmds: ["add", "create", "delete", "edit", "remove"],
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, mentions) {
        debug(mentions);
        var rMentions = mentions.roles;
        debug(rMentions);

        //role command confirm
        debug("role command started");

        //defines subcmd
        //prevents undefined crash
        if (args[0] === undefined) {
            return msg.channel.send("please specify a sub command");
        }
        subcmd = args[0].toLowerCase();
        debug("subcmd: " + subcmd);

        //role definition
        const role1 = rMentions.first() || msg.guild.roles.cache.find(r => r.name === args[1] || r.id === args[1]);
        
        role = new Discord.Role(bot, role1, msg.guild);
        debug(role);

        //cmd handler
        cmdhs("./commands/role_subcmds/", [subcmd, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, role1, role]);
    }
}