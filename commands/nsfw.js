//nsfw command
module.exports = {
    name: "nsfw",
    description: "yummy",
    usage: "!nsfw",
    example: "!nsfw",
    dm_support: true,
    execute(command, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck){
        const nsfw = [
            "https://cdn.discordapp.com/attachments/769755271236026459/828827013544017920/image1.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827014483148830/image4.png",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827014819217448/image5.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827015041908746/image6.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827015351631922/image7.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827015729381396/image8.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827015992967248/image9.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827063825465344/image1.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827064010145833/image2.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827064244764682/image3.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827064474927154/image4.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827064663801866/image5.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827064927780864/image6.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827065323225128/image7.jpg",
            "https://cdn.discordapp.com/attachments/769755271236026459/828827065905971210/image9.jpg"
        ]
        msg.channel.send(`nsfw: ${nsfw[Math.floor(Math.random() * 15)]}`)
}}