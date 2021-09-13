//ping command
module.exports = {
    name: "help",
    description: "get help noob",
    usage: "!help <command>",
    example: "!help role",
    aliases: ["info", "noob"],
    dm_support: true,
    execute(command1, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        try {
            if (args[0]) var cmd = bot.commands.get(args[0].toLowerCase()) || bot.commands.find(a => a.aliases && a.aliases.includes(args[0].toLowerCase()));
            if (!cmd) {
                const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle("GET HELP NOOB")
                    .setDescription("YOU NEED SOME MILK")
                    .addFields(
                        { name: "1.", value: "acquire keyboard" },
                        { name: "2.", value: "find keyboard cable connector thing ||*Hint: it should be connect to ur keyboard*||" },
                        { name: "3.", value: "learn to typE" },
                        { name: "4.", value: "download chrome: https://www.google.com/chrome/" },
                        { name: "5.", value: "get brain" },
                        { name: "6.", value: "do something, i dunno: https://discord.com/download" },
                        { name: "7.", value: "press the download for the windows baton" },
                        { name: "8.", value: "gimme ur discod login paswod" },
                        { name: "9.", value: "type in the text box" },
                        { name: "10.", value: `${prefix}help` },
                        { name: "11.", value: "enter" }
                    )
                    .setFooter("get gud lol");
                msg.channel.send(embed);
                return;
            }
            debug(cmd)

            if (args[1] && cmd.subcmds.includes(args[1].toLowerCase())) {
                const subcmd = require(`./${cmd.name}_subcmds/${args[1].toLowerCase()}.js`)
                cmd = subcmd;
            }

            const fields1 = [
                { name: 'usage:', value: `${'`'}${cmd.usage}${'`'}` || "not found" },
                { name: 'example:', value: cmd.example },
                { name: 'aliases:', value: cmd.aliases },
                { name: 'sub-commands:', value: cmd.subcmds },
                { name: 'DM support?:', value: cmd.dm_support }
            ]
            const fields = fields1.filter(e => new Boolean(e.value));
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(cmd.name)
                .setDescription(cmd.description || "There's no description for this command")
                .addFields(fields)
                .setFooter(`random fun number! ${msg.id}`);
            msg.channel.send(embed);
        } catch(err) {
            console.error(err);
        }
    }
}
