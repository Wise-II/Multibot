
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const { OpusEncoder } = require('@discordjs/opus');
const path = require('path');
const ytdl = require('ytdl-core-discord');
const fs = require('fs');
module.exports = {
    name: "localplay",
    category: "Music testing and music",
    aliases: ["localplay","lp","play"],
    description: "plays a single track off of server ",
    usage: "=play",
    run: async function (bot, command, args, message) {
		message.member.voice.channel.join()
		.then(connection => { 
      const dispatcher = connection.play(require("path").join(__dirname, './afl.mp3'));
      const guild = message.guild
      console.log(chalk.red(`Executed cmd: "localplay" On Server: ${message.guild.name}\n in: ${Date.now() - message.createdTimestamp}ms\n Server id: ${guild.id}`));
		});
		}
	
}
