//player command
module.exports = {
    name: "player",
    description: "wafle",
    usage: "!player <player id>",
    example: "!player 2JU2LQLPL",
    aliases: ["p", "players"],
    dm_support: true,
    async execute(subcmd, command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, cr, profile) {
        var player = profile(msg.author.id);
        if(!player) return msg.channel.send('please specify a player');
        player = (args[0] || player.tag).toUpperCase();
        id = /[0289CGJLPQRUYV]{6,9}|#[0289CGJLPQRUYV]{6,9}/g;
        var idbool = false;
        if (id.test(player)) {
            if (player.startsWith('#')) player = player.slice(1);
            idbool = true;
        } else return msg.channel.send(`The input, "${player}" was an invalid userid`);
        msg.channel.send(`searching for ${player}...`)
            .then(async msg1 => {
                cr(`players/%23${player}`)
                    .then(async (response) => {
                        player = response.data;
                        clan = player.clan;
                        leaguestats = player.leagueStatistics;
                        const { writeFileSync } = require('fs');
                        writeFileSync('./data/abc.json', JSON.stringify(response.data, null, 4));

                        const { createCanvas, loadImage } = require('canvas');
                        const { deckimg } = require('../../functions.js');

                        const dims = {
                            width: 270,
                            height: 330,
                            line: 4
                        };

                        const cards = {};
                        player.currentDeck.map(x => x.name).forEach(x => {
                            Object.defineProperty(cards, x, { value: y = loadImage(`./src/cr/cards/${x}.png`), writable: true })
                        });
                        debug(cards);

                        const cvs = createCanvas(dims.width * 4, dims.height * 2); //create main canvas
                        const ctx = cvs.getContext('2d');

                        const deck1 = await deckimg(player.currentDeck.map(x => x.name), dims, cards);
                        ctx.drawImage(deck1, 0, 0);

                        const deck_img = new Discord.MessageAttachment(cvs.toBuffer('image/png'), 'ur_mom.png');
                        channel = msg.client.guilds.cache.find(g => g.id == "818273182208753714").channels.cache.find(c => c.id == "838236494560624660");
                        channel.send(deck_img).then(msg2 => {

                            playerembed = new Discord.MessageEmbed()
                                .setTitle(player.name)
                                .setColor("RANDOM")
                                .setDescription(
                                    `
${player.trophies} :trophy:

tag: ${player.tag}
arena: ${player.arena.name}
favourite card: ${player.currentFavouriteCard.name}  
`
                                )
                                .addFields({
                                    name: "clan",
                                    value:
                                        `
name: ${clan.name}
tag: ${clan.tag}
`
                                },
                                    {
                                        name: "league stats",
                                        value:
                                            `
current: ${leaguestats.currentSeason.trophies} :trophy:
previous: ${leaguestats.previousSeason.trophies} :trophy:
best: ${leaguestats.bestSeason.trophies} :trophy:
                                `
                                    }
                                )
                                .setURL(`https://link.clashroyale.com/?playerInfo?id=${player.tag}`)
                                .setImage(msg2.attachments.values().next().value.url)
                                .setFooter(`random fun number! ${msg.id}`);
                            msg1.edit('FOUND IT', playerembed);
                        });
                    })
                    .catch((err) => {
                        if (err.status == 404) return msg1.edit(`could not find player`);
                        console.error(err);
                        msg.channel.send("Err encountered");
                    })
            })

    }
}