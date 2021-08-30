
const Discord = require('discord.js');
const { token } = require('./config.json');

const bot = new Discord.Client();
bot.music = new (require('discord.js-lavalink-musicbot'))(bot, {
    lavalink: {
        "restnode": {
            "host": "localhost",
            "port": 8643,
            "password":"youshallnotpass"
        },
        "nodes": [
            { "host": "localhost", "port": 8643, "region": "US East", "password": "youshallnotpass" }
        ]
    },
    admins: [""]
});
 
bot.login('NzM3NDM2NDQ4MTM0NzkxMjgy.Xx9VNg.sGprnRSFUeq5LZtfoDOpEXx2Wpw');
client.login(token)
