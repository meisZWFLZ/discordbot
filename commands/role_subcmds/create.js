//role:add subcmd
module.exports = {
    name: "create",
    description: "create a role",
    usage: "!role create wafle",
    dm_support: false,
    execute(subcmd, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, role1, role) {

        //perm check
        if (pm_ck(msg, "MANAGE_ROLES")) {

            //role creation
            msg.guild.roles.create({ data: { name: args[1], permissions: [], color: "RANDOM" } });

            //confirm msg
            msg.channel.send(`I have created the role!`);

        }
    }
}