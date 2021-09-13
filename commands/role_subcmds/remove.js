//role:remove subcmd
module.exports = {
    name: "remove",
    description: "remove role a role from a member",
    usage: "!role remove baldandy meisZWFLZ",
    dm_support: false,
    execute(subcmd, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, role1, role) {

        //perm check
        if (pm_ck(msg, "MANAGE_ROLES")) {

            //valid input check
            if (role1 === undefined) {
                return msg.channel.send("Invalid role paramater");
            }

            //bot perm check
            if (!role.editable) {
                return msg.channel.send("Me no can remove this role");
            }
            debug("Valid role input");
            
            //TargetMember definitions
            const guildMember1 = msg.mentions.members.first();
            const guildMember = new Discord.GuildMember(bot, guildMember1, msg.guild);
            debug(guildMember);

            if (guildMember1 === undefined) {
                return msg.channel.send("Invalid member");
            }

            // role remove
            guildMember.roles.remove(role).catch(console.debug);

            // comfirm msg
            msg.channel.send(`I have removeed ${role} from ${guildMember}`);
        }
    }
}