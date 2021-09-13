//role:delete command
module.exports = {
    name: "delete",
    description: "Delete a role",
    usage: "!role delete pancak",
    dm_support: false,
    execute(subcmd, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, role1, role) {

        //perm check
        if (pm_ck(msg, "MANAGE_ROLES")) {

            //valid input check
            if (role1 === undefined) {
                return msg.channel.send("bad input, get better");
            }

            //bot perm check
            if (!role.editable) {
                return msg.channel.send("Me no can delete this role");
            }

            //role deletion
            role.delete(args[2])

            //confirm msg
            msg.channel.send(`I have deleted the role!`);
        }
    }
}