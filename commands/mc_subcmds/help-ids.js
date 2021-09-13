const { MessageEmbed } = require("discord.js");

module.exports = 
{
    name: 'help-ids',
    description: 'returns a list of productIds',
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
                    .setColor('#FF5555')
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Cocoa Beans - INK_SACK:3\nBrown Mushroom - BROWN_MUSHROOM\nLapis Lazuli - INK_SACK:4\nSpooky Shard - SPOOKY_SHARD\nTarantula Web - TARANTULA_WEB\nCarrot - CARROT_ITEM\nEnchanted Potato - ENCHANTED_POTATO\nExperience Bottle - EXP_BOTTLE\nEnchanted Slimeball - ENCHANTED_SLIME_BALL\nEnchanted Golden Carrot - ENCHANTED_GOLDEN_CARROT\nEnchanted Red Mushroom - ENCHANTED_RED_MUSHROOM\nEnchanted Rabbit Hide - ENCHANTED_RABBIT_HIDE\nEnchanted Birch Log - ENCHANTED_BIRCH_LOG\nEnchanted Gunpowder - ENCHANTED_GUNPOWDER\nEnchanted Melon - ENCHANTED MELON` }, 
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 1/<max>'}
                    );
                break;
            case '2':
                embed = new MessageEmbed()
                    .setColor("FFAA55")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Enchanted Sugar - ENCHANTED_SUGAR\nCactus - CACTUS\nEnchanted Blaze Rod - ENCHANTED_BLAZE_ROD\nEnchanted Cake - ENCHANTED_CAKE\nPumpkin - PUMPKIN\nEnchanted Brown Mushroom - ENCHANTED_BROWN_MUSHROOM\nWheat - WHEAT\nNurse Shark Tooth - NURSE_SHARK_TOOTH\n Enchanted Raw Salmon - ENCHANTED_RAW_SALMON\nEnchanted Glistering Melon - ENCHANTED_GLISTERING_MELON\nPrismarine Shard - PRISMARINE_SHARD\nEnchanted Emerald - ENCHANTED_EMERALD\nProtector Dragon Fragment - PROTECTOR_FRAGMENT\nEnchanted Spider Eye: ENCHANTED_SPIDER_EYE\nRed Mushroom - RED_MUSHROOM` },
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 2/<max>'}
                    );
                break;
            case '3':
                embed = new MessageEmbed()
                    .setColor("FFFF55")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Id List', value: `Grand Experience Bottle - GRAND_EXP_BOTTLE\nEnchanted Melon Block - ENCHANTED_MELON_BLOCK\nMutton - MUTTON\nWise Dragon Fragment - WISE_FRAGMENT\nDiamond - DIAMOND\nShark Fin - SHARK_FIN\nCobblestone - COBBLESTONE\nSpider Eye - SPIDER_EYE\nRaw Fish - RAW_FISH\nEnchanted Pufferfish - ENCHANTED_PUFFERFISH\nPotato - POTATO_ITEM\nEnchanted Brown Mushroom Block - ENCHANTED_HUGE_MUSHROOM_1\nEnchanted Cobblestone - ENCHANTED_COBBLESTONE\nTightly Tied Hay Bale - TIGHTLY_TIED_HAY_BALE\nEnchanted Red Mushroom Block - ENCHANTED_HUGE_MUSHROOM_2` },
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 3/<max>'}
                    );
                break;
            case '4':
                embed = new MessageEmbed()
                    .setColor("55FF55")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 4/<max>'}
                    );
                break;
            case '5':
                embed = new MessageEmbed()
                    .setColor("55FFFF")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 5/<max>'}
                    );
                break;
            case '6':
                embed = new MessageEmbed()
                    .setColor("5555FF")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 6/<max>'}
                    );
                break;
            case '7':
                embed = new MessageEmbed()
                    .setColor("AA55FF")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 7/<max>'}
                    );
                break;
            case '8':
                embed = new MessageEmbed()
                    .setColor("FFAAFF")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 8/<max>'}
                    );
                break;
            case '9':
                embed = new MessageEmbed()
                    .setColor("FFFFFF")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 9/<max>'}
                    );
                break;
            case '10':
                embed = new MessageEmbed()
                    .setColor("000000")
                    .setTitle('Product Ids')
                    .addFields(
                        { name: 'Note: most productIds can be searched by using their in-game names. Use help-obscure-ids for a list of the items that have different productIds.', value: 'Page 10/<max>'}
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