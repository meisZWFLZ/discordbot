//kick command
module.exports = {
    name: "kick",
    description: "kick a member from guild",
    usage: "!kick <member_mention",
    example: "!kick @penguinotux",
    dm_support: false,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        if(pm_ck(msg, "KICK_MEMBERS")) {

            //Member definition
            const gMember1 = msg.mentions.members.first();
            const gMember = message.guild.member(gMember1);
            debug(gMember);
            
            //Input Validation
            if (!gMember1) {
                return msg.channel.send("Invalid member");
            }
            if (!gMember.kickable) {
                return msg.channel.send("Invalid member");
            }

            //Kick Member
            gMember.kick(`Moderator: ${msg.member}`);

            //confirm msg
            msg.channel.send(`${gMember} has been kicked`)
        }
    }
}