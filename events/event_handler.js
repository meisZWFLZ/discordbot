module.exports = (bot, Discord) => {
    try {
        const { readdirSync } = require('fs');
        const CustomEvent = require(`./CustomEvent.js`)(bot, Discord);
        ['client', 'guild'].forEach(dir => {
            const event_files = readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'))
            for (const file of event_files) {
                const event = require(`./${dir}/${file}`);
                const event_name = file.split('.')[0]
                bot.events[event_name] = {};
                bot.on(event_name, event.bind(null, Discord, bot, event_name));
            }
        });
    } catch (err) {
        console.error(err);
    }
}