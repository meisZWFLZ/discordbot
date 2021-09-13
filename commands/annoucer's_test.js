//announcer's test command
module.exports = {
    name: "announcerstest",
    description: "Ping the boot",
    usage: "!announcerstest [line: 1-10]",
    example: "!announcerstest 10",
    aliases: ["announcers", "anouncers", "announce", "anounce", "atest", "announcers_test", "anouncers_test", "anouncerstest", "announcetest", "anouncetest", "announce_test", "anounce_test"],
    dm_support: true,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck) {
        const anounce = [
            "One hen",
            "Two ducks",
            "Three squawking geese",
            "Four limerick oysters",
            "Five corpulent porpoises",
            "Six pairs of Don Alverzo's tweezers",
            "Seven thousand Macedonians in full battle array",
            "Eight brass monkeys from the ancient sacred crypts of Egypt",
            "Nine apathetic, sympathetic, diabetic old men on roller skates, with a marked propensity towards procrastination and sloth",
            "Ten lyrical, spherical, diabolical denizens of the deep who all stall around the corner of the quo of the quay of the quivery, all at the same time."
        ]

        if (!args[0]) {
            var x = 0;
            const ancbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Announcer's Test")
                .setDescription("A cool long confusing thing u can learn")
                .addFields(
                    { name: "1.", value: anounce[x++] },
                    { name: "2.", value: anounce[x++] },
                    { name: "3.", value: anounce[x++] },
                    { name: "4.", value: anounce[x++] },
                    { name: "5.", value: anounce[x++] },
                    { name: "6.", value: anounce[x++] },
                    { name: "7.", value: anounce[x++] },
                    { name: "8.", value: anounce[x++] },
                    { name: "9.", value: anounce[x++] },
                    { name: "10.", value: anounce[x++] }
                )
                .setFooter(`random fun number! ${msg.id}`);
            msg.channel.send(ancbed);
            return;
        } else if (0 < args[0] <= 10) {
            const ancbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Announcer's Test #${args[0]}`)
                .setDescription(anounce[args[0]])
                .setFooter(`random fun number! ${msg.id}`);
            msg.channel.send(ancbed);
            return
        }
    }
}