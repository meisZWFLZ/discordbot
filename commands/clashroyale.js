//clash_royale command
module.exports = {
    name: "clashroyale",
    description: "Access the Clash Royale API",
    usage: "!clashroyale <don't know yet>",
    example: "!clash royale awesome sauce?",
    aliases: ["cr", "clash", "clash_royale", "clashroyal", "clash_royal"],
    dm_support: true,
    subcmds: ['battle', 'card', 'clan', 'player'],
    async execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        try {
            var subcmd = args.shift().toLowerCase();
            if (subcmd === "" && args[0]) subcmd = args.shift().toLowerCase();
            if (subcmd === "") return;
            const { cr } = require('../functions.js');

            const dims = {
                width: 270,
                height: 330,
                line: 4,
                dck_spc: 1
            };

            function profile(discord_tag, profile) {
                const { readFileSync } = require('fs');
                data = JSON.parse(readFileSync('./data/cr_players.json'))[discord_tag];
                console.log(data);
                return data;
            }
            cmdhs("./commands/clashroyale_subcmds/", [subcmd, command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, cr, profile, dims]);
        } catch (err) {
            msg.channel.send('bad');
            console.error(err)
        }
    }
}