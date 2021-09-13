module.exports = (Discord, bot, even_name, info) => {
    console.log(info);
    bot.user.setPresence({ activity: { name: 'rate limited :(', type: 'STREAMING' }, status: 'dnd' });
}