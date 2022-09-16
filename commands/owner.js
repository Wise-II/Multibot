
const { DiscordAPIError } = import("discord.js");
const { format } = import("path");
const chalk = import('chalk');
const Discord = import('discord.js');
const fs = import('fs');
var memory = import("memory");
module.exports = {
	name: 'owner',
	aliases: ["own", "admin"],
	category: "info",
	description: 'Get the bot owner',
	usage: ".js owner",
	run: async function (client, command, args, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('owner')
        .addField('Owner of this project:', '<@652219536132669460>', true)
        .setColor('RANDOM')
        message.channel.send(embed)
    }}