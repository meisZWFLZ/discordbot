//trivia command
module.exports = {
    name: "trvadd",
    description: "triv",
    usage: "!trivia",
    example: "!trivia",
    aliases: ["triv"],
    dm_support: true,
    async execute(command, msg, args1, prefix, data1, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        if (msg.author.id !== '513806934512762882') return msg.channel.send("no");
        
        const { writeFileSync } = require('fs');
        
        args = msg.content.split('"').filter((e, i) => i%2 == 1);
        
        //question write
        var questions = require("../data/triv.json");
        Q = { question: args[0], answers: args.slice(2), id: questions.length, topik: args[1] };
        questions.push(Q);
        writeFileSync('./data/triv.json', JSON.stringify(questions, null, 4));

        const answers = Q.answers;

        debug(answers);

        //embed
        const reactions = ["letterA:832409111059628032", "letterB:832410095018311713", "letterC:832411963359363113", "letterD:832412672959840264"];
        const embedtriv = new Discord.MessageEmbed({ color: "RANDOM", description: answers.map((e, i) => `\n<:${reactions[i]}> - ${e}`).toString(), title: Q.question, footer: {text: `"WaflTrivia": ${msg.author.tag} | ${msg.id}` }})
        msg.channel.send(embedtriv)
    }
}