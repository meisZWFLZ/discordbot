module.exports = (Discord, bot, even_name, err) => {
    console.error(err);
    bot.user.setPresence({ activity: { name: 'error', type: 'STREAMING' }, status: 'dnd' })
}