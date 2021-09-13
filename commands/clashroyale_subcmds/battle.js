//battle command
module.exports = {
    name: "battle",
    description: "wafle",
    usage: "!cr battle <player id> <battle id>",
    example: "!cr battle 2JU2LQLPL 2",
    aliases: ["b", "battles"],
    dm_support: true,
    async execute(subcmd, command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, cr, profile) {
        var player = args[0];
        if (args.length < 2) {
            player = profile(msg.author.id).tag;
            args[1] = args[0];
        };
        id = /[0289CGJLPQRUYV]{6,9}|#[0289CGJLPQRUYV]{6,9}/g;
        var idbool = false;
        if (id.test(player)) {
            if (player.startsWith('#')) player = player.slice(1)
            idbool = true;
        } else return msg.channel.send(`The input, "${player}" was invalid as a player name must be longer than 1 character and shorter than 16 characters`);
        msg.channel.send(`searching for ur ${player}'s ${args[1]}th battle`)
            .then(async msg1 => {
                cr(`players/%23${player}/battlelog`)
                    .then(async (response) => {
                        battle = debug(response.data)[args[1] + 1]
                        if(!battle) return msg1.edit(`The battle (${args[1]}) chosen was unable to be retrived`)
                        if (battle.type !== "2v2") {
                            const { createCanvas, loadImage } = require('canvas');
                            const { writeFileSync } = require('fs');
                            const { deckimg } = require('../../functions.js');

                            //player definitions
                            const player = battle.team[0]; //blue
                            const opponent = battle.opponent[0]; //red

                            //writes response data for utility (not needed)
                            writeFileSync('./data/abc.json', JSON.stringify(response.data, null, 4));

                            //cards image
                            //dimesion defintion
                            const dims = {
                                width: 270,
                                height: 330,
                                line: 4,
                                dck_spc: 1
                            };

                            //image grabber
                            cards = {};
                            player.cards.map(x => x.name).concat(opponent.cards.map(x => x.name)).forEach(x => {
                                if (!Object.keys(cards).includes(x)) Object.defineProperty(cards, x, { value: y = loadImage(`./src/cr/cards/${x}.png`), writable: true })
                            });

                            //canvas definitons
                            const cvs = createCanvas(dims.width * ((dims.line * 2) + dims.dck_spc), dims.height * (player.cards.length / dims.line) + 128); //create main canvas
                            const ctx = cvs.getContext('2d');

                            const battleimg = await loadImage('./src/cr/icons/battleicon.png');
                            const crown = {
                                "blue": await loadImage('./src/cr/icons/crown-blue.png'),
                                "red": await loadImage('./src/cr/icons/crown-red.png')
                            }
                            const deck1 = await deckimg(player.cards.map(x => x.name), dims, cards);
                            const deck2 = await deckimg(opponent.cards.map(x => x.name), dims, cards);

                            ctx.drawImage(deck1, 0, 0);
                            ctx.drawImage(deck2, dims.width * (dims.line + dims.dck_spc), 0);
                            ctx.drawImage(battleimg, deck1.width + (((dims.dck_spc * dims.width) - battleimg.width) / 2), (deck1.height - battleimg.height) / 2);

                            for (i = 0; i !== player.crowns; i++) {
                                ctx.drawImage(crown.blue, i * crown.blue.width, deck1.height);
                            }
                            for (i = 0; i !== opponent.crowns; i++) {
                                ctx.drawImage(crown.red, cvs.width - ((i + 1) * crown.red.width), deck1.height);
                            }

                            //file definition
                            const deck_img = new Discord.MessageAttachment(cvs.toBuffer('image/png'), 'ur_mom.png');
                            channel = msg.client.guilds.cache.find(g => g.id == "818273182208753714").channels.cache.find(c => c.id == "838236494560624660");
                            channel.send(deck_img).then(msg2 => {
                                playerembed = new Discord.MessageEmbed()
                                    .setTitle(`${player.name} vs. ${opponent.name}`)
                                    .setAuthor(battle.type)
                                    .setColor("RED")
                                    .addFields(
                                        {
                                            name: player.name,
                                            value:
                                                `
tag: ${player.tag}
trophies: ${player.startingTrophies} :trophy:
clan: ${player.clan.name}
`
                                        },
                                        {
                                            name: opponent.name,
                                            value:
                                                `
tag: ${opponent.tag}
trophies: ${opponent.startingTrophies} :trophy:
clan: ${opponent.clan.name}
`
                                        }
                                    )
                                    .setImage(msg2.attachments.values().next().value.url)
                                    .setFooter(`random fun number! ${msg.id}`);
                                msg1.edit('POOOOOOG, FOUND UR MOM', playerembed)
                            });
                        } else {

                        }
                    })
                    .catch((err) => {
                        if (err.status == 404) return msg1.edit(`could not find player`);
                        console.error(err);
                        msg.channel.send("Err encountered");
                    })
            })

    }
}