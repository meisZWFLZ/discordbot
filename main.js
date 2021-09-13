//defines bot and imports discord.js and fs module
const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client(/* { partials: ["MESSAGE", "CHANNEL", "REACTION"] } */);
const fs = require(`fs`);
exports.bot = bot;

//event handling
try {
    require(`./events/event_handler.js`)(bot, Discord)
} catch (err) {
    console.error(err.stack);
}

//login
bot.login(process.env.token);

function read(string) {
    output = {};
    chars = [...string];
    chars.forEach(char => {
        if (!output[char]) output[char] = 1;
        output[char]++;
    });

    for (const char in output) {
        output[char] = output[char] / chars.length;
    }

    console.log(output);
    return output;
}