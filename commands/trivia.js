//trivia command
module.exports = {
    name: "trivia",
    description: "Trivia ",
    usage: "!trivia",
    example: "!trivia",
    aliases: ["triv"],
    dm_support: true,
    async execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        var Questions = require("../data/triv.json");
        const Q = Questions[Math.floor(Math.random() * Questions.length)];
        for (i = 0, answers = [], ans = [0, 1, 2, 3]; i < 4; i++) answers.push(Q.answers[ans.splice(Math.floor(Math.random() * ans.length), 1)]);
        const reactions = ["letterA:832409111059628032", "letterB:832410095018311713", "letterC:832411963359363113", "letterD:832412672959840264"];
        const embedtriv = new Discord.MessageEmbed({ color: "RANDOM", description: answers.map((e, i) => `\n<:${reactions[i]}> - ${e}`).toString(), title: Q.question, footer: {text: `"WaflTrivia": ${msg.author.tag} | ${msg.id}` }})
        const msg1 = await msg.channel.send(embedtriv);
        for (i = 0, delay_inc = 500; i < reactions.length; i++) setTimeout((re) => msg1.react(re), delay_inc * i, `<:${reactions[i]}>`);
        let x = false;
        function reactionEvent(r, u) {
            if (msg1.id !== r.message.id || r.me || msg.author.id !== u.id) return;
            if (r.emoji.identifier == reactions[answers.indexOf(Q.answers[0])]) r.message.channel.send('Correct!');
            else r.message.channel.send(`Incorrect, the correct answer was ${Q.answers[0]}`);
            this.off('messageReactionAdd', reactionEvent);
            x = true;
        }
        bot.on('messageReactionAdd', reactionEvent);
        setTimeout(() => {
            if (x) return;
            bot.off('messageReactionAdd', reactionEvent);
            msg.channel.send(`you didn't answer within the time alotted`);
        }, 15000)
    }
}