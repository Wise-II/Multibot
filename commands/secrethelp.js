const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
const { channel } = require("diagnostics_channel");
module.exports = {

    name: 'Help',
	aliases: ["sh", "shelp"],
	category: "info",
	description: 'information on bot',
	usage: ".jshelp",
	run: async function (client, command, args, message) {
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help Page')
        .setDescription('complete list of working commands')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Moderation', value: 'Moderation commands' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Ban', value: 'Bans user, can be used with mention or ID', inline: true },
            { name: 'Usage', value: 'm!ban', inline: true },
            { name: '\u100B', value: '\u100B' },
            { name: 'Warn', value: 'Warns user, can be used with mention or ID', inline: true }
        )
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(HelpEmbed);
    
    }}