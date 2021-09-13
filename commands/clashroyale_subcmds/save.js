const { readFileSync, writeFileSync } = require('fs');
const { deckimg } = require('../../functions.js');
const { loadImage } = require('canvas');

//ping command
module.exports = {
    name: "save",
    description: "Save a player id as a profile",
    usage: "!cr save <player id>",
    example: "!cr save 2JU2LQLPL",
    aliases: ["s"],
    dm_support: true,
    subcmds: null,
    async execute(subcmd, command, msg, args, prefix, data1, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, cr, _profile, dims) {
        //player definition
        var player = args[0].toUpperCase();

        //valid player id check
        id = /[0289CGJLPQRUYV]{6,9}|#[0289CGJLPQRUYV]{6,9}/g;
        if (!id.test(player)) return msg.channel.send(`${player} was an invalid id`);

        //valid player check      
        const msg1 = await msg.channel.send(`Validating ${player}`);

        //validation preparation
        if (player.startsWith('#')) player = player.slice(1);

        //player api request
        await cr(`players/%23${player}`)
            .then(x => response = x)
            .catch(x => response = x);

        //final validation
        if (response.status != 200) return msg1.edit(`${player} is an invalid player id`);
        debug('valid');

        //validate with user
        //display player
        //util defs
        player = response.data;
        clan = player.clan;
        leaguestats = player.leagueStatistics;

        //card definition
        const cards = {};
        player.currentDeck.map(x => x.name).forEach(x => {
            Object.defineProperty(cards, x, { value: y = loadImage(`./src/cr/cards/${x}.png`), writable: true })
        });

        //image creation
        const channel = msg.client.guilds.cache.find(g => g.id == "818273182208753714").channels.cache.find(c => c.id == "838236494560624660");
        const deck_img = new Discord.MessageAttachment((await deckimg(player.currentDeck.map(x => x.name), dims, cards)).toBuffer('image/png'), 'ur_mom.png');
        const msg2 = await channel.send(deck_img);

        //embed
        playerembed = new Discord.MessageEmbed()
            .setTitle(player.name)
            .setColor("RANDOM")
            .setAuthor(player.tag)
            .setDescription(`${player.trophies} :trophy:\ntag: ${player.tag}\narena: ${player.arena.name}\nfavorite card: ${player.currentFavouriteCard.name}\n`)
            .addFields({ name: "clan", inline: true, value: `${clan.tag}\n${clan.name}` },
                {
                    name: "league stats", inline: true, value:
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
        msg1.edit(playerembed);

        //prompt user
        const msg3 = await msg.channel.send('Is this you? (yes/no)');

        //define data to write
        const profile = {
            tag: player.tag,
            clan: player.clan,
            name: player.name,
        }

        //event deleted?
        x = false;

        //define event function
        function msgEvent(m) {
            try {
                //check for relevancy
                if (m.author.id !== msg.author.id || m.channel.id !== msg.channel.id) return;

                //delete event
                this.off('message', msgEvent);

                //set delete bool for timeout
                x = true;

                //check for y/n
                if (m.content === 'y' || m.content === 'yes') {
                    //read data
                    var data = JSON.parse(readFileSync('./data/cr_players.json'));

                    //edit data copy
                    data[msg.author.id] = profile;

                    //write data
                    writeFileSync('./data/cr_players.json', JSON.stringify(data, null, 4));

                    //tell user
                    msg3.edit(`saved profile :)`);
                } else msg3.edit(`didn't save profile :(`);
            } catch(err) {
                console.error(err);
            }
        }

        //await user response
        bot.on('message', msgEvent);

        //give user 30 sec to respond
        setTimeout(() => {
            //check for event existence
            if (x) return;

            //delete event
            bot.off('message', msgEvent);

            //tell user
            msg3.edit(`didn't recieve verification, profile wasn't saved`);
        }, 30000)
    }
}