//ping command

function read(string) {
    output = {};
    chars = [...string];
    chars.forEach(char => {
        if (!output[char]) output[char] = 0;
        output[char]++;
    });

    // for (const char in output) {
    //     output[char] = output[char] / chars.length;
    // }

    // console.log(output);
    return output;
}

module.exports = {
    name: "read",
    description: "read the stuffs!",
    usage: "!read",
    example: "!read",
    aliases: null,
    dm_support: false,
    subcmds: null,
    async execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        output = '';
        j = ''
        for (let i = 0; i < 10; i++) {
            messages = Array.from(await (msg.channel.messages.fetch(j ? { limit: 100, after: j } : { limit: 100 }))).map(e => e[1]);
            debug(messages);
            j = messages[messages.length - 1].id;
            messages.map(e => e.content).forEach(e => output = output + e);
        }

        embed = new Discord.MessageEmbed()
            .setTitle("characters")
            .setColor("RANDOM")
            .setDescription(`charrs found: ${output.length}`)
            .addField(
                "stuff",
                JSON.stringify(read(output), null, 4)
            );
        if (embed.fields[0].value < 1024) {
            msg.channel.send(embed);
        } else {
            str = JSON.stringify(read(output), null, 4);
            while (con) {
                str.split
            }
        }
    }
}