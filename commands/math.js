//ping command
module.exports = {
    name: "math",
    description: "preform the maths",
    usage: "!math <math expression>",
    example: "!math 8*2",
    aliases: ["m"],
    dm_support: true,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        const exp = msg.content.slice(prefix.length + command.length + 1);
        if (exp === "9+10") return msg.channel.send("21");
            const math = require('mathjs');
            var ans = null
            try {
                ans = math.compile(exp).evaluate();
            } catch (error) {
                return msg.channel.send(`The expression "${exp}" is invalid`)
            }
            msg.channel.send(`${exp}  =  ${ans}`);      
    }
}