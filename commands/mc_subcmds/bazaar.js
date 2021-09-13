const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = 
{
    name: 'bazaar',
    description: 'returns information from the hypixel bazaar about the item mentioned',
    async execute (subcmd, message, args) 
    {
        if (!args.length) 
        {
            return message.channel.send('You can\'t search without a search term!');
        }

        var query = '';

        query += args.join('_')

        query = query.toUpperCase();

        message.channel.send('Searching for ' + query + '...');

        const { success } = await fetch(`https://api.hypixel.net/skyblock/bazaar/product?key=7664544f-7877-45e6-a183-07b65b7102ba&productId=${query}`).then(response => response.json());

        if (!success) 
        {
            const errorEmbed = new MessageEmbed()
                .setColor("#FF0000")
                .addFields(
                    { name: 'Error', value: 'No results found for you query.'}
                );
            return message.channel.send(errorEmbed);
        }

        const { product_info } = await fetch(`https://api.hypixel.net/skyblock/bazaar/product?key=7664544f-7877-45e6-a183-07b65b7102ba&productId=${query}`).then(response => response.json());

        const answer = product_info.quick_status;

        const embed = new MessageEmbed()
            .setColor('#03c6fc')
            .setTitle(answer.productId)
            .addFields(
                { name: 'Buy Order Price', value: answer.buyPrice },
                { name: 'Sell Offer Price', value: answer.sellPrice },
                { name: 'Other Information', value: `Buy orders: ${answer.buyOrders}\tBuy volume: ${answer.buyVolume}\n Sell orders: ${answer.sellOrders}\tSell volume: ${answer.sellVolume}`}
            );

        message.channel.send(embed);

    }
}