//ping command
module.exports = {
    name: "parli",
    description: "parli, man",
    usage: "!parli <>",
    example: "!ping",
    aliases: null,
    dm_support: true,
    subcmds: null,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        try {
            if (!/((PI|AM|RC|PD|PQ|LT|IQ|DA|QP|RE|AD) ?){5}/g.test(msg.content)) return msg.channel.send('invalid card');
            const card = msg.content.match(/PI|AM|RC|PD|PQ|LT|IQ|DA|QP|RE|AD/g);
            const motions = require('../src/parli.json');
            card.sort((a, b) => 2 * ((c = motions.map(x => x.symbol)).indexOf(a) > c.indexOf(b)) - 1);
            if (card.find((e, i, a) => a.slice(i + 1).includes(e))) return msg.channel.send('invalid card: card must not contain repeating motions')
            if (motions.slice(4).map(x => x.symbol).find((e, i, a) => card.slice(0, 2).includes(e)) && motions.slice(0, 4).map(x => x.symbol).find((e, i, a) => card.slice(2).includes(e))) return msg.channel.send('invalid card order');
            msg.channel.send(card.map(e => motions.find(x => x.symbol == e).name.toString()));

            card1 = motions.slice(6).map(x => x.symbol).reverse();
            card1.forEach((e, i, a) => {
                if(card.includes(e)){
                    debug('--')
                    debug(e);
                    card1[i] = debug(motions.slice(0, 6).map(x => x.symbol).reverse().find(x => x != e && !card.includes(x) && !card1.includes(x)));
                }
            });

            card1 = card.map((e, i) => card1[i] || e);

            msg.channel.send(card1.reverse().map(e => motions.find(x => x.symbol == e).name.toString()));

        } catch (err) {
            console.error(err.stack);
        }
    }
}