//role:delete command
module.exports = {
    name: "edit",
    description: "edit a role",
    usage: "!role edit Beeg Yoshi",
    dm_support: false,
    execute(subcmd, msg, args, prefix, data, guilds, guild, Discord, bot, debug, cmdh, cmdhs, pm_ck, role1, role) {

        //perm check
        if (pm_ck(msg, "MANAGE_ROLES")) {

            //valid input check
            if (!role1) {
                return msg.channel.send("bad input, get better");
            }

            //bot perm check
            if (!role.editable) {
                return msg.channel.send("Me no can *edit* this role");
            }

            //defines editcmd
            //prevents undefined crash
            if (args[2] === undefined) {
                return msg.channel.send("please specify an edit command");
            }
            editcmd = args[2].toLowerCase();
            debug("editcmd: " + editcmd);

            //role edit
            switch (editcmd) {
                case "name":

                    role.setName(args[3], args[4]);
                    msg.channel.send("Name set!")

                    break;
                case "color":

                    //prevents undefined crash
                    if (args[3] === undefined) {
                        return msg.channel.send("please specify a color");
                    }
                    const color = args[3].toUpperCase();
                    const hex = /[0-9A-Fa-f]{6}/g;
                    const colorstrings = require("../../src/resolvables.json")["color"];
                    if (!hex.test(color) && !color === colorstrings) {
                        return msg.channel.send("Invalid color paramater");
                    }
                    debug("Valid color param");
                    role.setColor(args[3], args[4]);
                    msg.channel.send("Color set!");

                    break;
                case "hoist":

                    role.setHoist(!role.hoist, args[3]);
                    msg.channel.send(`Hoist boolean set to ${!role.hoist}!`);

                    break;
                case "mentionable":

                    role.setMentionable(!role.mentionable, args[3]);
                    msg.channel.send(`Mentionable boolean set to ${!role.mentionable}!`);

                    break;
                case "perms":
                case "permissions":

                    //prevents undefined crash
                    var perm = {};
                    if (!args[3]) {
                        role.perm.comparePositionTo(role)
                    }
                        perm = args[3].toUpperCase();
                        const permstrings = require("../../src/resolvables.json")["perm"];
                        if (permstrings.indexOf(perm) == -1) {
                            return msg.channel.send("Invalid perm paramater");
                        }
                    perm = args[3];
                    if (!pm_ck(msg, perm)) return;

                    role.setPermissions(perm);
                    msg.channel.send("Permissions set!");
                    
                    break;
                default:

                    msg.channel.send("Invalid edit paramater");

                    break;
            }


        }
    }
}


                    // var colorstring = [
                    //     "DEFAULT",
                    //     "WHITE",
                    //     "AQUA",
                    //     "GREEN",
                    //     "BLUE",
                    //     "YELLOW",
                    //     "PURPLE",
                    //     "LUMINOUS_VIVID_PINK",
                    //     "GOLD",
                    //     "ORANGE",
                    //     "RED",
                    //     "GREY",
                    //     "DARKER_GREY",
                    //     "NAVY",
                    //     "DARK_AQUA",
                    //     "DARK_GREEN",
                    //     "DARK_BLUE",
                    //     "DARK_PURPLE",
                    //     "DARK_VIVID_PINK",
                    //     "DARK_GOLD",
                    //     "DARK_ORANGE",
                    //     "DARK_RED",
                    //     "DARK_GREY",
                    //     "LIGHT_GREY",
                    //     "DARK_NAVY",
                    //     "BLURPLE",
                    //     "GREYPLE",
                    //     "DARK_BUT_NOT_BLACK",
                    //     "NOT_QUITE_BLACK",
                    //     "RANDOM"
                    //     ]