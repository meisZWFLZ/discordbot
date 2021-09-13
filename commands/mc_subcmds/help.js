const { MessageEmbed } = require("discord.js")

module.exports = 
{
    name: 'help',
    description: 'lists all of the commands and what they do',
    execute (subcmd, message, args) 
    {
        const embed = new MessageEmbed()
            .setColor('#03c6fc')
            .setTitle('Commands')
            .addFields(
                { name: '$ping', value: 'Sends a ping to the bot which responds with a pong.'},
                { name: '$bazaar <item>', value: 'Shows detailed information about a bazaar product. Some productIds are not their actual names in-game.'},
                { name: '$help-ids <page number 1-10>', value: 'Shows a list of all productIds and their in-game counterparts. NOTE: this is not finished yet'},
                { name: '$help-obscure-ids <page number 1-4>', value: 'Lists all of the productIds that are different from their in-game counterparts. Note: anything called "wood" in-game uses LOG for the product id. Forgot to put that in lol'},
                { name: '$help', value: 'Opens this menu.'}
            );
        message.channel.send(embed);
    }
}