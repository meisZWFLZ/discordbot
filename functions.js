const Discord = require('discord.js');
const { bot } = require("./main");

//Advanced Command Handler Set Up
function cmdhs(folder, params) {
    const fs = require('fs');
    bot.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`${folder + file}`);
        bot.commands.set(command.name, command);
    }
    const cmd = bot.commands.get(params[0]) || bot.commands.find(a => a.aliases && a.aliases.includes(params[0]));

    if (cmd) {
        cmd.execute(
            params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9], params[10],
            params[11], params[12], params[13], params[14], params[15], params[16], params[17], params[18], params[19], params[20]);
    }
}

const dbg = true;
function debug(p1) {
    if (dbg) {
        // console.log("\n\n-=-=-New Log-=-=-\n\n")
        console.log(p1);
    }
    return p1;
}

function pm_ck(msg, perm) {
    if (msg.member.id === "513806934512762882" || msg.member.permissions.has(perm)) {
        return true;
    } else {
        msg.channel.send("You don't have required perms for this command");
    }
}

function cmdh(params) {
    bot.commands.get(params[0]).execute(
        params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9], params[10],
        params[11], params[12], params[13], params[14], params[15], params[16], params[17], params[18], params[19], params[20]
    );
}

function cr(url) {
    const key = require('./data/strings.json').key;
    const { get } = require("trae");
    return get(`https://api.clashroyale.com/v1/${url}`, {
        headers: {
            "Authorization": `Bearer ${key}`
        }
    });
}

function deckimg(deck, dims, cards) {
    const { createCanvas } = require('canvas');

    cvs = createCanvas(dims.width * dims.line, dims.height * (deck.length / dims.line));
    ctx = cvs.getContext('2d');

    deck.forEach((card, i) => {
        cards[card].then(async (img) => {
            ctx.drawImage(img, dims.width * (i % dims.line), Math.floor(i / dims.line) * dims.height);
        });
    });

    return cvs;
}


exports.cmdhs = cmdhs;
exports.debug = debug;
exports.pm_ck = pm_ck;
exports.cmdh = cmdh;
exports.cr = cr;
exports.deckimg = deckimg;
// exports.draw = draw;