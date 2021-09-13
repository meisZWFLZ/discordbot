module.exports = 
{
    name: 'ping',
    description: 'ping command',
    execute (subcmd, message, args) 
    {
        message.channel.send('pong!');
    }
}