//ban command
module.exports = {
    name: "ban",
    description: "ban a member",
    usage: "!ban <member_mention>",
    example: "!ban @penguinotux",
    dm_support: false,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        if(pm_ck(msg, "BAN_MEMBERS")) {

            //Member definition
            const gMember1 = msg.mentions.members.first();
            const gMember = new Discord.GuildMember(bot, gMember1, msg.guild);
            debug(gMember);

            //Input Validation
            if (gMember1 === undefined) {
                return msg.channel.send("Invalid member");
            }
            if (!gMember.bannable) {
                return msg.channel.send("Invalid member");
            }

            //ban Member
            gMember.ban(`Moderator: ${msg.member}`);

            //confirm msg
            msg.channel.send(`${gMember} has been baned`)
        }
    }
}