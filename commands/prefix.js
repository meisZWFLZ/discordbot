//prefix command
module.exports = {
    name: 'prefix',
    description: "Changes prefix",
    usage: "!prefix <new_prefix>",
    example: "!prefix wflz",
    aliases: ["pre"],
    dm_support: false,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        if (args.length === 0) {
            return msg.channel.send("The prefix is " + prefix);
        } else if (pm_ck(msg, "ADMINISTRATOR")) {
            if (args.length === 1) {

                //prefix set
                prefix = args[0];
                msg.channel.send("Prefix set: " + args[0]);
                debug("prefix: " + prefix);

                //prefix save
                const { writeFile } = require(`fs`);
                guild["prefix"] = prefix;
                debug(prefix);
                data[Object.keys(guilds).indexOf(msg.guild.id)] = guild;
                debug(data);
                writeFile(
                    './data/data.json',
                    JSON.stringify(data, null, 4),
                    err => { if (err) console.error(err); }
                );
            } else {
                msg.channel.send("That cannot be a prefix!");
                debug("prefix failed: bad input");
            }
        }
    }
}