//ping command
module.exports = {
    name: "dunno",
    description: "Ping the boot",
    usage: "!ping",
    example: "!ping",
    aliases: ["idk", "eval", "test"],
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck){
        if (msg.author.id !== '513806934512762882') return msg.channel.send("no");
        argeval = msg.content.slice(command.length + prefix.length);
        try {
            let evaled = eval(argeval);
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            msg.channel.send(new Discord.MessageEmbed().setTitle("Eval successful!").addField("Input :arrow_down:",`\`\`\`${argeval}\`\`\``).addField("Output :arrow_up:",`\`\`\`${evaled}\`\`\``))
          } catch(err) {
            msg.channel.send(new Discord.MessageEmbed().setTitle("Eval unsuccessful!").addField("Input :arrow_down:",`\`\`\`${argeval}\`\`\``).addField("Output :arrow_up:",`\`\`\`${err}\`\`\``))
          }
}}