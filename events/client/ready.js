module.exports = (Discord, bot, even_name) => {
    console.log(
        `
        Bot online!
        guilds: ${bot.guilds.cache.size}
        token: ${bot.token}
        `
    );
    console.log(bot.events);
    bot.user.setPresence({ activity: { name: 'ur mom!', type: 'WATCHING' }, status: 'dnd' });
}