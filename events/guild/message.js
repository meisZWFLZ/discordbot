module.exports = (Discord, bot, event_name, msg) => {
    const { cmdhs, debug, pm_ck, cmdh } = require("../../functions.js");
    const fs = require('fs');

    const mentions = msg.mentions;
    
    if (msg.content == "destroy" && msg.author.id == "513806934512762882") return bot.destroy();

    //data
    var data = JSON.parse(fs.readFileSync('./data/data.json'));
    for (var i = 0, gld, guilds = []; i < data.length; i++) {
        gld = data[i];
        guilds[gld.id] = gld;
    }

    //message log
    try {
        debug({
            "Message": "Recieved",
            "content": msg.content,
            "author": (msg.author || { tag: null }).tag,
            "channel": msg.channel.name || `DM: ${msg.channel.recipient.tag}`,
            "guild": (msg.guild || { name: "DM" }).name,
            "timestamp": msg.createdTimestamp,
            "ids": {
                "msg": msg.id,
                "author": msg.author.id,
                "channel": msg.channel.id,
                "guild": (msg.guild || { id: null }).id
            },
            "data": data,
            "more": msg
        });
    } catch (err) {
        console.error(err)
    }
    //user check
    if (msg.author.id == msg.client.user.id) return;

    var guild = null;

    //new guild check
    if (msg.channel.type != "dm") {
        if (!guilds[msg.guild.id]) {

            //adds guild to guilds
            data.push(JSON.parse(
                `
            {
                "id": "${msg.guild.id}",
                "prefix": "!"
            }
            `
            ));
            debug({ "data": data });

            //writes data to JSON
            fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 4));
        }

        //re-reads JSON file
        data = JSON.parse(fs.readFileSync('./data/data.json'));
        for (var i = 0, gld; i < data.length; i++) {
            gld = data[i];
            guilds[gld.id] = gld;
        }

        //guild definition
        guild = guilds[msg.guild.id];
    }

    //prefix definition
    var prefix = (guild || { prefix: '' })["prefix"];

    //checks for prefix
    if (!msg.content.startsWith("<@!824688812247482448>")) {
        if (!msg.content.startsWith(prefix)) return;
    } else prefix = "<@!824688812247482448>";


    //finds args + command
    const args = msg.content.slice(prefix.length).split(/\s+/).filter(x => !!x);
    var command = args.shift().toLowerCase();
    if (!command) return;

    debug({ "args": [command, args] });
    cmdhs("./commands/", [command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, mentions]);
}