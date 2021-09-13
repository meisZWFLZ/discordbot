//cards command
module.exports = {
    name: "card",
    description: "Get yourself some cards",
    usage: "!cr card <name | id>",
    example: "!cr card Knight",
    aliases: ["cards"],
    dm_support: true,
    execute(subcmd, command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, cr) {
        cr('cards')
            .then((response) => {
                const fs = require('fs');
                fs.writeFileSync('./data/abc.json', JSON.stringify(response.data, null, 4));
                // response.data.items.forEach(async card => {
                //     const { writeFileSync } = require('fs');
                //     const { createCanvas, loadImage } = require('canvas');
                //     const cvs = createCanvas(270, 330);
                //     const ctx = cvs.getContext('2d');
                //     try {
                //         ctx.drawImage(await loadImage(card.iconUrls.medium), 0, 0);
                //     } catch (err) {
                //         console.error(err);
                //     }
                //     writeFileSync(`./sources/${card.name}.png`, cvs.toBuffer('image/png'))
                //     debug(card);
                // });
                const card = response.data.items.find(n => n.name == args[0] || n.id == args[0]);
                const clashembed = new Discord.MessageEmbed()
                    .setTitle(card.name)
                    .setColor('RANDOM')
                    .setImage(card.iconUrls.medium)
                    .addFields(
                        { name: "id", value: card.id },
                        { name: "maxlevel", value: card.maxLevel }
                    )
                    .setFooter(`random fun number! ${msg.id}`);
                msg.channel.send(clashembed)
                    .catch((err) => {
                        console.error(err);
                        msg.channel.send("Sorry, we encountered an error, we'll get right on that! Error: CR_1")
                            .catch((err) => console.error(err));
                    });
            })
            .catch((err) => {
                msg.channel.send("Sorry, we encountered an error, we'll get right on that! Error: CR_0");
                console.error(err);
            });
    }
}