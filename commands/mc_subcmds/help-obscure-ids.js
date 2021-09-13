const { MessageEmbed } = require("discord.js");

module.exports = 
{
    name: 'help-obscure-ids',
    description: 'lists the product ids of all items that don\'t match their in game names',
    execute (subcmd, message, args) 
    {
        if (!args.length) 
        {
            const errorEmbed = new MessageEmbed() 
                .setColor("#FF0000")
                .addFields(
                    { name: 'Error', value: 'Please specify a page number!'}
                );
            return message.channel.send(errorEmbed);
        }
        var embed;
        switch (args[0]) 
        {
            case '1':
                embed = new MessageEmbed()
                    .setColor('#FFFFFF')
                    .setTitle('Different Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Cocoa Beans - INK_SACK:3\nLapis Lazuli - INK_SACK:4\nCarrot - CARROT_ITEM\nExperience Bottle - EXP_BOTTLE\nProtector Dragon Fragment - PROTECTOR_FRAGMENT\nGrand Experience Bottle - GRAND_EXP_BOTTLE\nWise Dragon Fragment - WISE_FRAGMENT\nPotato - POTATO_ITEM\nEnchanted Brown Mushroom Block - ENCHANTED_HUGE_MUSHROOM_1\nEnchanted Red Mushroom Block = ENCHANTED_HUGE_MUSHROOM_2\nRaw Porkchop - PORK\nBrown Mushroom Block - HUGE_MUSHROOM_1\nRed Mushroom Block - HUGE_MUSHROOM_2\nDark Oak Wood - LOG_2:1\nRabbit's Foot - RABBIT_FOOT\nPage 1/4`}
                    );
                break;
            case '2':
                embed = new MessageEmbed()
                    .setColor('#FF3366')
                    .setTitle('Different Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Pumpkin Seeds - PUMPKIN_GUTS\nEnchanted Lapis Block - ENCHANTED_LAPIS_LAZULI_BLOCK\nColossal Experience Bottle - COLOSSAL_EXP_BOTTLE\nStrong Dragon Fragment - STRONG_FRAGMENT\nHoly Dragon Fragment - HOLY_FRAGMENT\nSnowball - SNOW_BALL\nEnchanted Cocoa Beans - ENCHANTED_COCOA\nHay Bale - HAY_BLOCK\nEnchanted Nether Wart - ENCHANTED_NETHER_STALK\nPufferfish - RAW_FISH:3\nEnchanted Carrot on a Stick - ENCHANTED_CARROT_STICK\nClownfish - RAW_FISH:2\nRaw Salmon - RAW_FISH:1\nYoung Dragon Fragment - YOUNG_FRAGMENT\nEnchanted Lily Pad - ENCHANTED_WATER_LILY\nPage 2/4` }
                    );
                break;
            case '3':
                embed = new MessageEmbed()
                    .setColor('#33FF66')
                    .setTitle('Different Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Spruce Wood - LOG:1\nJungle Wood - Log:3\nBirch Wood - Log:2\nOak Wood - LOG\nJacob's Ticket - JACOBS_TICKET\nUnstable Dragon Fragment - UNSTABLE_FRAGMENT\nEnchanted Clay - ENCHANTED_CLAY_BALL\nTitanic Experience Bottle - TITANIC_EXP_BOTTLE\nSuper Enchanted Egg - SUPER_EGG\nEnchanted Hay Bale - ENCHANTED_HAY_BLOCK\nSuperior Dragon Fragment - SUPERIOR_FRAGMENT\nEnchanted Rabbit's Foot - ENCHANTED_RABBIT_FOOT\nClay - CLAY\nOld Dragon Fragment - OLD_FRAGMENT\nLily Pad - WATER_LILY\nPage 3/4` }
                    );
                break;
            case '4':
                embed = new MessageEmbed()
                    .setColor("3366FF")
                    .setTitle('Different Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Acacia Wood - LOG_2\nEnd Stone - ENDER_STONE\nNether Wart - NETHER_STALK\nRaw Rabbit - RABBIT\nGunpowder - SULPHUR\nMutant Nether Wary - MUTANT_NETHER_STALK\nPage 4/4` }
                    );
                break;
            default:
                const errorEmbed = new MessageEmbed() 
                .setColor("#FF0000")
                .addFields(
                    { name: 'Error', value: 'Please use a valid page number!'}
                );
                return message.channel.send(errorEmbed);
                break;
        }
        message.channel.send(embed);
    }
}