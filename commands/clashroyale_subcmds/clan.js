//clan command
module.exports = {
    name: "clan",
    description: "wafle",
    usage: "!cr clan <id | name>",
    example: "!cr clan waffle",
    aliases: ["c", "clans"],
    dm_support: true,
    async execute(subcmd, command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, cr) {
        var clan = msg.content.slice(prefix.length + command.length + subcmd.length + 2).toUpperCase();
        if(!clan) 
        id = /[0289CGJLPQRUV]{4,8}|#[0289CGJLPQRUYV]{4,8}/g;
        var idbool = false;
        if (id.test(clan)) {
            if (clan.startsWith('#')) clan = clan.slice(1)
            idbool = true;
        } else if (!(3 <= clan.length <= 15)) {
            return msg.channel.send(`The input, "${clan}" was invalid as a clan name must be longer than 2 characters and shorter than 16 characters`);
        }
        msg.channel.send(`searching for ur mom (${clan})`)
            .then(async msg1 => {
                if (!idbool) {
                    await cr(`clans?name=${clan}`)
                        .then((response) => {
                            const { writeFileSync } = require('fs');
                            writeFileSync('./data/abc.json', JSON.stringify(response.data, null, 4));
                            if (!response.data.items[0]) return msg1.edit(`could not find clan`);
                            clan = response.data.items[0].tag.slice(1);
                            //urmommy
                        })
                        .catch((err) => {
                            console.error(err);
                            msg.channel.send('Err encountered');
                        });
                }
                cr(`clans/%23${clan}`)
                    .then((response) => {
                        clan = response.data;
                        const { writeFileSync } = require('fs');
                        writeFileSync('./data/abc.json', JSON.stringify(response.data, null, 4));
                        let trophies = 0;
                        clan.memberList.forEach(member => {
                            trophies = trophies + member.trophies
                        });
                        trophies = trophies / clan.members;
                        clanembed = new Discord.MessageEmbed()
                            .setTitle(clan.name)
                            .setColor("RANDOM")
                            .setDescription(
                                `
${clan.description}

tag: ${clan.tag}
invite: ${clan.type}
req trophies: ${clan.requiredTrophies} :trophy: 
location: ${clan.location.name}
clan war trophies: ${clan.clanWarTrophies} :trophy: 
donations: ${clan.donationsPerWeek}
average trophies: ${Math.round(trophies)} :trophy: 
`
                            )
                            .addFields(
                                {
                                    name: "Members", value:
                                        `
${clan.members}/50 members (shows up to 50)
${clan.memberList.map(x => ` ${x.name}`) + ', your mom'}
`
                                }
                            )
                            .setFooter(`random fun number! ${msg.id}`);
                        msg1.edit('POOOOOOG, FOUND UR MOM', clanembed);
                    })
                    .catch((err) => {
                        if (err.status == 404) return msg1.edit(`could not find clan`);
                        console.error(err);
                        msg.channel.send("Err encountered");
                    })
            })

    }
}