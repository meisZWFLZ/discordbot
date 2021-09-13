//role:add subcmd
module.exports = {
    name: "add",
    description: "add role a role to a person",
    usage: "!role add stinky PenguinoTux",
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
                return msg.channel.send("Me no can add this role");
            }
            debug("Valid role input");
            
            //TargetMember definitions
            const guildMember1 = msg.mentions.members.first();
            const guildMember = new Discord.GuildMember(bot, guildMember1, msg.guild);
            debug(guildMember);

            if (guildMember1 === undefined) {
                return msg.channel.send("Invalid member");
            }

            // role add
            guildMember.roles.add(role).catch(err => console.error(err));

            // comfirm msg
            msg.channel.send(`I have added ${role} to ${guildMember}`);
        }
    }
}